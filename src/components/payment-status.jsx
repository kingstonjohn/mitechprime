import { PAYMENT_STATUS } from "../constants"
import { cn } from "../utils/cn"

/* eslint-disable react/prop-types */
export default function PaymentStatus({ status, display }) {

    switch (status) {
        case PAYMENT_STATUS.Pending: {
            return (
                <button
                    className={cn("text-[#ffb822] text-[12px] px-2 rounded-[4px] bg-[#ffb82226] max-w-max", display === "small" ? "py-[1px]" : "py-[4px]")}
                >
                    {status}
                </button>
            )
        }
        case PAYMENT_STATUS.Success: {
            return (
                <button
                    className={cn("text-[#0FAF59] text-[12px] px-2 rounded-[4px] bg-[#0FAF5926] max-w-max", display === "small" ? "py-[1px]" : "py-[4px]")}
                >
                    { status }
                </button>
            )
        }
        case PAYMENT_STATUS.Failed: {
            return (
                <button
                    className={cn("text-[#EA5353] text-[12px] px-2 rounded-[4px] bg-[#EA535326] max-w-max", display === "small" ? "py-[1px]" : "py-[4px]")}
                >
                    { status }
                </button>
            )
        }
        case PAYMENT_STATUS.Declined: {
            return (
                <button
                    className={cn("text-[#ffb822] text-[12px] px-2 py-[4px] rounded-[4px] bg-[#ffb82226] max-w-max", display === "small" ? "py-[1px]" : "py-[4px]")}
                >
                    { status }
                </button>
            )
        }
        default: {
            return (
                <button
                    className={cn("text-[#ffb822] text-[12px] px-2 rounded-[4px] bg-[#ffb82226] max-w-max", display === "small" ? "py-[1px]" :" py-[4px]")}
                >
                    { PAYMENT_STATUS.Pending }
                </button>
            )
        }
    }
}