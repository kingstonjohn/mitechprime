import { Fragment, useState } from "react"
import Box from "../../layout/box"
import Button from "../button"
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react"
import { CloseAltIcon } from "../svgs"
import { APP_NAME } from "../../constants"

export default function StartTradingToday() {

    const [isOpen, setIsOpen] = useState(false)
    const [_isOpen, _setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function _closeModal() {
        _setIsOpen(false)
    }

    function _openModal() {
        _setIsOpen(true)
    }

    return (
        <Box className="pt-20 px-0">
            <div className="bg-[#F6F6F7] lg:rounded-[8px] px-5 lg:px-8 py-[48px] max-w-[1240px] w-full mx-auto flex flex-col gap-[30px]">
                <h1 className="text-[24px] lg:text-[40px] text-dark font-bold">Start Trading Today</h1>
                <p className="lg:text-[18px] text-ash mb-12">Ready to dive into the world of stocks? Join {APP_NAME} today and embark on an exciting journey toward financial success. Sign up now and gain access to a world of opportunities. With our user-friendly platform, expert analysis, and educational resources, you&rsquo;ll have the tools you need to take control of your financial future. Whether you&rsquo;re looking to grow your investment portfolio, plan for retirement, or simply learn more about the stock market, {APP_NAME} is here to support you every step of the way.</p>
                <div className="flex gap-4 flex-wrap items-center justify-between">
                    <Button onClick={openModal} className="lg:max-w-fit">Certificate of Incorporation</Button>
                    <Button onClick={_openModal} className="px-[80px] lg:max-w-fit">Insurance policy</Button>
                </div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-[99999]" onClose={closeModal}>
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/50" />
                        </TransitionChild>
                        <div className="fixed inset-0 overflow-y-auto notranslate">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <TransitionChild
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <DialogPanel className="w-full h-[90vh] max-w-4xl transform overflow-y-auto rounded-xl bg-[#2b3040] p-5 text-left align-middle transition-all relative">
                                        <button
                                            onClick={closeModal}
                                            className="w-[18px] h-[18px] absolute top-[2px] right-[10px] grid place-items-center rounded-full bg-white"
                                        >
                                            <CloseAltIcon className="w-[8px] h-[8px] fill-[#acacac]" />
                                        </button>
                                        <img src="/media/cert-of-incorp-1.jpg" alt="Cert 1" />
                                        <img src="/media/cert-of-incorp-2.jpg" alt="Cert 2" />
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
                <Transition appear show={_isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-[99999]" onClose={_closeModal}>
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/50" />
                        </TransitionChild>
                        <div className="fixed inset-0 overflow-y-auto notranslate">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <TransitionChild
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <DialogPanel className="w-full h-[90vh] max-w-4xl transform overflow-y-auto rounded-xl bg-[#2b3040] p-5 text-left align-middle transition-all relative">
                                        <button
                                            onClick={_closeModal}
                                            className="w-[18px] h-[18px] absolute top-[2px] right-[10px] grid place-items-center rounded-full bg-white"
                                        >
                                            <CloseAltIcon className="w-[8px] h-[8px] fill-[#acacac]" />
                                        </button>
                                        <img src="/media/insurance-coincover-1.jpg" alt="Certificate of Insurance" />
                                        <img src="/media/insurance-coincover-2.jpg" alt="Certificate of Insurance" />
                                    </DialogPanel>
                                </TransitionChild>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </Box>
    )
}
