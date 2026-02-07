import { Link } from "react-router-dom";
import Box from "./box";
import Logo from "../components/logo";
import { APP_NAME } from "../constants";

export default function Footer() {

    return (
        <footer className="pt-24">
            <Box className="pb-4">
                <figure className="mb-5">
                    <Logo />
                </figure>
                <div className="py-14 flex w-full max-w-[600px] justify-between gap-x-5 gap-y-10 flex-wrap">
                    <div>
                        <h1 className="font-bold text-[14px] text-white mb-2">Affiliates</h1>
                        <Link to="/register" className="text-ash text-[14px] font-medium hover:text-[#4a8ded]">Sign up</Link> &nbsp;
                        <Link to="/login" className="text-ash text-[14px] font-medium hover:text-[#4a8ded]">Login</Link>
                    </div>
                    <div>
                        <h1 className="font-bold text-[15px] text-white mb-2">About us</h1>
                        {/* <div>
                            <Link className="text-ash text-[14px] font-medium hover:text-[#4a8ded]">Contacts</Link>
                        </div>
                        <div>
                            <a href='mailto:team@fizomarkt.com' className="text-ash text-[14px] font-medium hover:text-[#4a8ded]">team@Fizohedge.com</a>
                        </div> */}
                        <div>
                            <Link to='/terms-and-conditions' className="text-ash text-[14px] font-medium hover:text-[#4a8ded]">Terms and Conditions</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-[15px] text-white mb-2">FAQs</h1>
                        <div><Link to='/faqs' className="text-ash text-[14px] font-medium hover:text-[#4a8ded]">General questions</Link></div>
                        <div><Link className="text-ash text-[14px] font-medium hover:text-[#4a8ded]">Financial questions</Link></div>
                        <div><Link className="text-ash text-[14px] font-medium hover:text-[#4a8ded]">Verification</Link></div>
                    </div>
                </div>
                <div className="py-10 border-t-[1px] border-t-[#ffffff0d] text-ash text-[13px]">
                    <p>Risk Warning: Trading Forex and Leveraged Financial Instruments involves significant risk and can result in the loss of your invested capital. You should not invest more than you can afford to lose and should ensure that you fully understand the risks involved. Trading leveraged products may not be suitable for all investors. Trading non-leveraged products such as stocks also involves risk as the value of a stock can fall as well as rise, which could mean getting back less than you originally put in. Past performance is no guarantee of future results. Before trading, please take into consideration your level of experience, investment objectives and seek independent financial advice if necessary. It is the responsibility of the Client to ascertain whether he/she is permitted to use the services of the Fizohedge brand based on the legal requirements in his/her country of residence.</p>
                </div>
                <span className="text-ash text-[14px]">Copyright © 2017 {APP_NAME}. All rights reserved</span>
            </Box>
        </footer>
    )
}