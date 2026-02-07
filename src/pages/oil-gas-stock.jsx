import GoogleTranslate from "../components/google-translate";
import InnovationPlatform from "../components/innovation-platform";
import SEO from "../components/seo";
import { APP_NAME } from "../constants";
import { MetaViewportWidth } from "../constants/meta";
import Box from "../layout/box";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";

export default function OilGasStock() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Oil and Gas Stock Trading">
            { MetaViewportWidth }
            </SEO >
            <GoogleTranslate />
            <Navbar />
            <Hero />
            <Expert />
            <GreenEnergy />
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
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">Oil and Gas Stock Trading</h1>
                        <h2 className="text-dark font-bold text-[24px] lg:text-[28px] mb-6">A new way to trade</h2>
                        <p className="text-[18px] lg:text-[20px] text-ash mb-12">If you&rsquo;re interested in the dynamic and lucrative energy sector, {APP_NAME} provides you with the opportunity to trade oil and gas stocks. Whether you want to invest in established energy companies or explore emerging players in the industry, our platform offers a range of oil and gas stocks to suit your investment goals.</p>
                    </div>
                </div>
                <figure>
                    <img src="/images/brokerage.png" alt="Brokerage" />
                </figure>
            </Box>
        </div>
    )
}

const Expert = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid lg:grid-cols-2 gap-10">
                <figure>
                    <img src="/images/stock-exchange.png" alt="Stock Echange" />
                </figure>
                <div className="my-auto">
                    <div>
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">
                            Expert oil and gas stock trading.
                        </h1>
                        <p className="text-[17px] text-ash mb-12">Enhance your knowledge of the oil and gas industry and stock trading through our educational resources. Access articles, tutorials, and webinars that cover industry dynamics, fundamental analysis, and trading strategies. Stay updated on the latest trends and developments in the energy sector.<br />

                            Our customer support team is ready to assist you with any questions or concerns related to oil and gas stock trading. Whether you need help with stock research, trading platforms, or account management, our support staff is available to provide prompt and reliable assistance.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}

const GreenEnergy = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid relative">
                <img src="/images/about-modern.png" alt="About" className="absolute z-[2] top-[100px]" />
                <header>
                    <h1 className="text-[24px] lg:text-[40px] font-bold text-center text-dark mb-10">Green Energy stocks</h1>
                </header>
                <div className="grid lg:grid-cols-2 gap-10 max-w-[1100px] mx-auto relative">
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Diverse Selection: {APP_NAME} offers a diverse selection of oil and gas stocks, including major industry players, exploration and production companies, refining and marketing firms, and service providers. Access a comprehensive range of stocks to build a portfolio that aligns with your investment strategy.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Industry Insights: Stay informed about the oil and gas industry with {APP_NAME} market insights and analysis. Our research team provides you with in-depth reports, industry trends, and news updates that impact the energy sector. Make informed investment decisions based on our expert analysis.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Real-Time Market Data: Access real-time market data for oil and gas stocks, including prices, trading volumes, and historical performance. Stay on top of the latest developments in the industry and monitor stock movements to seize trading opportunities.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Risk Management: As with any investment, managing risk is crucial when trading oil and gas stocks. {APP_NAME} offers risk management tools, including stop-loss orders, to help protect your investment capital. Understand the risks associated with the energy sector and implement appropriate risk management strategies.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}


