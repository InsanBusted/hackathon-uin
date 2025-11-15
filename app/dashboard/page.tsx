import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return <div>Unauthorized. Please log in.</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">
        Welcome, {session.user.name || session.user.email}!
      </h1>
    </div>
  );
}
