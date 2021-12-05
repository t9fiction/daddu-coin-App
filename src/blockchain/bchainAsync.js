import Web3 from 'web3';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from './ABI';
import { loadAccount, loadBalance, loadContract, loadState, loadTSupply, loadWeb3 } from '../context/Action'

export const LoadChain = async (dispatch) => {
    try {
        if (Web3.givenProvider) {
            let web3 = new Web3(Web3.givenProvider);
            await web3.givenProvider.enable();
            let active = true;
            dispatch(loadWeb3(web3));
            dispatch(loadState(active));
            console.log("Web3 ", web3);
            console.log("State", active);
            // document.write("Connected")

            const accounts = await web3.eth.getAccounts();
            dispatch(loadAccount(accounts));
            console.log("Accounts", accounts[0])

            const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            dispatch(loadContract(contract));
            console.log("Contract", contract)
            console.log("contract methods", contract.methods)

            let balance = await contract.methods.showBalance().call();
            dispatch(loadBalance(balance));

            let tSupply = await contract.methods.totalSupply.call().call();
            dispatch(loadTSupply(tSupply))

            let buyTokens = await contract.methods.getTokens().sendTransaction();
            console.log("Tokens", buyTokens);

            // let tokenCount = await contract.methods.getTokens().sendTransaction({ from: accounts[0] });
            // console.log("tokenCount", tokenCount);

        }
    } catch (error) {
        console.log("Error catch", error)
    }
}