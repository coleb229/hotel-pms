'use server';
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
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
      <Header user={session} />
      <SearchBar />
    </main>
  );
}
