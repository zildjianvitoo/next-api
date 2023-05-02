import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import { MongoDBAdapter } from "@/database/MongoAdapter";
// import clientPromise from "../../../lib/mongodb";
export const authOptions = {
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  database: process.env.DB_URL,
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "asageokgnmddf",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    },
  },
};

export default NextAuth(authOptions);
