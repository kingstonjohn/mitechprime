import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import investmentService from "../../services/investment";
import NetworkException from "../../utils/networkException";
import Loader from "../../components/loader";
import { useAuthStateContext } from "../../context/authState";
import ButtonSecondary from "../../components/button-secondary";
import { success } from "../../components/toast";

export default function InvestmentPlan() {

    const queryClient = useQueryClient()

    const { state, dispatch } = useAuthStateContext()

    const { data, isLoading, isError } = useQuery({
        queryKey: ["all-investment-plans"],
        queryFn: () => investmentService.all(),
    });

    const { mutateAsync, variables, isPending } = useMutation({
        mutationFn: (formData) => investmentService.join(formData),
        onSuccess: (response) => {
            queryClient.invalidateQueries(["user-investment-plans"])
            dispatch({ type: "SET_USER", payload: response.data.data })
            success(response.data.message)
        },
        onError: (error) => {
            new NetworkException(error).trigger()
        },
    });

    const investmentData = data?.data?.data

    const joinPlanHandler = (id) => {
        mutateAsync({ userId: state.user._id, investmentId: id })
    }

    if (isLoading) {
        return (
            <Loader />
        )
    }

    if (isError) {
        return <div className="px-2 py-5 text-dark">An error occurred while retrieving investment plans</div>
    }

    return (
        <div className="p-5 flex flex-col gap-8">
            <header className="pb-[24px]">
                <h1 className="text-[24px] text-dark font-medium pt-2">Available Investment Plans</h1>
            </header>
            <div className="grid sm:grid-cols-2 gap-5 md:grid-cols-3 max-w-[1600px]">
                {
                    investmentData.length === 0 && (
                        <p className='text-[14px] text-dark'>No Investment Plan</p>
                    )
                }
                {
                    investmentData.map(plan => (
                        <div key={plan._id} className="bg-white border border-[#efefef] hover:border-primary rounded-[16px] overflow-hidden">
                            <header className="p-5 mb-5 text-dark text-[16px] bg-[#fafafa] text-center font-bold">
                                <h1>{plan.level}</h1>
                            </header>
                            <div className="p-5 flex flex-col gap-4">
                                <div className="border-b-[1px] pb-2 border-b-[#f4f5f6] flex items-center justify-between text-dark text-[14px]">
                                    <p className="font-semibold">ROI:</p>
                                    <p>{plan.rio}</p>
                                </div>
                                <div className="border-b-[1px] pb-2 border-b-[#f4f5f6] flex items-center justify-between text-dark text-[14px]">
                                    <p className="font-semibold">Minimum:</p>
                                    <p className="notranslate">${plan.minimumDeposit}</p>
                                </div>
                                <div className="border-b-[1px] pb-2 border-b-[#f4f5f6] flex items-center justify-between text-dark text-[14px]">
                                    <p className="font-semibold">Maximum:</p>
                                    <p className="notranslate">${plan.maximumDeposit}</p>
                                </div>
                                <div className="border-b-[1px] pb-2 border-b-[#f4f5f6] text-dark text-[14px] flex items-center justify-between">
                                    <p className="font-semibold">{plan.tradeCommission}</p>
                                    <div>
                                        <img height={24} width={24} className="w-[24px] h-[24px]" alt="✅" draggable="false" tabIndex="-1" src="/icons/checked.png" />
                                    </div>
                                </div>
                                <div className="border-b-[1px] pb-2 border-b-[#f4f5f6] text-dark text-[14px] flex items-center justify-between">
                                    <p className="font-semibold">{plan.supportDuration}</p>
                                    <div>
                                        <img height={24} width={24} className="w-[24px] h-[24px]" alt="✅" draggable="false" tabIndex="-1" src="/icons/checked.png" />
                                    </div>
                                </div>
                                <div className="pt-8">
                                    <ButtonSecondary
                                        onClick={() => joinPlanHandler(plan._id)}
                                        className="w-full rounded-full h-[42px]"
                                        loading={variables?.investmentId === plan._id && isPending}
                                    >
                                        Join Plan
                                    </ButtonSecondary>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}