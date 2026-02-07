import { useQuery } from "@tanstack/react-query";
import { useAuthStateContext } from "../../context/authState";
import liveTradeService from "../../services/livetrade";
import LineLoader from "../../components/loaders/line-loader";

export default function UserLiveTradingPlan() {

    const { state } = useAuthStateContext()

    const { data, isLoading, isError } = useQuery({
        queryKey: ["user-livetrade-plans"],
        queryFn: () => liveTradeService.get(state.user._id),
    });

    if (isLoading) {
        return (
            <LineLoader />
        )
    }

    if (isError) {
        return (
            <div className="p-5 text-dark">An error occurred while retrieving your live trades</div>
        )
    }

    const userLivetradeData = data?.data?.data

    return (
        <div className="p-5 flex flex-col gap-8">
            <header className="pb-[24px]">
                <h1 className="text-[24px] text-dark font-medium pt-2">My Live Trade Plans</h1>
            </header>
            <div className="grid sm:grid-cols-2 gap-5 md:grid-cols-3 max-w-[1600px]">
                {
                    userLivetradeData.length === 0 && (
                        <p className='text-[14px] text-dark'>No Active Investment Plan</p>
                    )
                }
                {
                    userLivetradeData.map((plan, i) => (
                        <div key={i} className="bg-[#fafafa] border border-[#efefef] hover:border-primary rounded-[16px] overflow-hidden">
                            <header className="p-5 mb-5 text-dark text-[15px] bg-[#000000AA]">
                                <h1>{plan.livetradeId.planName}</h1>
                            </header>
                            <div className="p-5 flex flex-col gap-4">
                                <div className="border-b-[1px] pb-2 border-b-white flex items-center justify-between text-dark text-[14px]">
                                    <p>Amount:</p>
                                    <p className="notranslate">${plan.amount}</p>
                                </div>
                                <div className="border-b-[1px] pb-2 border-b-white flex items-center justify-between text-dark text-[14px]">
                                    <p>ROI:</p>
                                    <p>{plan.livetradeId.rio}</p>
                                </div>
                                <div className="border-b-[1px] pb-2 border-b-white flex items-center justify-between text-dark text-[14px]">
                                    <p>ROI Interval:</p>
                                    <p>{plan.livetradeId.rioInterval}</p>
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