/* eslint-disable react/prop-types */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useAuthStateContext } from "../../context/authState";
import { useNavigate, useParams } from "react-router-dom";
import { ImageUploadIcon, SendIcon } from "../../components/svgs";
import { error } from "../../components/toast";
import { cn } from "../../utils/cn";
import LineLoader from "../../components/loaders/line-loader";
import TextArea from "../../components/input/textarea";
import { socket } from "../../socket";
import { APP_NAME } from "../../constants";

export default function SupportChat() {

    const navigate = useNavigate()

    const { uid } = useParams()

    const [isPending, setIsPending] = useState(true);

    const chatContainerRef = useRef(null)

    const [message, setMessage] = useState('')

    const [supportChat, setSupportChat] = useState(null);

    const { state } = useAuthStateContext()

    const { _id } = state.user

    useEffect(() => {

        console.log("SOCKET STATUS", socket)

        if (socket) {

            socket.emit("chat-history", uid)

            socket.on('chat-messages', data => {
                setSupportChat(data)
                console.log(data)
                setIsPending(false)
            })

            socket.on('new-chat-message', (data) => {
                setSupportChat(data)
            })

            socket.on('error', data => {
                setIsPending(false);
                error(data);
            })
        }

    }, [socket?.id])

    useLayoutEffect(() => {
        if (chatContainerRef.current) {
            // Determine whether to scroll down based on the type and content of messages
            const shouldScroll = chatContainerRef.current.scrollHeight - chatContainerRef.current.scrollTop === chatContainerRef.current.clientHeight;

            // Check if messages array length has changed
            if (shouldScroll || supportChat?.messages?.length > 0) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
        }
    }, [supportChat?.messages?.length])

    const imageHandler = async (e) => {

        const fileImg = e.target.files[0]

        try {
            const cloudinaryUrl = `https://api.cloudinary.com/v1_1/dbfynwrbk/image/upload`;

            // Upload image to Cloudinary
            const formData = new FormData();
            formData.append('file', fileImg);
            formData.append("upload_preset", "fizomarkt")
            formData.append("cloud_name", "dbfynwrbk")
            formData.append("folder", "fizomarkt-assets")
            const uploadResponse = await fetch(cloudinaryUrl, {
                method: 'POST',
                body: formData
            });

            const uploadResult = await uploadResponse.json();

            const payload = { text: uploadResult.secure_url, _id, chatId: uid, type: "image" }

            socket.emit('create-chat-message', payload)

            if (chatContainerRef.current) {
                // Determine whether to scroll down based on the type and content of messages
                const shouldScroll = chatContainerRef.current.scrollHeight - chatContainerRef.current.scrollTop === chatContainerRef.current.clientHeight;

                // Check if messages array length has changed
                if (shouldScroll || supportChat?.messages.length > 0) {
                    setTimeout(() => {
                        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
                    }, 1000)
                }
            }
        } catch (error) {
            console.error('Error resizing image:', error);
        }
    }

    const submit = (e) => {
        e.preventDefault()

        if (!message.trim()) {
            return;
        }

        const payload = { text: message, _id, chatId: uid, type: "text" }

        socket.emit('create-chat-message', payload)
        setMessage('')
    }

    return (
        <div className="support-ticket-chat-box w-full bg-white flex flex-col">
            <div className="px-5 py-3 flex gap-4 items-center justify-between shadow-[1px_0px_4px_#FCF9F933]">
                <div className="flex items-center gap-3">
                    <figure className="p-2 h-[50px] w-[50px] shrink-0 bg-[#171B26] rounded-full">
                        <img src="/fizomarkt.png" alt="Fizomarkt" className="h-full w-full" />
                    </figure>
                    <p className="text-ash text-[14px] font-medium">{APP_NAME} Team</p>
                </div>
                <div>
                    <span className="material-icons-outlined text-ash hover:text-primary cursor-pointer text-[20px]" onClick={() => navigate(-1)}>close</span>
                </div>
            </div>
            <div ref={chatContainerRef} className="w-full flex-1 flex flex-col px-2 py-4 gap-2 overflow-y-auto fizomarkt-scrollbar">
                {
                    isPending ? (
                        <LineLoader />
                    ) : (
                        supportChat.messages.map(data => (
                            <div className={cn("flex", data.from.role === "client" ? "justify-end" : "justify-start")} key={data._id}>
                                {
                                    data.type === "text" && (
                                        <div className={cn("break-all text-[14px] px-3 py-[6px] text-white", data.from.role === "client" ? "bg-primary-blue chat-box-message-right" : "bg-[#efefef] text-dark chat-box-message-left")}>
                                            <p dangerouslySetInnerHTML={{ __html: data.text.replace(/\n/g, '<br />') }} />
                                        </div>
                                    )
                                }
                                {data.type === "image" && (
                                    <a download={data.text} className="border-[#fafafa] border">
                                        <img src={data.text} alt={data.text} className="max-w-[250px] max-h-[250px] object-contain rounded-[2px]" />
                                    </a>
                                )}
                            </div>
                        ))
                    )
                }
            </div>
            {
                !isPending && supportChat?.status === "open" ?

                    <form onSubmit={submit} className="flex px-2 py-[10px] gap-2 min-h-[54px] w-full border-t border-t-[#efefef]">
                        <button type="button" className="shrink-0 w-[36px] self-end h-[36px] rounded-full grid place-items-center transition group hover:bg-[#0084FF] relative">
                            <ImageUploadIcon className="group-hover:fill-white group-hover:stroke-white" />
                            <input type="file" className="absolute w-[36px] h-[36px] opacity-0" onChange={imageHandler} />
                        </button>
                        <TextArea
                            placeholder="Aa"
                            className="px-3 text-ash h-[30px] outline-none rounded-[20px] w-full border border-[#efefef]"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            maxRows={3}
                        />
                        <button type="submit" className="shrink-0 self-end w-[36px] h-[36px] rounded-full grid place-items-center transition group hover:bg-[#0084FF]">
                            <SendIcon className="ml-[2px] group-hover:fill-white" />
                        </button>
                    </form>
                    :
                    <div className="min-h-[54px] w-full shadow-[1px_0px_4px_#FCF9F933] text-dark grid place-items-center text-center text-[12px] lg:text-[14px]">
                        Support ticket closed
                    </div>
            }
        </div>
    )
}