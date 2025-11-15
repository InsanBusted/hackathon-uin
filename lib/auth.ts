import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "@/lib/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  secret: process.env.BETTER_AUTH_SECRET,
  plugins: [nextCookies()],
  providers: {
    emailAndPassword: {
      enabled: true,
      register: true,
    },
  },
  session: {
    strategy: "database",
    expiresIn: 60 * 60 * 24 * 7,
  },
});
