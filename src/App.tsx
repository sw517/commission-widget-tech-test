import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CurrencyInput from './ui/CurrencyInput';
import Card from './ui/Card';
import CommissionBreakdown from './ui/CommissionBreakdown';
import getCommissionBreakdown from './helpers/getCommissionBreakdown';

function App() {
  return (
    <>
      <Card title="Commission Calculator">
        <CurrencyInput />
        <CommissionBreakdown
          breakdown={getCommissionBreakdown(18000).breakdown}
        />
      </Card>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="font-bold text-4xl">Vite + React</div>
    </>
  );
}

export default App;
