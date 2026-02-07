/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import Button from "../components/button";
import { CloseIcon } from "../components/svgs";
import { navLinksData } from "../data/link";
import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";
import { useAuthStateContext } from "../context/authState";

export default function MobileNavbar({ visible, closeHandler, openModalHandler }) {

    const { state } = useAuthStateContext()

    return (
        <>
            <div
                onClick={closeHandler}
                className={`bg-[#00000066] h-[100vh] w-full fixed z-[1003] lg:hidden top-0 left-0 ${visible ? "block" : "hidden"}`}
            >
            </div>
            <nav className={`w-full max-w-[348px] min-h-[100vh] overflow-y-auto lg:hidden px-[25px] py-[40px] bg-[#353A4D] fixed top-0 transition-all z-[9999] ${visible ? "right-0" : "right-[-348px]"}`}>
                <div className="flex justify-end mb-12">
                    <div
                        onClick={closeHandler}
                        className="w-[23px] h-[23px] rounded-[50%] grid place-items-center close-btn-gradient">
                        <div className="grid place-items-center h-[21px] w-[21px] bg-[#353A4D] rounded-[50%]">
                            <CloseIcon />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    {
                        navLinksData.map((nvl, i) => (
                            nvl.isDropdown ?
                                <div key={i} className="w-full">
                                    <Disclosure>
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="text-white flex w-full items-center justify-between">
                                                    <span>{nvl.link}</span>
                                                    <span
                                                        className={clsx("text-purple-500 material-icons transition transform", open && "rotate-180")}
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
                                                    <Disclosure.Panel className="pb-2 pt-4 px-2 text-[15px] flex flex-col gap-2">
                                                        {
                                                            nvl.dropdown.map((_nvl, j) => (
                                                                nvl.link !== "Contact" ? (
                                                                    <div key={j}>
                                                                        <NavLink reloadDocument={true} to={_nvl.to} className={({ isActive }) =>
                                                                            isActive ? "text-[#D8BFD8] text-[15px]" : "text-[15px] text-[#a4a5ab]"
                                                                        }>
                                                                            {_nvl.link}
                                                                        </NavLink>
                                                                    </div>
                                                                ) : (
                                                                    <div key={j}>
                                                                        <a href="mailto:support@fizohedge.com" className="text-[15px] text-[#a4a5ab] hover:text-[#D8BFD8]">
                                                                            Support@fizohedge.com
                                                                        </a>
                                                                        <div
                                                                            onClick={() => {
                                                                                closeHandler();
                                                                                openModalHandler();
                                                                            }}
                                                                            href="mailto:support@fizohedge.com" className="text-[15px] text-[#a4a5ab] hover:text-[#D8BFD8] mt-2 cursor-pointer"
                                                                        >
                                                                            Office address
                                                                        </div>
                                                                    </div>
                                                                )
                                                            ))
                                                        }
                                                    </Disclosure.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Disclosure>
                                </div>
                                :
                                <div key={i}>
                                    <NavLink
                                        to={nvl.to}
                                        reloadDocument={true}
                                        className={({ isActive }) =>
                                            isActive ? "text-[#D8BFD8]" : "hover:text-[#D8BFD8] text-white"
                                        }
                                    >
                                        {nvl.link}
                                    </NavLink>
                                </div>
                        ))
                    }
                    {
                        state.isAuth ?
                            <div className="pt-4">
                                <Link to="/dashboard">
                                    <Button className="w-full">Dashboard</Button>
                                </Link>
                            </div>
                            :
                            <div className="pt-4">
                                <Link to="/register">
                                    <Button className="w-full">Register</Button>
                                </Link>
                            </div>
                    }
                </div>
            </nav>
        </>
    )
}

