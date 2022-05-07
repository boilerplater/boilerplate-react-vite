import { useState } from 'react';
import configs from '../config/configuration';

interface Props {
  children?: React.ReactNode;
}

const Error404Page: React.FC<Props> = () => {
  const [count, setCount] = useState(0);

  return (
    <main>
      <header className="min-h-screen flex flex-col items-center justify-center text-base text-white bg-red">
        <p>404 Vite + React!</p>
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
              <div>NODE_ENV: {configs.NODE_ENV}</div>
              <div>APP_ENV: {configs.APP_ENV}</div>
              <div>CDN_URL: {configs.CDN_URL}</div>
              <div>Package Name: {configs.PKG_NAME}</div>
              <div>Package Version: {configs.PKG_VERSION}</div>
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

export default Error404Page;
