'use client'
import { Tabs } from '@mantine/core';

export const SettingsSideTabs = () => {
    return (
        <Tabs defaultValue="chain" orientation="vertical" className='w-screen'>
          <Tabs.List>
            <Tabs.Tab value="chain">Chain</Tabs.Tab>
            <Tabs.Tab value="hotel">Hotel & Staff</Tabs.Tab>
            <Tabs.Tab value="guestMobility">Guest Mobility</Tabs.Tab>
            <Tabs.Tab value="promos">Promos & Upsell</Tabs.Tab>
            <Tabs.Tab value="cards">Cards</Tabs.Tab>
            <Tabs.Tab value="rooms">Rooms</Tabs.Tab>
            <Tabs.Tab value="financials">Financials</Tabs.Tab>
            <Tabs.Tab value="rates">Rates</Tabs.Tab>
            <Tabs.Tab value="reservations">Reservations</Tabs.Tab>
            <Tabs.Tab value="integrations">Integrations</Tabs.Tab>
            <Tabs.Tab value="stats">Stats & Reports</Tabs.Tab>
          </Tabs.List>
    
          <Tabs.Panel value="chain">chain tab content</Tabs.Panel>
          <Tabs.Panel value="hotel">hotel tab content</Tabs.Panel>
          <Tabs.Panel value="guestMobility">guestMobility tab content</Tabs.Panel>
          <Tabs.Panel value="promos">promos tab content</Tabs.Panel>
          <Tabs.Panel value="cards">cards tab content</Tabs.Panel>
          <Tabs.Panel value="rooms">rooms tab content</Tabs.Panel>
          <Tabs.Panel value="financials">financials tab content</Tabs.Panel>
          <Tabs.Panel value="rates">rates tab content</Tabs.Panel>
          <Tabs.Panel value="reservations">reservations tab content</Tabs.Panel>
          <Tabs.Panel value="integrations">integrations tab content</Tabs.Panel>
          <Tabs.Panel value="stats">stats tab content</Tabs.Panel>
        </Tabs>
    );
}