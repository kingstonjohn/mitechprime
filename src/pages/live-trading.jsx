import GoogleTranslate from "../components/google-translate";
import SEO from "../components/seo";
import { MetaViewportWidth } from "../constants/meta";
import Box from "../layout/box";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";

export default function Live() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Live Trading">
                {MetaViewportWidth}
            </SEO>
            <GoogleTranslate />
            <Navbar />
            <Hero />
            <LiveTradingInterface />
            <Importance />
            <Extras />
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
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">Live Trading Interface</h1>
                        <p className="text-[18px] lg:text-[20px] text-ash mb-12">Algorithmstocktrade trading platform is a software system offered to investors and traders by certain financial institutions, such as brokerages and banks. Essentially, trading platforms enable investors and traders to place trades and monitor their accounts.</p>
                    </div>
                </div>
                <figure>
                    <img src="/images/brokerage.png" alt="Brokerage" />
                </figure>
            </Box>
        </div>
    )
}

const LiveTradingInterface = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid lg:grid-cols-2 gap-10">
                <figure>
                    <img src="/images/desires.png" alt="Desires" />
                </figure>
                <div className="my-auto">
                    <div>
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">Live Trading Interface</h1>
                        <p className="text-[17px] text-ash mb-12">Essentially, a trading platform is a software system typically offered through a brokerage or other financial institution that lets you trade online, on your own. A trading platform gives investors an online interface through which they can access various markets, place trades, monitor positions, and manage their accounts.
                            <br />
                            Trading platforms can offer a number of other features, as well. Broadly speaking, these include real-time quotes, live business and financial news feeds, instant access to a wealth of streaming and historical financial data, technical analysis tools, investment research, and educational resources.
                            <br />
                            There are two types of trading platforms: commercial platforms and proprietary platforms. Commercial platforms are designed for day traders and retail investors. They are characterized by ease of use and an assortment of helpful features, such as real-time quotes, international news feeds, live, interactive charts, educational content, and research tools..</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}

const Importance = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid relative">
                <img src="/images/about-modern.png" alt="About" className="absolute z-[2] top-[100px]" />
                <header>
                    <h1 className="text-[24px] lg:text-[40px] font-bold text-center text-dark mb-10">Why our live trading interface is important</h1>
                </header>
                <div className="grid lg:grid-cols-2 gap-10 max-w-[1100px] mx-auto relative">
                    <div className="bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Trading strategy : Day traders focus intently on building their own personal trading strategies with focused criteria for entering and exiting trades, risk management and profit targets. Strategy is essential to help maintain discipline and consistent decision-making.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Market monitoring: Day traders actively monitor the market, watching price movements, trading volumes, market news and a host of other factors that could impact their target securities. They depend on real-time data to track the market.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Evaluate opportunities: The product market monitoring and a solid strategy is the ability of a day trader to evaluate opportunities that align with their criteria. Typically this involves identifying technical factors like support and resistance levels, chart patterns and trend reversals that suggest future price movements.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Trading execution: Once an opportunity arises, traders need to decisively enter trades to capitalize on short-term price movements. They use different order types—like market orders and limit orders—to get the right prices.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Risk management: Day trading is very risky, making risk management an essential skill. This includes setting stop-loss orders, which automatically exit a trade if the price moves against them beyond a certain threshold, limiting potential losses. They also use position sizing to determine the appropriate amount of capital for each trade.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Closing positions: Day traders want to close out all their positions before the end of the trading day to avoid overnight risks. This ensures that they are not exposed to potential market gaps or news events that may occur when they are not actively monitoring the market.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}

const Extras = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24">
                <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-8">Swing Trading Tactics</h1>
                <p className="lg:text-[17px] text-ash">The key factors necessary to succeed in day trading are fast, reliable execution of trades and the lowest possible trading commissions. A day trader can have a majority of winning trades, yet still lose money at the end of the day if their commissions outweigh their profits. Since day traders are continually buying and selling assets, they may rack up substantial costs in the form of trading commissions. <br />

                    Similarly, optimal execution of orders is essential. Getting in and out of the market and taking small profits continually throughout the day requires efficient order execution. During fast-moving market conditions, such as at the market open or just after an important piece of news has been released, it&rsquo;s especially important to be working with a broker that can provide reliable order execution.</p>
            </Box>
        </div>
    )
}
