import PageClient from "./PageClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params; // ⬅ wajib await

  return <PageClient id={id} />;
}
