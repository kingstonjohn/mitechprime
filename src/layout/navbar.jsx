import { Link, NavLink } from "react-router-dom";
import Box from "./box";
import Logo from "../components/logo";
import { navLinksData } from "../data/link";
import { useState } from "react";
import MobileNavbar from "./mobile-navbar";
import { MenuIcon } from "../components/svgs";
import { useAuthStateContext } from "../context/authState";
import GoogleTranslate from "../components/google-translate";
import { Modal } from "../components/ui/modal";

export default function Navbar() {

    const { state } = useAuthStateContext()

    const [isModalVisible, setModalVisibility] = useState(false)

    const openModalHandler = () => setModalVisibility(true)

    const closeModalHandler = () => setModalVisibility(false)

    const [visible, setVisible] = useState(false)

    const openHandler = () => {
        setVisible(true)
    }

    const closeHandler = () => {
        setVisible(false)
    }

    return (
        <>
            <nav className="border-b-[1px] border-b-[#efefef] sticky top-0 bg-white z-[999]">
                <GoogleTranslate />
                <Box className="py-4 flex items-center justify-between min-h-[80px]">
                    <div className="flex items-center gap-12">
                        <figure>
                            <Logo />
                        </figure>
                        <div className="hidden lg:flex items-center text-dark gap-8">
                            {
                                navLinksData.map((nvl, i) => (
                                    nvl.isDropdown ?
                                        nvl.link !== "Contact" ? (
                                            <div className="nav-item py-3" key={i}>
                                                <div className="flex items-center gap-x-[1px] nav-item-title">
                                                    <p>{nvl.link}</p><span className="material-icons notranslate"> expand_more </span>
                                                </div>
                                                <div className="nav-item-dropdown nav-items-dropdown-services">
                                                    <div className="nav-item-dropdown-triangle"></div>
                                                    {
                                                        nvl.dropdown.map((_nvl, j) => (
                                                            <NavLink key={j} reloadDocument={true} to={_nvl.to} className={({ isActive }) =>
                                                                isActive ? "nav-item-dropdown-link text-primary text-[15px]" : "nav-item-dropdown-link text-[15px]"
                                                            }>
                                                                {_nvl.link}
                                                            </NavLink>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="nav-item py-3" key={i}>
                                                <div className="flex items-center gap-x-[1px] nav-item-title">
                                                    <p>{nvl.link}</p><span className="material-icons notranslate"> expand_more </span>
                                                </div>
                                                <div className="nav-item-dropdown nav-items-dropdown-services">
                                                    <div className="nav-item-dropdown-triangle"></div>

                                                    <a href="mailto:support@fizohedge.com" className="nav-item-dropdown-link hover:text-primary text-[15px] nav-item-dropdown-link text-[15px]">
                                                        Support@fizohedge.com
                                                    </a>
                                                    <div
                                                        onClick={openModalHandler}
                                                        href="mailto:support@fizohedge.com" className="nav-item-dropdown-link hover:text-primary text-[15px] nav-item-dropdown-link text-[15px]"
                                                    >
                                                        Office address
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        <NavLink key={i}
                                            to={nvl.to}
                                            reloadDocument={true}
                                            className={({ isActive }) =>
                                                isActive ? "text-primary" : "hover:text-primary"
                                            }
                                        >
                                            {nvl.link}
                                        </NavLink>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        {
                            state.isAuth ?
                                <Link
                                    to="/dashboard"
                                    className="hidden sm:grid bg-primary font-medium text-white rounded-[6px] py-[12px] px-[38px] place-items-center"
                                >
                                    Dashboard
                                </Link>
                                :
                                <Link
                                    className="hidden sm:grid bg-primary font-medium text-white rounded-[6px] py-[12px] px-[38px] place-items-center"
                                    to="/login"
                                    reloadDocument={true}
                                >
                                    Log in
                                </Link>
                        }
                        <span className="lg:hidden" onClick={openHandler}>
                            <MenuIcon className="hover:fill-primary" />
                        </span>
                    </div>
                </Box>
            </nav>
            <MobileNavbar
                visible={visible}
                closeHandler={closeHandler}
                openModalHandler={openModalHandler}
            />
            <Modal
                isOpen={isModalVisible}
                onClose={closeModalHandler}
                className="max-w-[900px] p-[10px] rounded-[24px] mr-[16px]"
            >
                <iframe className="w-full rounded-[14px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.316033414945!2d-96.57468432491885!3d39.19026712937187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bdd2712685f431%3A0xf450e71aba53b641!2s1010%20Thurston%20St%2C%20Manhattan%2C%20KS%2066502%2C%20USA!5e0!3m2!1sen!2sng!4v1749897724467!5m2!1sen!2sng" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Modal>
        </>
    )
}

