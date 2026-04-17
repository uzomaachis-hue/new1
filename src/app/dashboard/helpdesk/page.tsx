'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function HelpDeskPage() {
  const { data: session } = useSession()
  const [showNewTicket, setShowNewTicket] = useState(false)

  const myTickets = [
    { id: 1, title: 'Email not receiving emails', priority: 'low', status: 'open', date: '17 Apr 2026' },
    { id: 2, title: 'Printer not printing', priority: 'medium', status: 'in_progress', date: '16 Apr 2026' },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Help Desk</h1>
          <p className="text-slate-600">Submit and track IT support tickets</p>
        </div>
        <button
          onClick={() => setShowNewTicket(true)}
          className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-md font-medium transition-colors flex items-center gap-2"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Submit Ticket
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-slate-500 text-sm">Open Tickets</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">1</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-slate-500 text-sm">In Progress</p>
          <p className="text-3xl font-bold text-amber-600 mt-1">1</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-slate-500 text-sm">Resolved</p>
          <p className="text-3xl font-bold text-green-600 mt-1">8</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">My Tickets</h2>
        <div className="space-y-3">
          {myTickets.map(ticket => (
            <div key={ticket.id} className="flex items-center justify-between p-4 rounded-lg border border-slate-200">
              <div>
                <p className="font-medium">{ticket.title}</p>
                <p className="text-sm text-slate-500">{ticket.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-medium px-2 py-1 rounded capitalize ${
                  ticket.priority === 'high' ? 'bg-red-100 text-red-800' :
                  ticket.priority === 'medium' ? 'bg-amber-100 text-amber-800' :
                  'bg-slate-100 text-slate-700'
                }`}>
                  {ticket.priority}
                </span>
                <span className={`text-xs font-medium px-2 py-1 rounded capitalize ${
                  ticket.status === 'open' ? 'bg-blue-100 text-blue-800' :
                  ticket.status === 'in_progress' ? 'bg-amber-100 text-amber-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {ticket.status.replace('_', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showNewTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Submit New Support Ticket</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input type="text" className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
              </div>
              <p className="text-sm text-slate-500">
                Priority is automatically assigned based on your role: MD/ED (Critical), GM (Medium), Others (Low)
              </p>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setShowNewTicket(false)} className="px-5 py-2.5 border border-slate-300 rounded-md font-medium text-slate-700 hover:bg-slate-50">Cancel</button>
              <button className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-md font-medium">Submit Ticket</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
