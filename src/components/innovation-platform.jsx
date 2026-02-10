import { Link } from "react-router-dom";
import Box from "../layout/box";
import { CapIcon, TradeIcon } from "./svgs";
import { APP_NAME } from "../constants";

export default function InnovationPlatform() {

    return (
        <div className="py-10">
            <Box className="grid place-items-center gap-10">
                <figure>
                    <img src="/images/innovation.png" alt="Innovation" />
                </figure>
                <h1 className="text-[24px] lg:text-[40px] text-ash font-bold text-center max-w-[600px]">
                    {APP_NAME}: Innovation Platform
                    Digital Asset Trading
                </h1>
                <div className="w-full flex gap-5 lg:max-w-fit lg:flex-row flex-col">
                    <Link
                        to='/register'
                        className="bg-primary font-medium text-white rounded-[6px] py-[12px] px-[38px] grid place-items-center"
                    >
                        <div className="flex items-center gap-5 whitespace-nowrap">
                            <TradeIcon />
                            Open account
                        </div>
                    </Link>
                    <Link
                        to='/login'
                        className="w-full grid place-items-center h-[57px] bg-white font-medium text-[#353a4d] rounded-[6px] py-[12px] px-[60px] hover:bg-[#9EE0BDFF] hover:text-white"
                    >
                        <div className="flex items-center gap-5">
                            <CapIcon />
                            Sign in
                        </div>
                    </Link>
                </div>
            </Box>
        </div>
    )
}