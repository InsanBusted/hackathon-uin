import { z } from "zod";

export const createLowonganSchema = z.object({
  userId: z.string(),
  title: z.string().min(3),
  description: z.string().min(10),
  company: z.string().optional(),
  organization: z.string().optional(), // tambahkan ini
  location: z.string().min(2),
  status: z.enum(["LOKER", "PROJECT"]),
  bidangId: z.string().optional(),
  kualifikasi: z.array(z.string()).default([]),
  tugasTanggungJawab: z.array(z.string()).default([]),
  kualifikasiTambahan: z.array(z.string()).default([]),
  jobType: z.array(z.string()).default([]),
  startDate: z.string().optional(), // tambahkan ini
  endDate: z.string().optional()    // tambahkan ini
});
