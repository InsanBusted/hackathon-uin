"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TableLowongan({ data }: { data: any[] }) {
  async function updateStatus(id: string, status: "ACCEPTED" | "REJECTED") {
    await fetch("/api/sendLowongan/status", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sendLowonganId: id, status }),
    });

    // reload page biar update
    window.location.reload();
  }

  return (
    <Table className="w-full bg-white border border-neutral-200 rounded-lg text-neutral-800">
      <TableHeader>
        <TableRow className="bg-neutral-900 text-white">
          <TableHead>Nama</TableHead>
          <TableHead>CV</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center py-6 text-gray-500">
              Belum ada pelamar
            </TableCell>
          </TableRow>
        ) : (
          data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item?.biodata?.fullName ?? "-"}</TableCell>

              <TableCell>
                <Link
                  href={item?.biodata?.documentUrl}
                  className="text-blue-900"
                >
                  Lihat CV
                </Link>
              </TableCell>

              <TableCell>
                {item.status ? (
                  item.status.status === "ACCEPTED" ? (
                    <span className="text-green-600 font-semibold">
                      Diterima
                    </span>
                  ) : item.status.status === "REJECTED" ? (
                    <span className="text-red-600 font-semibold">Ditolak</span>
                  ) : (
                    <span className="text-yellow-600 font-semibold">
                      Menunggu
                    </span>
                  )
                ) : (
                  <span className="text-yellow-600 font-semibold">
                    Menunggu
                  </span>
                )}
              </TableCell>

              <TableCell>
                <div className="flex gap-2">
                  {/* ACCEPT */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="bg-green-600 text-white">
                        Accept
                      </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Terima pelamar ini?</AlertDialogTitle>
                      </AlertDialogHeader>

                      <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-green-600"
                          onClick={() => updateStatus(item.id, "ACCEPTED")}
                        >
                          Ya, terima
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  {/* REJECT */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="bg-red-700 text-white">Reject</Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Tolak pelamar ini?</AlertDialogTitle>
                      </AlertDialogHeader>

                      <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-700"
                          onClick={() => updateStatus(item.id, "REJECTED")}
                        >
                          Ya, tolak
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
