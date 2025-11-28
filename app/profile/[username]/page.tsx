import React from "react";

interface PageProps {
  params: Promise<{
    username: string;
  }>;
}

const page = async ({params}: PageProps) => {
    const {username} = await params
  return (
    <div>
      <h1>Ini detail Profile {username}</h1>
    </div>
  );
};

export default page;
