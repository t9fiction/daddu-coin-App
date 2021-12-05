import React from 'react'
import { LoadChain } from '../blockchain/bchainAsync';
import { useStore } from '../context/GlobalState';

export const BuyTokens = () => {
    const [{ active, web3, contract, accounts, balance }, dispatch] = useStore();

    
    return (
        <div>
            <br />
            BuyTokens
        </div>
    )
}
