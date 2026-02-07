/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/logo";
import SEO from "../components/seo";
import { Padlock } from "../components/svgs";
import { useMediaQuery } from 'react-responsive'
import { FlagIcon } from "react-flag-kit";
import Button from "../components/button";
import Checkbox from "../components/checkbox";
import { Fragment, useState } from "react";
import Sheet from 'react-modal-sheet';
import countryData from '../data/country.json'
import validator from 'validator';
import { Dialog, Transition } from "@headlessui/react";
import authService from "../services/auth";
import NetworkException from "../utils/networkException";
import { MetaResponsiveViewportWidth } from "../constants/meta";
import Input from "../components/input/input";
import { useAuthStateContext } from "../context/authState";
import GoogleTranslate from "../components/google-translate";
import { APP_NAME } from "../constants";
import { error, success } from "../components/toast";
import Select from 'react-select';
import { useQuery } from "@tanstack/react-query";

export default function Register() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Register">
                {MetaResponsiveViewportWidth}
            </SEO>
            <GoogleTranslate />
            <div className="mx-auto max-w-[1500px] w-full min-[425px]:px-5 lg:px-8">
                <div className="py-24">
                    <div className="py-10 px-3 lg:px-10 bg-[#EDF0F5FF] w-full max-w-[600px] mx-auto rounded-[6px] grid gap-12 place-items-center">
                        <Logo />
                        <div>
                            <div className="flex items-center gap-2 pr-4 rounded-[100px] bg-[#58bd7d1a]">
                                <div className="h-[36px] w-[36px] rounded-[100%] bg-primary grid place-items-center">
                                    <Padlock />
                                </div>
                                <p className="text-[14px] text-[#23262f] font-semibold"><span className="text-primary">https://</span><span className="lowercase">{APP_NAME}</span>.com/register</p>
                            </div>
                            <p className="text-[#777e90] text-center pt-2 text-[14px]">Kindly make sure you are the same url above.</p>
                        </div>
                        <p className="text-[14px]">Already registered? <Link to="/login" className="font-medium hover:text-blue">Login</Link></p>
                        <Form />
                    </div>
                </div>
                <div className="pt-10 pb-4 text-center text-[#758b9d] text-[14px]">
                    Copyright ©2023 {APP_NAME}
                </div>
            </div>
        </div>
    )
}

const selectColourStyles = {
    control: (styles, state) => (
        {
            ...styles,
            backgroundColor: 'transparent',
            minHeight: '45px', // Ensures minimum height
            height: '45px',
            boxShadow: state.isFocused ? '0 0 0 0.1px #35B972' : styles.boxShadow,
        }),
    option: (styles) => {
        return {
            ...styles,
        };
    },
    input: (styles) => ({ ...styles, innerHeight: '45px', outerHeight: "45px" }),
    placeholder: (styles) => ({ ...styles, }),
    singleValue: (styles) => ({ ...styles, }),
};

const Form = () => {

    const navigate = useNavigate()

    const { dispatch } = useAuthStateContext()

    const { data, isLoading } = useQuery({
        queryKey: [`referral-codes`],
        queryFn: () => authService.allReferralCodes(),
    });

    let [loading, setLoading] = useState(false)

    let [checked, setChecked] = useState(false)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [referralCode, setReferralCode] = useState("")

    const [countryCode, setCountryCode] = useState({
        isoCode: 'US',
        dialCode: '+1'
    });

    const countryCodeHandler = (isoCode, dialCode) => setCountryCode({ isoCode, dialCode })

    const formDataHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    let isFormDisabled = !formData.firstName.trim() || !formData.lastName.trim() || !validator.isEmail(formData.email) || !formData.phoneNumber.trim() || !formData.password.trim() || !formData.confirmPassword.trim() || !checked;

    const submit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            return error("Password mismatch!")
        }

        const payload = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            countryCode: countryCode.dialCode,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            password: formData.password,
            referralCode: referralCode,
        }

        setLoading(true)

        try {
            let response = await authService.register(payload)
            console.log(response)
            success(response.data.message)
            // return navigate(`/otp-verification?email=${formData.email}`) // revert to back
            localStorage.setItem("access-token", response.data.data.token)
            dispatch({ type: "AUTH_VALID", payload: response.data.data.user })
            navigate('/dashboard')
        }
        catch (err) {
            console.log(err)
            new NetworkException(err).trigger();
        }
        finally {
            setLoading(false)
        }
    }

    const referralCodesData = data?.data?.data;

    const referralCodesOptions = referralCodesData && referralCodesData.map((data) => {
        return {
            value: data.referralCode,
            label: data.referralCode,
            id: data._id,
        }
    })

    return (
        <form className="flex flex-col gap-6 w-full max-w-[420px] mx-auto" onSubmit={submit}>
            <fieldset>
                <input name="firstName" value={formData.firstName} onChange={formDataHandler} placeholder="First name" className="w-full px-2 h-[45px] outline-none rounded-[4px] border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent placeholder-[#a3a8b0]" />
            </fieldset>
            <fieldset>
                <input name="lastName" value={formData.lastName} onChange={formDataHandler} placeholder="Last name" className="w-full px-2 h-[45px] outline-none rounded-[4px] border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent placeholder-[#a3a8b0]" />
            </fieldset>
            <fieldset>
                <input name="email" value={formData.email} onChange={formDataHandler} placeholder="Email address" className="w-full px-2 h-[45px] outline-none rounded-[4px] border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent placeholder-[#a3a8b0]" />
            </fieldset>
            <fieldset>
                <CountryCodePhoneNumberInput formData={formData} formDataHandler={formDataHandler} countryCode={countryCode} countryCodeHandler={countryCodeHandler} />
            </fieldset>
            <fieldset>
                <Input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={formDataHandler}
                    placeholder="Password"
                />
            </fieldset>
            <fieldset>
                <Input
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={formDataHandler}
                    placeholder="Confirm password"
                />
            </fieldset>
            <div>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder="Referral Code (Optional)"
                    onChange={(data) => setReferralCode(data.value)}
                    isLoading={isLoading}
                    isClearable={true}
                    isSearchable={true}
                    name="codes"
                    options={referralCodesOptions}
                    styles={selectColourStyles}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 4,
                        innerHeight: '45px',
                        colors: {
                            ...theme.colors,
                            primary: '#35B972',
                        },
                    })}
                />
            </div>
            <div className="flex gap-3 items-center">
                <Checkbox checked={checked} setChecked={setChecked} />
                <p className="text-[14px] mt-[1.5px] text-[#777e90]">I agree to {APP_NAME} <Link to="/terms-and-conditions" className="text-primary">Terms &amp; Conditions</Link></p>
            </div>
            <Button
                className="h-[48px]"
                disabled={isFormDisabled}
                loading={loading}
            >
                Register
            </Button>
        </form>
    )
}

const CountryCodePhoneNumberInput = ({ countryCode, countryCodeHandler, formDataHandler, formData }) => {

    const [isModalVisible, setModalVisibility] = useState(false)

    const toggleModalVisibility = () => setModalVisibility(prev => !prev);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
    })

    const selectCountryCode = (isoCode, dialCode) => {
        countryCodeHandler(isoCode, dialCode)
        toggleModalVisibility()
    }

    return (
        <>
            <div>
                <div className="w-full px-2 h-[45px] rounded-[4px] flex items-center gap-2 border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent">
                    <div className="w-max h-[28px] flex items-center gap-[5px]">
                        <FlagIcon code={countryCode.isoCode} size={24} className="rounded-[4px] cursor-pointer" onClick={toggleModalVisibility} />
                        <p className="text-[#82868B] text-[14px]">{countryCode.dialCode}</p>
                    </div>
                    <input name="phoneNumber" value={formData.phoneNumber} onChange={formDataHandler} placeholder="Phone Number" className="outline-none bg-transparent flex-1 placeholder-[#a3a8b0]" />
                </div>
            </div>
            {
                isModalVisible && (
                    isDesktopOrLaptop ? (
                        <Transition appear show={isModalVisible} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={toggleModalVisibility}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black/25" />
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-3 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel className="w-full max-h-[400px] max-w-md transform overflow-hidden rounded-2xl bg-white py-6 px-3 text-left align-middle shadow-xl transition-all {APP_NAME}-modal-scrollbar overflow-y-auto">
                                                {
                                                    countryData.map((country, index) => (
                                                        <div key={index}
                                                            className="py-2 px-3 flex items-center justify-between hover:bg-[#00000006]"
                                                            onClick={() => selectCountryCode(country.isoCode, country.dialCode)}
                                                        >
                                                            <div className="w-max h-[28px] flex items-center gap-3">
                                                                <FlagIcon code={country.isoCode} size={24} className="rounded-[4px] cursor-pointer" onClick={toggleModalVisibility} />
                                                                <p className="text-[#82868B] text-[14px]">{country.name}</p>
                                                            </div>
                                                            <p className="text-[#82868B] text-[14px]">{country.dialCode}</p>
                                                        </div>
                                                    ))
                                                }
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    ) : (
                        <Sheet
                            isOpen={isModalVisible}
                            onClose={toggleModalVisibility}
                            snapPoints={[0.5, 0]}
                        >
                            <Sheet.Container className='!rounded-t-[20px]'>
                                <Sheet.Header />
                                <Sheet.Content>
                                    <Sheet.Scroller className='pb-8' draggableAt="both">
                                        {
                                            countryData.map((country, index) => (
                                                <div key={index}
                                                    className="py-2 px-3 flex items-center justify-between hover:bg-[#00000006]"
                                                    onClick={() => selectCountryCode(country.isoCode, country.dialCode)}
                                                >
                                                    <div className="w-max h-[28px] flex items-center gap-3">
                                                        <FlagIcon code={country.isoCode} size={24} className="rounded-[4px] cursor-pointer" onClick={toggleModalVisibility} />
                                                        <p className="text-[#82868B] text-[14px]">{country.name}</p>
                                                    </div>
                                                    <p className="text-[#82868B] text-[14px]">{country.dialCode}</p>
                                                </div>
                                            ))
                                        }
                                    </Sheet.Scroller>
                                </Sheet.Content>
                            </Sheet.Container>
                            <Sheet.Backdrop />
                        </Sheet>
                    )
                )
            }
        </>
    )
}