import { NavMenu } from "@/components/NavMenu";

export const Header = ({ user }:any) => {

    const date = new Date();
    const formattedDate = date.toDateString();

    return (
        <div className="grid grid-cols-3 absolute top-0 left-0 w-full py-2 bg-[#f2f2f2]">
            <div>
                <NavMenu />
            </div>
            <div>
                <div className="flex justify-center">
                    <h1 className="text-center text-2xl font-bold text-slate-400 pr-4">Hotel PMS</h1>
                    <h1 className="text-center text-2xl font-bold">Manager Dashboard</h1>
                </div>
                <div className="flex justify-center">
                    <p className="text-sm text-slate-400 text-center pr-4 font-semibold">
                        {user?.user?.name}
                    </p>
                    <p className="text-sm text-slate-400 text-center font-semibold">
                        {formattedDate}
                    </p>
                </div>
            </div>
            <div>
                placeholder
            </div>
        </div>
    )
}