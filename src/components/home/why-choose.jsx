import { APP_NAME } from "../../constants";
import { whyChooseRightChoice } from "../../data/why-choose";
import Box from "../../layout/box";
import { cn } from "../../utils/cn";

export default function WhyChoose() {

    return (
        <>
            <div className="bg-[#F6F6F7] rounded-[16px]">
                <Box className="py-20">
                    <div>
                        <header className="text-center mx-auto max-w-[900px] w-full mb-16">
                            <h1 className="text-dark text-[32px] font-medium mb-2">What makes {APP_NAME} the right choice</h1>
                            <p className="text-[#989898]">{APP_NAME} is specially designed to help you start investing easily, completed with supporting features so users can feel the perfect investing experience.</p>
                        </header>
                        <div className="max-w-[1120px] mx-auto w-full gap-[2em] grid sm:grid-cols-2 lg:grid-cols-3">
                            {
                                whyChooseRightChoice.map((data, index) => (
                                    <div key={index} className="font-inter bg-[#ffffff] rounded-[16px] border-[1px] border-[#efefef] hover:border-primary p-[2em] flex flex-col items-center gap-4 text-center gap-4">
                                        <div className="h-[40px] w-[40px] rounded-full grid place-items-center bg-[#25D366]">
                                            <i aria-hidden="true" className={cn("hm text-white text-[20px]", data.icon)}></i>
                                        </div>
                                        <div className="text-dark text-[20px] font-medium min-h-[60px]">
                                            {data.title}
                                        </div>
                                        <p className="text-[14px] text-[#989898]">{data.subtitle}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Box>
            </div>
            <Box className="py-24 px-0">
                <div className="bg-[#F6F6F7] lg:rounded-[8px] px-5 lg:px-8 py-[52px] max-w-[1240px] w-full mx-auto ">
                    <header>
                        <h1 className="text-[24px] lg:text-[40px] font-bold text-dark mb-10">Why choose {APP_NAME}</h1>
                    </header>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-between gap-x-5 gap-y-10 mb-14">
                        <div className="flex flex-col gap-4">
                            <figure>
                                <img src="/images/dignity-1.png" alt="Mirror Your Desired Expert:" />
                            </figure>
                            <h1 className="text-dark text-[20px] font-bold">Mirror Your Desired Expert:</h1>
                            <p className="text-ash">{APP_NAME} offers automated Mirror trading services across all sectors, Find your desired expert, get your account linked to their services and mirror the trades, learn as well through the trades, across various Market and sectors, Options, derivatives, currency pairs, Swings/ Scalp trading, Crypto currencies, Forex and Index. With over 90% protection on trading capital with stop loss softwares and indicators. At {APP_NAME} Clients capital security is always our major Concern.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <figure>
                                <img src="/images/dignity-2.png" alt="User-Friendly Trading Platform" />
                            </figure>
                            <h1 className="text-dark text-[20px] font-bold">User-Friendly Trading Platform</h1>
                            <p className="text-ash">We understand that simplicity and ease of use are paramount when it comes to trading. Our intuitive trading platform is designed to cater to traders of all levels, offering a seamless experience with robust features. From placing trades to tracking your portfolio, everything is just a few clicks away. Our platform is optimized for both desktop and mobile devices, ensuring that you can trade anytime, anywhere</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <figure>
                                <img src="/images/dignity-3.png" alt="Educational Resources" />
                            </figure>
                            <h1 className="text-dark text-[20px] font-bold">Educational Resources</h1>
                            <p className="text-ash">Knowledge is power, especially in the stock market. {APP_NAME} offers a wealth of educational resources to empower you with the information you need to make sound investment decisions. Explore our extensive library of articles, tutorials, and videos to expand your understanding of the market and trading strategies. From the basics of stock trading to advanced concepts like options and futures, we cover a wide range of topics to cater to traders at every level.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <figure>
                                <img src="/images/dignity-4.png" alt="Personalized Trading Experience" />
                            </figure>
                            <h1 className="text-dark text-[20px] font-bold">Personalized Trading Experience</h1>
                            <p className="text-ash">Your trading journey is unique, and we recognize that. {APP_NAME} provides customizable options, allowing you to tailor the platform to suit your individual preferences. Set up personalized alerts for specific stocks or market events, create watchlists to monitor your favorite securities, and customize your dashboard to display the information that matters to you. Our goal is to provide you with a personalized trading experience that enhances your decision-making process.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <figure>
                                <img src="/images/dignity-4.png" alt="Dedicated Customer Support" />
                            </figure>
                            <h1 className="text-dark text-[20px] font-bold">Dedicated Customer Support</h1>
                            <p className="text-ash">We are committed to providing exceptional customer service. Our dedicated support team is available round the clock to assist you with any queries or concerns you may have. Whether you need technical assistance or trading guidance, we are here to ensure that you have a seamless experience on our platform. Contact us via live chat, email, or phone, and we&rsquo;ll be happy to help you navigate the world of stock trading.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <figure>
                                <img src="/images/dignity-1.png" alt="Comprehensive Market Analysis:" />
                            </figure>
                            <h1 className="text-dark text-[20px] font-bold">Comprehensive Market Analysis:</h1>
                            <p className="text-ash">Stay ahead of the game with our cutting-edge market analysis tools. Our team of expert analysts meticulously analyze market trends, news, and patterns to provide you with real-time data and insights that empower you to make intelligent investment choices. Our advanced charting features and technical indicators allow you to visualize and analyze market movements, enabling you to make well-timed trades.</p>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    )
}