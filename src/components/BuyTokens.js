import React from 'react'
import { useState } from 'react';
import { LoadChain } from '../blockchain/bchainAsync';
import { useStore } from '../context/GlobalState';

export const BuyTokens = () => {
    const [{ active, web3, contract, accounts, balance }, dispatch] = useStore();
    const [coin, setCoin] = useState(0)

    const handleSubmit = async () => {
        // let sBalance = await contract.methods.showBalance().call();
        // let buyTokens = await contract.methods.getTokens().send({ from: accounts[0], value: 900000000000000 }); working but harcode
        let buyTokens = await contract.methods.getTokens().send({ from: accounts[0], value: {coin} });
        console.log("Tokens", buyTokens);
        // dispatch(loadBalance(sBalance));
    }


    return (
        <div>
            <br />
            {/* <form name="myForm" method="post"> */}
            <input onChange={(e)=>setCoin(parseInt(e.target.value))} />
                <button onClick={handleSubmit}>Buy Tokens</button>
            {/* </form> */}
        </div>
    )
}
