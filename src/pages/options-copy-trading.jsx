import GoogleTranslate from "../components/google-translate";
import SEO from "../components/seo";
import { APP_NAME } from "../constants";
import { MetaViewportWidth } from "../constants/meta";
import Box from "../layout/box";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";

export default function OptionsCopyTrading() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Options copy trading">
                {MetaViewportWidth}
            </SEO>
            <GoogleTranslate />
            <Navbar />
            <Hero />
            <OptionCopyTrading />
            <ProsCons />
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
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">Option Copy Trading</h1>
                        <h2 className="text-dark font-bold text-[24px] lg:text-[28px] mb-6">Welcome to Forex Trading at {APP_NAME}</h2>
                        <p className="text-[18px] lg:text-[20px] text-ash mb-12">Algorithm stock trade, Trade has been sharing financial freedom with traders since 2014. In a continuous effort to give traders a more comfortable and safe experience, its experts have been improving the platform ensuring traders can enjoy and make use of that freedom to trade whenever and wherever they like.</p>
                    </div>
                </div>
                <figure>
                    <img src="/images/brokerage.png" alt="Brokerage" />
                </figure>
            </Box>
        </div>
    )
}

const OptionCopyTrading = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid lg:grid-cols-2 gap-10">
                <figure>
                    <img src="/images/desires.png" alt="Desires" />
                </figure>
                <div className="my-auto">
                    <div>
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">Option Copy Trading</h1>
                        <p className="lg:text-[17px] text-ash mb-12">Copy trading is replicating another trader&rsquo;s positions using social platforms, automated tools and signals

                            Copy trading is a type of trading where you copy the trades performed by another, more experienced trader. It can be manual, semi-automatic or fully automatic.

                            Copy trading allows individuals to automatically copy another trader&rsquo;s positions when they are opened or closed. Experienced traders communicate their positions using signals via social networks or forums, where followers can copy the methods.

                            Traders can copy positions in many markets, including forex, stocks and CFDs. You can also copy trades on popular crypto coins, including Bitcoin (BTC) or major precious metals such as Gold or Platinum.

                            Copy trading can be a good way to earn a profit and make you rich, but it is important to understand that you will not become rich overnight. If you try to become rich too fast, you will have to copy very high-risk trades, and you will likely end up losing your money. If you use copy trading to build wealth slowly, you will have a fair chance of becoming a millionaire in due time.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}

const ProsCons = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid relative">
                <img src="/images/about-modern.png" alt="About" className="absolute z-[2] top-[100px]" />
                <header>
                    <h1 className="text-[24px] lg:text-[40px] font-bold text-center text-dark mb-10">Pros and Cons</h1>
                </header>
                <div className="grid lg:grid-cols-2 gap-10 max-w-[1100px] mx-auto relative">
                    <div className="min-h-[250px] bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Authorised practice - copy trading is generally recognised by key regulatory frameworks, including CySEC, ESMA, MiFID and the FCA. Choosing a licensed and reputable broker will ensure your funds are safe and not exposed to scams
                            <br /> <br />
                            Portfolio diversification - traders can gain exposure to opportunities or trends that they wouldn&rsquo;t usually consider without the help of another trader&rsquo;s expertise.</p>
                    </div>
                    <div className="min-h-[250px] bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Risk - the risks can be high even if you choose an experienced trader to copy. If a strategy is unsuccessful, the risk will also translate onto a follower&rsquo;s account and can result in a financial loss.
                            <br /> <br />
                            Control - one of the main disadvantages is the lack of control a trader will have once they begin copying an account; traders are essentially entrusting their portfolio to a stranger.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}