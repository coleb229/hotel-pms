'use client'
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Group, Button, Input, Text, NativeSelect, Switch } from '@mantine/core';

export const AddRoom = ({ action }:any) => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Group justify="center">
        <Button onClick={toggle}>Add Room</Button>
      </Group>

      <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
        <Text size="sm" mb="xs" fw={500}>
          Add Room
        </Text>

        <Group align="flex-end">
            <form action={action}>
                <div className='grid grid-cols-2'>
                    <div>
                        <div className='grid grid-cols-2'>
                            <div>
                                <Input.Label required>Room Number</Input.Label>
                                <Input placeholder="Enter Room Number" type='number' />
                            </div>
                            <div>
                                <Input.Label required>Max Occupancy</Input.Label>
                                <Input placeholder="Enter Max Occupancy" type='number' />
                            </div>
                        </div>
                        <div>
                            <Input.Label required>Select Floor</Input.Label>
                            <NativeSelect data={['1', '2', '3']} />
                        </div>
                        <div>
                            <Input.Label required>Room Type</Input.Label>
                            <Input component='select' />
                        </div>
                        <div>
                            <Input.Label required>Housekeeping Section</Input.Label>
                            <Input component='select' />
                        </div>
                        <div>
                            <Input.Label required>Suite Door</Input.Label>
                            <Switch />
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