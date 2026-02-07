import { Link } from "react-router-dom";
import Box from "../../layout/box";

export default function FeeTrust() {

    return (
        <section className="w-full py-[50px]">
            <Box>
                <div className="mx-auto w-full max-w-[1140px] gap-10 grid lg:grid-cols-2">
                    <div className="bg-[#A446FE] rounded-[32px] overflow-hidden p-4 overflow-hidden group">
                        <header className="text-center mt-2 mb-6">
                            <h1 className="text-[24px] lg:text-[32px] font-medium text-white">Low Fees</h1>
                        </header>
                        <div className="flex lg:hidden text-center pb-4 justify-center w-full">
                            <Link to='/register' className="text-white flex items-center gap-2 py-2 px-4 rounded-[6px] hover:bg-purple-700 w-max">
                                Sign up
                                <span className="material-symbols-outlined">
                                    keyboard_arrow_right
                                </span>
                            </Link>
                        </div>
                        <figure className="flex justify-center group-hover:animate-wiggle">
                            <img src="/images/fee.jpg" alt="Fees" className="max-h-[280px]" />
                        </figure>
                        <div className="hidden lg:flex text-center pt-4 justify-center w-full">
                            <Link to='/register' className="text-white flex items-center gap-2 py-2 px-4 rounded-[6px] hover:bg-purple-700 w-max">
                                Sign up
                                <span className="material-symbols-outlined">
                                    keyboard_arrow_right
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-[#3379FF] rounded-[32px] overflow-hidden p-4 group">
                        <header className="text-center mt-2 mb-6">
                            <h1 className="text-[24px] lg:text-[32px] font-medium text-white">Trusted by 1+ million users</h1>
                        </header>
                        <div className="flex lg:hidden text-center pb-4 justify-center w-full">
                            <Link to='/register' className="text-white flex items-center gap-2 py-2 px-4 rounded-[6px] hover:bg-[#1d4ed8] w-max">
                                Sign up
                                <span className="material-symbols-outlined">
                                    keyboard_arrow_right
                                </span>
                            </Link>
                        </div>
                        <figure className="flex justify-center group-hover:animate-wiggle">
                            <img src="/images/trust.jpg" alt="Trust" className="max-h-[280px]" />
                        </figure>
                        <div className="hidden lg:flex text-center pt-4 justify-center w-full">
                            <Link to='/register' className="text-white flex items-center gap-2 py-2 px-4 rounded-[6px] hover:bg-[#1d4ed8] w-max">
                                Sign up
                                <span className="material-symbols-outlined">
                                    keyboard_arrow_right
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Box>
        </section>
    )
}