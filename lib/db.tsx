'use server'
import prisma from './prisma'
import { revalidatePath } from 'next/cache'
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export const formDebug = async (formData: any) => {
  console.log(formData.get)
}

export const addRoom = async (formData: any) => {
  try {
    let features = []
    if (formData.get('patio')) features.push('Patio/Balcony')
    if (formData.get('mainStreetView')) features.push('Main Street View')
    if (formData.get('extraLargeRoom')) features.push('Extra Large Room')
    if (formData.get('sofaBed')) features.push('Sofa Bed')
    if (formData.get('wetBar')) features.push('Wet Bar')
    if (formData.get('fullKitchen')) features.push('Full Kitchen')
    if (formData.get('fireplace')) features.push('Fireplace')

    let likes = []
    if (formData.get('highFloor')) likes.push('High Floor')
    if (formData.get('lowFloor')) likes.push('Low Floor')
    if (formData.get('nearElevator')) likes.push('Near Elevator')
    if (formData.get('awayFromElevator')) likes.push('Away from Elevator')

    await prisma.room.create({
      data: {
        number: parseInt(formData.get('roomNumber')),
        capacity: parseInt(formData.get('occupancy')),
        floor: parseInt(formData.get('floor')),
        type: formData.get('roomType'),
        section: formData.get('housekeeping'),
        suite: formData.get('suite') === 'on' ? true : false,
        features: features,
        likes: likes
      }
    })
    revalidatePath('/settings/rooms')
  } catch (error) {
    console.error(error)
  }
}