import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CurrencyInput from './ui/CurrencyInput';
import Card from './ui/Card';

function App() {
  return (
    <>
      <Card title="Commission Calculator">
        <CurrencyInput />
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
