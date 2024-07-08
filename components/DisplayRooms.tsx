'use client'
import { Table } from '@mantine/core';

export function DisplayRooms({ data }:any) {
  const rows = data.map((x:any) => (
    <Table.Tr key={x.number}>
      <Table.Td>{x.number}</Table.Td>
      <Table.Td>{x.type}</Table.Td>
      <Table.Td>x</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Room Number</Table.Th>
          <Table.Th>Room Type</Table.Th>
          <Table.Th>Delete</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}