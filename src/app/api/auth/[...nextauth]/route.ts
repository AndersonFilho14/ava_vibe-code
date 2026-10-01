import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
// import { PrismaAdapter } from "@next-auth/prisma-adapter" // Can add adapter later if needed
// import { prisma } from "@/lib/prisma" // Assumes prisma lib is set up
// import bcrypt from "bcryptjs"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "aluno@vibe.com" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        // Implementação mockada para o MVP inicial. 
        // Na versão final, isso deve verificar no banco de dados via Prisma.
        if (credentials?.email === "aluno@vibe.com" && credentials?.password === "123456") {
          return { id: "1", name: "Aluno Vibe", email: "aluno@vibe.com" }
        }
        return null
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login",
  }
})

export { handler as GET, handler as POST }
