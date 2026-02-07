import liveTradeService from "../../services/livetrade";
import { useQuery } from "@tanstack/react-query";
import NetworkException from "../../utils/networkException";
import ButtonSecondary from "../../components/button-secondary";
import { useAuthStateContext } from "../../context/authState";
import LineLoader from "../../components/loaders/line-loader";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { error, success } from "../../components/toast";

export default function LiveTradingPlans() {

    const queryClient = useQueryClient()

    const { state, dispatch } = useAuthStateContext()

    const { data, isLoading, isError } = useQuery({
        queryKey: ["all-livetrade-plans"],
        queryFn: () => liveTradeService.all(),
    });

    const [inputAmounts, setInputAmounts] = useState({});

    const handleInputChange = (e, id, max) => {
        setInputAmounts(prevState => ({
            ...prevState,
            [id]: e.target.value <= max ? e.target.value : max
        }));
    };

    const { mutateAsync, variables, isPending } = useMutation({
        mutationFn: (formData) => liveTradeService.join(formData),
        onSuccess: (response) => {
            queryClient.invalidateQueries(["user-livetrade-plans"])
            dispatch({ type: "SET_USER", payload: response.data.data })
            success(response.data.message)
        },
        onError: (error) => {
            new NetworkException(error).trigger()
        },
    });

    const joinPlanHandler = async (id, min) => {

        if (!inputAmounts[id]) {
            return error("Enter a valid amount")
        }

        if(inputAmounts[id] < min){
            return error("Amount is less than the minimum amount")
        }

        const payload = { 
            userId: state.user._id, 
            livetradeId: id, 
            amount: inputAmounts[id] 
        }

        mutateAsync(payload)
    }

    if (isLoading) {
        return (
            <LineLoader />
        )
    }

    if(isError){
        return <div className="px-2 py-5">An error occurred while retrieving live trading plans</div>
    }

    const liveTradeData = data?.data?.data

    return (
        <div className="p-5 flex flex-col gap-8">
            <header className="pb-[24px]">
                <h1 className="text-[24px] font-medium pt-2">Available Live Trading Plans</h1>
            </header>
            <div className="grid sm:grid-cols-2 gap-5 md:grid-cols-3">
                {
                    liveTradeData.length === 0 && (
                        <p className='text-[14px]'>No Live Trade Plan</p>
                    )
                }
                {
                    liveTradeData.map(sub => (
                        <div key={sub._id} className="bg-[#fafafa] border border-[#efefef] hover:border-primary p-5 rounded-[16px]">
                            <header>
                                <p className="bg-purple-200 text-purple-500 text-[14px] py-[1px] px-2 mb-4 rounded-[2px]">
                                    Plan Name
                                </p>
                                <h1 className="text-[20px] font-bold">{sub.planName}</h1>
                                <h2 className="text-[42px] text-center py-8 notranslate font-semibold">${sub.maximumDeposit}</h2>
                            </header>
                            <div className="flex flex-col gap-2 pt-4">
                                <div className="flex justify-between items-center text-[14px]">
                                    <p className="font-semibold">Minimum Deposit:</p>
                                    <p className="notranslate">${sub.minimumDeposit}</p>
                                </div>
                                <div className="flex justify-between items-center text-[14px]">
                                    <p className="font-semibold">Maximum Deposit:</p>
                                    <p className="notranslate">${sub.maximumDeposit}</p>
                                </div>
                                <div className="flex justify-between items-center text-[14px]">
                                    <p className="font-semibold">ROI:</p>
                                    <p>{sub.rio}</p>
                                </div>
                                <div className="flex justify-between items-center text-[14px]">
                                    <p className="font-semibold">ROI Interval:</p>
                                    <p>{sub.rioInterval}</p>
                                </div>
                                <div className="flex justify-between items-center text-[14px]">
                                    <p className="font-semibold">Duration:</p>
                                    <p>{sub.duration}</p>
                                </div>
                            </div>
                            <div className="pt-5">
                                <input 
                                    name="amount"
                                    type="tel"
                                    placeholder={sub.maximumDeposit}  
                                    value={inputAmounts[sub._id] ?? ''}
                                    onChange={(e) => handleInputChange(e, sub._id, sub.maximumDeposit)}
                                    className="w-full px-4 h-[45px] outline-none rounded-full border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent placeholder-[#a3a8b0]" 
                                />
                            </div>
                            <div className="pt-8">
                                <ButtonSecondary
                                    onClick={() => joinPlanHandler(sub._id, sub.minimumDeposit)}
                                    className="w-full rounded-full h-[42px]"
                                    loading={variables?.livetradeId === sub._id && isPending} 
                                >
                                    Join Plan
                                </ButtonSecondary>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}