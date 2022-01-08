import React from 'react'
import { loadState } from '../context/Action';
import { useStore } from '../context/GlobalState';

export const Disconnect = () => {
    const [{ active, web3, contract, accounts, balance }, dispatch] = useStore();
    const handleSubmit = () => {
        let cState = false;
        dispatch(loadState(cState));
    }
    return (
        <div>
            <br />
            <button onClick={handleSubmit}>Disconnect</button>
        </div>
    )
}
