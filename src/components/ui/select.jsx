/* eslint-disable react/prop-types */

import * as SelectPrimitive from "@radix-ui/react-select";
import * as React from "react";
import { ChevronDownIcon } from "../svgs";
import { cn } from "../../utils/cn";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(({ className, children, icon, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-[48px] w-full items-center justify-between rounded-[8px] border-[1px] border-[#D9D9D9] bg-white px-[16px] py-[16px] text-[16px] ring-offset-background placeholder:text-red-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 focus:border-primary text-gray",
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-[16px] text-left">
      {icon}
      {children}
    </div>
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon className="h-5 w-5" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDownIcon className="h-5 w-5 text-primary" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDownIcon className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[6rem] overflow-hidden rounded-[8px] border-[1px] bg-white border-[#D7DEFE] shadow-lg text-black data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef(({ className, childClassName,  children, icon, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative w-full cursor-pointer select-none items-center rounded-sm px-[4px] outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <div className={cn("flex items-center gap-[16px] py-[12px] w-full", childClassName)}>
      {icon}
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </div>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("mx-4 h-[1px] bg-[#D9D9D9]", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};


// <Select value={referralCode} onValueChange={(value) => setReferralCode(value) }>
//                     <SelectTrigger
//                         className="w-full h-[45px] text-[16px] bg-transparent border-[1px] border-[#a3a8b0] rounded-[4px]"
//                     >
//                         {referralCode ? <div>{referralCode}</div> : <div className="text-[#A4A4A4]">Referral Code (Optional)</div>}
//                     </SelectTrigger>
//                     <SelectContent className="flex flex-col px-[4px] py-[4px] gap-[4px] max-h-[280px] overflow-y-auto">
//                         {
//                             referralCodesData && referralCodesData.map((data) => (
//                                 <SelectItem
//                                     key={data._id}
//                                     value={data.referralCode}
//                                     childClassName="gap-[8px] px-[4px] py-[8px] hover:bg-[#E7F1FD] rounded-[4px]"
//                                 >
//                                     <div className="font-medium leading-[100%] text-[14px] text-[#333333] mb-[2px]">
//                                         {data.referralCode}
//                                     </div>
//                                 </SelectItem>
//                             ))
//                         }
//                         {
//                             referralCodesData?.length === 0 && (
//                               <div
//                                     className="gap-[8px] px-[4px] py-[8px] rounded-[4px]"
//                                 >
//                                     <div className="font-medium leading-[100%] text-[14px] text-[#333333] mb-[2px]">
//                                         Referral codes not available
//                                     </div>
//                                 </div>  
//                             )
//                         }
//                         {
//                             isError && (
//                               <div
//                                     className="gap-[8px] px-[4px] py-[8px] rounded-[4px]"
//                                 >
//                                     <div className="font-medium leading-[100%] text-[14px] text-[#333333] mb-[2px]">
//                                         An error occured!
//                                     </div>
//                                 </div>  
//                             )
//                         }
//                     </SelectContent>
//                 </Select>