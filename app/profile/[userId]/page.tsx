import Header from "@/components/Header/page";
import BioSidebar from "@/components/profile/BioSidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface PageProps {
  params: { userId: string };
}

const getBiodata = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/biodata/${id}`, {
    cache: "no-store",
  });

  return res.json();
};

const Page = async ({ params }: PageProps) => {
   const resolvedParams = await params; // ✅ HARUS await
  const userId = resolvedParams.userId;

  console.log("USER ID:", userId);

  const data = await getBiodata(userId);
  const bio = data.biodata;


  if (!bio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-lg">Biodata tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="min-h-screen pt-[20vh] bg-linear-to-b from-[#63D9FA] to-[#F5F5F5] p-6 flex gap-6">
        <BioSidebar bio={bio} />

      <div className="flex-1">
        <Card className="rounded-xl shadow-md">
          <CardHeader>
            <CardTitle>Data Pribadi</CardTitle>
            <CardDescription>
              Pastikan data pribadi anda benar untuk mempermudah proses pendaftaran
            </CardDescription>
          </CardHeader>

          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">Full Name</h3>
              <p className="text-gray-600">{bio.fullName}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-1">Phone</h3>
              <p className="text-gray-600">{bio.phone}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-1">Address</h3>
              <p className="text-gray-600">{bio.address}</p>
            </div>

            {bio.portfolio?.[0] && (
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">Portfolio</h3>
                <a
                  href={bio.portfolio[0]}
                  target="_blank"
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  Open Portfolio
                </a>
              </div>
            )}

            {bio.documentUrl && (
              <div>
                <h3 className="text-sm font-semibold text-white mb-1">Document</h3>
                <a
                  href={bio.documentUrl}
                  target="_blank"
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  Download Document
                </a>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
};

export default Page;
