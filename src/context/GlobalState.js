import { createContext, useContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
    web3: null,
    transaction: [],
    balance: 0,
    contract: null,
    TokenCount: 0,
    active: false,
    TotalSupply: 0
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
    
    return(
        <GlobalContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useStore = () => useContext(GlobalContext)