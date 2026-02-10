import GoogleTranslate from "../components/google-translate";
import SEO from "../components/seo";
import { APP_NAME } from "../constants";
import { MetaViewportWidth } from "../constants/meta";
import Box from "../layout/box";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";

export default function Terms() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Terms and Conditions">
                {MetaViewportWidth}
            </SEO>
            <GoogleTranslate />
            <Navbar />
            <Hero />
            <TermsCondition />
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
                        <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">Terms and Conditions</h1>
                    </div>
                </div>
                <figure className="grid place-items-center">
                    <img src="/images/brokerage.png" alt="Brokerage" className="max-h-[400px]" />
                </figure>
            </Box>
        </div>
    )
}

const TermsCondition = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-12">
                <div>
                    <p className="lg:text-[17px] text-ash mb-12">

                        This is the Terms & Conditions for {APP_NAME} running on {APP_NAME} Platform <br /><br />

                        The Terms & Conditions relates to how we collect, use, share and secure the personal information that you may supply to us. It also describes your choices regarding use, access and correction of your personal information. <br /><br />

                        We recognise the importance of protecting the privacy of information collected by us, in particular, information that is capable of identifying an individual (&ldquo;personal information&rdquo;). <br /><br />

                        This Terms & Conditions governs the manner in which your personal information will be dealt with. {APP_NAME} is the entity collecting and holding your personal information in accordance with this Terms & Conditions. We reserve the right, at our discretion, to modify or remove portions of this Terms & Conditions at any time. <br /><br />

                        {APP_NAME} is responsible for the processing of personal data that it receives under the Estonia laws, and other applicable international laws.<br /><br />

                        Please take a moment to read this Terms & Conditions carefully. If you have any questions about this Terms & Conditions, please contact us at team@{APP_NAME}.com. You should review this Terms & Conditions periodically so that you are updated on any changes.<br /><br />

                        Use of Website<br /><br />
                        By using this website, you agree to the Terms & Conditions of {APP_NAME}, which is set out on this website page. This Terms & Conditions is in addition to any other terms and conditions applicable to the website. This website may contain links to other websites not operated or controlled by us, and we do not make any representations about such third-party websites.

                        Collection of Information<br /><br />
                        We may collect personal information about you through your conduct on our website, via support services, email, telephone, any contact made by you through social media channels and through any other interaction you may have with us.<br /><br />
                        We collect and hold personal information about, but not limited to<br /><br />
                        ● Users and potential users.<br />
                        ● Business associates and potential business associates, and their employees and contractors (where applicable).<br />
                        ● Individuals we deal with in the course of providing services to our users.<br />
                        ● Suppliers and their employees and contractors.<br />
                        ● Employees, prospective employees and contractors and other people who come into contact with us.<br />
                        <br /><br />
                        We collect personal information about you in order for us to provide you with our services, for you to take full advantage of our services, and for us to conduct our business and meet our legal obligations.
                        <br /><br />
                        Personal information is collected when provided by you, via the website, email, support, phone, social media, or any other interactions you may have with us. For example, we may need to collect such information to provide you with services or to answer or forward any requests or enquiries that you submit to us. Information we collect may include (but is not limited to): names, addresses, contact details, occupations, payment details, employment history, education and qualifications, testimonials, feedback and other information which assists us in conducting our business, providing and marketing our services, and meeting our legal obligations.
                        <br /><br />
                        We may also obtain information from other sources and combine that with information we collect through our services. For example, we may collect information about you from third parties, including but not limited to social media platforms and publicly available sources.
                        <br /><br />
                        Registration with the website is voluntary. Registration may include submitting (for instance, but not limited to) your name, email address, address, telephone numbers, and selecting an option to receive updates and promotional material and other information. You may view and edit this information at any time by logging in and going to your account.
                        <br /><br />
                        We may also collect information about you as permitted by law.
                        In some cases, if personal information we request is not provided, it might adversely impact our ability to supply you with services or perform our obligations to you.
                        <br /><br />
                        Any information you provide to us that is not required is voluntary. You are free to choose whether to provide us with the types of personal information requested, but we may not be able to serve you as effectively or offer you Services when you do choose not to share certain information with us.
                        <br /><br />
                        Collection and Use of Information Collected Automatically
                        We receive and store certain types of information automatically, such as whenever you interact with the sites or use our services. This information does not necessarily reveal your identity directly but may include information about the specific device you are using, such as the hardware model, device ID, operating system version, web-browser software (such as Firefox, Safari, or Internet Explorer) and your Internet Protocol (IP) address/MAC address/device identifier.
                        <br /><br />
                        When you visit our website, our web servers gather your IP address to assist with the diagnosis of problems and to enable us to provide the best level of service.
                        <br /><br />
                        We use cookies on our website to provide you with a better experience. These cookies allow us to increase your security by storing your session ID and are a way of monitoring single user access. This aggregate, non-personal information is collated and provided to us to assist in analysing the usage of the site.
                        <br /><br />
                        {APP_NAME} Customers complete a verification procedure (they must provide an identification document issued by the state: passport or an ID card). {APP_NAME} reserves the right to collect Customers&rsquo; identification information for AML Policy purposes. This information is processed and stored strictly in accordance with the {APP_NAME} Terms & Conditions.
                        <br /><br />
                        {APP_NAME} may also request a second Customer identification document: a bank statement or utility bill no older than 3 months, which includes the Customer&rsquo;s full name and current address.
                        <br /><br />
                        Management of Personal Information
                        We strive to ensure the security, integrity and privacy of personal information submitted to us, and we regularly review and update our security measures in light of current technologies.
                        <br /><br />
                        While no data transmission over the Internet can be guaranteed to be totally secure, we will endeavour to take all reasonable steps to ensure the security, on our systems, of the personal information you transmit to us via our online products and services.
                        <br /><br />
                        In addition, our employees and the contractors who provide services related to our information systems are obliged to respect the confidentiality of any personal information held by us.
                        <br /><br />
                        Use of Information
                        Unless we disclose other uses in this Terms & Conditions or at the time of collection, personal information about you is used only for the purpose for which it is submitted or for such other secondary purposes that are related to the primary purpose.
                        In general, the purposes for which your personal information is collected, used, held and disclosed are:
                        <br /><br />

                        ● To conduct our business;<br />
                        ● To provide you with our services and any other services you request;<br />
                        ● To market our services to you;<br />
                        ● To engage with third parties on your behalf;<br />
                        ● To communicate with you;<br />
                        ● To help us manage and enhance our services; and<br />
                        ● To comply with our legal obligations.<br />
                        <br /><br />
                        Copies of correspondence sent by you, or from the website that may contain your personal information, are stored as archives for record-keeping and back-up purposes only. All communication from us (including information with regards to new products and services) will provide you with an opportunity to opt out of further communication. You can choose to opt out at any time from receiving marketing communications.
                        We do not allow the selling of your personal information in any way.

                        <br /><br />
                    </p>
                </div>
            </Box>
        </div>
    )
}

