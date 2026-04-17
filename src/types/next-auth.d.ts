import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    role: string
    departmentId: number | null
    departmentName: string | null
  }

  interface Session {
    user: {
      id: string
      name: string
      email: string
      role: string
      departmentId: number | null
      departmentName: string | null
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string
    departmentId: number | null
    departmentName: string | null
  }
}
