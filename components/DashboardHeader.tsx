import { NavMenu } from "@/components/NavMenu";
import { SearchBar } from "./SearchBar";

export const DashboardHeader = () => {
    return (
        <div className="grid grid-cols-3 absolute top-0 left-0 w-full py-2 bg-[#f2f2f2]">
            <div>
                <NavMenu />
            </div>
            <div>
                <div className="flex">
                    <h1 className="text-center text-2xl font-bold text-slate-400 pr-4">Hotel PMS</h1>
                    <h1 className="text-center text-2xl font-bold">Manager Dashboard</h1>
                </div>
            </div>
            <div>
                placeholder
            </div>
            <div className="col-span-3">
                <SearchBar />
            </div>
        </div>
    )
}