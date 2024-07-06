import Image from "next/image";
import { DashboardHeader } from "@/components/DashboardHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DashboardHeader />
    </main>
  );
}
