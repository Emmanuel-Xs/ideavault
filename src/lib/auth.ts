import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { tanstackStartCookies } from 'better-auth/tanstack-start';
import { betterAuth } from 'better-auth/minimal';

import { db } from '@/db';

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  database: drizzleAdapter(
    db, {
      provider: "pg"
    }
  ),
  plugins: [tanstackStartCookies()],
})
