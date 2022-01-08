import React from 'react'
import { useState } from 'react';
import { LoadChain } from '../blockchain/bchainAsync';
import { useStore } from '../context/GlobalState';

export const BuyTokens = () => {
    const [{ active, web3, contract, accounts, balance }, dispatch] = useStore();
    const [coinAmount, setCoinAmount] = useState(0);

    const handleSubmit = async () => {
        // let sBalance = await contract.methods.showBalance().call();
        // let buyTokens = await contract.methods.getTokens().send({ from: accounts[0], value: 900000000000000 }); working but harcode
        let buyTokens = await contract.methods.getTokens().send({ from: accounts[0], value: { coinAmount } });
        console.log("Tokens", buyTokens);
        // dispatch(loadBalance(sBalance));
    }


    return (
        <div>
            <br />
            <input type="number" onChange={(e) => setCoinAmount(e.target.value)} />
            {coinAmount}
            <button onClick={handleSubmit}>Buy Tokens</button>
        </div>
    )
}
