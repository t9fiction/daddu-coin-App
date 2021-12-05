import './App.css';
import { Balance } from './components/Balance';
import { BuyTokens } from './components/BuyTokens';
import { ConnectButton } from './components/ConnectButton';
import { Disconnect } from './components/Disconnect';
import { TotalSupply } from './components/TotalSupply';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        DADDU COIN
      </header>
      <ConnectButton />
      <Balance />
      <TotalSupply />
      <BuyTokens />
      <Disconnect />
    </div>
  );
}

export default App;
