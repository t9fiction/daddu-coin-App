import React from 'react'
import { LoadChain } from '../blockchain/bchainAsync';
import { useStore } from '../context/GlobalState';

export const ConnectButton = () => {
    const [{ active, web3, contract, accounts, balance }, dispatch] = useStore();
    const handleSubmit = () => {
        LoadChain(dispatch)
    }
    return (
        <div>
            <button onClick={handleSubmit}>Connect Wallet</button>
            {active ? <div>Connected</div> : <div>Not Connected</div>}
        </div>
    )
}
