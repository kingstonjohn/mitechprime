/* eslint-disable react/prop-types */
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/logo";
import { dashboardLinksData } from "../data/link";
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import clsx from "clsx";
import { CheckIcon, MenuIcon } from "../components/svgs";
import { useEffect, useRef, useState } from "react";
import { useAuthStateContext } from "../context/authState";
import SEO from "../components/seo";
import GoogleTranslate from "../components/google-translate";
import { cn } from "../utils/cn";
import { connectSocket, socket } from "../socket";
import { useMediaQuery } from "react-responsive"

export default function DashboardLayout() {

    const { state } = useAuthStateContext()

    const mainViewRef = useRef()

    const userId = state?.user?._id

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    const [sideMenuVisibility, setSideMenuVisibility] = useState(false)

    const { pathname } = useLocation()

    const toggleSideMenuVisibility = () => {
        setSideMenuVisibility(prev => !prev)
    }

    useEffect(() => {
        if (!socket) {
            connectSocket(userId);
        }
    }, [])

    return (
        <>
            <SEO title="Dashboard" />
            <div className={cn("h-[100vh] overflow-x-hidden flex", pathname === '/dashboard-support' ? '' : '')}>
                <div
                    className={cn(sideMenuVisibility ? "ml-0" : "-ml-[220.05px]", "transition-all duration-300 border-r border-r-[#f4f5f6] border-t border-t-[#f4f5f6] rounded-tr-[20px] relative overflow-x-hidden")}
                >
                    <SideNavigation
                        sideMenuVisibility={sideMenuVisibility}
                        toggleSideMenuVisibility={toggleSideMenuVisibility}
                    />
                </div>
                <div
                    ref={mainViewRef}
                    className={cn("h-[100vh] flex-1", sideMenuVisibility ? "-mr-[220.05px] overflow-y-hidden lg:overflow-y-auto" : "mr-0 overflow-y-auto", "transition-all duration-300 lg:transition-none lg:mr-0 relative")}
                >
                    {
                        !isDesktopOrLaptop && sideMenuVisibility && (
                            <div
                                onClick={toggleSideMenuVisibility}
                                className="absolute h-screen bg-white w-full left-0 opacity-80 z-[9999]"
                                style={{ top: `${mainViewRef.current.scrollTop + 2}px` }}
                            >
                            </div>
                        )
                    }

                    <TopNavigation
                        sideMenuVisibility={sideMenuVisibility}
                        toggleSideMenuVisibility={toggleSideMenuVisibility}
                    />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

const SideNavigation = ({ sideMenuVisibility, toggleSideMenuVisibility }) => {

    const { state, dispatch } = useAuthStateContext()

    const navigate = useNavigate()
    const user = state.user

    const logout = () => {
        localStorage.removeItem("access-token")
        dispatch({ type: "AUTH_LOGOUT" })
        navigate('/login')
    }

    return (
        <div className="flex flex-col bg-white h-[100%] pl-4 py-5">
            <header className="pb-4 pr-4">
                <div className="mb-6">
                    <Logo />
                </div>
                <div className="text-dark flex flex-col gap-4">
                    <h1 className="uppercase font-semibold text-[14px]">
                        Total Balance
                    </h1>
                    <p className="text-[20px] font-bold notranslate">
                        ${Number(user.accountBalance).toFixed(2)}
                    </p>
                    <div className="flex gap-3">
                        <Link to='/payment' onClick={toggleSideMenuVisibility}>
                            <button className="font-medium text-white py-2 px-4 bg-[#1761FD] rounded-[4px] text-[14px]">Deposit</button>
                        </Link>
                        <Link to='/withdrawal' onClick={toggleSideMenuVisibility}>
                            <button className="font-medium text-white py-2 px-6 bg-primary rounded-[4px] text-[14px]">Send</button>
                        </Link>
                    </div>
                </div>
            </header>
            <div className="flex-1 w-full overflow-y-scroll fizomarkt-scrollbar pr-4">
                <div className="flex flex-col gap-6 pt-6">
                    {
                        dashboardLinksData.map((nvl, i) => (
                            nvl.isDropdown ?
                                <div
                                    key={i}
                                    className={cn("w-full transition-all duration-150 opacity-0 -mt-5 ease-linear", sideMenuVisibility && "mt-0 opacity-100")}
                                    style={{ transitionDelay: `${i + 1}00ms` }}
                                >
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <DisclosureButton className="text-dark flex w-full items-center justify-between">
                                                    <div className="flex gap-4 items-center font-medium">
                                                        <img src={nvl.leading} alt="Icon" width={21} height={21} />
                                                        <span className="text-[14px]">{nvl.link}</span>
                                                    </div>
                                                    <span
                                                        className={clsx("notranslate text-ash material-icons transition transform", open && "rotate-180")}
                                                    >expand_more</span>
                                                </DisclosureButton>
                                                <Transition
                                                    enter="transition duration-150 transform ease-out"
                                                    enterFrom="opacity-0 translate-y-[-10px]"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition duration-150 transform ease-in"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-[-10px]"
                                                >
                                                    <DisclosurePanel className="pb-2 pt-4 pl-[38px] text-[14px] flex flex-col gap-2">
                                                        {
                                                            nvl.dropdown.map((_nvl, j) => (
                                                                <div
                                                                    key={j}
                                                                >
                                                                    <NavLink
                                                                        to={_nvl.to}
                                                                        onClick={toggleSideMenuVisibility}
                                                                        className={({ isActive }) =>
                                                                            isActive ? "text-primary" : "text-red-400"
                                                                        }>
                                                                        {_nvl.link}
                                                                    </NavLink>
                                                                </div>
                                                            ))
                                                        }
                                                    </DisclosurePanel>
                                                </Transition>
                                                {nvl?.demarcation && <div className="pt-5 h-[2px] w-full border-b-[1px] border-[#cccccc] border-dashed"></div>}
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                                :
                                <div
                                    key={i}
                                    className={cn("transition-all duration-150 -mt-5 opacity-0 ease-linear", sideMenuVisibility && "mt-0 opacity-100")}
                                    style={{ transitionDelay: `${i + 1}00ms` }}
                                >
                                    <NavLink
                                        to={nvl.to}
                                        onClick={toggleSideMenuVisibility}
                                        className={({ isActive }) =>
                                            isActive ? "text-primary" : "hover:text-primary text-dark"
                                        }
                                    >
                                        <div className="flex gap-4 items-center font-medium">
                                            <img src={nvl.leading} alt="Icon" width={21} height={21} />
                                            <span className="text-[15px]">{nvl.link}</span>
                                        </div>
                                    </NavLink>
                                    {nvl?.demarcation && <div className="pt-5 h-[2px] w-full border-b-[1px] border-[#cccccc] border-dashed"></div>}
                                </div>
                        ))
                    }
                    <div
                        className={cn("transition-all duration-150 -mt-5 opacity-0", sideMenuVisibility && "mt-0 opacity-100")}
                        style={{ transitionDelay: `1000ms` }}
                    >
                        <button
                            className="hover:text-primary text-dark"
                            onClick={logout}
                        >
                            <div className="flex gap-4 items-center font-medium">
                                <img src="/icons/logout.png" alt="Logout" width={21} height={21} />
                                <span className="text-[14px]">Logout</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TopNavigation = ({ toggleSideMenuVisibility }) => {

    const { state } = useAuthStateContext()

    const user = state.user

    const uid = user._id;
    const username = state.user.firstName + " " + state.user.lastName
    const kycVerificationStatus = user.kycVerification

    return (
        <div className="sticky top-0 z-[999] bg-white">
            <GoogleTranslate />
            <div className="px-[20px] notranslate w-full min-h-[70px] flex items-center justify-between">
                <div
                    onClick={toggleSideMenuVisibility}
                    className={cn("bg-white h-[38px] w-[38px] grid place-items-center rounded-[12px] transition-all duration-300 shadow-2xl shadow-black cursor-pointer")}
                >
                    <MenuIcon />
                </div>
                <div className="flex items-center gap-3">
                    <p className="text-dark text-[15px] w-[100px] md:w-[200px] truncate text-right">{username}</p>
                    <Link to='/dashboard-profile' className="block w-[40px] h-[40px] grid place-items-center bg-[#1761FD] rounded-full">
                        <span className="material-icons text-white"> person </span>
                    </Link>
                </div>
            </div>
            <section className="flex items-center justify-between px-[20px]">
                {
                    kycVerificationStatus === "verified" ? (
                        <button className="text-white rounded-[6px] px-5 py-[5px] bg-[#FFB822] text-[12px]">ACTIVE</button>
                    ) : <div>&nbsp;</div>
                }
                <div className="flex gap-2 items-center notranslate">
                    <div className="flex items-center gap-2">
                        <div className="w-[30px] h-[30px] grid place-items-center bg-[#0FAF59] rounded-full">
                            <span className="material-icons text-white"> person </span>
                        </div>
                        <div>
                            <p className="text-[12px] w-[80px] truncate text-left text-dark">ID: {uid}</p>
                            <p className="text-[12px] w-[80px] truncate text-left text-[#1761fd]">{username}</p>
                        </div>
                    </div>
                    {
                        kycVerificationStatus === "unverified" && (
                            <button className="text-white rounded-[6px] px-2 py-[5px] bg-[#EA5353] flex items-center gap-2">
                                <span className="material-icons-outlined h-[18px] w-[18px] text-[18px]" >
                                    close
                                </span>
                                <span className="text-[12px] capitalize">KYC: {kycVerificationStatus}</span>
                            </button>
                        )
                    }
                    {
                        kycVerificationStatus === "verifying" && (
                            <button className="text-white rounded-[6px] px-2 py-[5px] bg-[#FFB822] flex items-center gap-2">
                                <span className="material-icons-outlined h-[18px] w-[18px] text-[18px]" >
                                    hourglass_empty
                                </span>
                                <span className="text-[12px] capitalize">KYC: {kycVerificationStatus}</span>
                            </button>
                        )
                    }
                    {
                        kycVerificationStatus === "verified" && (
                            <button className="text-white rounded-[6px] px-2 py-[5px] bg-[#00C389] flex items-center gap-2">
                                <CheckIcon />
                                <span className="text-[12px] capitalize">KYC: {kycVerificationStatus}</span>
                            </button>
                        )
                    }
                </div>
            </section>
        </div>
    )
}