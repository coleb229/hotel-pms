'use client'
import { Burger, Drawer, Button, Badge, NavLink, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MdSpeed } from "react-icons/md";
import { GoPasskeyFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiCirclesThreeThin } from "react-icons/pi";
import { PiSliders } from "react-icons/pi";
import { RiShoppingCartLine } from "react-icons/ri";
import { LiaCoinsSolid } from "react-icons/lia";
import { IoWarningOutline } from "react-icons/io5";
import { HiOutlineChartPie } from "react-icons/hi2";
import { CiPower } from "react-icons/ci";

export const NavMenu = () => {
    const [opened, { open, close, toggle }] = useDisclosure(false);

    return (
        <div className="bg-amber-400 w-[55px] rounded-r-sm">
            <Drawer opened={opened} onClose={close} title="Hotel PMS">
                <div className='flex flex-col justify-between'>
                    <div className='grid grid-cols-1'>
                        <NavLink
                            href="/"
                            label="Dashboard"
                            leftSection={<MdSpeed />}
                        />
                        <DeskPullout />
                        <GroupsPullout />
                        <RevenuePullout />
                        <HousekeepingPullout />
                        <FinancialsPullout />
                        <ActionsPullout />
                        <ReportsPullout />
                    </div>
                    <div>
                        <NavLink
                            href='/api/auth/signout'
                            label="Sign Out"
                            leftSection={<CiPower />}
                        />
                    </div>
                </div>
            </Drawer>

            <Burger size="lg" lineSize={4} color='white' opened={opened} onClick={open} aria-label="Toggle navigation" className='mx-2' />
        </div>
    );
}

const DeskPullout = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
        <Drawer className='absolute left-[425px]' overlayProps={{ backgroundOpacity: 0, blur: 0 }} opened={opened} onClose={close} title="Front Desk">
            <NavLink
                href="/front-desk/search-reservations"
                label="Search Reservations"
            />
            <NavLink
                href="/front-desk/create-reservation"
                label="Create Reservation"
            />
            <NavLink
                href="/front-desk/room-diary"
                label="Room Diary"
            />
            <NavLink
                href="/front-desk/post-charges"
                label="Post Charges"
            />
            <NavLink
                href="/front-desk/cashier"
                label="Cashier"
            />
            <NavLink
                href="/front-desk/guests"
                label="Guests"
            />
            <NavLink
                href="/front-desk/accounts"
                label="Accounts"
            />
            <NavLink
                href="/front-desk/eod"
                label="End of Day"
            />
        </Drawer>

        <UnstyledButton onClick={open}>
            <NavLink
                href="#required-for-focus"
                label="Front Desk"
                leftSection={<GoPasskeyFill />}
                rightSection={
                    <FaArrowRightLong />
                }
            />
        </UnstyledButton>
        </>
    );
}

const GroupsPullout = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
        <Drawer className='absolute left-[425px]' overlayProps={{ backgroundOpacity: 0, blur: 0 }} opened={opened} onClose={close} title="Groups">
            <NavLink
                href="/groups/new-group"
                label="New Group"
            />
            <NavLink
                href="/groups/manage-groups"
                label="Manage Groups"
            />
            <NavLink
                href="/groups/new-allotment"
                label="New Allotment"
            />
            <NavLink
                href="/groups/manage-allotment"
                label="Manage Allotment"
            />
        </Drawer>

        <UnstyledButton onClick={open}>
            <NavLink
                href="#required-for-focus"
                label="Groups"
                leftSection={<PiCirclesThreeThin />}
                rightSection={
                    <FaArrowRightLong />
                }
            />
        </UnstyledButton>
        </>
    );
}

const RevenuePullout = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
        <Drawer className='absolute left-[425px]' overlayProps={{ backgroundOpacity: 0, blur: 0 }} opened={opened} onClose={close} title="Revenue Management">
            <NavLink
                href="/revenue/rate-manager"
                label="Rate Manager"
            />
            <NavLink
                href="/revenue/company-ta-cards"
                label="Company & TA Cards"
            />
            <NavLink
                href="/revenue/events"
                label="Events"
            />
        </Drawer>

        <UnstyledButton onClick={open}>
            <NavLink
                href="#required-for-focus"
                label="Revenue Management"
                leftSection={<PiSliders />}
                rightSection={
                    <FaArrowRightLong />
                }
            />
        </UnstyledButton>
        </>
    );
}

const HousekeepingPullout = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
        <Drawer className='absolute left-[425px]' overlayProps={{ backgroundOpacity: 0, blur: 0 }} opened={opened} onClose={close} title="Housekeeping">
            <NavLink
                href="/housekeeping/room-status"
                label="Room Status"
            />
            <NavLink
                href="/housekeeping/task-management"
                label="Task Management"
            />
        </Drawer>

        <UnstyledButton onClick={open}>
            <NavLink
                href="#required-for-focus"
                label="Housekeeping"
                leftSection={<RiShoppingCartLine />}
                rightSection={
                    <FaArrowRightLong />
                }
            />
        </UnstyledButton>
        </>
    );
}

const FinancialsPullout = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
        <Drawer className='absolute left-[425px]' overlayProps={{ backgroundOpacity: 0, blur: 0 }} opened={opened} onClose={close} title="Financials">
            <NavLink
                href="/financials/journal"
                label="Journal"
            />
            <NavLink
                href="/financials/cc-transactions"
                label="CC Transactions"
            />
            <NavLink
                href="/financials/accounts-receivables"
                label="Accounts Receivables"
            />
            <NavLink
                href="/financials/commissions"
                label="Commissions"
            />
            <NavLink
                href="/financials/invoice-search"
                label="Invoice Search"
            />
            <NavLink
                href="/financials/auto-charge"
                label="Auto Charge"
            />
        </Drawer>

        <UnstyledButton onClick={open}>
            <NavLink
                href="#required-for-focus"
                label="Financials"
                leftSection={<LiaCoinsSolid />}
                rightSection={
                    <FaArrowRightLong />
                }
            />
        </UnstyledButton>
        </>
    );
}

const ActionsPullout = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
        <Drawer className='absolute left-[425px]' overlayProps={{ backgroundOpacity: 0, blur: 0 }} opened={opened} onClose={close} title="Actions">
            <NavLink
                href="/actions/actions-manager"
                label="Actions Manager"
            />
        </Drawer>

        <UnstyledButton onClick={open}>
            <NavLink
                href="#required-for-focus"
                label="Actions"
                leftSection={<IoWarningOutline />}
                rightSection={
                    <FaArrowRightLong />
                }
            />
        </UnstyledButton>
        </>
    );
}

const ReportsPullout = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
        <Drawer className='absolute left-[425px]' overlayProps={{ backgroundOpacity: 0, blur: 0 }} opened={opened} onClose={close} title="Reports">
            <NavLink
                href="/reports/new-report"
                label="New Report"
            />
            <NavLink
                href="/reports/reports-inbox"
                label="Reports Inbox"
            />
            <NavLink
                href="/reports/schedule-report"
                label="Schedule a Report/Export"
            />
        </Drawer>

        <UnstyledButton onClick={open}>
            <NavLink
                href="#required-for-focus"
                label="Reports"
                leftSection={<HiOutlineChartPie />}
                rightSection={
                    <FaArrowRightLong />
                }
            />
        </UnstyledButton>
        </>
    );
}