/* eslint-disable react/prop-types */
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Logo from "../components/logo";
import SEO from "../components/seo";
import Box from "../layout/box";
import Button from "../components/button";
import { useState } from "react";
import authService from "../services/auth";
import NetworkException from "../utils/networkException";
import toast from "react-hot-toast";
import { useAuthStateContext } from "../context/authState";
import OTPInput from "react-otp-input";
import { MetaResponsiveViewportWidth } from "../constants/meta";
import GoogleTranslate from "../components/google-translate";
import { APP_NAME } from "../constants";

export default function OtpVerification() {

    const [searchParams] = useSearchParams()

    const email = searchParams.get("email")

    return (
        <div className="min-h-[100vh]">
            <SEO title="Login">
                {MetaResponsiveViewportWidth}
            </SEO>
            <GoogleTranslate />
            <Box>
                <div className="py-24">
                    <div className="py-10 px-4 lg:px-10 bg-[#EDF0F5FF] w-full max-w-[450px] mx-auto rounded-[6px] grid gap-12 place-items-center">
                        <Logo />
                        <div>
                            <p className="text-[14px] mb-2">We sent a otp to your email to &nbsp;
                                <i className="text-primary">{email}</i>
                            </p>

                        </div>
                        <Form email={email} />
                    </div>
                </div>
                <div className="pt-10 pb-4 text-center text-[#758b9d] text-[14px]">
                    Copyright ©2023 {APP_NAME}
                </div>
            </Box>
        </div>
    )
}

const Form = ({ email }) => {

    const navigate = useNavigate()

    const { dispatch } = useAuthStateContext()

    const [loading, setLoading] = useState(false)

    const [otp, setOtp] = useState('');

    let isFormDisabled = otp.length < 4;

    const submit = async (e) => {
        e.preventDefault()

        setLoading(true);

        try {

            const payload = {
                email,
                otp,
            }

            let response = await authService.otpVerification(payload)
            console.log(response)
            console.log(response.data.data.user)
            toast.success(response.data.message)
            localStorage.setItem("access-token", response.data.data.token)
            dispatch({ type: "AUTH_VALID", payload: response.data.data.user })
            navigate('/dashboard')
        }
        catch (error) {
            console.log(error)
            new NetworkException(error).trigger()
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <form className="flex flex-col gap-6 w-full max-w-[375px] mx-auto" onSubmit={submit}>
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
            <div>
                <p className="text-center text-[14px]">Not you?&nbsp;<Link to="/login" className="hover:text-blue italic">Login</Link></p>
            </div>
            <Button className="h-[48px]" disabled={isFormDisabled} loading={loading}>Verify</Button>
        </form>
    )
}