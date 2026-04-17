import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://assets.kiloapps.io/user_274cdbde-958d-4750-b8f3-b4a348a377de/85f7b9f7-87d9-4c0c-81aa-f28a2a485555/ccf2b9f0-d745-43ae-b629-203692069783.jpg"
              alt="NISO Logo"
              width={220}
              height={60}
              priority
            />
          </div>
          <Link
            href="/login"
            className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-md font-medium transition-colors"
          >
            Staff Login
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Welcome to NISO Document Management System
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Reducing paper usage and streamlining office workflows through secure digital document management and help desk support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Document Management</h3>
            <p className="text-slate-600">Securely send, receive, and track documents across departments with role-based access control.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Help Desk Support</h3>
            <p className="text-slate-600">Submit IT support tickets with automatic priority based on your role and track resolution status.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="h-12 w-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Secure Access</h3>
            <p className="text-slate-600">Role-based permissions ensure sensitive information is only accessible to authorized personnel.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <svg className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Important Notifications
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">System</span>
              <span className="text-slate-700">System maintenance scheduled for Saturday 20th April 2026, 10PM - 2AM</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">HR</span>
              <span className="text-slate-700">Annual leave request forms now available electronically</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

