export const loadWeb3 = (web3) => {
    return({
        type: 'LOAD_WEB3',
        payload: web3
    })
}

export const loadContract = (contract) => {
    return({
        type: 'LOAD_CONTRACT',
        payload: contract
    })
}

export const loadState = (active) => {
    return({
        type: 'LOAD_STATE',
        payload: active
    })
}

export const loadBalance = (balance) => {
    return({
        type: 'LOAD_BALANCE',
        payload: balance
    })
}

export const loadTSupply = (tsupply) => {
    return({
        type: 'TOTAL_SUPPLY',
        payload: tsupply
    })
}

export const loadAccount = (accounts) => {
    return({
        type: 'LOAD_ACCOUNTS',
        payload: accounts
    })

}