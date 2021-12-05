import React from 'react'
import { loadBalance } from '../context/Action';
import { useStore } from '../context/GlobalState';

export const Balance = () => {

    const [{ contract, balance, TotalSupply }, dispatch] = useStore();
    const handleSubmit = async () => {
        let sBalance = await contract.methods.showBalance().call();
        dispatch(loadBalance(sBalance));
    }
    // await LoadChain(dispatch)
    // balance = await contract.methods.showBalance().call();
    // dispatch(loadBalance(balance));
    // let balance = await contract.methods.showBalance().send({ from: accounts[0] });
    // console.log("Balance", balance);
    return (
        <div>
            <div>
                <br />
            Ether Balance: {balance / 1000000000000000000}
            </div>
            <div>
                <button onClick={handleSubmit}>Update</button>
            </div>
        </div>
    )
}
