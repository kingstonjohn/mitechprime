import { Disclosure, Transition } from "@headlessui/react";
import SEO from "../components/seo";
import { DocsIcon } from "../components/svgs";
import Box from "../layout/box";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";
import clsx from "clsx";
import { faqsFinancialQuestionsData, faqsGeneralQuestionsData, faqsVerificationQuestionsData } from "../data/faqs";
import { MetaViewportWidth } from "../constants/meta";
import GoogleTranslate from "../components/google-translate";

export default function Faqs() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Frequently Asked Questions (FAQs)">
            { MetaViewportWidth }
            </SEO>
            <GoogleTranslate />
            <Navbar />
            <Hero />
            <GeneralQuestions />
            <FinancialQuestions />
            <VerificationQuestions />
            <Footer />
        </div>
    )
}

const Hero = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-14">
                <h1 className="text-dark font-bold text-[32px] lg:text-[40px] mb-10">FAQs</h1>
                <div className="flex gap-5 flex-wrap">
                    <div className="rounded-[8px] py-8 px-6 bg-[#2F80ED] text-white">
                        <h2>General questions</h2>
                        <p className="text-[14px]">12 questions</p>
                    </div>
                    <div className="rounded-[8px] py-8 px-6 bg-[#EFEFEFB6] text-dark">
                        <h2>Financial questions</h2>
                        <p className="text-[14px]">11 questions</p>
                    </div>
                    <div className="rounded-[8px] py-8 px-6 bg-[#EFEFEFB6] text-dark">
                        <h2>Verifications questions</h2>
                        <p className="text-[14px]">7 questions</p>
                    </div>
                </div>
            </Box>
        </div>
    )
}

const GeneralQuestions = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-8">
                <header className="flex gap-4 items-center mb-8">
                    <DocsIcon />
                    <h1 className="text-dark text-[26px] font-semibold">General Questions</h1>
                </header>
                <div className="flex flex-col gap-5">
                    {
                        faqsGeneralQuestionsData.map((faqs, i) => (
                            <div key={i} className="w-full rounded-xl bg-[#EFEFEFB6] p-2">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-[17px] font-medium text-dark hover:text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span>{faqs.question}</span>
                                                <span
                                                    className={clsx("h-5 w-5 text-purple-500 material-icons transition transform", open && "rotate-180")}
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
                                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[15px] text-ash">
                                                    {faqs.answer}
                                                </Disclosure.Panel>
                                            </Transition>

                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        ))
                    }
                </div>
            </Box>
        </div>
    )
}

const FinancialQuestions = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-8">
                <header className="flex gap-4 items-center mb-8">
                    <DocsIcon />
                    <h1 className="text-dark text-[26px] font-semibold">Financial Questions</h1>
                </header>
                <div className="flex flex-col gap-5">
                    {
                        faqsFinancialQuestionsData.map((faqs, i) => (
                            <div key={i} className="w-full rounded-xl bg-[#EFEFEFB6] p-2">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-[17px] font-medium text-dark hover:text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span>{faqs.question}</span>
                                                <span
                                                    className={clsx("h-5 w-5 text-purple-500 material-icons transition transform", open && "rotate-180")}
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
                                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[15px] text-ash">
                                                    {faqs.answer}
                                                </Disclosure.Panel>
                                            </Transition>

                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        ))
                    }
                </div>
            </Box>
        </div>
    )
}

const VerificationQuestions = () => {

    return (
        <div className="border-b-[1px] border-b-[#ffffff0d]">
            <Box className="py-8">
                <header className="flex gap-4 items-center mb-8">
                    <DocsIcon />
                    <h1 className="text-dark text-[26px] font-semibold">Registration and Verification</h1>
                </header>
                <div className="flex flex-col gap-5">
                    {
                        faqsVerificationQuestionsData.map((faqs, i) => (
                            <div key={i} className="w-full rounded-xl bg-[#EFEFEFB6] p-2">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-left text-[17px] font-medium text-dark hover:text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span>{faqs.question}</span>
                                                <span
                                                    className={clsx("h-5 w-5 text-purple-500 material-icons transition transform", open && "rotate-180")}
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
                                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-[15px] text-ash">
                                                    {faqs.answer}
                                                </Disclosure.Panel>
                                            </Transition>

                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        ))
                    }
                </div>
            </Box>
        </div>
    )
}