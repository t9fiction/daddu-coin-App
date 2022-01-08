import React from 'react'
import { LoadChain } from '../blockchain/bchainAsync';
import { useStore } from '../context/GlobalState';

export const SendDDU = () => {
    const [{ active, web3, contract, accounts, balance }, dispatch] = useStore();

    const handleSubmit = async () => {
        let sendDDU = await contract.methods.transfer("0x543Ea9E8Bbe1a2bbf0DCEefd6783Abf708789DDE", 123234).send({ from: accounts[0] });
        console.log("Send DDUs to", sendDDU);
        // dispatch(loadBalance(sBalance));
    }

//Test
    return (
        <div>
            <br />
            <button onClick={handleSubmit}>Send DDU To</button>
        </div>
    )
}
