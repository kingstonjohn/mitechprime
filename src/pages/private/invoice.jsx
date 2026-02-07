import { useParams } from "react-router-dom"
import depositService from '../../services/deposit';
import { useQuery } from "@tanstack/react-query";
import LineLoader from '../../components/loaders/line-loader';
import { success } from "../../components/toast";
import { QRCodeSVG } from "qrcode.react";


export default function Invoice() {

    const { uid } = useParams()

    const { data, isError, isLoading } = useQuery({
        queryKey: [`deposit-invoice-${uid}`],
        queryFn: () => depositService.getInvoice(uid),
    });

    

    const handleCopyToClipboard = (content) => {
        navigator.clipboard.writeText(content)
            .then(() => {
                // Display success message for 3 
                success('Copied to clipboard!')
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
    }

    if (isLoading) {
        return (
            <LineLoader />
        )
    }

    if (isError) {
        return (
            <div className="text-dark py-2">An error occurred while generating your invoice. Kindly refresh the page</div>
        )
    }

    const invoiceData = data?.data?.data
    const crptoAddress = invoiceData?.depositMethodId?.address
    // const crptoName = invoiceData?.depositMethodId?.name
    const amount = invoiceData?.amount
    // const value = invoiceData?.value
    // const cryptoValue = invoiceData?.depositMethodId?.value
    // const cryptoAmount = (value / cryptoValue)

    return (
        <div className="p-5 flex flex-col gap-5">
            <header className="pb-[12px]">
                <h1 className="text-[24px] text-dark font-medium pt-2">Invoice</h1>
            </header>
            <div className="bg-white w-full max-w-[1600px] grid gap-5 sm:gap-10 rounded-[4px] p-5">
                <div className="grid md:grid-cols-2 gap-4 py-5">
                    <div className="grid place-items-center notranslate">
                        <QRCodeSVG value={crptoAddress} />,
                    </div>
                    <div className="grid place-items-center text-center text-dark">
                        <p>Add funds using your generated wallet address <br /> After your wallet address have been generated,
                            copy the wallet and fund your account through our secure payment vendor prompt</p>
                        <div className="notranslate flex flex-wrap gap-2 min-h-[28px] rounded-[6px] bg-[#F1F5FA] overflow-hidden p-2 items-center max-w-[500px] px-2 w-full mt-2">
                            <div className="text-[#303e67] w-full break-words flex-1 text-left text-[14px]">
                                {crptoAddress}
                            </div>
                            <span onClick={() => handleCopyToClipboard(crptoAddress)} className="cursor-pointer material-icons-outlined text-[#303e67] text-[20px]">
                                content_copy
                            </span>
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <h2>
                        <a href="https://www.moonpay.com/buy" target="_blank" rel="noreferrer" className='text-[#0FAF59] uppercase font-medium'>CLICK HERE TO BUY CRYPTO ON MOONPAY</a>
                    </h2>
                </div>
                <div>
                    <h1 className='uppercase text-dark font-medium'>YOU CAN ALSO MAKE DEPOSIT BY TRANSFERRING FROM YOUR CURRENT EXCHANGE OR WALLET, WITH THE SAME WALLET ADDRESS GENERATED ABOVE.</h1>
                </div>
                <div className="flex flex-col">
                    <header className='border-y-white border-y-[1px] py-3 font-medium text-dark text-[14px]'>
                        <h1>DEPOSIT CONFIRMATION</h1>
                    </header>
                    <div className="text-[12px] border-b-white border-b-[1px] py-3 flex items-center text-dark justify-between">
                        <p>Cancel Deposit</p>
                        <p>Available with 10% fee (After 24 hours)</p>
                    </div>
                    <div className="text-[12px] border-b-white border-b-[1px] py-3 flex items-center text-dark justify-between">
                        <p>Debit Amount</p>
                        <p className="notranslate">${amount}</p>
                    </div>
                </div>
                <div>
                    <p className='text-dark text-[14px]'>Please send exact amount that you have inputted. <br />
                        Please do not use ETH Contract addresses as payment. Only regular ETH wallets.</p>
                </div>
            </div>
        </div>
    )
}