import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CheckIcon } from "../../components/svgs"
import { useAuthStateContext } from "../../context/authState"
import Button from "../../components/button"
import kycService from "../../services/kyc"
import NetworkException from "../../utils/networkException"
import { error, success } from "../../components/toast"

export default function KycVerification() {

    const navigate = useNavigate()

    const { state } = useAuthStateContext()

    const user = state.user

    const kycVerificationStatus = user.kycVerification

    const [formData, setFormData] = useState({
        identificationType: user?.identificationType ?? '',
        identificationNumber: user?.identificationNumber ?? '',
        address: user?.address ?? '',
        city: user?.city ?? '',
        postalCode: user?.postalCode ?? '',
        state: user?.state ?? '',
    })

    const [loading, setLoading] = useState(false)

    const [image, setImage] = useState({
        frontImage: null,
        backImage: null,
        frontImagePreview: null,
        backImagePreview: null,
    })

    const formDataHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value.trim()
        }))
    }

    const imageHandler = (e, dir) => {
        const fileImg = e.target.files[0]

        try {
            if (dir === "front") {
                setImage(prev => ({
                    ...prev,
                    frontImage: fileImg,
                    frontImagePreview: URL.createObjectURL(fileImg)
                }))
            } else {
                setImage(prev => ({
                    ...prev,
                    backImage: fileImg,
                    backImagePreview: URL.createObjectURL(fileImg)
                }))
            }
        } catch (error) {
            console.log(error)
        }
    }

    const removeImage = (dir) => {
        if (dir === "front") {
            setImage(prev => ({
                ...prev,
                frontImage: null,
                frontImagePreview: null,
            }))
        } else {
            setImage(prev => ({
                ...prev,
                backImage: null,
                backImagePreview: null,
            }))
        }
    }

    const submit = async (e) => {
        e.preventDefault()

        if (!formData.identificationType || !formData.identificationNumber || !formData.address || !formData.city || !image.frontImage || !image.backImage) {
            return error("All fields required!");
        }

        try {
            setLoading(true)

            const cloudinaryUrl = `https://api.cloudinary.com/v1_1/destinyfelixkiisi/image/upload`;

            // Upload image to Cloudinary
            const image = new FormData();

            image.append('file', image.frontImage);
            image.append("upload_preset", "amc-study-system")
            image.append("cloud_name", "destinyfelixkiisi")
            image.append("folder", "amc-study-system")

            const frontImageUploadResponse = await fetch(cloudinaryUrl, {
                method: 'POST',
                body: image
            });

            const backImageUploadResponse = await fetch(cloudinaryUrl, {
                method: 'POST',
                body: backImageFormData
            });

            const frontImageResult = await frontImageUploadResponse.json();
            const backImageResult = await backImageUploadResponse.json();

            const payload = {
                ...formData,
                frontImage: frontImageResult.secure_url,
                backImage: backImageResult.secure_url,
                userId: user._id
            }

            console.log(payload)
            const response = await kycService.upload(payload)
            console.log(response)
            success(response.data.message)
            navigate('/dashboard')
        }
        catch (error) {
            console.error(error);
            throw new NetworkException(error).trigger()
        }
        finally {
            setLoading(false)
        }
    }

    const isFormDisabled = !formData.identificationType || !formData.identificationNumber || !formData.address || !formData.address || !formData.city || !formData.postalCode || !image.frontImage || !image.backImage


    return (
        <div className="p-5 flex flex-col gap-5">
            <section className="flex items-center justify-between">
                <div>&nbsp;</div>
                {
                    kycVerificationStatus === "unverified" && (
                        <button className="text-white rounded-[4px] px-2 py-[5px] bg-[#EA5353] flex items-center gap-2">
                            <span className="material-icons-outlined h-[18px] w-[18px] text-[18px]" >
                                close
                            </span>
                            <span className="text-[12px] capitalize">KYC: {kycVerificationStatus}</span>
                        </button>
                    )
                }
                {
                    kycVerificationStatus === "verifying" && (
                        <button className="text-white rounded-[4px] px-2 py-[5px] bg-[#FFB822] flex items-center gap-2">
                            <span className="material-icons-outlined h-[18px] w-[18px] text-[18px]" >
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
            </section>
            <div className="px-4 pt-2 pb-6 flex flex-col gap-8 w-full max-w-[1600px] bg-[#fafafa] border border-[#efefef] rounded-[4px]">
                <header className="pb-[12px]">
                    <h1 className="text-[24px] text-dark font-medium py-2">Upload KYC Document</h1>
                    <p className="text-dark text-[14px] py-2">Upload Your Documents Here</p>
                </header>
                {
                    kycVerificationStatus === "unverified" && (
                        <form className="grid md:grid-cols-2 gap-5" onSubmit={submit}>
                            <fieldset>
                                <label className="inline-block mb-2 text-[14px] text-dark text-[#dddddd]">
                                    Front page
                                </label>
                                <div className="file-upload-wrapper overflow-hidden h-[200px] bg-white border-[2px] border-dashed border-[#e3ebf6] relative group">
                                    <input accept="image/*" type="file" className="w-full z-[4] h-full opacity-0 absolute top-0 left-0" onChange={(e) => imageHandler(e, "front")} />
                                    {
                                        image.frontImagePreview && (
                                            <img accept="image/*" src={image.frontImagePreview} alt="Front Page" className="w-full h-full object-contain" />
                                        )
                                    }
                                    <div className="h-full w-full grid place-items-center">
                                        <div className="grid place-items-center">
                                            <span className="text-[40px] material-icons-outlined">
                                                cloud_upload
                                            </span>
                                            <p className="text-[14px] pt-2">Click to  upload</p>
                                        </div>
                                    </div>
                                    {
                                        image.frontImage && (
                                            <button className="hidden group-hover:grid place-items-center w-[78px] py-[4px] border-[2px] border-white absolute right-[5px] top-[5px] z-[5] text-[11px] text-dark bg-[#4C4C4C33]" onClick={() => removeImage("front")}>
                                                REMOVE
                                            </button>
                                        )
                                    }
                                </div>
                            </fieldset>
                            <fieldset>
                                <label className="inline-block mb-2 text-[14px] text-dark text-[#dddddd]">
                                    Back page
                                </label>
                                <div className="file-upload-wrapper overflow-hidden h-[200px] bg-white border-[2px] border-dashed border-[#e3ebf6] relative group">
                                    <input accept="image/*" type="file" className="w-full z-[4] h-full opacity-0 absolute top-0 left-0" onChange={(e) => imageHandler(e, "back")} />
                                    {
                                        image.backImagePreview && (
                                            <img accept="image/*" src={image.backImagePreview} alt="Back Page" className="w-full h-full object-contain" />
                                        )
                                    }
                                    <div className="h-full w-full grid place-items-center">
                                        <div className="grid place-items-center">
                                            <span className="text-[40px] material-icons-outlined">
                                                cloud_upload
                                            </span>
                                            <p className="text-[14px] pt-2">Click to  upload</p>
                                        </div>
                                    </div>
                                    {
                                        image.backImage && (
                                            <button className="hidden group-hover:grid place-items-center w-[78px] py-[4px] border-[2px] border-white absolute right-[5px] top-[5px] z-[5] text-[11px] text-dark bg-[#4C4C4C33]" onClick={() => removeImage("back")}>
                                                REMOVE
                                            </button>
                                        )
                                    }
                                </div>
                            </fieldset>
                            <fieldset>
                                <label className="inline-block mb-2 text-[14px] text-dark text-[#dddddd]">
                                    Type of ID
                                </label>
                                <input
                                    className="w-full bg-transparent text-ash rounded-[4px] h-[40px] outline-none text-dark px-3 border-[1px] border-[#a3a8b0] hover:border-primary"
                                    type='text'
                                    name="identificationType"
                                    value={formData.identificationType}
                                    onChange={formDataHandler}
                                />
                            </fieldset>
                            <fieldset>
                                <label className="inline-block mb-2 text-[14px] text-dark text-[#dddddd]">
                                    ID Number
                                </label>
                                <input
                                    className="w-full bg-transparent text-ash rounded-[4px] h-[40px] outline-none text-dark px-3 border-[1px] border-[#a3a8b0] hover:border-primary"
                                    type='number'
                                    name="identificationNumber"
                                    value={formData.identificationNumber}
                                    onChange={formDataHandler}
                                />
                            </fieldset>
                            <fieldset>
                                <label className="inline-block mb-2 text-[14px] text-dark text-[#dddddd]">
                                    Address
                                </label>
                                <input
                                    className="w-full bg-transparent text-ash rounded-[4px] h-[40px] outline-none text-dark px-3 border-[1px] border-[#a3a8b0] hover:border-primary"
                                    type='text'
                                    name="address"
                                    value={formData.address}
                                    onChange={formDataHandler}
                                />
                            </fieldset>
                            <fieldset>
                                <label className="inline-block mb-2 text-[14px] text-dark text-[#dddddd]">
                                    City
                                </label>
                                <input
                                    className="w-full bg-transparent text-ash rounded-[4px] h-[40px] outline-none text-dark px-3 border-[1px] border-[#a3a8b0] hover:border-primary"
                                    type='text'
                                    name="city"
                                    value={formData.city}
                                    onChange={formDataHandler}
                                />
                            </fieldset>
                            <fieldset>
                                <label className="inline-block mb-2 text-[14px] text-dark text-[#dddddd]">
                                    Postal Code
                                </label>
                                <input
                                    className="w-full bg-transparent text-ash rounded-[4px] h-[40px] outline-none text-dark px-3 border-[1px] border-[#a3a8b0] hover:border-primary"
                                    type='text'
                                    name="postalCode"
                                    value={formData.postalCode}
                                    onChange={formDataHandler}
                                />
                            </fieldset>
                            <fieldset>
                                <label className="inline-block mb-2 text-[14px] text-dark text-[#dddddd]">
                                    State
                                </label>
                                <input
                                    className="w-full bg-transparent text-ash rounded-[4px] h-[40px] outline-none text-dark px-3 border-[1px] border-[#a3a8b0] hover:border-primary"
                                    type='text'
                                    name="state"
                                    value={formData.state}
                                    onChange={formDataHandler}
                                />
                            </fieldset>
                            <div className="pt-2">
                                <Button disabled={isFormDisabled} loading={loading}>
                                    Proceed
                                </Button>
                            </div>
                        </form>
                    )
                }
                {
                    kycVerificationStatus === "verifying" && (
                        <div>
                            <button className="text-dark rounded-[4px] px-2 py-[5px] bg-[#FFB822] flex items-center gap-2">
                                <span className="material-icons-outlined h-[18px] w-[18px] text-[18px]" >
                                    hourglass_empty
                                </span>
                                <span className="text-[13px] capitalize">Your KYC information is under review</span>
                            </button>
                        </div>
                    )
                }
                {
                    kycVerificationStatus === "verified" && (
                        <div>
                            <button className="text-dark rounded-[4px] px-2 py-[5px] bg-[#00C389] flex items-center gap-2">
                                <CheckIcon />
                                <span className="text-[13px] capitalize">Your KYC information is Verified</span>
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}