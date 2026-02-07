import { Link } from "react-router-dom";
import Box from "../../layout/box";

export default function Hero() {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="pt-16 pb-10 grid lg:grid-cols-2 gap-10">
                <div className="my-auto">
                    <div>
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-6">
                            Innovative platform for smart investments and copy trading </h1>
                        <p className="text-[18px] lg:text-[20px] text-[#5E5F64FF] mb-12">Mirror an expert trades to grow value and knowledge through copy trading, wide range of trading offers, Options trading, stocks, derivatives, currency pairs...</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link
                            to='/register'
                            className="bg-primary w-full lg:w-fit font-medium text-white rounded-[6px] py-[12px] px-[38px] grid place-items-center"
                            reloadDocument={true}
                        >
                            Registration
                        </Link>
                        <Link
                            className="w-full lg:w-fit bg-white font-medium text-primary rounded-[6px] py-[12px] px-[38px] grid place-items-center hover:bg-[#F0FCF5FF] border-[1px] border-primary" 
                            to='/register' 
                            reloadDocument={true}
                        >
                            Open an account
                        </Link>
                    </div>
                </div>
                <figure>
                    <img src="/images/hero.png" alt="Brokerage" />
                </figure>
            </Box>
        </div>
    )
}
