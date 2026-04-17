'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false
    })

    if (result?.error) {
      setError('Invalid username or password')
      setLoading(false)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Image
            src="https://assets.kiloapps.io/user_274cdbde-958d-4750-b8f3-b4a348a377de/85f7b9f7-87d9-4c0c-81aa-f28a2a485555/ccf2b9f0-d745-43ae-b629-203692069783.jpg"
            alt="NISO Logo"
            width={200}
            height={55}
            className="mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold text-slate-800">Staff Login</h2>
          <p className="text-slate-600 mt-2">Enter your credentials to access the portal</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white py-3 px-4 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
