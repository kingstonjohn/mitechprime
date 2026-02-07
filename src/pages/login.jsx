import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/logo";
import SEO from "../components/seo";
import { Padlock } from "../components/svgs";
import Box from "../layout/box";
import Button from "../components/button";
import Checkbox from "../components/checkbox";
import { useState } from "react";
import validator from "validator";
import authService from "../services/auth";
import NetworkException from "../utils/networkException";
import { useAuthStateContext } from "../context/authState";
import { MetaResponsiveViewportWidth } from "../constants/meta";
import Input from "../components/input/input";
import GoogleTranslate from "../components/google-translate";
import { APP_NAME } from "../constants";
import { success } from "../components/toast";

export default function Login() {

    return (
        <div className="min-h-[100vh]">
            <SEO title="Login">
                {MetaResponsiveViewportWidth}
            </SEO>
            <GoogleTranslate />
            <Box>
                <div className="py-24">
                    <div className="py-10 px-4 lg:px-10 bg-[#EDF0F5FF] w-full max-w-[600px] mx-auto rounded-[6px] grid gap-12 place-items-center">
                        <Logo />
                        <div>
                            <div className="flex items-center gap-2 pr-4 rounded-[100px] bg-[#58bd7d1a]">
                                <div className="h-[36px] w-[36px] rounded-[100%] bg-primary grid place-items-center">
                                    <Padlock />
                                </div>
                                <p className="text-[14px] text-[#23262f] font-semibold"><span className="text-primary">https://</span><span className="lowercase">{APP_NAME}</span>.com/login</p>
                            </div>
                            <p className="text-[#777e90] text-center pt-2 text-[14px]">Kindly make sure you are the same url above.</p>
                        </div>
                        <p className="text-[14px]">Not registered? <Link to="/register" className="font-medium hover:text-blue">Sign up</Link></p>
                        <Form />
                    </div>
                </div>
                <div className="pt-10 pb-4 text-center text-[#758b9d] text-[14px]">
                    Copyright ©2023 {APP_NAME}
                </div>
            </Box>
        </div>
    )
}

const Form = () => {

    const navigate = useNavigate()

    const { dispatch } = useAuthStateContext()

    const [loading, setLoading] = useState(false)

    let [checked, setChecked] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const formDataHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    let isFormDisabled = !validator.isEmail(formData.email) || !formData.password.trim();

    const submit = async (e) => {
        e.preventDefault()

        setLoading(true);

        try {
            console.log(formData)
            let response = await authService.login(formData)
            console.log(response)
            success(response.data.message)
            // if (response.data?.data?.isEmailVerified === false) {
            //     return navigate(`/otp-verification?email=${formData.email}`)
            // }
            localStorage.setItem("access-token", response.data.data.token)
            dispatch({ type: "AUTH_VALID", payload: response.data.data.user })
            navigate('/dashboard')
        }
        catch (error) {
            new NetworkException(error).trigger()
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <form className="flex flex-col gap-6 w-full max-w-[420px] mx-auto" onSubmit={submit}>
            <fieldset>
                <input value={formData.email} name="email" onChange={formDataHandler} placeholder="Email Address" className="w-full px-3 h-[45px] outline-none rounded-[4px] border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent placeholder-[#a3a8b0]" />
            </fieldset>
            <fieldset>
                <Input
                    value={formData.password}
                    name="password"
                    onChange={formDataHandler}
                    placeholder="Password"
                    type="password"
                />
            </fieldset>
            <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <Checkbox checked={checked} setChecked={setChecked} />
                    <p className="text-[14px] mt-[1.5px] text-[#777e90]">Remember me</p>
                </div>
                <Link to="/password-recovery" className="text-[#777e90] text-[14px] text-primary hover:underline">Password recovery</Link>
            </div>
            <Button className="h-[48px]" disabled={isFormDisabled} loading={loading}>Sign In</Button>
        </form>
    )
}