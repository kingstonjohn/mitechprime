/* eslint-disable react/prop-types */
import NProgress from 'nprogress'
import { createContext, useContext, useEffect, useReducer } from 'react'
import userService from '../services/user'
import { useQuery } from '@tanstack/react-query'

const AuthStateContext = createContext(null)

const initState = {
    user: null,
    isAuth: null,
}

const reducerFunc = (state, action) => {

    switch (action.type) {
        case "AUTH_VALID": {
            return {
                ...state,
                user: action.payload,
                isAuth: true,
            }
        }
        case "SET_USER": {
            return {
                ...state,
                user: action.payload,
            }
        }
        case "AUTH_LOGOUT": {
            return initState
        }
        default: {
            throw Error("Unknown Action")
        }
    }
}
export const AuthStateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducerFunc, initState)
    
    const { isLoading, data, error, isSuccess, isError } = useQuery({
        queryKey: ["authentication"],
        queryFn: () => userService.getUser(),
        staleTime: 0,
    })

    useEffect(() => {

        if(isLoading){
            NProgress.start();
        }

        if(isError){
            console.log(error)
            NProgress.done();
        }

        if (isSuccess) {
            dispatch({ type: "AUTH_VALID", payload: data?.data?.data?.user })
            NProgress.done();
        }

        return () => NProgress.done();
    }, [isSuccess, isError, isLoading])

    return (
        <AuthStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthStateContext.Provider>
    )
}

export const useAuthStateContext = () => useContext(AuthStateContext)