/* eslint-disable react/prop-types */
import { cn } from "../utils/cn";

export default function Box({ className, children  }){

    return (
        <div className={cn("mx-auto max-w-[1500px] w-full px-5 lg:px-8", className)}>
            { children }
        </div>
    )
}