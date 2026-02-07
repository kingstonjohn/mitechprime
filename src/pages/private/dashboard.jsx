/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import { useAuthStateContext } from "../../context/authState";
import CryptocurrencyMarketTradingViewWidget from "../../components/trading-views";
import { APP_NAME } from "../../constants";
import { useEffect, useState } from "react";
import ModalDialog from "../../components/modals/modal-dialog"
import { useAppStateContext } from "../../context/appState";
import { useMutation } from "@tanstack/react-query";
import userService from "../../services/user";

export default function Dashboard() {

    const { state } = useAuthStateContext()

    const { state: appState, dispatch } =  useAppStateContext()

    const user = state.user

    const username = user.firstName + " " + user.lastName
    const email = user.email
    const accountBalance = Number(user.accountBalance).toFixed(2)
    const tradingInterest = Number(user.tradingInterest).toFixed(2)
    const assetInterest = Number(user.assetInterest).toFixed(2)
    const target = user.target
    const isNotificationEnabled = user.isNotificationEnabled
    const notificationMessage = user.notificationMessage

    const [isModalOpen, setIsModalOpen] = useState(false)

    const { mutateAsync } = useMutation({
        mutationFn: (formData) => userService.notificationOff(formData),
        onSuccess: (response) => {
            console.log(response)
        },
        onError: (error) => {
            console.log(error)
        },
    });

    const closeModal = () => {
        setIsModalOpen(false)

        dispatch({ type: "APP_NOTIFICATION_SHOWN" })
    }

    const okHandler = () => {
        mutateAsync({ email });
        setIsModalOpen(false)
    }

    useEffect(() => {
        setTimeout(() => {
            if (isNotificationEnabled && !appState.isNotificationShown) {
                setIsModalOpen(true)
            }
        }, 3000)
    }, [])

    return (
        <>
            <div className='p-5 flex flex-col gap-8'>
                <section className="notranslate">
                    <iframe
                        allowtransparency="true"
                        className='w-full h-[52px] block'
                        src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22description%22%3A%22%22%2C%22proName%22%3A%22NASDAQ%3ATSLA%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22NASDAQ%3AAAPL%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22NASDAQ%3AAMZN%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22LSE%3ASPX%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22NASDAQ%3ASYPR%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22NASDAQ%3ANFLX%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22NYSE%3ACCJ%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22NASDAQ%3AQQQ%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22NASDAQ%3AGOOGL%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22NYSE%3AAMC%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22NYSE%3ABA%22%7D%2C%7B%22description%22%3A%22%22%2C%22proName%22%3A%22NYSE%3AES%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A46%2C%22utm_source%22%3A%22copytdmarkerts.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22copytdmarkerts.com%2Fhome%22%7D"
                        title="ticker tape TradingView widget"
                        lang="en">
                    </iframe>
                </section>
                {
                    accountBalance == 0 && (
                        <section className="rounded-[16px] bg-[#EA5353] p-5 flex items-center gap-[4px]">
                            <span className="material-icons text-white text-[36px] font-bold notranslate"> attach_money </span>
                            <div>
                                <p className="text-white text-[13px]">Empty balance</p>
                                <p className="italic text-[12px]"><Link className="underline text-[#f1f5fa] hover:text-white" to='/payment'>Deposit now to start trading or hold long term assets, Deposit for your next investment</Link></p>
                            </div>
                        </section>
                    )
                }
                <section className="grid lg:grid-cols-2 gap-8">
                    <div>
                        <div className="bg-[#fafafa] border border-[#efefef] hover:border-primary rounded-[16px]  gap-4 p-4">
                            <h1 className="text-dark text-[14px] font-bold text-center">Total Balance</h1>
                            <p className="text-center text-[32px] font-bold font-work-sans">${accountBalance}</p>
                            <div className="w-full h-[1px] bg-[#efefef] mt-2 mb-6"></div>
                            <div className="grid gap-2 grid-cols-[2fr_1fr]">
                                <div className="flex flex-col gap-4">
                                    <div className="flex gap-2 items-center notranslate">
                                        <span className="material-icons text-primary">
                                            account_circle
                                        </span>
                                        <p className="text-dark text-[14px]">{username}</p>
                                    </div>
                                    <div className="flex gap-2 items-center notranslate">
                                        <span className="material-icons text-primary">
                                            email
                                        </span>
                                        <p className="text-dark text-[14px]">{email}</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-[12px] lg:text-[13px] text-dark font-medium">TARGET</h1>
                                        <button className="text-white rounded-[4px] px-3 py-[4px] bg-[#FFB822] text-[12px]">Active</button>
                                    </div>
                                    <div
                                        className="border border-[#A3BADDFF] bg-[#EAF0F9] h-[13px] w-full rounded-full text-[#1d2c48] text-center text-[9px] relative overflow-hidden notranslate"
                                    >
                                        <div className="h-full absolute rounded-full" style={{ width: `${target}%`, backgroundColor: `${target <= 30 ? '#EA5353' : target <= 70 ? '#FFB822' : '#00C389'}` }}></div>
                                        <span className="relative z-[10]">{target}%</span>
                                    </div>
                                    <div>
                                        <Link to='/transaction-history'>
                                            <button className="max-w-max text-white py-2 px-4 bg-primary rounded-[4px] text-[14px]">View Transactions</button>
                                        </Link>
                                    </div>
                                </div>
                                <figure className="grid place-items-center">
                                    <img src="/images/trade-icc.gif" alt="Trade ICC" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="bg-[#fafafa] border border-[#efefef] hover:border-primary rounded-[16px] flex flex-col gap-3 p-4 relative">
                            <h1 className="text-dark text-[14px] font-bold">Trading Interest</h1>
                            <div className="bg-white border border-[#efefef] rounded-[4px] w-full h-[40px] p-2 flex gap-2 items-center">
                                <div className="bg-[#03C4C5] w-[10px] h-[10px] rounded-full"></div>
                                <h2 className="text-dark font-semibold text-[15px] notranslate">${tradingInterest}</h2>
                            </div>
                            <div>
                                <Link to='/dashboard-my-live-trading-plans'>
                                    <button className="max-w-max text-white py-2 px-4 bg-primary rounded-[4px] text-[14px]">View Trades</button>
                                </Link>
                            </div>
                            <div className="bg-[#2B3040] rounded-l-[10px] py-[5px] px-3 text-white absolute right-0 top-[10px] text-[12px]">
                                USD
                            </div>
                        </div>
                        <div className="bg-[#fafafa] border border-[#efefef] hover:border-primary rounded-[16px] flex flex-col gap-3 p-4 relative">
                            <h1 className="text-dark text-[14px] font-bold">Investment Interest</h1>
                            <div className="rounded-[4px] w-full h-[40px] bg-white border border-[#efefef] p-2 flex gap-2 items-center">
                                <div className="bg-[#03C4C5] w-[10px] h-[10px] rounded-full"></div>
                                <h2 className="text-dark font-semibold text-[15px] notranslate">${assetInterest}</h2>
                            </div>
                            <div>
                                <Link to='/dashboard-my-investment-plans'>
                                    <button className="max-w-max text-white py-2 px-4 bg-primary rounded-[4px] text-[14px]">View Investments</button>
                                </Link>
                            </div>
                            <div className="bg-[#2B3040] rounded-l-[10px] py-[5px] px-3 text-white absolute right-0 top-[10px] text-[12px]">
                                USD
                            </div>
                        </div>
                    </div>
                </section>
                <section className="notranslate">
                    <CryptocurrencyMarketTradingViewWidget />
                </section>
                <section className="notranslate">
                    <iframe
                        scrolling="no"
                        allowtransparency="true"
                        frameBorder="0"
                        src="https://www.tradingview-widget.com/embed-widget/timeline/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22regular%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A350%2C%22utm_source%22%3A%22copytdmarkerts.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22timeline%22%2C%22page-uri%22%3A%22copytdmarkerts.com%2Fhome%22%7D"
                        title="timeline TradingView widget"
                        lang="en"
                        className="w-full h-[350px]"
                    ></iframe>
                </section>
                <section className="notranslate">
                    <iframe
                        scrolling="no"
                        allowtransparency="true"
                        src="https://www.tradingview-widget.com/embed-widget/hotlists/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22dateRange%22%3A%2212M%22%2C%22exchange%22%3A%22US%22%2C%22showChart%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A500%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Afalse%2C%22showSymbolLogo%22%3Afalse%2C%22showFloatingTooltip%22%3Afalse%2C%22plotLineColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(240%2C%20243%2C%20250%2C%200)%22%2C%22scaleFontColor%22%3A%22rgba(120%2C%20123%2C%20134%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22belowLineFillColorGrowingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22belowLineFillColorFallingBottom%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22symbolActiveColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.12)%22%2C%22utm_source%22%3A%22copytdmarkerts.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22hotlists%22%2C%22page-uri%22%3A%22copytdmarkerts.com%2Fhome%22%7D"
                        title="hotlists TradingView widget"
                        lang="en"
                        className="h-[500px] block w-full"
                    ></iframe>
                </section>
                <section className="notranslate">
                    <iframe
                        allowtransparency="true"
                        src="https://www.tradingview-widget.com/embed-widget/forex-cross-rates/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A400%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22copytdmarkerts.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22copytdmarkerts.com%2Fhome%22%7D"
                        title="forex cross-rates TradingView widget"
                        lang="en"
                        className="w-full block min-h-[400px]"
                    ></iframe>
                </section>
                <footer className="border-t-[1px] border-t-[#e3ebf6] notranslate pt-4 text-[#7081b9] text-[14px]">
                    &copy; 2017 <span className="notranslate">{APP_NAME}</span>
                </footer>
            </div>
            <ModalDialog isOpen={isModalOpen} closeModal={closeModal} className="rounded-[16px] max-w-[420px] flex flex-col gap-5">
                <figure className="grid place-items-center">
                    <img src="/icons/notification.png" alt="Icon bell" className="h-[55px]" />
                    <h1 className="font-semibold text-[18px]">Notification!</h1>
                </figure>
                <p className="text-center text-[15px] leading-[18px] text-gray-600">
                    {notificationMessage}
                </p>
                <button className="h-[42px] profit-gradient w-full text-white rounded-[8px]" onClick={okHandler}>Okay</button>

            </ModalDialog>
        </>
    )
}

