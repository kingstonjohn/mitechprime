import { Link } from "react-router-dom";

export default function Payment() {

    return (
        <div className="p-5 flex flex-col gap-8">
            <header className="pb-[12px]">
                <h1 className="text-[24px] text-white font-medium pt-2">Payment Method</h1>
            </header>
            <div className="bg-[#2B3040] rounded-[4px]">
                <header className="px-4 py-3 text-[14px] text-white border-b-[1px] border-b-white">
                    <h1>Payment Methods</h1>
                </header>
                <div className="px-4 py-10 flex flex-col gap-5">
                    <div>
                        <h2 className="text-white text-[13px] flex items-center gap-[4px] mb-3">
                            <span className="material-icons-outlined text-[14px] notranslate">account_balance</span>
                            Bank Card
                        </h2>
                        <Link to="/payment/card">
                            <div className="rounded-[4px] cursor-pointer text-[#1d2c48] grid place-items-center bg-[#F1F5FA] hover:bg-[#cbdaed] border-[#cbdaed] h-[54px] w-full max-w-[500px]">
                                <div className="flex gap-2 items-center text-[14px]">
                                    <img src="/images/card.png" alt="card" width={40} height={40} />
                                    <p>Master Card</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <h2 className="text-white text-[13px] flex items-center gap-[4px] mb-3">
                            <span className="notranslate material-icons-outlined text-[14px] notranslate"> currency_bitcoin </span>
                            Cryptocurrency
                        </h2>
                        <Link to='/payment/wallet'>
                            <div className="cursor-pointer rounded-[4px] text-[#1d2c48] grid place-items-center bg-[#F1F5FA] hover:bg-[#cbdaed] border-[#cbdaed] h-[54px] w-full max-w-[500px]">
                                <div className="flex gap-2 items-center text-[14px]">
                                    <img src="/images/wallet.png" alt="Wallet" width={40} height={40} />
                                    <p>Cryptocurency</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <h2 className="text-white text-[13px] flex items-center gap-[4px] mb-3">
                            <span className="material-icons-outlined text-[14px] notranslate"> payments </span>
                            Bank / E-Transfer
                        </h2>
                        <Link to='/payment/perfect-money'>
                            <div className="cursor-pointer rounded-[4px] text-[#1d2c48] grid place-items-center bg-[#F1F5FA] hover:bg-[#cbdaed] border-[#cbdaed] h-[54px] w-full max-w-[500px]">
                                <div className="flex gap-2 items-center text-[14px]">
                                    <img src="/images/perfect-money.png" alt="Perfect Money" width={40} height={40} />
                                    <p>Bank / E-Transfer</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}