import Header from "@/components/Header/page";
import BioSidebar from "@/components/profile/BioSidebar";
import React from "react";

interface PageProps {
  params: { username: string };
}

const getBiodata = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/biodata/cmihlr8560000utjgv1exyqle`);
  return res.json();
};

const Page = async ({ params }: PageProps) => {
  const data = await getBiodata(params.username);
  const bio = data.biodata;

  return (
    <div className="min-h-screen ">
      <Header />
      <div className="min-h-screen pt-[20vh] bg-linear-to-b from-[#63D9FA] to-[#F5F5F5 p-6 flex gap-6">
        {/* Sidebar Client Component */}
        <BioSidebar bio={bio} />

        {/* Content */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
          <h1 className="text-primary font-semibold text-xl mb-2">Data Pribadi</h1>
          <p className="text-gray-500 text-sm mb-6">
            Pastikan data pribadi anda benar untuk mempermudah proses pendaftaran
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-primary font-semibold mb-1">Full Name</h2>
              <p className="text-gray-600">{bio.fullName}</p>
            </div>
            <div>
              <h2 className="text-primary font-semibold mb-1">Phone</h2>
              <p className="text-gray-600">{bio.phone}</p>
            </div>
            <div>
              <h2 className="text-primary font-semibold mb-1">Address</h2>
              <p className="text-gray-600">{bio.address}</p>
            </div>
            <div>
              <h2 className="text-primary font-semibold mb-1">Portfolio</h2>
              <a
                href={bio.portfolio?.[0]}
                target="_blank"
                className="text-blue-600 underline"
              >
                Open Portfolio
              </a>
            </div>
            <div>
              <h2 className="text-primary font-semibold mb-1">Document</h2>
              <a
                href={bio.documentUrl}
                target="_blank"
                className="text-blue-600 underline"
              >
                Download Document
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
