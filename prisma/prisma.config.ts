import { PrismaClient } from '@prisma/client';

// /D:/kuliah/HACKATHON/lokerin/prisma/prisma.config.ts
// Prisma client singleton for Node/Next.js apps (safe for hot reloads / dev mode)


declare global {
  // allow global `prisma` to avoid creating multiple clients in dev
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

/**
 * Configure PrismaClient logging based on environment.
 * Adjust or extend options here for Prisma v6 as needed.
 */
const log =
  process.env.NODE_ENV === 'development'
    ? ['query', 'info', 'warn', 'error'] as const
    : ['error'] as const;

const prisma =
  global.prisma ??
  new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL } },
  });

// Prevent creating multiple instances in development (hot-reloading)
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;
export type Prisma = PrismaClient;