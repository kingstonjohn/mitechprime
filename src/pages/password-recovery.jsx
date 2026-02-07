/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Logo from "../components/logo";
import SEO from "../components/seo";
import { Padlock } from "../components/svgs";
import Box from "../layout/box";
import { MetaResponsiveViewportWidth } from "../constants/meta";
import { useState } from "react";
import OTPInput from "react-otp-input";
import validator from "validator";
import { useMutation } from "@tanstack/react-query";
import authService from "../services/auth";
import toast from "react-hot-toast";
import NetworkException from "../utils/networkException";
import GoogleTranslate from "../components/google-translate";
import { APP_NAME } from "../constants";


const views = {
    emailView: 'EMAIL-VIEW',
    otpView: 'OTP-VIEW',
    passwordView: 'PASSWORD-VIEW'
}

export default function PasswordRecovery() {

    const [view, setView] = useState(views.emailView)

    const [email, setEmail] = useState('')

    const viewsRenderer = () => {

        switch (view) {
            case views.emailView: {
                return (
                    <EmailView setView={setView} setEmail={setEmail} />
                )
            }
            case views.otpView: {
                return (
                    <OtpView setView={setView} email={email} />
                )
            }
            case views.passwordView: {
                return (
                    <PasswordView email={email} />
                )
            }
        }
    }

    return (
        <div className="min-h-[100vh]">
            <SEO title="Password Recovery">
                {MetaResponsiveViewportWidth}
            </SEO>
            <GoogleTranslate />
            <Box>
                <div className="py-24">
                    <div className="py-10 px-4 lg:px-10 bg-[#EDF0F5FF] w-full max-w-[600px] mx-auto rounded-[6px] grid gap-12 place-items-center">
                        <Logo />
                        <div>
                            <div className="flex items-center gap-6 pr-12 rounded-[100px] bg-[#58bd7d1a]">
                                <div className="h-[36px] w-[36px] rounded-[100%] bg-primary grid place-items-center">
                                    <Padlock />
                                </div>
                                <p className="text-[14px] text-[#23262f] font-semibold"><span className="text-primary">https://</span><span className="lowercase">{APP_NAME}</span>.com/password-recovery</p>
                            </div>
                            <p className="text-[#777e90] text-center pt-2 text-[14px]">Kindly make sure you are the same url above.</p>
                        </div>
                        {viewsRenderer()}
                    </div>
                </div>
                <div className="pt-10 pb-4 text-center text-[#758b9d] text-[14px]">
                    Copyright ©2023 {APP_NAME}
                </div>
            </Box>
        </div>
    )
}

const EmailView = ({ setView, setEmail }) => {

    const [formData, setFormData] = useState({
        email: '',
    })

    const formDataHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    let isFormDisabled = !validator.isEmail(formData.email)

    const { mutateAsync, isPending } = useMutation({
        mutationFn: (formData) => authService.sendEmailOtp(formData),
        onSuccess: (response) => {
            toast.success(response.data.message);
            setEmail(formData.email)
            setView(views.otpView)
        },
        onError: (error) => {
            new NetworkException(error).trigger()
        },
    });

    const submit = (e) => {
        e.preventDefault()

        mutateAsync(formData)
    }

    return (
        <form onSubmit={submit} className="flex flex-col gap-6 w-full max-w-[420px] mx-auto">
            <fieldset>
                <input 
                    value={formData.email} 
                    onChange={formDataHandler} 
                    name="email"
                    type="email" 
                    placeholder="Email address" 
                    className="w-full px-3 h-[45px] outline-none rounded-[4px] border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent placeholder-[#a3a8b0]" 
                />
            </fieldset>
            <Button 
                disabled={isFormDisabled} 
                type="submit"
                loading={isPending}
            >
                Reset Password
            </Button>
            <p className="text-[14px]">Remember it? <Link to="/login" className="font-medium hover:text-blue">Login</Link></p>
        </form>
    )
}

const OtpView = ({ setView, email }) => {

    const [otp, setOtp] = useState('');

    let isFormDisabled = otp.length < 4;

    const { mutateAsync, isPending } = useMutation({
        mutationFn: (formData) => authService.sendEmailOtpVerify(formData),
        onSuccess: (response) => {
            toast.success(response.data.message);
            setView(views.passwordView)
        },
        onError: (error) => {
            new NetworkException(error).trigger()
        },
    });

    const submit = (e) => {
        e.preventDefault()

        const payload = { email, otp }
        
        mutateAsync(payload)
    }

    return (
        <form onSubmit={submit} className="flex flex-col gap-6 w-full max-w-[420px] mx-auto">
            <fieldset>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    inputStyle="h-[50px] !w-[40px] outline-primary border-[#B6B1B1] border-[1px] rounded-[4px]"
                    containerStyle="max-w-max mx-auto gap-3"
                    renderInput={(props) => <input {...props} />}
                    shouldAutoFocus={true}
                />
            </fieldset>
            <Button
                type="submit"
                disabled={isFormDisabled}
                loading={isPending}
            >
                Verify Code
            </Button>
        </form>
    )
}

const PasswordView = ({ email }) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    })

    const formDataHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const { mutateAsync, isPending } = useMutation({
        mutationFn: (formData) => authService.passwordRecovery(formData),
        onSuccess: (response) => {
            localStorage.removeItem("access-token")
            toast.success(response.data.message);

            navigate('/login')
        },
        onError: (error) => {
            new NetworkException(error).trigger()
        },
    });

    const submit = (e) => {
        e.preventDefault()

        if(formData.password !== formData.confirmPassword){
            return toast.error("Password mismatch");
        }

        const payload = {
            password: formData.password,
            email,
        }

        mutateAsync(payload)
    }

    let isFormDisabled = !formData.password || !formData.confirmPassword

    return (
        <form onSubmit={submit} className="flex flex-col gap-6 w-full max-w-[420px] mx-auto">
            <fieldset>
                <input 
                    type="password"
                    name="password" 
                    value={formData.password}
                    onChange={formDataHandler}
                    placeholder="Create password" 
                    className="w-full px-3 h-[45px] outline-none rounded-[4px] border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent placeholder-[#a3a8b0]" 
                />
            </fieldset>
            <fieldset>
                <input 
                    type="password"
                    name="confirmPassword" 
                    value={formData.confirmPassword}
                    onChange={formDataHandler}
                    placeholder="Confirm password" 
                    className="w-full px-3 h-[45px] outline-none rounded-[4px] border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent placeholder-[#a3a8b0]" 
                />
            </fieldset>
            <Button 
                disabled={isFormDisabled}
                type="submit"
                loading={isPending}
            >
                Set New Password
            </Button>
        </form>
    )
}
