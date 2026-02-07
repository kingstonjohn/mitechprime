import GoogleTranslate from "../components/google-translate";
import InnovationPlatform from "../components/innovation-platform";
import SEO from "../components/seo";
import { APP_NAME } from "../constants";
import { MetaViewportWidth } from "../constants/meta";
import Box from "../layout/box";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";

export default function Forex() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Forex">
            { MetaViewportWidth }
            </SEO>
            <GoogleTranslate />
            <Navbar />
            <Hero />
            <TradingStrategy />
            <TradeWithFizomarkt />
            <InnovationPlatform />
            <Footer />
        </div>
    )
}


const Hero = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid lg:grid-cols-2 gap-10">
                <div className="my-auto">
                    <div>
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">Forex Trading</h1>
                        <h2 className="text-dark font-bold text-[24px] lg:text-[28px] mb-6">Welcome to Forex Trading at {APP_NAME}</h2>
                        <p className="text-[18px] lg:text-[20px] text-ash mb-12">Experience the largest and most liquid financial market in the world with {APP_NAME}&rsquo; forex trading platform. Whether you&rsquo;re a seasoned forex trader or a beginner looking to enter the exciting world of currency trading, we provide you with the tools, resources, and support to participate in the forex market and seize global investment opportunities.</p>
                    </div>
                </div>
                <figure>
                    <img src="/images/brokerage.png" alt="Brokerage" />
                </figure>
            </Box>
        </div>
    )
}

const TradingStrategy = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid lg:grid-cols-2 gap-10">
                <figure>
                    <img src="/images/desires.png" alt="Desires" />
                </figure>
                <div className="my-auto">
                    <div>
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">
                            Explore the world of futures.
                        </h1>
                        <p className="text-[17px] text-ash mb-12">Forex trading involves leverage, and we provide you with the necessary risk management tools to protect your capital. Set stop-loss and take-profit orders, manage your margin requirements, and implement risk management strategies to ensure responsible trading practices. <br />

                            Our customer support team is committed to providing exceptional assistance to forex traders. Whether you have questions about currency pairs, order execution, or trading platforms, our knowledgeable support staff is available 24/7 to address your concerns.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}

const TradeWithFizomarkt = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid relative">
                <img src="/images/about-modern.png" alt="About" className="absolute z-[2] top-[100px]" />
                <header>
                    <h1 className="text-[24px] lg:text-[40px] font-bold text-center text-dark mb-10">Why Trade Futures with {APP_NAME}</h1>
                </header>
                <div className="grid lg:grid-cols-2 gap-10 max-w-[1100px] mx-auto relative">
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Global Market Access: {APP_NAME} gives you access to a wide range of currency pairs, allowing you to trade major, minor, and exotic currencies. Take advantage of the 24/5 nature of the forex market and capitalize on global economic events and news that impact currency values.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Advanced Trading Platform: Our forex trading platform is designed to meet the demands of active traders. Benefit from real-time pricing, lightning-fast trade execution, and advanced order types. Utilize our comprehensive charting tools, technical indicators, and risk management features to optimize your forex trading strategies.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Research and Analysis: Making informed investment decisions is crucial in stock trading, and we provide you with the necessary research and analysis tools. Stay updated with the latest news, company reports, and analyst recommendations. Leverage our in-depth market analysis and stock screeners to identify potential investment opportunities.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Market Analysis: Make informed trading decisions with the help of our forex market analysis. Stay updated on major economic indicators, central bank decisions, and geopolitical events that impact currency movements. Our research and analysis tools empower you to identify potential trading opportunities.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}


