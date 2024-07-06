'use server';
import { DashboardHeader } from "@/components/DashboardHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {

  const session = await getServerSession(authOptions);
  const user = session?.user?.email;
  if(!session) {
    redirect('/api/auth/signin')
  }
  console.log(session)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DashboardHeader user={session} />
    </main>
  );
}
