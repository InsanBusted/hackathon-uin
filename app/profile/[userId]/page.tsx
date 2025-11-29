import Header from "@/components/Header/page";
import BioSidebar from "@/components/profile/BioSidebar";
import CardCv from "@/components/profile/CardCv";
import ProfileClient from "@/components/profile/ProfileClient";

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
  
   const resolvedParams = await params; 
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
      
      <ProfileClient bio={bio}/>
    </div>
  );
};

export default Page;
