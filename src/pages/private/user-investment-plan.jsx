import { useQuery } from "@tanstack/react-query";
import investmentService from "../../services/investment";
import { useAuthStateContext } from "../../context/authState";
import LineLoader from "../../components/loaders/line-loader";

export default function UserInvestmentPlan() {

    const { state } = useAuthStateContext()

    const { data, isLoading, isError } = useQuery({
        queryKey: ["user-investment-plans"],
        queryFn: () => investmentService.get(state.user._id),
    });

    const userInvestmentData = data?.data?.data

    if (isLoading) {
        return (
            <LineLoader />
        )
    }

    if(isError){
        return (
            <div className="text-dark p-5">An error occurred while loading your investment plans</div>
        )
    }

    return (
        <div className="p-5 flex flex-col gap-8">
            <header className="pb-[24px]">
                <h1 className="text-[24px] text-dark font-medium pt-2">My Investment Plans</h1>
            </header>
            <div className="grid sm:grid-cols-2 gap-5 md:grid-cols-3 max-w-[1600px]">
                {
                    userInvestmentData.length === 0 && (
                        <p className='text-[14px] text-dark'>No Active Investment Plan</p>
                    )
                }
                {
                    userInvestmentData.map(plan => (
                        <div key={plan._id} className="bg-[#fafafa] border border-[#efefef] hover:border-primary rounded-[16px] overflow-hidden">
                            <header className="p-5 mb-5 text-dark text-[15px] bg-[#fafafa] text-center font-bold">
                                <h1>{plan.investmentId.level}</h1>
                            </header>
                            <div className="p-5 flex flex-col gap-4">
                                <div className="border-b-[1px] pb-2 border-b-white flex items-center justify-between text-dark text-[14px]">
                                    <p>ROI:</p>
                                    <p>{plan.investmentId.rio}</p>
                                </div>
                                <div className="border-b-[1px] pb-2 border-b-white flex items-center justify-between text-dark text-[14px]">
                                    <p>Minimum:</p>
                                    <p className="notranslate">${plan.investmentId.minimumDeposit}</p>
                                </div>
                                <div className="border-b-[1px] pb-2 border-b-white flex items-center justify-between text-dark text-[14px]">
                                    <p>Maximum:</p>
                                    <p className="notranslate">${plan.investmentId.maximumDeposit}</p>
                                </div>
                                <div className="border-b-[1px] pb-2 border-b-white text-dark text-[14px]">
                                    <p>{plan.investmentId.tradeCommission}</p>
                                </div>
                                <div className="border-b-[1px] pb-2 border-b-white text-dark text-[14px]">
                                    <p>{plan.investmentId.supportDuration}</p>
                                </div>
                                {
                                    plan.isActive ? (
                                        <div className="pt-8 grid place-items-cente text-center text-green-400 font-medium">
                                            ACTIVE!!
                                        </div>
                                    ) : (
                                        <div className="pt-8 grid place-items-cente text-center text-[#EA5353]  font-medium">
                                            ENDED!!
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}