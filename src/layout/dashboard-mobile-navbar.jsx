/* eslint-disable react/prop-types */
import { Disclosure, Transition } from "@headlessui/react"
import { dashboardLinksData } from "../data/link"
import clsx from "clsx"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { CloseIcon } from "../components/svgs"
import { useAuthStateContext } from "../context/authState"

export default function DashboardMobileNavbar({ sideMenuVisibility, toggleSideMenuVisibility }) {

    const { state, dispatch } = useAuthStateContext()

    const navigate = useNavigate()

    const user = state.user

    const logout = () => {
        localStorage.removeItem("access-token")
        dispatch({ type: "AUTH_LOGOUT" })
        navigate('/login')
    }

    return (
        <>
            <div
                onClick={toggleSideMenuVisibility}
                className={`bg-[#00000066] h-[100vh] w-full fixed z-[8888] lg:hidden top-0 left-0 ${sideMenuVisibility ? "block" : "hidden"}`}
            >
            </div>
            <div className={clsx("bg-white w-full h-[550px] px-4 py-5 lg:hidden overflow-y-auto fizomarkt-scrollbar fixed left-0 transition-all z-[9999] pb-[120px]", sideMenuVisibility ? "top-0" : "top-[-550px]")}>
                <header>
                    <div className="flex justify-between mb-5">
                        <figure>
                            <img src="/fizomarkt.png" alt="Logo" className="h-[38px]" />
                        </figure>
                        <div
                            onClick={toggleSideMenuVisibility}
                            className="w-[23px] h-[23px] rounded-[50%] grid place-items-center close-btn-gradient">
                            <div className="grid place-items-center h-[21px] w-[21px] rounded-[50%]">
                                <CloseIcon />
                            </div>
                        </div>
                    </div>
                    <div className="text flex flex-col gap-4">
                        <h1 className="uppercase text-[15px]">Account Balance</h1>
                        <p className="text-[14px] notranslate">${Number(user.accountBalance).toFixed(2)}</p>
                        <div className="flex gap-3">
                            <Link to='/payment' onClick={toggleSideMenuVisibility} className="flex-1">
                                <button className="text-white w-full py-2 px-4 bg-[#1761FD] rounded-[4px] text-[14px]">Deposit</button>
                            </Link>
                            <Link to='/withdrawal' onClick={toggleSideMenuVisibility} className="flex-1">
                                <button className="text-white w-full py-2 px-6 bg-[#9BA7CA] rounded-[4px] text-[14px]">Send</button>
                            </Link>
                        </div>
                    </div>
                </header>
                <div className="flex flex-col gap-6 pt-12">
                    {
                        dashboardLinksData.map((nvl, i) => (
                            nvl.isDropdown ?
                                <div key={i} className="w-full">
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="text-black flex w-full items-center justify-between">
                                                    <div className="flex gap-4 items-center">
                                                        <img src={nvl.leading} alt="Icon" width={18} height={18} />
                                                        <span className="text-[14px]">{nvl.link}</span>
                                                    </div>
                                                    <span
                                                        className={clsx("text-black notranslate material-icons transition transform", open && "rotate-180")}
                                                    >expand_more</span>
                                                </Disclosure.Button>
                                                <Transition
                                                    enter="transition duration-150 transform ease-out"
                                                    enterFrom="opacity-0 translate-y-[-10px]"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition duration-150 transform ease-in"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-[-10px]"
                                                >
                                                    <Disclosure.Panel className="pb-2 pt-4 pl-10 text-[15px] flex flex-col gap-2">
                                                        {
                                                            nvl.dropdown.map((_nvl, j) => (
                                                                <div key={j}>
                                                                    <NavLink onClick={toggleSideMenuVisibility} to={_nvl.to} className={({ isActive }) =>
                                                                        isActive ? "text-[#D8BFD8] text-[15px]" : "text-[15px] text-[#a4a5ab]"
                                                                    }>
                                                                        {_nvl.link}
                                                                    </NavLink>
                                                                </div>
                                                            ))
                                                        }
                                                    </Disclosure.Panel>
                                                </Transition>
                                                {nvl?.demarcation && <div className="pt-5 h-[2px] w-full border-b-[1px] border-[#cccccc] border-dashed"></div>}
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                                :
                                <div key={i}>
                                    <NavLink
                                        to={nvl.to}
                                        onClick={toggleSideMenuVisibility}
                                        className={({ isActive }) =>
                                            isActive ? "text-primary" : "hover:text-primary text-black"
                                        }
                                    >
                                        <div className="flex gap-4 items-center">
                                            <img src={nvl.leading} alt="Icon" width={18} height={18} />
                                            <span className="text-[15px]">{nvl.link}</span>
                                        </div>
                                    </NavLink>
                                    {nvl?.demarcation && <div className="pt-5 h-[2px] w-full border-b-[1px] border-[#cccccc] border-dashed"></div>}
                                </div>
                        ))
                    }
                    <div>
                        <button
                            className="hover:text-primary text-black"
                            onClick={logout}
                        >
                            <div className="flex gap-4 items-center">
                                <img src="/icons/logout.png" alt="Logout" width={18} height={18} />
                                <span className="text-[14px]">Logout</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
