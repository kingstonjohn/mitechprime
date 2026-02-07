import { useEffect, useState } from "react";
import ButtonSecondary from "../../components/button-secondary";
import LineLoader from "../../components/loaders/line-loader";
import stockService from "../../services/stock";
import { useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query"
import NetworkException from "../../utils/networkException";
import { useAuthStateContext } from "../../context/authState";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import { error, success } from "../../components/toast";

export default function BuyStock() {

    const { state, dispatch } = useAuthStateContext()

    const [searchValue, setSearchValue] = useState("")

    const queryClient = useQueryClient()

    const { data, isError, fetchNextPage, isFetchingNextPage, isLoading } =
        useInfiniteQuery({
            queryKey: ['stocks', searchValue],
            queryFn: ({ pageParam }) => stockService.all(pageParam, searchValue),
            initialPageParam: 1,
            getNextPageParam: (lastPage) => lastPage?.data?.data?.currentPage + 1,
        });

    const [inputAmounts, setInputAmounts] = useState({});
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [fetchNextPage, inView]);


    const handleInputChange = (e, id) => {
        setInputAmounts(prevState => ({
            ...prevState,
            [id]: e.target.value
        }));
    };

    const { mutateAsync, variables, isPending } = useMutation({
        mutationFn: (formData) => stockService.buy(formData,),
        onSuccess: (response) => {
            queryClient.invalidateQueries(["user-stocks"])
            success(response.data.message);
            dispatch({ type: "SET_USER", payload: response.data.data })
        },
        onError: (error) => {
            new NetworkException(error).trigger()
        },
    });

    const buyNowHandler = (id) => {
        if (!inputAmounts[id]) {
            return error("Enter a valid amount")
        }

        const payload = {
            userId: state.user._id,
            stockId: id,
            amount: inputAmounts[id],
        }

        mutateAsync(payload)
    }

    const submit = (e) => {
        e.preventDefault();

        const value = e.target[0].value

        setSearchValue(value)
    }

    return (
        <>
            <div className="p-5 flex flex-col gap-8">
                <header className="pb-2">
                    <h1 className="text-[24px] text-dark font-medium pt-2">Buy</h1>
                </header>
                <div className="flex justify-end pb-2 w-full max-w-[1600px]">
                    <Link to='/dashboard-buy/purchases'>
                        <ButtonSecondary className="px-8">
                            Available Purchase
                        </ButtonSecondary>
                    </Link>
                </div>
                <form onSubmit={submit} className="flex gap-2 justify-end pb-2 w-full max-w-[1600px]">
                    <input
                        name="searchInput"
                        type="text"
                        placeholder="Search stock..."
                        className="w-full px-4 h-[40px] outline-none rounded-[4px] border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent text-dark placeholder-[#a3a8b0] text-[14px] caret-white"
                    />
                    <ButtonSecondary className="px-8">
                        Search
                    </ButtonSecondary>
                </form>
                {
                    isLoading && (
                        <div className="pb-2">
                            <LineLoader />
                        </div>
                    )
                }
                {
                    data?.pages[0]?.data?.data?.data.length === 0 && (
                        <div className="px-2 py-2 text-dark">Stock not found</div>
                    )
                }
                {
                    isError && (
                        <div className="px-2 py-2 text-dark">An error occurred while retrieving stocks</div>
                    )
                }
                <div className="grid sm:grid-cols-2 gap-5 md:grid-cols-3 max-w-[1600px]">
                    {
                        data?.pages.map((pageData) => (
                            pageData?.data?.data?.data.map((data, i) => (
                                <div key={data._id + i} className="bg-[#fafafa] border border-[#efefef] hover:border-primary rounded-[4px] p-6">
                                    <figure className="grid place-items-center mb-8">
                                        <img src={data.image} alt={data.name} className="w-[100px] h-[100px] rounded-full object-cover" />
                                        <figcaption className="text-dark text-center mt-2">{data.name}</figcaption>
                                    </figure>
                                    
                                    <div className="py-5">
                                        <input
                                            name="amount"
                                            type="number"
                                            placeholder={`Min. $${pageData?.data?.data?.minimumAmount ?? ''}`}
                                            value={inputAmounts[data._id] ?? ''}
                                            onChange={(e) => handleInputChange(e, data._id)}
                                            className="w-full notranslate px-4 h-[40px] outline-none rounded-full border-[#a3a8b0] hover:border-primary border-[1px] bg-transparent text-dark text-[14px]"
                                        />
                                    </div>
                                    <div className="pt-5 border-t-white border-t-[1px] border-dashed">
                                        <ButtonSecondary
                                            loading={variables?.stockId === data._id && isPending} className="bg-primary w-full"
                                            onClick={() => buyNowHandler(data._id, data.minimumAmount)}
                                        >
                                            Buy Now
                                        </ButtonSecondary>
                                    </div>
                                </div>
                            ))
                        ))
                    }
                </div>
                <div ref={ref}></div>
                <div>
                    {isFetchingNextPage && (
                        <div className="pb-2">
                            <LineLoader />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}