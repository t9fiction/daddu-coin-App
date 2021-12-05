import React from 'react'
import { useStore } from '../context/GlobalState';

export const TotalSupply = () => {
    const [{ contract, balance, TotalSupply }, dispatch] = useStore();
    return (
        <div>
            <br />
            Total Supply : {TotalSupply} Daddu Tokens
        </div>
    )
}
