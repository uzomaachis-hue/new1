'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function DocumentsPage() {
  const { data: session } = useSession()
  const [searchQuery, setSearchQuery] = useState('')
  const [showSendModal, setShowSendModal] = useState(false)

  const documents = [
    { id: 1, title: 'Leave Application - John Doe', sender: 'HR Department', status: 'pending', date: '17 Apr 2026', isUrgent: false },
    { id: 2, title: 'Budget Approval 2026 Q2', sender: 'Finance Department', status: 'pending', date: '16 Apr 2026', isUrgent: true },
    { id: 3, title: 'IT Equipment Request', sender: 'Operations', status: 'approved', date: '15 Apr 2026', isUrgent: false },
    { id: 4, title: 'Meeting Minutes - Board Meeting', sender: 'MD Office', status: 'pending', date: '14 Apr 2026', isUrgent: true },
  ]

  const staffList = [
    { id: 1, name: 'Dr. Ahmed Bello', role: 'Managing Director', department: 'Management' },
    { id: 2, name: 'Mrs. Folake Adeyemi', role: 'Executive Director', department: 'Management' },
    { id: 3, name: 'Mr. Chidi Okoro', role: 'General Manager', department: 'Finance' },
    { id: 4, name: 'Ms. Amara Johnson', role: 'Head of HR', department: 'Human Resources' },
    { id: 5, name: 'Mr. Tunde Ogunleye', role: 'ICT Manager', department: 'ICT' },
  ]

  const filteredStaff = staffList.filter(staff =>
    staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    staff.department.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Documents</h1>
          <p className="text-slate-600">Manage and send documents</p>
        </div>
        <button
          onClick={() => setShowSendModal(true)}
          className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-md font-medium transition-colors flex items-center gap-2"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Send Document
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Incoming Documents</h2>
        <div className="space-y-4">
          {documents.map(doc => (
            <div key={doc.id} className={`flex items-center justify-between p-4 rounded-lg border ${doc.isUrgent ? 'border-red-200 bg-red-50' : 'border-slate-200'}`}>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-slate-100 rounded-md flex items-center justify-center">
                  <svg className="h-5 w-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">{doc.title}</p>
                  <p className="text-sm text-slate-500">From: {doc.sender} • {doc.date}</p>
                </div>
                {doc.isUrgent && (
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded">URGENT</span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button className="text-teal-700 hover:text-teal-800 font-medium text-sm">View</button>
                <button className="text-slate-600 hover:text-slate-800 font-medium text-sm">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showSendModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Send New Document</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Search Recipient</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name or department..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              {searchQuery && (
                <div className="max-h-40 overflow-y-auto border border-slate-200 rounded-md">
                  {filteredStaff.map(staff => (
                    <button
                      key={staff.id}
                      className="w-full text-left px-4 py-3 hover:bg-slate-50 border-b border-slate-100 last:border-0"
                    >
                      <p className="font-medium">{staff.name}</p>
                      <p className="text-sm text-slate-500">{staff.role} - {staff.department}</p>
                    </button>
                  ))}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Upload Document</label>
                <input
                  type="file"
                  className="w-full px-4 py-3 border border-slate-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Comments</label>
                <textarea
                  rows={3}
                  placeholder="Add comments for the recipient..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowSendModal(false)}
                className="px-5 py-2.5 border border-slate-300 rounded-md font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-md font-medium">
                Send Document
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
