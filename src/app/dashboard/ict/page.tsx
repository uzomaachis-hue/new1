'use client'

import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const ticketStatusData = [
  { name: 'Open', value: 12, color: '#3b82f6' },
  { name: 'In Progress', value: 8, color: '#f59e0b' },
  { name: 'Resolved', value: 25, color: '#10b981' },
  { name: 'Closed', value: 42, color: '#64748b' },
]

const dailyTickets = [
  { day: 'Mon', tickets: 8 },
  { day: 'Tue', tickets: 12 },
  { day: 'Wed', tickets: 15 },
  { day: 'Thu', tickets: 10 },
  { day: 'Fri', tickets: 7 },
]

export default function ICTDashboard() {
  const [reportPeriod, setReportPeriod] = useState('daily')

  const allTickets = [
    { id: 1, title: 'Email server down', priority: 'critical', status: 'in_progress', submittedBy: 'Dr. Ahmed Bello', assignedTo: 'Tunde Ogunleye', date: '17 Apr 2026' },
    { id: 2, title: 'ERP system access', priority: 'high', status: 'open', submittedBy: 'Mrs. Folake Adeyemi', assignedTo: null, date: '17 Apr 2026' },
    { id: 3, title: 'Printer not working', priority: 'medium', status: 'open', submittedBy: 'Chidi Okoro', assignedTo: null, date: '16 Apr 2026' },
    { id: 4, title: 'Password reset request', priority: 'low', status: 'resolved', submittedBy: 'Amara Johnson', assignedTo: 'Tunde Ogunleye', date: '16 Apr 2026' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">ICT Dashboard</h1>
        <p className="text-slate-600">Help desk ticket management and reports</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-slate-500 text-sm">Open Tickets</p>
          <p className="text-3xl font-bold text-blue-600 mt-1">12</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-slate-500 text-sm">In Progress</p>
          <p className="text-3xl font-bold text-amber-600 mt-1">8</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-slate-500 text-sm">Resolved Today</p>
          <p className="text-3xl font-bold text-green-600 mt-1">6</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-slate-500 text-sm">Critical Tickets</p>
          <p className="text-3xl font-bold text-red-600 mt-1">2</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Ticket Status Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={ticketStatusData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                {ticketStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-800">Reports</h2>
            <select
              value={reportPeriod}
              onChange={(e) => setReportPeriod(e.target.value)}
              className="px-3 py-1.5 border border-slate-300 rounded-md text-sm"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between px-4">
            {dailyTickets.map((item) => (
              <div key={item.day} className="flex flex-col items-center">
                <div
                  className="w-12 bg-teal-600 rounded-t-md"
                  style={{ height: `${(item.tickets / 15) * 200}px` }}
                />
                <span className="text-sm text-slate-600 mt-2">{item.day}</span>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-md text-sm font-medium">
            Export Report
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">All Tickets</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Ticket</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Priority</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Submitted By</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Assigned To</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {allTickets.map(ticket => (
                <tr key={ticket.id} className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium">{ticket.title}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded capitalize
                      ${ticket.priority === 'critical' ? 'bg-red-100 text-red-800' :
                        ticket.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                        ticket.priority === 'medium' ? 'bg-amber-100 text-amber-800' :
                        'bg-slate-100 text-slate-700'}
                    `}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">{ticket.submittedBy}</td>
                  <td className="py-3 px-4 text-slate-600">{ticket.assignedTo || '-'}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded capitalize
                      ${ticket.status === 'open' ? 'bg-blue-100 text-blue-800' :
                        ticket.status === 'in_progress' ? 'bg-amber-100 text-amber-800' :
                        'bg-green-100 text-green-800'}
                    `}>
                      {ticket.status.replace('_', ' ')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
