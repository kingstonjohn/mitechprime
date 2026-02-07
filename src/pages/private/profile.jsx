/* eslint-disable react/prop-types */
import { useState } from "react"
import Button from "../../components/button"
import Input from "../../components/input/input"
import { CheckIcon, ChevronDownIcon, CloseIcon } from "../../components/svgs"
import { useAuthStateContext } from "../../context/authState"
import { formatDate } from "../../utils/helpers"
import { useMutation, useQuery } from "@tanstack/react-query"
import { error, success } from "../../components/toast"
import NetworkException from "../../utils/networkException"
import userService from "../../services/user"
import ButtonSecondary from "../../components/button-secondary"
import ModalDialog from "../../components/modals/modal-dialog"
import profitService from "../../services/profit"
import LineLoader from "../../components/loaders/line-loader"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { cn } from "../../utils/cn"
import depositService from "../../services/deposit"
import preferenceService from "../../services/preference"

export default function Profile() {

    const { state } = useAuthStateContext()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [isPreferenceModalOpen, setIsPreferenceModalOpen] = useState(false)

    const { data, isLoading, isError } = useQuery({
        queryKey: ["user-profits"],
        queryFn: () => profitService.all(state?.user?._id)
    })

    const { data: _depositData } = useQuery({
        queryKey: ["all-deposit-methods"],
        queryFn: () => depositService.all(),
    });

    const { mutateAsync } = useMutation({
        mutationFn: (formData) => preferenceService.set(formData,),
        onSuccess: (response) => {
            success(response.data.message);
        },
        onError: (error) => {
            new NetworkException(error).trigger()
        },
    });

    const depositData = _depositData?.data?.data

    const profitData = data?.data?.data

    const openModal = () => setIsModalOpen(true)

    const openPreferenceModal = () => setIsPreferenceModalOpen(true)

    const closeModal = () => setIsModalOpen(false)

    const closePreferenceModal = () => setIsPreferenceModalOpen(false)

    const uid = state.user._id
    const firstName = state.user.firstName
    const lastName = state.user.lastName
    const username = firstName + " " + lastName
    const email = state.user.email
    const phoneNumber = state.user.countryCode + state.user.phoneNumber
    const kycVerificationStatus = state.user.kycVerification
    const joinDate = state.user.createdAt
    const totalProfit = state.user.totalProfit
    const preference = state.user.preference

    const [selected, setSelected] = useState(preference)

    const onSelect = (value) => {
        setSelected(value)

        const payload = {
            uid: state.user._id,
            preference: value,
        }

        mutateAsync(payload)
    }

    return (
        <>
            <div className="p-5 flex flex-col gap-8">
                <header className="pt-2">
                    <h1 className="text-[24px] text-dark font-medium">Profile</h1>
                </header>
                <div className="flex flex-col lg:flex-row gap-5 w-full text-inter">
                    <div className="flex flex-col gap-5 flex-1">
                        <div className="w-full bg-[#fafafa] border border-[#efefef] hover:border-primary rounded-[5px] p-5 flex flex-col gap-3">
                            <div className="flex justify-between">
                                <div>
                                    <div className="w-[80px] h-[80px] grid place-items-center bg-[#1761FD] rounded-[10px] mb-2">
                                        <span className="material-icons text-white text-[32px] notranslate"> person </span>
                                    </div>
                                    <h1 className="text-dark text-[19px]">{username}</h1>
                                </div>
                                <div className="notranslate">
                                    <span onClick={openPreferenceModal} className="text-primary hover:text-dark material-icons-outlined cursor-pointer">
                                        settings
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label className="text-ash text-[14px]">Email address</label>
                                <p className="text-dark font-medium text-[14px] notranslate">{email}</p>
                            </div>
                            <div>
                                <label className="text-ash text-[14px]">Phone Number</label>
                                <p className="text-dark font-medium text-[14px] notranslate">{phoneNumber}</p>
                            </div>
                            <div>
                                <label className="text-ash text-[14px] mb-1 block">KYC Verification Status</label>
                                {
                                    kycVerificationStatus === "unverified" && (
                                        <button className="text-white rounded-[4px] px-2 py-[5px] bg-[#EA5353] flex items-center gap-2">
                                            <span className="material-icons-outlined notranslate h-[18px] w-[18px] text-[18px]" >
                                                close
                                            </span>
                                            <span className="text-[12px] capitalize">KYC: {kycVerificationStatus}</span>
                                        </button>
                                    )
                                }
                                {
                                    kycVerificationStatus === "verifying" && (
                                        <button className="text-white rounded-[4px] px-2 py-[5px] bg-[#FFB822] flex items-center gap-2">
                                            <span className="material-icons-outlined notranslate h-[18px] w-[18px] text-[18px]" >
                                                hourglass_empty
                                            </span>
                                            <span className="text-[12px] capitalize">KYC: {kycVerificationStatus}</span>
                                        </button>
                                    )
                                }
                                {
                                    kycVerificationStatus === "verified" && (
                                        <button className="text-white rounded-[4px] px-2 py-[5px] bg-[#00C389] flex items-center gap-2">
                                            <CheckIcon />
                                            <span className="text-[12px] capitalize">KYC: {kycVerificationStatus}</span>
                                        </button>
                                    )
                                }
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <label className="text-ash text-[14px]">Total Profit</label>
                                    <p className="text-dark font-medium text-[14px] notranslate">${Number(totalProfit).toFixed(2)}</p>
                                </div>
                                <ButtonSecondary
                                    type="button"
                                    className="self-end border border-[#efefef] hover:border-primary bg-white text-[#2E6EDF] text-[12px] py-0 h-[30px]"
                                    onClick={openModal}
                                >
                                    View profit
                                </ButtonSecondary>
                            </div>
                            <div>
                                <label className="text-ash text-[14px]">Join Date</label>
                                <p className="text-dark font-medium text-[14px]">{formatDate(joinDate)}</p>
                            </div>
                        </div>
                        <ChangeName
                            firstName={firstName}
                            lastName={lastName}
                            uid={uid}
                        />
                    </div>
                    <div className="flex-1">
                        <ChangePassword
                            uid={uid}
                        />
                    </div>
                </div>
            </div>
            <ModalDialog isOpen={isModalOpen} closeModal={closeModal} className="profit-gradient">
                <div className="flex justify-end mb-2">
                    <CloseIcon onClick={closeModal} />
                </div>
                <header className="mb-4">
                    <h1 className="text-white font-medium">Total Profit</h1>
                </header>
                <div className="text-white text-[14px]">
                    {
                        isLoading && <LineLoader />
                    }
                    {
                        isError && <p className="text-white">An error occurred while loading profit data</p>
                    }
                    {
                        profitData?.length === 0 && <p className="text-white">You don&rsquo;t have any profits</p>
                    }
                    {
                        profitData && profitData?.length !== 0 && (
                            <>
                                <header className="px-2 py-2 gap-[5px] grid grid-cols-[0.25fr_1fr_2fr] mb-2 border-b-[#f4f5f6] border-b-[1px]">
                                    <div className="flex items-center">
                                        <div className="h-[6px] w-[6px] bg-white rotate-45"></div>
                                    </div>
                                    <h2>Amount</h2>
                                    <h2>Date</h2>
                                </header>
                                <div className="flex flex-col gap-2 [&>*:nth-child(even)]:bg-black">
                                    {
                                        profitData?.map((data, i) => (
                                            <div key={i} className="rounded-[4px] px-2 py-2 gap-[5px] grid grid-cols-[0.25fr_1fr_2fr] text-[12px] lg:text-[14px]">
                                                <div className="flex items-center">
                                                    <div className="h-[6px] w-[6px] bg-primary rotate-45"></div>
                                                </div>
                                                <div className="text-[#12E072] font-medium notranslate">+${Number(data?.amount).toFixed(2)}</div>
                                                <div className="text-white">{data?.date ? data?.date : formatDate(data.createdAt)}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        )
                    }
                </div>
            </ModalDialog>
            <ModalDialog isOpen={isPreferenceModalOpen} closeModal={closePreferenceModal} className="profit-gradient">
                <div className="flex justify-end mb-2">
                    <CloseIcon onClick={closePreferenceModal} />
                </div>
                <header className="mb-4">
                    <h1 className="text-white font-medium">Preference</h1>
                </header>
                <div className="text-white text-[14px] h-[180px] relative">
                    <Listbox value={selected} onChange={onSelect}>
                        <ListboxButton
                            className={cn(
                                'relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                        >
                            {selected}
                            <ChevronDownIcon
                                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                                aria-hidden="true"
                            />
                        </ListboxButton>
                        <ListboxOptions
                            anchor="bottom"
                            transition
                            className='w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 custom-scroll-bar h-[140px]'
                        >
                            {[{ _id: 'None', name: 'None' }, ...(Array.isArray(depositData) ? depositData : [])]?.map((data) => (
                                <ListboxOption
                                    key={data._id}
                                    value={data.name}
                                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                                >
                                    <div className="text-sm/6 text-white">{data.name}</div>
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Listbox>
                </div>
            </ModalDialog>
        </>
    )
}

const ChangeName = ({ firstName, lastName, uid }) => {

    const { dispatch } = useAuthStateContext()

    const [_firstName, setFirstName] = useState(firstName)
    const [_lastName, setLastName] = useState(lastName)

    const { mutateAsync, isPending } = useMutation({
        mutationFn: (formData) => userService.updateProfileName(formData),
        onSuccess: (response) => {
            console.log(response)
            success(response.data.message);
            dispatch({ type: "SET_USER", payload: response.data.data })
        },
        onError: (error) => {
            new NetworkException(error).trigger()
        },
    });

    const updateUserName = (e) => {
        e.preventDefault();

        const payload = {
            firstName: _firstName,
            lastName: _lastName,
            uid,
        }
        mutateAsync(payload)
    }

    return (
        <div className="w-full bg-[#fafafa] border border-[#efefef] hover:border-primary rounded-[5px] p-5 flex flex-col gap-3">
            <h1 className="text-dark mb-2 font-medium">Update Profile Name</h1>
            <form onSubmit={updateUserName} className="flex flex-col gap-5">
                <fieldset>
                    <label className="text-dark text-[14px] mb-[2px] inline-block">First Name</label>
                    <Input
                        value={_firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="text-dark text-[14px]"
                        placeholder="Enter first name"
                    />
                </fieldset>
                <fieldset>
                    <label className="text-dark text-[14px] mb-[2px] inline-block">Last Name</label>
                    <Input
                        value={_lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="text-dark text-[14px]"
                        placeholder="Enter last name"
                    />
                </fieldset>
                <div>
                    <Button
                        className="text-[15px] py-[10px] h-[40px] w-[180px]"
                        type="submit"
                        loading={isPending}
                    >
                        Save
                    </Button>
                </div>
            </form>
        </div>
    )
}

const ChangePassword = ({ uid }) => {

    const initialState = {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    }

    const [formData, setFormData] = useState(initialState)

    const formDataHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const clearForm = () => {
        setFormData(initialState)
    }

    const { mutateAsync, isPending } = useMutation({
        mutationFn: (formData) => userService.updateUserPassword(formData),
        onSuccess: (response) => {
            console.log(response)
            success(response.data.message);
            clearForm()
        },
        onError: (error) => {
            new NetworkException(error).trigger()
        },
    });

    const updatePassword = (e) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmNewPassword) {
            return error("Password does not match");
        }

        const payload = {
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword,
            uid,
        }
        mutateAsync(payload)
    }

    return (
        <div className="w-full bg-[#fafafa] border border-[#efefef] hover:border-primary rounded-[5px] p-5 flex flex-col gap-3">
            <h1 className="text-dark mb-2 font-medium">Change Password</h1>
            <form onSubmit={updatePassword} className="flex flex-col gap-5">
                <fieldset>
                    <label className="text-dark text-[14px] mb-[2px] inline-block">Old Password</label>
                    <Input
                        name="oldPassword"
                        value={formData.oldPassword}
                        onChange={formDataHandler}
                        type="password"
                        className="text-dark text-[14px]"
                        placeholder="Enter password"
                    />
                </fieldset>
                <fieldset>
                    <label className="text-dark text-[14px] mb-[2px] inline-block">New Password</label>
                    <Input
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={formDataHandler}
                        type="password"
                        className="text-dark text-[14px]"
                        placeholder="Enter password"
                    />
                </fieldset>
                <fieldset>
                    <label className="text-dark text-[14px] mb-[2px] inline-block">Confirm New Password</label>
                    <Input
                        name="confirmNewPassword"
                        value={formData.confirmNewPassword}
                        onChange={formDataHandler}
                        type="password"
                        className="text-dark text-[14px]"
                        placeholder="Enter password"
                    />
                </fieldset>
                <div>
                    <Button
                        className="text-[15px] py-[10px] px-[48px] w-[180px] h-[40px]"
                        loading={isPending}
                        type="submit"
                    >
                        Save
                    </Button>
                </div>
            </form>
        </div>
    )
}