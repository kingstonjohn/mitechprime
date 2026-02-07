import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "../svgs";
import { cn } from "../../utils/cn";

/* eslint-disable react/prop-types */
export default function Input(props) {

    const { type, className, ...prop } = props;

    const [passwordVisibility, setPasswordVisibility] = useState(false);

    const togglePassswordVisibility = () => setPasswordVisibility((prev) => !prev);

    switch (type) {
        case 'password': {
            return (
                <div className="relative">
                    <input
                        className={cn("w-full h-[45px] outline-none rounded-[4px] border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent placeholder-[#a3a8b0] pl-3 pr-10", className)}
                        type={passwordVisibility ? 'text' : type}
                        {...prop}
                    />
                    <span onClick={togglePassswordVisibility} className="absolute right-[10px] top-[50%] translate-y-[-50%]">
                        {passwordVisibility ? <EyeIcon /> : <EyeSlashIcon />}
                    </span>
                </div>
            );
        }
        default: {
            return (
                <input
                    type={type}
                    className={cn("w-full px-3 h-[45px] outline-none rounded-[4px] border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent placeholder-[#a3a8b0]", className)}
                    {...prop}
                />
            );
        }
    }
}