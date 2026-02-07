/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { useAuthStateContext } from "../../context/authState";
import LineLoader from "../../components/loaders/line-loader";
import stockService from "../../services/stock";
import { formatDate } from "../../utils/helpers";
import PaymentStatus from "../../components/payment-status";
import ButtonSecondary from "../../components/button-secondary";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CloseIcon } from "../../components/svgs";

export default function UserStock() {

    const { state } = useAuthStateContext()

    const { data, isLoading, isError } = useQuery({
        queryKey: ["user-stocks"],
        queryFn: () => stockService.get(state.user._id),
    });

    const [isOpen, setIsOpen] = useState(false)

    const [stockId, setStockId] = useState(null)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal(id) {
        setIsOpen(true)
        setStockId(id)
    }

    if (isLoading) {
        return (
            <LineLoader />
        )
    }

    if (isError) {
        return (
            <div className="px-2 py-5 text-dark">An error occurred while retrieving your purchases</div>
        )
    }

    const userStockData = data?.data?.data

    const processTransactions = (transactions) => {
        const stockCountMap = {};

        transactions.forEach(transaction => {
            const stockId = transaction.stockId._id;
            if (stockCountMap[stockId]) {
                stockCountMap[stockId].count += 1;
                stockCountMap[stockId].grossSum += transaction.amount;
            } else {
                stockCountMap[stockId] = {
                    image: transaction.stockId.image,
                    name: transaction.stockId.name,
                    _id: transaction.stockId._id,
                    count: 1,
                    grossSum: transaction.amount,
                };
            }
        });
        return Object.values(stockCountMap);
    };

    const uniqueTransactionsData = processTransactions(userStockData)

    const filteredStockData = userStockData.filter(item => item?.stockId?._id === stockId);

    return (
        <>
            <div className="p-5 flex flex-col gap-8">
                <header className="pb-[24px]">
                    <h1 className="text-[24px] text-dark font-medium pt-2">Available Purchases</h1>
                </header>
                <div className="grid gap-5 max-w-[1600px]">
                    {
                        uniqueTransactionsData.length === 0 && (
                            <p className='text-[14px] text-dark'>No Available Purchases</p>
                        )
                    }
                    {
                        uniqueTransactionsData.map((data, i) => (
                            <div key={i} className="bg-black border-[1px] rounded-[16px] overflow-hidden px-4 py-6 gap-4 grid sm:grid-cols-[1fr_1.5fr]">
                                <div>
                                    <figure className="grid place-items-center mb-8">
                                        <img src={data.image} alt={data.name} className="w-[100px] h-[100px] rounded-full object-cover" />
                                        <figcaption className="text-dark text-center mt-2">{data.name}</figcaption>
                                    </figure>
                                </div>
                                <div className="text-dark flex flex-col gap-5 text-[14px]">
                                    {/* <div className="flex items-center justify-between gap-2 border-b-[1px] border-b-white py-2">
                                    <h2>Amount:</h2>
                                    <p className="text-[#03d87f] notranslate">${data.amount}</p>
                                </div> */}
                                    {/* <div className="flex items-center justify-between gap-2 border-b-[1px] border-b-white py-2">
                                    <h2>Purchase Date:</h2>
                                    <p className="text-[#03d87f]">{formatDate(data.createdAt)}</p>
                                </div> */}
                                    <div className="flex items-center justify-between gap-2 border-b-[1px] border-b-white py-2">
                                        <h2>Name:</h2>
                                        <p className="text-[#03d87f] notranslate">{data.name}</p>
                                    </div>
                                    <div className="flex items-center justify-between gap-2 border-b-[1px] border-b-white py-2">
                                        <h2>Status:</h2>
                                        <div>
                                            <PaymentStatus
                                                status="success"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end py-2">
                                        <ButtonSecondary onClick={() => openModal(data._id)} className="text-[12px] h-[32px]">
                                            View More
                                        </ButtonSecondary>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/60 backdrop-blur-[2px]" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center px-2 py-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full grid gap-2 max-w-2xl transform rounded-xl bg-[#2b3040] p-3 text-left align-middle transition-all">
                                    <div className="flex justify-end pb-2">
                                        <button onClick={closeModal}>
                                            <CloseIcon className="stroke-blue" />
                                        </button>
                                    </div>
                                    {
                                        filteredStockData?.map((data, i) => (
                                            <div key={i} className="bg-black border-[1px] rounded-[4px] overflow-hidden px-4 py-6 gap-4 grid sm:grid-cols-[1fr_1.5fr]">
                                                <div>
                                                    <figure className="grid place-items-center mb-8">
                                                        <img src={data?.stockId?.image} alt={data?.stockId?.name} className="w-[60px] h-[60px] rounded-full object-cover" />
                                                        <figcaption className="text-dark text-[14px] text-center mt-2">{data?.stockId?.name}</figcaption>
                                                    </figure>
                                                </div>
                                                <div className="text-dark flex flex-col gap-5 text-[12px] lg:text-[14px]">
                                                    <div className="flex items-center justify-between gap-2 border-b-[1px] border-b-white py-2">
                                                        <h2>Name:</h2>
                                                        <p className="text-[#03d87f] notranslate">${data?.stockId?.name}</p>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-2 border-b-[1px] border-b-white py-2">
                                                        <h2>Amount:</h2>
                                                        <p className="text-[#03d87f] notranslate">${data?.amount}</p>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-2 border-b-[1px] border-b-white py-2">
                                                        <h2>Purchase Date:</h2>
                                                        <p className="text-[#03d87f]">{formatDate(data.createdAt)}</p>
                                                    </div>
                                                    <div className="flex items-center justify-between gap-2 border-b-[1px] border-b-white py-2">
                                                        <h2>Status:</h2>
                                                        <div>
                                                            <PaymentStatus
                                                                status={data?.status}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

