import { AnimatePresence, motion } from "framer-motion";
import { CancelIcon } from "../svgs";
import { cn } from "../../utils/cn";

// eslint-disable-next-line react/prop-types
export function Modal({ isOpen, onClose, children, className, cancelIcon }) {

    return (
        <AnimatePresence>
            {
                isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.75 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed z-[1000] inset-0 bg-black data-[state=open]:animate-overlay-show"
                            onClick={onClose}
                        />
                        <div className="fixed z-[1002] p-[16px] lg:p-[20px] left-0 top-0 h-screen w-screen overflow-y-auto grid place-items-center" onClick={onClose}>
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className={cn("bg-transparent h-max w-full max-w-[425px] rounded-[12px] bg-white p-[16px] shadow-xl focus:outline-none relative", className)}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button type="button" onClick={onClose} className="absolute right-[14px] top-[14px] cursor-pointer">
                                    {
                                        cancelIcon ? cancelIcon : <CancelIcon />
                                    }
                                </button>
                                {children}
                            </motion.div>
                        </div>
                    </>
                )
            }
        </AnimatePresence >
    )
}