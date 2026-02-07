import GoogleTranslate from "../components/google-translate";
import InnovationPlatform from "../components/innovation-platform";
import SEO from "../components/seo";
import { APP_NAME } from "../constants";
import { MetaViewportWidth } from "../constants/meta";
import Box from "../layout/box";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";

export default function Futures() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Futures">
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
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">Futures Trading</h1>
                        <h2 className="text-dark font-bold text-[24px] lg:text-[28px] mb-6">Trading at it&rsquo;s peak</h2>
                        <p className="text-[18px] lg:text-[20px] text-ash mb-12">Are you ready to explore the exciting world of futures trading? {APP_NAME} provides you with a comprehensive platform to trade futures contracts on various commodities, indices, and currencies. Whether you are an experienced futures trader or a novice looking to expand your investment portfolio, we offer the tools, resources, and support to help you navigate the futures market with confidence.</p>
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
                    <img src="/images/stock-exchange.png" alt="Stock Exchange" />
                </figure>
                <div className="my-auto">
                    <div>
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">Our world renowned trading strategy.</h1>
                        <p className="text-[17px] text-[#a4a5ab] mb-12">Ready to explore the potential of futures trading? Join {APP_NAME} now and start trading futures contracts with confidence. With our user-friendly platform, comprehensive market analysis, and educational resources, you&rsquo;ll have the tools you need to seize futures trading opportunities and enhance your investment portfolio.</p>
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
                        <p className="text-dark text-[17px]">Diverse Range of Futures: At {APP_NAME}, we offer a wide selection of futures contracts across different asset classes. From commodities like gold, oil, and agricultural products to indices representing major global markets, you&rsquo;ll find a variety of futures options to suit your trading preferences.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Advanced Trading Tools: Our platform is equipped with advanced trading tools designed specifically for futures trading. Access real-time market data, advanced charting features, and technical analysis tools to make well-informed trading decisions. With our robust order execution capabilities, you can enter and exit positions seamlessly.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Risk Management: Managing risk is crucial in futures trading, and we provide you with the necessary risk management tools to protect your capital. Set stop-loss orders, monitor margin requirements, and utilize our risk management features to ensure responsible and disciplined trading.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Educational Resources: Whether you&rsquo;re new to futures trading or looking to enhance your skills, {APP_NAME} offers a wealth of educational resources. Take advantage of our tutorials, articles, and webinars that cover futures trading strategies, contract specifications, and market dynamics. Stay informed and continuously improve your trading knowledge.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}
