import { Link } from "react-router-dom";
import SEO from "../components/seo";
import Box from "../layout/box";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import InnovationPlatform from "../components/innovation-platform";
import { MetaViewportWidth } from "../constants/meta";
import Hero from "../components/home/hero";
import StartTradingToday from "../components/home/start-trading";
import FeeTrust from "../components/home/fee-trust";
import WhyChoose from "../components/home/why-choose";
import AssetClass from "../components/home/asset-class";
import Features from "../components/home/features";
import GetStarted from "../components/home/get-started";
import SecurityMeasures from "../components/home/security-measures";
import Education from "../components/home/education";
import Team from "../components/home/team";
import { APP_NAME } from "../constants";
import Reviews from "./Reviews";

export default function Home() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Home">
                {MetaViewportWidth}
            </SEO>
            <Navbar />
            <Hero />
            <FeeTrust />
            <WhyChoose />
            <Reviews />
            <GetStarted />
            <SecurityMeasures />
            <StartTradingToday />
            <Features />
            <AssetClass />
            <AssetClassOffer />
            <Education />
            <Team />
            <StartTrading />
            <InnovationPlatform />
            <Footer />
        </div>
    )
}

const AssetClassOffer = () => {

    return (
        <Box className="py-16">
            <header>
                <h1 className="text-[24px] lg:text-[40px] font-bold mb-5 text-dark">Some of the asset class we offer</h1>
            </header>
            <div className="grid lg:grid-cols-2 gap-10">
                <div className="min-h-[400px] bg-[#F6F6F7] rounded-[16px] p-[28px]">
                    <h1 className="text-[24px] font-bold mb-8">Futures Trading:</h1>
                    <p className="text-[17px] mb-8">Dive into the exciting world of futures trading at {APP_NAME}. Trade contracts on various commodities, indices, and currencies, and take advantage of market volatility and price movements to potentially generate profits. With our advanced trading tools and comprehensive market analysis, you&rsquo;ll have the resources to navigate the futures market with confidence.</p>
                    <Link to="/futures-trading" className="text-primary font-medium hover:underline">Learn more...</Link>
                </div>
                <div className="min-h-[400px] bg-[#F6F6F7] rounded-[16px] p-[28px]">
                    <h1 className="text-[24px] font-bold mb-8">Stock Trading:</h1>
                    <p className="text-[17px] mb-8">Unlock the potential of the stock market with {APP_NAME}. Whether you&rsquo;re a seasoned investor or a beginner, our platform offers a diverse selection of stocks from major exchanges worldwide. Stay informed with real-time data, conduct in-depth research, and make informed investment decisions. Build a well-rounded portfolio and capitalize on market opportunities.</p>
                    <Link to="/stock-trading" className="text-primary font-medium hover:underline">Learn more...</Link>
                </div>
                <div className="min-h-[400px] bg-[#F6F6F7] rounded-[16px] p-[28px]">
                    <h1 className="text-[24px] font-bold mb-8">Forex Trading:</h1>
                    <p className="text-[17px] mb-8">Experience the largest financial market in the world with forex trading at {APP_NAME}. Trade major, minor, and exotic currency pairs, and take advantage of the 24/5 market hours. Leverage our advanced trading platform, access real-time data, and utilize our educational resources to enhance your forex trading skills. Seize global currency opportunities and potentially profit from exchange rate fluctuations.</p>
                    <Link to="/forex-trading" className="text-primary font-medium hover:underline">Learn more...</Link>
                </div>
                <div className="min-h-[400px] bg-[#F6F6F7] rounded-[16px] p-[28px]">
                    <h1 className="text-[24px] font-bold mb-8">Oil and Gas Stock Trading:</h1>
                    <p className="text-[17px] mb-8">Explore the dynamic energy sector with oil and gas stock trading at {APP_NAME}. Trade stocks of major industry players, exploration companies, and service providers. Stay updated with market insights, industry trends, and expert analysis to make informed trading decisions. Take advantage of the potential growth and volatility in the oil and gas industry.</p>
                    <Link to="/oil-gas-stock-trading" className="text-primary font-medium hover:underline">Learn more...</Link>
                </div>
            </div>
        </Box>
    )
}

const StartTrading = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24">
                <div className="w-full max-w-[1240px] mx-auto">
                    <header className="mb-10">
                        <h1 className="text-[24px] lg:text-[40px] font-bold text-white">Start trading</h1>
                        <p className="text-[20px] lg:text-[24px] text-[#ffffff4d]">3 steps</p>
                    </header>
                    <div className="grid md:grid-cols-3 gap-x-10 gap-y-20 text-center">
                        <div className="grid place-items-center gap-2">
                            <figure>
                                <img src="/images/start-trading-1.png" alt="Sign up" />
                            </figure>
                            <h1 className="text-white text-[24px] font-bold mb-5">Sign up</h1>
                            <p className="mb-5">Open an account for free in just a few minutes</p>
                            <button className="rounded-[6px] px-[20px] py-[12px] text-[#2b99ff] bg-[#353a4dcc]">Sign up of an account in 1 click</button>
                        </div>
                        <div className="grid place-items-center gap-2">
                            <figure>
                                <img src="/images/start-trading-2.png" alt="Sign up" />
                            </figure>
                            <h1 className="text-white text-[24px] font-bold mb-5">Choose a stock or mirror an expert</h1>
                            <p className="mb-5">Mirror your desired expert trades consistently or choose from the list of stocks to purchase as staked liquidity with daily interest</p>
                            <button className="rounded-[6px] px-[20px] py-[12px] text-[#2b99ff] bg-[#353a4dcc]">Choose a stock</button>
                        </div>
                        <div className="grid place-items-center gap-2">
                            <figure>
                                <img src="/images/start-trading-3.png" alt="Sign up" />
                            </figure>
                            <h1 className="text-white text-[24px] font-bold mb-5">Deposit and trade</h1>
                            <p className="mb-5">Over 410 instruments and a minimum deposit of $5 for optimal trading</p>
                            <button className="rounded-[6px] px-[20px] py-[12px] text-[#2b99ff] bg-[#353a4dcc]">Go to Deposit option</button>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    )
}
