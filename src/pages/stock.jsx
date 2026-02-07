import GoogleTranslate from "../components/google-translate";
import InnovationPlatform from "../components/innovation-platform";
import SEO from "../components/seo";
import { APP_NAME } from "../constants";
import { MetaViewportWidth } from "../constants/meta";
import Box from "../layout/box";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";

export default function Stock() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Stock">
                {MetaViewportWidth}
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
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">Stock Trading</h1>
                        <h2 className="text-dark font-bold text-[24px] lg:text-[28px] mb-6">Trading at it&rsquo;s peak</h2>
                        <p className="text-[18px] lg:text-[20px] text-ash mb-12">Unlock the power of the stock market with {APP_NAME}, your ultimate destination for stock trading. Whether you&rsquo;re an experienced trader seeking to expand your portfolio or a beginner taking your first steps in the stock market, our platform provides you with the tools, resources, and support to make informed investment decisions.</p>
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
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">
                            Our world renowned trading strategy.</h1>
                        <p className="lg:text-[17px] text-ash mb-12">Unlock the power of the stock market with {APP_NAME}, your ultimate destination for stock trading. Whether you&rsquo;re an experienced trader seeking to expand your portfolio or a beginner taking your first steps in the stock market, our platform provides you with the tools, resources, and support to make informed investment decisions.</p>
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
                        <p className="text-dark text-[17px]">Extensive Market Coverage: {APP_NAME} offers an extensive range of stocks across various markets, including major exchanges and emerging markets. Gain access to a diverse selection of companies, sectors, and industries, allowing you to create a well-balanced and diversified portfolio.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Intuitive Trading Platform: Our user-friendly trading platform is designed to cater to traders of all levels. From placing trades to monitoring your portfolio, our platform offers a seamless experience. Take advantage of real-time market data, interactive charts, and customizable trading screens to stay on top of the market movements.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Research and Analysis: Making informed investment decisions is crucial in stock trading, and we provide you with the necessary research and analysis tools. Stay updated with the latest news, company reports, and analyst recommendations. Leverage our in-depth market analysis and stock screeners to identify potential investment opportunities.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Educational Resources: At {APP_NAME}, we believe in empowering our traders with knowledge. Explore our educational resources, including articles, videos, and tutorials, to enhance your understanding of stock trading. Learn about fundamental analysis, technical indicators, and trading strategies to sharpen your skills.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}


