'use client'
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, Input, Text, NativeSelect, Switch, Checkbox } from '@mantine/core';
import { addRoom } from '@/lib/db';

export const AddRoom = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Add Room</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="4xl" radius="md">
        <Text size="sm" mb="xs" fw={500}>
          Add Room
        </Text>

        <Group align="flex-end">
            <form action={addRoom}>
                <div className='grid grid-cols-2 gap-4'>
                    <div> {/* Left Side */}
                        <div className='grid grid-cols-2'>
                            <div>
                                <Input.Label required>Room Number</Input.Label>
                                <Input placeholder="Enter Room Number" type='number' name='roomNumber' />
                            </div>
                            <div>
                                <Input.Label required>Max Occupancy</Input.Label>
                                <Input placeholder="Enter Max Occupancy" type='number' name='occupancy' />
                            </div>
                        </div>
                        <div>
                            <Input.Label required>Select Floor</Input.Label>
                            <NativeSelect data={['1', '2', '3']} name='floor' />
                        </div>
                        <div>
                            <Input.Label required>Room Type</Input.Label>
                            <NativeSelect
                              data={[
                                'Accessible Standard 2 Queen',
                                'Accessible Deluxe 1 Bedroom Suite',
                                'Accessible Studio Suite',
                                'Premium King',
                                'Premium 2 Queen',
                                'Standard King',
                                'Standard 2 Queen',
                                'Presidential Suite',
                                'Crosby Hotel Guest Room',
                                'Suite 1 Bedroom',
                                'Cockburn Combination Suite',
                                'Suite Deluxe 1 Bedroom',
                                'Suite Premium 1 Bedroom',
                                'Suite Studio'
                              ]}
                              name='roomType'
                            />
                        </div>
                        <div>
                            <Input.Label required>Housekeeping Section</Input.Label>
                            <NativeSelect data={['1', '2 West', '3 West', '2 East', '3 East', 'King', 'Suite']} name='housekeeping' />
                        </div>
                        <div className='flex'>
                            <Input.Label className='p-2'>Suite Door</Input.Label>
                            <Switch className='py-2' name='suite' />
                        </div>
                    </div>

                    <div> {/* Right Side */}
                      <h2 className='text-lg font-semibold'>Room Features</h2>
                      <div className='grid grid-cols-2 p-4 bg-[#f2f2f2]'>
                        <Checkbox label='Patio/Balcony' name='patio' />
                        <Checkbox label='Main Street View' name='mainStreetView' />
                        <Checkbox label='Extra Large Room' name='extraLargeRoom' />
                        <Checkbox label='Sofa Bed' name='sofaBed' />
                        <Checkbox label='Wet Bar' name='wetBar' />
                        <Checkbox label='Full Kitchen' name='fullKitchen' />
                        <Checkbox label='Fireplace' name='fireplace' />
                        <Checkbox label='ADA Accessible' name='adaAccessible' />
                        <Checkbox label='Connecting Door' name='connectingDoor' />
                      </div>
                      <h2 className='text-lg font-semibold'>Room Likes</h2>
                      <div className='p-4 bg-[#f2f2f2]'>
                        <h3>Floor</h3>
                        <hr className='mb-2' />
                        <Checkbox label='High Floor' name='highFloor' />
                        <Checkbox label='Low Floor' name='lowFloor' />
                      </div>
                      <div className='p-4 bg-[#f2f2f2]'>
                        <h3>Elevator</h3>
                        <hr className='mb-2' />
                        <Checkbox label='Near Elevator' name='nearElevator' />
                        <Checkbox label='Away From Elevator' name='awayFromElevator' />
                      </div>
                    </div>
                </div>
                <div className='flex justify-around'>
                    <Button onClick={close}>Cancel</Button>
                    <Button type='submit'>Submit</Button>
                </div>
            </form>
        </Group>
      </Dialog>
    </>
  );
}
{/* good god */}

let coleb = 'pissed off'