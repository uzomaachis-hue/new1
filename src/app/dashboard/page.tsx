'use client'

import { useSession } from 'next-auth/react'

export default function DashboardPage() {
  const { data: session } = useSession()

  const pendingDocuments = 5
  const urgentDocuments = 2
  const totalDocuments = 12

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-600">Welcome back, {session?.user.name}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Pending Documents</p>
              <p className="text-3xl font-bold text-slate-800 mt-1">{pendingDocuments}</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="h-6 w-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Urgent Attention</p>
              <p className="text-3xl font-bold text-red-600 mt-1">{urgentDocuments}</p>
            </div>
            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm">Total Documents</p>
              <p className="text-3xl font-bold text-slate-800 mt-1">{totalDocuments}</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="h-6 w-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Documents</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Document</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Sender</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4 font-medium">Leave Application - John Doe</td>
                <td className="py-3 px-4 text-slate-600">HR Department</td>
                <td className="py-3 px-4 text-slate-600">17 Apr 2026</td>
                <td className="py-3 px-4"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">Pending</span></td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4 font-medium">Budget Approval 2026 Q2</td>
                <td className="py-3 px-4 text-slate-600">Finance Department</td>
                <td className="py-3 px-4 text-slate-600">16 Apr 2026</td>
                <td className="py-3 px-4"><span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">Urgent</span></td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">IT Equipment Request</td>
                <td className="py-3 px-4 text-slate-600">Operations</td>
                <td className="py-3 px-4 text-slate-600">15 Apr 2026</td>
                <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Approved</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Important Notifications
        </h3>
        <ul className="space-y-2">
          <li className="text-amber-800">• System maintenance scheduled for Saturday 20th April</li>
          <li className="text-amber-800">• You have 2 documents pending for more than 48 hours</li>
        </ul>
      </div>
    </div>
  )
}
