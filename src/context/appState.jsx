/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react'

const AppStateContext = createContext(null)

const initState = {
    isNotificationShown: false,
}

const reducerFunc = (state, action) => {

    switch (action.type) {
        case "APP_NOTIFICATION_SHOWN": {
            return {
                ...state,
                isNotificationShown: true,
            }
        }
        default: {
            throw Error("Unknown Action")
        }
    }
}
export const AppStateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducerFunc, initState)
    
    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppStateContext = () => useContext(AppStateContext)