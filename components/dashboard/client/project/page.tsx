"use client";

import { getFromCookies } from "@/lib/cookies";
import { useEffect, useState } from "react";
import TableProject from "./TableProject";

const ProjectPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user]: any = useState(() => getFromCookies("user"));

  useEffect(() => {
    if (!user) return;

    async function fetchData() {
      const res = await fetch(`/api/sendLowongan?companyId=${user.id}`);
      const result = await res.json();
      console.log("DATA:", result.data);

      setData(result.data);
    }

    fetchData();
  }, [user]);

  return (
    <div className="w-full min-h-screen bg-white p-4">
      <TableProject data={data} />
    </div>
  );
};

export default ProjectPage;
