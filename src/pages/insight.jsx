import GoogleTranslate from "../components/google-translate";
import SEO from "../components/seo";
import { MetaViewportWidth } from "../constants/meta";
import Box from "../layout/box";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";

export default function Insight() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Insight">
            { MetaViewportWidth }
            </SEO>
            <GoogleTranslate />
            <Navbar />
            <Hero />
            <TwoFactorAuthentication />
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
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-5">Insight</h1>
                        <h2 className="text-dark font-bold text-[20px] lg:text-[24px]">Account Security.</h2>
                    </div>
                </div>
                <figure className="grid place-items-center">
                    <img src="/images/brokerage.png" alt="Brokerage" className="max-h-[500px]" />
                </figure>
            </Box>
        </div>
    )
}

const TwoFactorAuthentication = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-24 grid relative">
                <img src="/images/about-modern.png" alt="About" className="absolute z-[2] top-[100px]" />
                <header>
                    <h1 className="text-[24px] lg:text-[40px] font-bold text-center text-dark mb-10">Two factor authentication</h1>
                </header>
                <div className="grid relative">
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px] relative z-[5]">
                        <p className="text-dark text-[17px]">Two-factor authentication (2FA) is an essential security measure for financial services to protect user accounts and transactions. It adds an extra layer of security by requiring users to provide two forms of identification before accessing their accounts <br /><br />

                            Enhanced Security: 2FA adds an extra layer of security beyond just usernames and passwords. It requires users to provide a second form of identification, making it significantly harder for unauthorized individuals to gain access to user accounts and financial transactions. Even if a password is compromised, an additional authentication factor is required. <br /><br />

                            Protection Against Credential Theft: With the prevalence of data breaches and phishing attacks, username and password combinations can be easily compromised. 2FA helps mitigate the risk of credential theft by introducing a separate authentication factor that is difficult for attackers to obtain or replicate.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}


const Extras = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-10">
                <div className="grid grid lg:grid-cols-2 gap-10">
                    <figure>
                        <img src="/images/2FA.png" alt="Two Factor Authentication" />
                    </figure>
                    <div className="bg-[#EFEFEFB6] rounded-[6px] px-[28px] py-[28px] lg:py-[40px]">
                        <p className="text-dark text-[17px]">
                            Increased Security: Mobile authenticator apps generate time-based one-time passwords (TOTPs) that are unique for each login attempt.<br /> These passwords are typically valid for only a short period, making them difficult for attackers to intercept or guess. This added security layer reduces the risk of unauthorized access to user accounts and financial information. <br /><br />
                            Convenience and User-Friendly Experience: Mobile authenticator apps are typically easy to use and offer a convenient way to generate verification codes.<br /> Users can quickly access the app on their smartphones and retrieve the code required for authentication, eliminating the need for reliance on external devices or waiting for codes to be sent via SMS or email.</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}
