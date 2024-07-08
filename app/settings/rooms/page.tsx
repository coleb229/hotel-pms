'use server';
import { Header } from "@/components/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";
import { AddRoom } from "@/components/AddRoom";
import { DisplayRooms } from "@/components/DisplayRooms";
import prisma from "@/lib/prisma";

export default async function Home() {

  const session = await getServerSession(authOptions);
  const user = session?.user?.email;
  if(!session) {
    redirect('/api/auth/signin')
  }
  console.log(session)

  const getRooms = async () => {
    try {
      const rooms = prisma.room.findMany({
        orderBy: {
          number: 'asc'
        }
      })
      return rooms
    } catch (error) {
      console.error(error)
    }
  }
  const rooms = await getRooms()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Header user={session} />
      <AddRoom />
      <DisplayRooms data={rooms} />
    </main>
  );
}