/* eslint-disable react/prop-types */
import { cn } from "../utils/cn"

export default function Button(props) {

    const { className, children, loading, disabled, ...prop } = props

    return (
        <button
            disabled={disabled || loading}
            onMouseDown={(e) => e.preventDefault()}
            className={cn("bg-primary font-medium text-white rounded-[6px] py-[12px] px-[38px] disabled:cursor-not-allowed disabled:bg-opacity-60 grid place-items-center", className)} {...prop}>
            <div className="flex items-center">
                {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                ) : children}
            </div>
        </button>
    )
}