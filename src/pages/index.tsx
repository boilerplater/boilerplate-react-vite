import { useState } from 'react';
import logo from '../assets/img/logo.svg';

interface Props {
  children?: React.ReactNode;
}

const IndexPage: React.FC<Props> = () => {
  const [count, setCount] = useState(0)

  return (
    <main>
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

      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full md:w-4/12 px-6">
              <h2 className="text-xl font-medium mb-4">Environment Variables</h2>
              <div>NODE_ENV: {process.env.NODE_ENV}</div>
              <div>APP_ENV: {import.meta.env.VITE_APP_ENV}</div>
              <div>CDN_URL: {import.meta.env.VITE_APP_CDN_URL}</div>
              <div>Package Name: {import.meta.env.VITE_APP_PKG_NAME}</div>
              <div>Package Version: {import.meta.env.VITE_APP_PKG_VERSION}</div>
            </div>

            <div className="w-full md:w-4/12 px-6">
              Test
            </div>

            <div className="w-full md:w-4/12 px-6">
              Test
            </div>
          </div>
        </div>
      </section>

    </main>
  )
};

export default IndexPage;
