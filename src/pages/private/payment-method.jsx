import { useParams, useNavigate, Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import validator from "validator"
import depositService from "../../services/deposit"
import { useAuthStateContext } from "../../context/authState"
import NetworkException from "../../utils/networkException"
import ButtonSecondary from "../../components/button-secondary"
import { error, success } from "../../components/toast";
import LineLoader from "../../components/loaders/line-loader";

export default function PaymentMethod() {

    const { method } = useParams()


    switch (method) {
        case "card": {
            return (
                <div className="p-5 flex flex-col gap-8">
                    <header className="pb-[12px]">
                        <h1 className="text-[24px] text-white font-medium pt-2">Deposit</h1>
                    </header>
                    <div className="bg-[#2B3040] rounded-[4px]">
                        <header className="px-4 py-3 text-[14px] text-white border-b-[1px] border-b-white">
                            <h1>Master Card</h1>
                        </header>
                        <div className="px-4 py-5 text-white text-[14px]">
                            Coming soon! <br /><br />

                            <Link
                                to='/dashboard-support?tab=create&automated-message=true'
                                className="text-blue italic hover:underline"
                            >
                                Click here
                            </Link> to make a bank transfer
                        </div>
                    </div>
                </div>
            )
        }
        case "wallet": {
            return (
                <Wallet />
            )
        }
        case "perfect-money": {
            return (
                <div className="p-5 flex flex-col gap-8">
                    <header className="pb-[12px]">
                        <h1 className="text-[24px] text-white font-medium pt-2">Deposit</h1>
                    </header>
                    <div className="bg-[#2B3040] rounded-[4px]">
                        <header className="px-4 py-3 text-[14px] text-white border-b-[1px] border-b-white">
                            <h1>Bank / E-Transfer</h1>
                        </header>
                        <div className="px-4 py-5 text-white text-[14px]">
                            Available <br /><br />

                            <Link
                                to={`/dashboard-support?tab=create&automated-message=true`}
                                className="text-blue italic hover:underline"
                            >
                                Click here
                            </Link> for Transfer details. (Bank Transfer, PayPal, Cash App, Zelle + more)
                        </div>
                    </div>
                </div>
            )
        }
        default: {
            return (
                <div className="text-white">Page not found</div>
            )
        }
    }

}

const Wallet = () => {

    const { data, isLoading } = useQuery({
        queryKey: ["all-deposit-methods"],
        queryFn: () => depositService.all(),
    });

    const depositData = data?.data?.data

    const { state } = useAuthStateContext()
    const [isOpen, setIsOpen] = useState(false)
    const [paymentInfo, setPaymentInfo] = useState(null);
    const [loading, setLoading] = useState(false)
    const [amount, setAmount] = useState('');

    const navigate = useNavigate()

    function closeModal() {
        setIsOpen(false)
    }

    function openModal(data) {
        setIsOpen(true)
        setPaymentInfo(data)
    }

    const submit = async () => {

        if (!validator.isNumeric(amount) || amount < 1) {
            return error("Enter a valid amount")
        }

        try {
            setLoading(true)

            const payload = {
                amount,
                userId: state.user._id,
                depositMethodId: paymentInfo._id,
                value: amount,
            }

            let response = await depositService.add(payload)

            success(response.data.message)
            navigate(`/invoice/${response.data.data.invoiceId}`)
        }
        catch (error) {
            throw new NetworkException(error).trigger()
        }
        finally {
            setLoading(false)
        }
    }

    const isFormDisabled = !amount

    if (isLoading) {
        return (
            <LineLoader />
        )
    }

    return (
        <>
            <div className="p-5 flex flex-col gap-8">
                <header className="pb-[12px]">
                    <h1 className="text-[24px] text-white font-medium pt-2">Deposit</h1>
                </header>
                <div className="rounded-[4px] grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 max-w-[1600px]">
                    {
                        depositData.map((data, i) => (
                            <div key={i} className="bg-[#2B3040] p-6 rounded-[12px]">
                                <figure className="grid place-items-center mb-5">
                                    <img src={data.image} alt={data.paymentMedium} className="w-[100px] h-[100px]" />
                                    <figcaption className="text-white text-center pt-5">{data.name}</figcaption>
                                </figure>
                                <div className="pt-5 border-t-white border-t-[1px] border-dashed">
                                    <button onClick={() => openModal(data)} className="bg-[#155FFB] w-full h-[42px] rounded-full grid place-items-center text-white text-[14px]">
                                        Deposit
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-xl bg-[#2b3040] p-5 text-left align-middle transition-all">
                                    <div className="flex justify-between">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-[15px] leading-6 text-white flex gap-[6px] items-center"
                                        >
                                            <img src={paymentInfo?.image} alt={paymentInfo?.paymentMedium} width={20} height={20} />
                                            {paymentInfo?.paymentMedium} Deposit
                                        </Dialog.Title>
                                        <span className="material-icons-outlined text-white text-[16px] cursor-pointer" onClick={closeModal}>
                                            close
                                        </span>
                                    </div>
                                    <div className="pt-8">
                                        <label className="text-[13px] inline-block text-white mb-2">Amount<span className="text-[#f5325c]">*</span></label>
                                        <div className="h-[37px] w-full rounded-[4px] border-white hover:border-primary border-[1px] flex">
                                            <div className="notranslate w-[40px] h-full bg-white grid place-items-center text-[14px]">
                                                $
                                            </div>
                                            <input type="number" className="w-full outline-none bg-transparent px-3 text-white" value={amount} onChange={(e) => setAmount(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="pt-8 flex justify-end">
                                        <ButtonSecondary loading={loading} disabled={isFormDisabled} onClick={submit}>Deposit</ButtonSecondary>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}