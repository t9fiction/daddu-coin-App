import React from 'react'
import { LoadChain } from '../blockchain/bchainAsync';
import { useStore } from '../context/GlobalState';

export const SendEtherTo = () => {
    const [{ active, web3, contract, accounts, balance }, dispatch] = useStore();

    const handleSubmit = async () => {
        let sendEther = await contract.methods.transferTo("0xB28EB6F6baafD0b33D64a3fdf47620849Eb2e494", 1).send({ from: accounts[0] });
        console.log("Send Ether to", sendEther);
        // dispatch(loadBalance(sBalance));
    }


    return (
        <div>
            <br />
            <button onClick={handleSubmit}>Send Ether To</button>
        </div>
    )
}
