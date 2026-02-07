import Box from "../../layout/box";

export default function GetStarted() {

    return (
        <Box className="py-20 px-0">
            <div className="grid lg:grid-cols-2 gap-10">
                <div className="bg-[#F6F6F7] px-5 py-16 flex flex-col items-center lg:rounded-[16px]">
                    <header className="text-center mb-12 max-w-[420px] w-full mx-auto">
                        <h1 className="text-[24px] lg:text-[32px] mb-2 text-dark">Get started with as little as $1,000</h1>
                        <p className="text-[14px] text-dark">Build and track the portfolio that suits you.</p>
                    </header>
                    <figure>
                        <img src="/images/portfolio-1.png" alt="" className="max-w-[240px]" />
                    </figure>
                </div>
                <div className="bg-[#F6F6F7] px-5 py-16 flex flex-col items-center lg:rounded-[16px]">
                    <header className="text-center mb-12 max-w-[420px] w-full mx-auto">
                        <h1 className="text-[24px] lg:text-[32px] mb-2 text-dark">Discover thousands of assets on one brokerage</h1>
                        <p className="text-[14px] text-dark">Explore thousands for US, UK shares and ETFs.</p>
                    </header>
                    <figure>
                        <img src="/images/portfolio-2.png" alt="" className="max-w-[240px]" />
                    </figure>
                </div>
            </div>
        </Box>
    )
}