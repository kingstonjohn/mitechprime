/* eslint-disable react/prop-types */
export default function Checkbox({ checked, setChecked }){

    const checkedHandler = () => {
        setChecked(prev => !prev)
    }

    return (
        <div className={`w-[14px] h-[14px] shrink-0 mt-[5px] self-start rounded-[2px] border-[1px] border-primary ${checked ? "bg-primary" : ""}`} onClick={checkedHandler}>
            {
                checked && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-white"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                )
            }
        </div>
    )
}