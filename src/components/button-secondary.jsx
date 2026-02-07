/* eslint-disable react/prop-types */
import { cn } from "../utils/cn"

export default function ButtonSecondary(props) {

    const { className, children, loading, disabled, ...prop } = props

    return (
        <button
            disabled={disabled || loading}
            className={cn("disabled:cursor-not-allowed disabled:bg-opacity-60 text-white py-2 px-4 bg-[#1761FD] rounded-[4px] text-[14px] grid place-items-center", className)} {...prop}>
                {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                ) : children}
        </button>
    )
}