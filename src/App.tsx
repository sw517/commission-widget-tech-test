import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CommissionWidget from './ui/CommissionWidget/CommissionWidget';

function App() {
  return (
    <>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="font-bold text-4xl">Vite + React</div>
      <div className="mt-6 mb-12">
        <CommissionWidget />
      </div>
    </>
  );
}

export default App;
