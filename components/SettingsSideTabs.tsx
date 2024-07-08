'use client'
import { Tabs, NavLink } from '@mantine/core';

export const SettingsSideTabs = () => {

    const sections = {
      chain: [
        { href: '/settings/chain/property-groups', title: 'Property Groups'},
        { href: '/settings/chain/webhooks', title: 'Webhooks'},
      ],
      hotel: [
        { href: '/settings/hotel/hotel-details', title: 'Hotel Details'},
        { href: '/settings/hotel/user-setup', title: 'User Setup'},
        { href: '/settings/hotel/departments', title: 'Departments'},
        { href: '/settings/hotel/user-roles', title: 'User Roles'},
        { href: '/settings/hotel/parameters', title: 'Settings & Parameters'},
        { href: '/settings/hotel/stationery', title: 'Stationery'},
        { href: '/settings/hotel/permissions', title: 'Permissions'},
        { href: '/settings/hotel/property-interface-setup', title: 'Property Interface Setup'},
        { href: '/settings/hotel/languages', title: 'Languages'},
        { href: '/settings/hotel/countries', title: 'Countries'},
        { href: '/settings/hotel/sftp-servers', title: 'SFTP Servers'},
        { href: '/settings/hotel/tools', title: 'Tools'},
        { href: '/settings/hotel/archival-transfer', title: 'Archival Transfer'},
        { href: '/settings/hotel/google-drive' , title: 'Google Drive'},
        { href: '/settings/hotel/dropbox', title: 'Dropbox'},
        { href: '/settings/hotel/security', title: 'Security'},
      ],
      guestMobility: [
        { href: '/settings/guest-mobility/social-lobby', title: 'Social Lobby'},
        { href: '/settings/guest-mobility/guest-reviews', title: 'Guest Reviews'},
        { href: '/settings/guest-mobility/check-in', title: 'Check-In'},
        { href: '/settings/guest-mobility/check-out', title: 'Check-Out'},
        { href: '/settings/guest-mobility/content-management', title: 'Content Management'},
        { href: '/settings/guest-mobility/analytics-setup', title: 'Analytics Setup'},
        { href: '/settings/guest-mobility/email-blacklist', title: 'Email Blacklist'},
        { href: '/settings/guest-mobility/email-from-guest', title: 'Email From Guest'},
        { href: '/settings/guest-mobility/direct-url', title: 'Direct URL'},
        { href: '/settings/guest-mobility/design-setup', title: 'Guest Mobility Design Setup'},
        { href: '/settings/guest-mobility/web-common', title: 'Guest Mobility Web Common'},
        { href: '/settings/guest-mobility/mobile-app-marketing', title: 'Mobile App Marketing'},
        { href: '/settings/guest-mobility/room-ready-email', title: 'Room Ready Email'},
        { href: '/settings/guest-mobility/add-ons', title: 'Add-Ons'},
        { href: '/settings/guest-mobility/dynamic-email-templates', title: 'Dynamic Email Templates'},
        { href: '/settings/guest-mobility/translations', title: 'Translations'},
      ],
      promos: [
        { href: '/settings/promos/upsell-rooms', title: 'Upsell Rooms'},
        { href: '/settings/promos/upsell-late-checkout', title: 'Upsell Late Checkout'},
        { href: '/settings/promos/upsell-early-checkin', title: 'Upsell Early Checkin'},
        { href: '/settings/promos/upsell-add-ons', title: 'Upsell Add-Ons'},
      ],
      cards: [
        { href: '/settings/cards/likes', title: 'Likes'},
        { href: '/settings/cards/frequent-flyer-program', title: 'Frequent Flyer Program'},
        { href: '/settings/cards/hotel-loyalty-program', title: 'Hotel Loyalty Program'},
        { href: '/settings/cards/data-removal', title: 'Data Removal'},
        { href: '/settings/cards/company-travel-agent-fields', title: 'Company / Travel Agent Fields'},
        { href: '/settings/cards/guest-card-fields', title: 'Guest Card Fields'},
        { href: '/settings/cards/file-attachments', title: 'File Attachments'},
      ],
      rooms: [
        { href: '/settings/rooms/types', title: 'Room Types'},
        { href: '/settings/rooms', title: 'Rooms'},
        { href: '/settings/rooms/key-delivery', title: 'Room Key Delivery'},
        { href: '/settings/rooms/housekeeping', title: 'Housekeeping'},
        { href: '/settings/rooms/maintenance-reasons', title: 'Maintenance Reasons'},
        { href: '/settings/rooms/floor-setup', title: 'Floor Setup'},
        { href: '/settings/rooms/task-management', title: 'Task Management'},
        { href: '/settings/rooms/housekeeping-sections', title: 'Housekeeping Sections'},
      ],
      financials: [
        { href: '/settings/financials/charge-groups', title: 'Charge Groups'},
        { href: '/settings/financials/payment-methods', title: 'Payment Methods'},
        { href: '/settings/financials/charge-codes', title: 'Charge Codes'},
        { href: '/settings/financials/items', title: 'Items'},
        { href: '/settings/financials/billing-groups', title: 'Billing Groups'},
        { href: '/settings/financials/accounts-receivables', title: 'Accounts Receivables'},
        { href: '/settings/financials/financial-settings', title: 'Financial Settings'},
        { href: '/settings/financials/tax-exempt-types', title: 'Tax Exempt Types'},
        { href: '/settings/financials/force-adjustment-reasons', title: 'Force Adjustment Reasons'},
      ],
      rates: [
        { href: '/settings/rates', title: 'Rates'},
        { href: '/settings/rates/rate-types', title: 'Rate Types'},
        { href: '/settings/rates/rules', title: 'Rules & Restrictions'},
        { href: '/settings/rates/add-ons', title: 'Add-Ons'},
        { href: '/settings/rates/rate-sequence', title: 'Rate Sequence'},
        { href: '/settings/rates/promotions', title: 'Promotions'},
        { href: '/settings/rates/channel-managers', title: 'Channel Managers'},
        { href: '/settings/rates/rate-settings', title: 'Rate & Add-On Settings'},
      ],
      reservations: [
        { href: '/settings/reservations/markets', title: 'Markets'},
        { href: '/settings/reservations/sources', title: 'Sources'},
        { href: '/settings/reservations/origin-of-booking', title: 'Origin of Booking'},
        { href: '/settings/reservations/reservation-types', title: 'Reservation Types'},
        { href: '/settings/reservations/reservation-settings', title: 'Reservation Settings'},
        { href: '/settings/reservations/hold-status', title: 'Hold Status'},
        { href: '/settings/reservations/segments', title: 'Segments'},
      ],
      integrations: [
        { href: '/settings/integrations/audiovisual', title: 'Audiovisual'},
        { href: '/settings/integrations/back-office', title: 'Back Office'},
        { href: '/settings/integrations/bi', title: 'BI'},
        { href: '/settings/integrations/central-reservation-system', title: 'Central Reservation System'},
        { href: '/settings/integrations/commissions', title: 'Commissions'},
        { href: '/settings/integrations/comtrol', title: 'Comtrol'},
        { href: '/settings/integrations/concierge', title: 'Concierge'},
        { href: '/settings/integrations/country-specific', title: 'Country Specific'},
        { href: '/settings/integrations/crm', title: 'Customer Relationship Management'},
        { href: '/settings/integrations/door-lock-interface', title: 'Door Lock Interface'},
        { href: '/settings/integrations/gift-cards', title: 'Gift Cards'},
        { href: '/settings/integrations/guest-communications', title: 'Guest Communications'},
        { href: '/settings/integrations/guest-services', title: 'Guest Services'},
        { href: '/settings/integrations/internet-booking-engine', title: 'Internet Booking Engine'},
        { href: '/settings/integrations/payments', title: 'Payments'},
        { href: '/settings/integrations/pos', title: 'POS Integrations'},
        { href: '/settings/integrations/rms', title: 'Revenue Management System'},
        { href: '/settings/integrations/room-upsell', title: 'Room Upsell'},
        { href: '/settings/integrations/sales-catering', title: 'Sales & Catering'},
        { href: '/settings/integrations/utilities', title: 'Utilities'},
      ],
      stats: [],
    }

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
    
          <Tabs.Panel className='bg-[#f2f2f2] grid grid-cols-3 gap-3 p-6' value="chain">
            {sections.chain.map((section, index) => (
              <SectionLink key={index} href={section.href} title={section.title} />
            ))}
          </Tabs.Panel>
          <Tabs.Panel className='bg-[#f2f2f2] grid grid-cols-3 gap-3 p-6' value="hotel">
            {sections.hotel.map((section, index) => (
              <SectionLink key={index} href={section.href} title={section.title} />
            ))}
          </Tabs.Panel>
          <Tabs.Panel className='bg-[#f2f2f2] grid grid-cols-3 gap-3 p-6' value="guestMobility">
            {sections.guestMobility.map((section, index) => (
              <SectionLink key={index} href={section.href} title={section.title} />
            ))}
          </Tabs.Panel>
          <Tabs.Panel className='bg-[#f2f2f2] grid grid-cols-3 gap-3 p-6' value="promos">
            {sections.promos.map((section, index) => (
              <SectionLink key={index} href={section.href} title={section.title} />
            ))}
          </Tabs.Panel>
          <Tabs.Panel className='bg-[#f2f2f2] grid grid-cols-3 gap-3 p-6' value="cards">
            {sections.cards.map((section, index) => (
              <SectionLink key={index} href={section.href} title={section.title} />
            ))}
          </Tabs.Panel>
          <Tabs.Panel className='bg-[#f2f2f2] grid grid-cols-3 gap-3 p-6' value="rooms">
            {sections.rooms.map((section, index) => (
              <SectionLink key={index} href={section.href} title={section.title} />
            ))}
          </Tabs.Panel>
          <Tabs.Panel className='bg-[#f2f2f2] grid grid-cols-3 gap-3 p-6' value="financials">
            {sections.financials.map((section, index) => (
              <SectionLink key={index} href={section.href} title={section.title} />
            ))}
          </Tabs.Panel>
          <Tabs.Panel className='bg-[#f2f2f2] grid grid-cols-3 gap-3 p-6' value="rates">
            {sections.rates.map((section, index) => (
              <SectionLink key={index} href={section.href} title={section.title} />
            ))}
          </Tabs.Panel>
          <Tabs.Panel className='bg-[#f2f2f2] grid grid-cols-3 gap-3 p-6' value="reservations">
            {sections.reservations.map((section, index) => (
              <SectionLink key={index} href={section.href} title={section.title} />
            ))}
          </Tabs.Panel>
          <Tabs.Panel className='bg-[#f2f2f2] grid grid-cols-3 gap-3 p-6' value="integrations">
            {sections.integrations.map((section, index) => (
              <SectionLink key={index} href={section.href} title={section.title} />
            ))}
          </Tabs.Panel>
          <Tabs.Panel className='bg-[#f2f2f2] grid grid-cols-3 gap-3 p-6' value="stats">
            empty
          </Tabs.Panel>
        </Tabs>
    );
}

const SectionLink = ({ href, title, icon }:any) => {
  return(
    <div className='bg-white border-[1px] border-gray-600 shadow-sm h-[50px]'>
      <NavLink
        href={href}
        label={title}
        color="white"
        className="text-xl font-semibold"
        style={{ padding: '10px 20px' }}
        leftSection={icon}
      />
    </div>
  )
};