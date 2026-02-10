/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ButtonSecondary from "../../components/button-secondary";
import { error, success } from "../../components/toast";
import { useAuthStateContext } from "../../context/authState";
import { formatDate } from "../../utils/helpers";
import LineLoader from "../../components/loaders/line-loader";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import TextArea from "../../components/input/textarea";
import { socket } from "../../socket";
import { APP_NAME } from "../../constants";

const tabs = [
    { id: nanoid(), href: '/dashboard-support?tab=create', tab: 'Create' },
    { id: nanoid(), href: '/dashboard-support', tab: 'In Progress' },
    { id: nanoid(), href: '/dashboard-support?tab=closed', tab: 'Closed' },
]

export default function Support() {

    const { pathname, search } = useLocation()

    const url = pathname + search

    const { state } = useAuthStateContext()

    const { _id } = state.user

    const [supportTickets, setSupportTickets] = useState([])

    const [isPending, setIsPending] = useState(true);

    useEffect(() => {

        const payload = { _id }

        if (socket) {

            socket.emit('support-tickets', payload)

            socket.on('output-support-tickets', data => {
                console.log("OUTPUT SUPPORT", data)
                setSupportTickets(data)
                setIsPending(false)
            })

            socket.on('error', data => {
                setIsPending(false);
                error(data);
            })
        }
    }, [socket?.id])

    return (
        <div className="flex flex-col gap-5 pb-5">
            <header className="pb-[12px] px-5 pt-5">
                <h1 className="text-[24px] text-dark font-medium pt-2">Support Ticket</h1>
            </header>
            <div className="mb-[12px] w-full px-5">
                <Tab />
            </div>
            {(url === tabs[0].href || url === `/dashboard-support?tab=create&automated-message=true`) && (<Create setSupportTickets={setSupportTickets} />)}
            {url === tabs[1].href && (
                <InProgress
                    isPending={isPending}
                    supportTickets={supportTickets}
                />
            )}
            {url === tabs[2].href && (
                <Closed
                    isPending={isPending}
                    supportTickets={supportTickets}
                />
            )}
        </div>
    )
}

const Tab = () => {

    const { pathname, search } = useLocation()

    const url = pathname + search

    return (
        <div className="flex justify-center">
            <div className="flex border-[1px] rounded-lg p-2">
                {tabs.map(tab => (
                    <Link
                        key={tab.id}
                        to={tab.href}
                    >
                        <button
                            className={`${url === tab.href ? 'bg-primary text-white' : 'text-dark'
                                } font-medium py-2 px-4 text-[12px] lg:text-[14px] focus:outline-none rounded-[6px]`}
                        >
                            {tab.tab}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const Create = ({ setSupportTickets }) => {

    const { pathname, search } = useLocation()

    const navigate = useNavigate()

    const url = pathname + search

    const { state } = useAuthStateContext()

    const { _id } = state.user

    const [message, setMessage] = useState("")

    useEffect(() => {

        if (socket) {

            socket.on('error', message => {
                error(message)
            })

            if(url === `/dashboard-support?tab=create&automated-message=true`){
                const payload = { message: "Hi, I want to make a transfer.", _id }

                socket.emit("create-support-ticket", payload, function (data) {
                    setSupportTickets(data)
                    success("Support ticket created!")
                    navigate('/dashboard-support', { replace: true })
                });
            }
        }
    }, [socket?.id])


    const submit = (e) => {
        e.preventDefault()

        if (!message.trim()) {
            return error("Support ticket message is required!");
        }

        const payload = { message, _id }

        socket.emit("create-support-ticket", payload, function (data) {
            setSupportTickets(data)
            success("Support ticket created!")
        });

        setMessage('')
    }

    return (
        <div className="lg:px-5">
            <div className="min-h-[350px] lg:min-h-[400px] w-full rounded-[4px] bg-[#fafafa] border border-[#efefef] hover:border-primary flex flex-col">
                <form onSubmit={submit} className="p-3 flex flex-col gap-4">
                    <div className="grid place-items-center text-center text-dark">
                        <h1 className="text-[18px] pt-4 pb-2">Create a new support ticket</h1>
                        <img src="/images/message-light.png" alt="Message" />
                    </div>
                    <fieldset>
                        <label className="text-dark text-[12px] lg:text-[14px] mb-1 inline-block">Create a ticket</label>
                        <TextArea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Send a message...'
                            maxRows={3}
                        />
                    </fieldset>
                    <ButtonSecondary className="w-[120px]">Create</ButtonSecondary>
                </form>
            </div>
        </div>
    )
}

const InProgress = ({ isPending, supportTickets }) => {

    let openSupportChats = supportTickets.filter(data => data.status === "open")

    const { state } = useAuthStateContext()

    const { _id } = state.user

    openSupportChats = openSupportChats.sort((a, b) => {
        const aTimestamp = new Date(a.updatedAt).getTime();
        const bTimestamp = new Date(b.updatedAt).getTime();

        return bTimestamp - aTimestamp; // Sort descending based on timestamp      
    })

    return (
        <div className="lg:px-5">
            <div className="min-h-[350px] lg:min-h-[400px] w-full rounded-[4px] bg-[#fafafa] border border-[#efefef] flex flex-col">
                <div className="flex-1 p-2 flex flex-col gap-4 overflow-y-auto fizomarkt-scrollbar">
                    {isPending && <LineLoader />}
                    {
                        !isPending && openSupportChats.length === 0 && (
                            <div className="grid place-items-center h-full">
                                <div className="grid place-items-center">
                                    <img src="/images/message-dark.png" alt="Idea" className="h-[120px] lg:h-[200px]" />
                                    <p className="text-dark mb-3 text-[12px] lg:text-[14px]">You currently do not have any available support ticket <span className="text-green-500">In Progress.</span></p>
                                    <Link to='/dashboard-support?tab=create'>
                                        <ButtonSecondary>
                                            Create a support ticket
                                        </ButtonSecondary>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                    {
                        openSupportChats.map((data, index) => (
                            <Link to={`/dashboard-support/chat/${data._id}?chat=${data.status}`} key={data._id} className="hover:border-primary border-[#efefef] border-[1px] rounded-[3px] bg-white">
                                <p className="text-primary px-3 py-3 text-[12px] border-b border-b-[#efefef]">#{index + 1} - Support Ticket</p>
                                <div className="py-2 px-3 text-[14px] bg-white rounded-b-[4px] flex gap-3">
                                    <figure className="p-2 h-[40px] w-[40px] shrink-0 border border-[#fafafa] rounded-full">
                                        <img src="/fizomarkt.png" alt={APP_NAME} className="h-full w-full" />
                                    </figure>
                                    <div className="flex-1 w-full">
                                        <h3 className="text-ash font-medium">{APP_NAME} Team</h3>
                                        <p className="text-[12px] text-[#a0a088]  font-normal line-clamp-1 mb-1">
                                            {_id === data.messages[data.messages.length - 1].from._id && "You: "}
                                            { data?.messages[data.messages.length - 1]?.type === "image" ? 'Photo' : data?.messages[data.messages.length - 1].text}
                                        </p>
                                        <span
                                            className="bg-[#0FAF59] px-2 py-[2px] rounded-full text-[11px] text-[#E4E6EB] capitalize"
                                        >
                                            {data?.status}
                                        </span>
                                        <p className="text-blue text-[10px] text-right ">{formatDate(data?.updatedAt)}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const Closed = ({ isPending, supportTickets }) => {

    let closedSupportChats = supportTickets.filter(data => data.status === "close");

    const { state } = useAuthStateContext()

    const { _id } = state.user

    closedSupportChats = closedSupportChats.sort((a, b) => {
        const aTimestamp = new Date(a.updatedAt).getTime();
        const bTimestamp = new Date(b.updatedAt).getTime();

        return bTimestamp - aTimestamp; // Sort descending based on timestamp      
    })

    return (
        <div className="lg:px-5">
            <div className="min-h-[350px] lg:min-h-[400px] w-full rounded-[4px] bg-[#fafafa] border flex flex-col">
                <div className="flex-1 p-2 flex flex-col gap-4 overflow-y-auto fizomarkt-scrollbar">
                    {isPending && <LineLoader />}
                    {
                        !isPending && closedSupportChats.length === 0 && (
                            <div className="grid place-items-center h-full">
                                <div className="grid place-items-center">
                                    <img src="/images/message-dark.png" alt="Idea" className="h-[120px] lg:h-[200px]" />
                                    <p className="text-dark mb-3 text-[12px] lg:text-[14px]">You currently do not have any <span className="text-green-500">closed</span> support ticket.</p>
                                    <Link to='/dashboard-support?tab=create'>
                                        <ButtonSecondary>
                                            Create a support ticket
                                        </ButtonSecondary>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                    {
                        closedSupportChats.map((data, index) => (
                            <Link to={`/dashboard-support/chat/${data._id}`} key={data._id} className="hover:border-primary border-[#efefef] border-[1px] rounded-[3px] bg-white">
                                <p className="text-primary px-3 py-3 text-[12px] border-b border-b-[#efefef]">#{index + 1} - Support Ticket</p>
                                <div className="py-2 px-3 text-[14px] bg-white rounded-b-[4px] flex gap-3">
                                    <figure className="p-2 h-[40px] w-[40px] border border-[#fafafa] shrink-0 rounded-full">
                                        <img src="/fizomarkt.png" alt={APP_NAME} className="h-full w-full" />
                                    </figure>
                                    <div className="flex-1 w-full">
                                        <h3 className="text-ash font-medium">{APP_NAME} Team</h3>
                                        <p className="text-[12px] text-[#a0a088] font-normal line-clamp-1 mb-1">
                                            {_id === data.messages[data.messages.length - 1]._id && "You: "}
                                            {data.messages[data.messages.length - 1].type === "image" ? 'Photo' : data.messages[data.messages.length - 1].text}</p>
                                        <span className="bg-[#ea5353] px-2 py-[2px] rounded-full text-[11px] text-[#E4E6EB] capitalize">{data.status}</span>
                                        <p className="text-blue text-[10px] text-right ">{formatDate(data?.messages[data.messages.length - 1].createdAt)}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}