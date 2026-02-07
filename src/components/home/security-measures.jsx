import Box from "../../layout/box";

export default function SecurityMeasures() {

    return (
        <div className="bg-[#F6F6F7] rounded-[16px]">
            <Box className="py-16 max-w-[1200px]">
                <div className="grid lg:grid-cols-2 gap-10 mb-8">
                    <figure>
                        <img src="/images/cybersecurity.jpg" alt="Security Measures" />
                    </figure>
                    <div>
                        <h1 className="text-center mb-4 text-dark text-[24px] lg:text-[32px]">Our Security Measures</h1>
                        <p className="text-center text-[#6f6f6f]">When placing your money with a broker, you need to make sure your broker is secure and can endure through good and bad times. Our strong capital position, conservative balance sheet and automated risk controls are designed to protect SpacexElon Investment and our clients from large trading losses.</p>
                        <div className="grid gap-5 grid-cols-2 pt-10 w-full max-w-[380px]">
                            <div>
                                <h2 className="text-[28px] text-[#070707]">$13.8B</h2>
                                <p className="text-[14px] text-[#070707]">Equity Capital*</p>
                            </div>
                            <div>
                                <h2 className="text-[28px] text-[#070707]">$8.5B</h2>
                                <p className="text-[14px] text-[#070707]">Excess Regulatory Capital*</p>
                            </div>
                            <div>
                                <h2 className="text-[28px] text-[#070707]">2.05M</h2>
                                <p className="text-[14px] text-[#070707]">Client Accounts*</p>
                            </div>
                            <div>
                                <h2 className="text-[28px] text-[#070707]">1.95M</h2>
                                <p className="text-[14px] text-[#070707]">Daily Avg Revenue Trades*</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                    <div className="rounded-[16px] bg-white p-6 text-center font-inter">
                        <h1 className="text-[#070707] text-[20px] mb-3">FCA authorised</h1>
                        <p className="text-[#6f6f6f] text-[14px]">We are authorised and regulated by the FCA.</p>
                    </div>
                    <div className="rounded-[16px] bg-white p-6 text-center font-inter">
                        <h1 className="text-[#070707] text-[20px] mb-3">FSCS protected</h1>
                        <p className="text-[#6f6f6f] text-[14px]">Your funds are protected by the FSCS scheme up to $85,000.</p>
                    </div>
                    <div className="rounded-[16px] bg-white p-6 text-center font-inter">
                        <h1 className="text-[#070707] text-[20px] mb-3">Account Security Standard</h1>
                        <p className="text-[#6f6f6f] text-[14px]">Password protection with Bcrypt hashing algorithm.</p>
                    </div>
                    <div className="rounded-[16px] bg-white p-6 text-center font-inter">
                        <h1 className="text-[#070707] text-[20px] mb-3">Data protected</h1>
                        <p className="text-[#6f6f6f] text-[14px]">We follow industry best practices to protect your data at all times.</p>
                    </div>
                </div>
                <div className="grid place-items-center">
                    <div className="h-[70px] w-[70px] rounded-[16px] bg-white grid place-items-center">
                        <img src="/images/fscs-protected.png" alt="fscs-protected" className="h-[35px]" />
                    </div>
                </div>
            </Box>
        </div>
    )
}