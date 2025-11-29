import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

interface SendLowonganItem {
  id: string;
  coverLetter: string;
  sentAt: string;
  price: number | null;
  lowongan: {
    title: string;
    organization: string;
    company: string;
    location: string;
    status: string;
  };
  status: {
    status: "PENDING" | "ACCEPTED" | "REJECTED";
    updatedAt: string;
  } | null;
}

interface CardStatusLamaranProps {
  listLowongan: SendLowonganItem[];
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "ACCEPTED":
      return "bg-green-100 text-green-700";
    case "REJECTED":
      return "bg-red-100 text-red-600";
    default:
      return "bg-yellow-100 text-yellow-600";
  }
};

const CardStatusLamaran = ({ listLowongan }: CardStatusLamaranProps) => {
  return (
    <div>
      {" "}
      <Card className="mt-6 bg-white text-primary w-full">
        <CardHeader className="px-4 sm:px-6">
          <CardTitle>Status Lamaran Kamu</CardTitle>
        </CardHeader>

        <CardContent className="px-2 sm:px-4">
          {listLowongan.length === 0 ? (
            <p className="text-sm text-gray-500">Belum ada lamaran.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-3 border">Lowongan</th>
                    <th className="p-3 border">Perusahaan</th>
                    <th className="p-3 border">Lokasi</th>
                    <th className="p-3 border">Status</th>
                    <th className="p-3 border">Tanggal Lamar</th>
                    <th className="p-3 border">Harga</th>
                    <th className="p-3 border">Jenis</th>
                    <th className="p-3 border">Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {listLowongan.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="p-3 border">{item.lowongan.title}</td>
                      <td className="p-3 border">
                        {item.lowongan.organization || item.lowongan.company}
                      </td>
                      <td className="p-3 border">{item.lowongan.location}</td>
                      <td className="p-3 border">
                        {item.status ? (
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusBadge(
                              item.status.status
                            )}`}
                          >
                            {item.status.status}
                          </span>
                        ) : (
                          <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-500">
                            PENDING
                          </span>
                        )}
                      </td>
                      <td className="p-3 border">
                        {new Date(item.sentAt).toLocaleDateString("id-ID")}
                      </td>
                      <td className="p-3 border">
                        {item.price ? `${item.price / 1e18} ETH` : "-"}
                      </td>
                      <td className="p-3 border">{item.lowongan.status}</td>
                      <td className="p-3 border">
                        <div>
                          <Link href={`/profile/status-lowongan/${item.id}`}>
                            <Button>Detail</Button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardStatusLamaran;
