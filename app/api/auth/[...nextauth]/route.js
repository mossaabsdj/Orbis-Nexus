import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaClient } from "@/generated/prisma/client";

import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        Username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        // 1. Check empty fields
        if (!credentials.Username || !credentials.password) {
          throw new Error("Please enter Username and Password.");
        }

        // 2. Find user by Username
        const user = await prisma.compte.findUnique({
          where: { Username: credentials.Username },
        });

        if (!user) {
          throw new Error("Username not found.");
        }

        // 3. Password check WITHOUT bcrypt
        if (credentials.password !== user.Password) {
          throw new Error("Incorrect password.");
        }

        // 4. Return user
        return {
          id: user.id,
          Username: user.Username,
        };
      },
    }),
  ],

  pages: {
    signIn: "/Login",
  },

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Initial sign in - assign custom fields from user object
      if (user) {
        token.id = user.id;
        token.Username = user.Username;
      }

      // Handle manual session updates (when update() is called)
      if (trigger === "update" && session.user) {
        token.Username = session.user.Username;
        // Update other fields if needed in the future
        // token.email = session.user.email;
      }

      return token;
    },

    async session({ session, token }) {
      // Include custom fields in session
      if (token) {
        session.user.id = token.id;
        session.user.Username = token.Username;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
