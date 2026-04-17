'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-700"></div>
      </div>
    )
  }

  if (!session) {
    router.push('/login')
    return null
  }

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: 'home' },
    { name: 'Documents', href: '/dashboard/documents', icon: 'document' },
    { name: 'Help Desk', href: '/dashboard/helpdesk', icon: 'support' },
  ]

  if (session.user.departmentName === 'ICT') {
    menuItems.push({ name: 'ICT Dashboard', href: '/dashboard/ict', icon: 'chart' })
  }

  if (session.user.role === 'ADMIN' || session.user.role === 'MD') {
    menuItems.push({ name: 'Admin', href: '/dashboard/admin', icon: 'settings' })
    menuItems.push({ name: 'Archive', href: '/dashboard/archive', icon: 'archive' })
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Image
              src="https://assets.kiloapps.io/user_274cdbde-958d-4750-b8f3-b4a348a377de/85f7b9f7-87d9-4c0c-81aa-f28a2a485555/ccf2b9f0-d745-43ae-b629-203692069783.jpg"
              alt="NISO Logo"
              width={140}
              height={40}
            />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-700">Welcome, {session.user.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="text-slate-600 hover:text-slate-800 text-sm font-medium"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-73px)]">
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
            >
              <span>{item.name}</span>
            </Link>
          ))}
          </nav>
        </aside>

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
