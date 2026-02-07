/* eslint-disable react/prop-types */
import { cn } from "../../utils/cn"
import TextareaAutosize from 'react-textarea-autosize';

export default function TextArea(props) {

    const { rows, className, ...prop } = props

    return (
        <TextareaAutosize
            className={cn("rounded-[4px] fizomarkt-scrollbar block w-full border-[#E2E2E2] border-[1px] hover:border-primary placeholder:text-[#595D62] bg-transparent px-[12px] outline-none text-[12px] lg:text-[14px] resize-none py-[10px] text-dark", className)}
            rows={rows ?? 1}
            {...prop}
        />
    )
}