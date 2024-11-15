import NextAuth, { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// Extend the User type to include the role
interface ExtendedUser extends User {
  role?: string
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Here you should implement the logic to verify the credentials
        // and return the user if they are valid
        if (credentials?.username === "admin" && credentials?.password === "password") {
          const user: ExtendedUser = { id: "1", name: 'J Smith', email: 'jsmith@example.com', role: 'admin' }
          return user
        } else if (credentials?.username === "motoboy" && credentials?.password === "password") {
          const user: ExtendedUser = { id: "2", name: 'M Boy', email: 'mboy@example.com', role: 'motoboy' }
          return user
        }
        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as ExtendedUser).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as ExtendedUser).role = token.role as string
      }
      return session
    }
  },
  pages: {
    signIn: '/login',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }