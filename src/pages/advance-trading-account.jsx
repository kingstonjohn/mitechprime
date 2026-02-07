import GoogleTranslate from "../components/google-translate";
import SEO from "../components/seo";
import { MetaViewportWidth } from "../constants/meta";
import Box from "../layout/box";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";

export default function AdvanceTrading() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Advance Trading Account">
            { MetaViewportWidth }
            </SEO>
            <GoogleTranslate />
            <Navbar />
            <Hero />
            <AdvancedTradingAccount />
            <AutomatedSystems />
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
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">Advanced Trading Account</h1>
                        <h2 className="text-dark font-bold text-[24px] lg:text-[28px] mb-6">Advanced Trading Account / Mechanical trading systems</h2>
                        <p className="text-[18px] lg:text-[20px] text-ash mb-12">Algorithmstocktrade Trade has been sharing financial freedom with traders since 2014. In a continuous effort to give traders a more comfortable and safe experience, its experts have been improving the platform ensuring traders can enjoy and make use of that freedom to trade whenever and wherever they like.</p>
                    </div>
                </div>
                <figure>
                    <img src="/images/brokerage.png" alt="Brokerage" />
                </figure>
            </Box>
        </div>
    )
}

const AdvancedTradingAccount = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid lg:grid-cols-2 gap-10">
                <figure>
                    <img src="/images/desires.png" alt="Desires" />
                </figure>
                <div className="my-auto">
                    <div>
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">Advanced Trading Account</h1>
                        <p className="text-[17px] text-ash mb-12">Advanced Trading Account also referred to as mechanical trading systems, algorithmic trading, automated trading or system trading — allow traders to establish specific rules for both trade entries and exits that, once programmed, can be automatically executed via a computer. In fact, various platforms report 70% to 80% or more of shares traded on U.S. stock exchanges come from automatic trading systems.

                            Traders and investors can turn precise entry, exit, and money management rules into automated trading systems that allow computers to execute and monitor the trades. One of the biggest attractions of strategy automation is that it can take some of the emotion out of trading since trades are automatically placed once certain criteria are met.

                            The trade entry and exit rules can be based on simple conditions such as a moving average crossover or they can be complicated strategies that require a comprehensive understanding of the programming language specific to the user&rsquo;s trading platform. They can also be based on the expertise of a qualified programmer.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}

const AutomatedSystems = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid relative">
                <img src="/images/about-modern.png" alt="About" className="absolute z-[2] top-[100px]" />
                <header>
                    <h1 className="text-[24px] lg:text-[40px] font-bold text-center text-dark mb-10">Advantages of Automated Systems</h1>
                </header>
                <div className="grid lg:grid-cols-2 gap-10 max-w-[1100px] mx-auto relative">
                    <div className="bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Minimizing Emotions <br /><br />Automated trading systems minimize emotions throughout the trading process. By keeping emotions in check, traders typically have an easier time sticking to the plan. Since trade orders are executed automatically once the trade rules have been met, traders will not be able to hesitate or question the trade. In addition to helping traders who are afraid to &ldquo;pull the trigger&rdquo; automated trading can curb those who are apt to overtrade — buying and selling at every perceived opportunity.</p>
                    </div>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Backtesting<br /><br />Backtesting applies trading rules to historical market data to determine the viability of the idea. When designing a system for automated trading, all rules need to be absolute, with no room for interpretation. The computer cannot make guesses and it has to be told exactly what to do. Traders can take these precise sets of rules and test them on historical data before risking money in live trading. Careful backtesting allows traders to evaluate and fine-tune a trading idea, and to determine the system&rsquo;s expectancy - i.e., the average amount a trader can expect to win (or lose) per unit of risk.</p>
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
                <p className="text-[18px] text-ash">Although appealing for a variety of reasons, automated trading systems should not be considered a substitute for carefully executed trading. Technology failures can happen, and as such, these systems do require monitoring. Server-based platforms may provide a solution for traders wishing to minimize the risks of mechanical failures. Remember, you should have some trading experience and knowledge before you decide to use automated trading systems.</p>
            </Box>
        </div>
    )
}
