import { useState } from 'react';
import logo from '../assets/img/logo.svg';

interface Props {
  children?: React.ReactNode;
}

const IndexPage: React.FC<Props> = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center text-base text-white bg-[#282c34]">
        <img src={logo} className="App-logo h-72" alt="logo" />
        <p>Hello Vite + React!</p>
        <div>
          <button
            type="button"
            className="inline-block text-base border p-2"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </div>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-cyan"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-cyan"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
};

export default IndexPage;
