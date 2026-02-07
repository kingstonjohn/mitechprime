import GoogleTranslate from "../components/google-translate";
import SEO from "../components/seo";
import { APP_NAME } from "../constants";
import { MetaViewportWidth } from "../constants/meta";
import Box from "../layout/box";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";

export default function About() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="About">
            { MetaViewportWidth }
            </SEO>
            <GoogleTranslate />
            <Navbar />
            <Hero />
            <FulfillOpportunities />
            <SetUsApart />
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
                        <h1 className="font-bold text-[32px] lg:text-[40px] mb-10">About us </h1>
                        <h2 className="font-bold text-[24px] lg:text-[28px] mb-6">Innovation at it&rsquo;s peak </h2>
                        <p className="text-[18px] lg:text-[20px] text-ash mb-12">At {APP_NAME}, we believe that everyone should have the opportunity to invest in the stock market and achieve financial freedom. Founded by a team of passionate traders, we set out with the mission to democratize stock trading and make it accessible to individuals from all walks of life. With years of experience in the financial industry, our experts are dedicated to empowering traders with the knowledge and tools needed to navigate the complex world of stocks.</p>
                    </div>
                </div>
                <figure>
                    <img src="/images/brokerage.png" alt="Brokerage" />
                </figure>
            </Box>
        </div>
    )
}

const FulfillOpportunities = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid lg:grid-cols-2 gap-10">
                <figure>
                    <img src="/images/stock-exchange.png" alt="Brokerage" />
                </figure>
                <div className="my-auto">
                    <div>
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">We want everyone to be able to fulfill their desires and opportunities. </h1>
                        <p className="text-[18px] text-[#a4a5ab] mb-12">Our team has created not just another project for traders. First of all, we developed a platform for the widest possible audience. For people who want to learn how to use advanced financial instruments and develop their financial skills.Speaking of tools. COPY TD MARKERTS provides over 400 free tools to each client so that you can trade and earn money the way you like. Choose any assets: currency quotes, stocks, majors, metals, oil or gas, as well as the main trend of recent years - cryptocurrencies.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}


const SetUsApart = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24">
                <header>
                    <h1 className="text-[24px] lg:text-[40px] font-bold text-center text-white mb-10">What Sets Us Apart</h1>
                </header>
                <div className="grid lg:grid-cols-2 gap-10 max-w-[1100px] mx-auto relative">
                    <img src="/images/about-modern.png" alt="About" className="absolute z-[2] " />
                    <div className="min-h-[250px] bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Expertise: Our team comprises seasoned traders and financial experts who possess a deep understanding of the market. We leverage our expertise to deliver accurate and up-to-date information, enabling our users to make well-informed investment choices. With our comprehensive market analysis and research, you can stay ahead of the curve and make confident trading decisions.</p>
                    </div>
                    <div className="min-h-[250px] bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Cutting-Edge Technology: We pride ourselves on our state-of-the-art trading platform. Built with the latest technology, our platform offers a seamless and intuitive trading experience. From real-time market data to advanced charting tools, we provide the tools you need to execute trades efficiently and effectively.</p>
                    </div>
                    <div className="min-h-[250px] bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Educational Resources: We believe that education is the foundation of successful trading. That&rsquo;s why we offer a wide range of educational resources to cater to traders of all levels. Whether you are a beginner looking to learn the basics or an experienced trader seeking advanced strategies, our educational materials, tutorials, and webinars have got you covered.</p>
                    </div>
                    <div className="min-h-[250px] bg-[#EFEFEFB6] rounded-[6px] p-[28px] relative z-[5]">
                        <p className="text-dark text-[17px] mb-8">Customer Support: Your satisfaction is our top priority. Our dedicated customer support team is available 24/7 to address any questions or concerns you may have. We are committed to providing prompt and personalized assistance to ensure that your trading experience is smooth and hassle-free.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}