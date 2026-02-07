import { Link } from "react-router-dom";
import Box from "../../layout/box";
import Button from "../button";
import { ArrowRightCircle } from "../svgs";

export default function Features() {

    return (
        <Box className="pt-20 px-0">
            <div className="bg-[#F6F6F7] lg:rounded-[8px] px-5 lg:px-8 py-[52px] max-w-[1240px] w-full mx-auto ">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-between gap-x-5 gap-y-10 mb-14">
                    <div className="flex flex-col gap-4">
                        <figure>
                            <img src="/images/dignity-1.png" alt="Convenient trading interface" />
                        </figure>
                        <h1 className="text-ash text-[20px] font-bold">Convenient trading interface</h1>
                        <p className="text-ash">We created the most simple and comfortable interface that does not distract from the main thing - from trading</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <figure>
                            <img src="/images/dignity-2.png" alt="Integrated signals" />
                        </figure>
                        <h1 className="text-ash text-[20px] font-bold">Integrated signals</h1>
                        <p className="text-ash">Approach the strategy thoughtfully - the most precise and innovative signals with an accuracy of 87% will help you create your own effective strategy</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <figure>
                            <img src="/images/dignity-3.png" alt="Trading indicators" />
                        </figure>
                        <h1 className="text-ash text-[20px] font-bold">Trading indicators</h1>
                        <p className="text-ash">We have gathered the most useful trading indicators. Use them to boost your account balance</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <figure>
                            <img src="/images/dignity-4.png" alt="Mirror Trading" />
                        </figure>
                        <h1 className="text-ash text-[20px] font-bold">Mirror Trading</h1>
                        <p className="text-ash">Our platform supports both copy & mirror trading features with most modern technology which delivers and replicate trades efficiently with good risk management</p>
                    </div>
                </div>
                <div className="pt-8 border-t-[1px] border-t-[#ffffff0d]">
                    <Link to='/register' reloadDocument={true}>
                        <Button className="w-full lg:max-w-fit mx-auto">
                            <div className="flex items-center gap-4">
                                Create an account
                                <ArrowRightCircle />
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>
        </Box>
    )
}