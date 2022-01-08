import './App.css';
import { Balance } from './components/Balance';
import { BuyTokens } from './components/BuyTokens';
import { ConnectButton } from './components/ConnectButton';
import { Disconnect } from './components/Disconnect';
import { SendDDU } from './components/SendDDU';
import { SendEtherTo } from './components/SendEtherTo';
import { TotalSupply } from './components/TotalSupply';
import { useStore } from './context/GlobalState';

function App() {
  const [{ active }] = useStore();
  return (
    <div className="App">
      <header className="App-header">
        DADDU COIN
      </header>
      {active ?
        <div className="App-body">
          <br />
          Wallet Connected
          <Balance />
          <TotalSupply />
          <BuyTokens />
          <SendEtherTo />
          <SendDDU />
          <Disconnect />
        </div> : <div className="App-body">
          <br />
          Wallet Not Connected
          <br />
          <br />
          <ConnectButton />
        </div>


      }
    </div>
  );
}

export default App;
