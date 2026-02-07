/* eslint-disable react/prop-types */
import { useState, Fragment } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { paymentOptionsData } from '../../data/payment';
import ButtonSecondary from '../../components/button-secondary';
import withdrawalService from '../../services/withdrawal';
import NetworkException from '../../utils/networkException';
import { useAuthStateContext } from '../../context/authState';
import { success } from '../../components/toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import depositService from '../../services/deposit';


export default function Withdrawal() {

    const queryClient = useQueryClient()

    const { state } = useAuthStateContext()

    const initState = {
        amount: '',
        walletAddress: '',
    }

    const [formData, setFormData] = useState(initState)

    const [walletType, setWalletType] = useState("")

    const formDataHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value.trim()
        }))
    }

    const { mutateAsync, isPending } = useMutation({
        mutationFn: (payload) => withdrawalService.add(payload),
        onSuccess: (response) => {
            queryClient.invalidateQueries(["transaction-history"])
            success(response.data.message);
            setFormData(initState)
        },
        onError: (error) => {
            new NetworkException(error).trigger()
        },
    });

    const submit = () => {

        const payload = {
            ...formData,
            walletType,
            userId: state.user._id
        }

        mutateAsync(payload)
    }

    const isFormDisabled = !formData.amount || !formData.walletAddress || !walletType

    return (
        <div className="w-full max-w-[1600px] pt-14 pb-4 grid place-items-center px-5">
            <div className="max-w-[525px] w-full rounded-[16px] bg-white border border-[#e2e8f0]">
                <header className="border-b-[1px] border-b-white py-4 px-4">
                    <h1 className='text-[24px] font-semibold'>Withdrawal Request</h1>
                </header>
                <div className="flex flex-col gap-6 px-4 py-6">
                    <div>
                        <label className="text-[13px] inline-block mb-2">Amount<span className="text-[#f5325c]">*</span></label>
                        <div className="h-[37px] w-full rounded-[4px] hover:border-primary border-[#e2e8f0] border-[1px] flex">
                            <div className="w-[40px] h-full bg-white grid place-items-center text-[14px] border-r border-r-[#e2e8f0] notranslate">
                                $
                            </div>
                            <input
                                name="amount"
                                type="number"
                                className="w-full outline-none px-3"
                                value={formData.amount}
                                onChange={formDataHandler}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-[13px] inline-block mb-2">Payout Option<span className="text-[#f5325c]">*</span></label>
                        <WalletAddressInput
                            walletType={walletType}
                            setWalletType={setWalletType}
                        />
                    </div>
                    <div>
                        <label className="text-[13px] inline-block mb-2">Wallet Address<span className="text-[#f5325c]">*</span></label>
                        <input
                            name="walletAddress"
                            type="text"
                            className="w-full outline-none bg-transparent px-3 h-[37px] w-full rounded-[4px] border-[#e2e8f0] hover:border-primary border-[1px] flex"
                            value={formData.walletAddress}
                            onChange={formDataHandler}
                        />
                    </div>
                    <ButtonSecondary
                        disabled={isFormDisabled}
                        loading={isPending}
                        onClick={submit}
                    >
                        Submit
                    </ButtonSecondary>
                </div>
            </div>
        </div>
    )
}

const WalletAddressInput = ({ walletType, setWalletType }) => {

    const { data } = useQuery({
        queryKey: ["all-deposit-methods"],
        queryFn: () => depositService.all(),
    });

    const depositData = data?.data?.data || []

    const [isModalVisible, setModalVisibility] = useState(false)

    const toggleModalVisibility = () => setModalVisibility(prev => !prev);

    const selectWalletType = (wallet) => {
        setWalletType(wallet)
        toggleModalVisibility()
    }

    return (
        <>
            <div>
                <input
                    name="wallet"
                    onClick={toggleModalVisibility}
                    value={walletType}
                    className="capitalize w-full bg-transparent rounded-[4px] h-[40px] outline-none px-3 border-[1px] border-[#e2e8f0] hover:border-primary cursor-pointer"
                    readOnly={true}
                />
            </div>
            {
                isModalVisible && (
                    <Transition appear show={isModalVisible} as={Fragment}>
                        <Dialog as="div" className="relative z-[9999]" onClose={toggleModalVisibility}>
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

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-3 text-center">
                                    <TransitionChild
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <DialogPanel className="w-full max-h-[400px] max-w-md transform overflow-hidden rounded-2xl bg-[#fafafa] border border-[#efefef] hover:border-primary py-6 px-3 text-left align-middle shadow-xl transition-all fizomarkt-modal-scrollbar overflow-y-auto">
                                            {
                                                depositData.map((data, index) => (
                                                    <div key={index}
                                                        className="py-2 px-3 flex items-center gap-2 hover:bg-[#00000020] rounded-[4px] hover:text-blue text-dark cursor-pointer"
                                                        onClick={() => selectWalletType(data.name)}
                                                    >
                                                        <img src={data.image} alt={data.name} className='h-[20px] w-[20px] rounded-full inline-block' />
                                                        <p className="capitalize text-[14px]">{data.name}</p>
                                                    </div>
                                                ))
                                            }
                                        </DialogPanel>
                                    </TransitionChild>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                )
            }
        </>
    )
}