/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query"
import transactionService from "../../services/transaction"
import { useAuthStateContext } from "../../context/authState"
import { formatDate } from "../../utils/helpers"
import PaymentStatus from "../../components/payment-status"
import LineLoader from "../../components/loaders/line-loader"
import { cn } from "../../utils/cn"

export default function TransactionHistory() {

    const { state } = useAuthStateContext()

    const uid = state.user._id

    const { data, isLoading, isError } = useQuery({
        queryKey: ["transaction-history"],
        queryFn: () => transactionService.all(uid)
    })

    if (isLoading) {
        return <LineLoader />
    }

    if (isError) {
        return <div className="px-2 py-5 text-dark">An error occurred while retrieving transaction history</div>
    }

    const transactionHistory = data?.data?.data

    return (
        <div className="p-5 flex flex-col gap-5">
            <header className="pb-[12px]">
                <h1 className="text-[24px] text-dark font-medium pt-2">Transaction History</h1>
            </header>
            {
                transactionHistory.length === 0 ? (
                    <div className="text-dark">No Transaction History</div>
                ) :

                    <div className="bg-[#fafafa] border border-[#efefef] hover:border-primary rounded-[16px] overflow-hidden">
                        <header className="px-3 md:px-4 py-3 text-[14px] text-dark border-b-[1px] border-b-[#eeeeee]">
                            <h1 className="font-semibold text-primary">Transactions</h1>
                        </header>
                        <div className="text-dark text-[14px] pt-3 pb-2 bg-white hidden md:block">
                            <header className="px-4 py-2 grid grid-cols-[50px_0.7fr_1fr_2fr_0.5fr] mb-2 font-semibold gap-2">
                                <h2 className="shrink-0 w-[40px]">&nbsp;</h2>
                                <h2>Amount</h2>
                                <h2>Payment Type</h2>
                                <h2>Date/Time</h2>
                                <h2>Status</h2>
                            </header>
                            <div className="flex flex-col gap-2">
                                {
                                    transactionHistory.map((data, i) => (
                                        <div key={i} className={cn("mx-4 py-2 grid grid-cols-[50px_0.7fr_1fr_2fr_0.5fr] items-center gap-2", i === transactionHistory.length - 1 ? "border-b border-b-transparent" : "border-b border-b-[#f4f5f6]")}>
                                            {
                                                data.transactionType === "deposit" ? (
                                                    <div>
                                                        <div className="h-[40px] w-[40px] rounded-full grid place-items-center bg-[#ecfaf5] text-green-600 text-[18px] font-medium text-center">↓</div>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <div className="bg-[#faecec] h-[40px] w-[40px] rounded-full grid place-items-center text-red-600 text-[18px] font-medium pb-[2px]">↑</div>
                                                    </div>
                                                )
                                            }
                                            <div className="notranslate">${data.amount}</div>
                                            <div>
                                                {data.type ?? data?.depositMethodId?.type ?? data?.walletType ?? ""}
                                            </div>
                                            <div>{formatDate(data.createdAt)}</div>
                                            <div>
                                                <PaymentStatus
                                                    status={data?.status}
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="text-dark text-[14px] pt-3 pb-2 bg-white block md:hidden">
                            <div className="flex flex-col gap-2">
                                {
                                    transactionHistory.map((data, i) => (
                                        <div key={i} className={cn("py-2 flex items-center gap-4 mx-3", i === transactionHistory.length - 1 ? "border-b border-b-transparent" : "border-b border-b-[#f4f5f6]" )}>
                                            {
                                                data.transactionType === "deposit" ? (
                                                    <div>
                                                        <div className="h-[45px] w-[45px] rounded-full grid place-items-center bg-[#ecfaf5] text-green-600 text-[18px] font-medium text-center">↓</div>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <div className="bg-[#faecec] h-[45px] w-[45px] rounded-full grid place-items-center text-red-600 text-[18px] font-medium pb-[2px]">↑</div>
                                                    </div>
                                                )
                                            }
                                            <div className="flex-1">
                                                <div>
                                                    <span>
                                                        {data.type ?? data?.depositMethodId?.type ?? data?.walletType ?? ""}
                                                    </span>
                                                </div>
                                                <p className="text-[12px]">{formatDate(data.createdAt)}</p>
                                            </div>
                                            <div>
                                                <div className="notranslate font-medium text-right pb-1">${data.amount}</div>
                                                <PaymentStatus
                                                    status={data?.status}
                                                    display="small"
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}