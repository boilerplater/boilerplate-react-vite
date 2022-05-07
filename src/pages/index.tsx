import { useState } from 'react';
import { NavLink, Link, matchPath, useLocation, useNavigate, useNavigationType, useResolvedPath, resolvePath } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import logo from '../assets/img/logo.svg';
import { useListOfUsersGET } from '@/apis/UserApi';
import { useAppSelector } from '@/lib/redux/hooks';
import configs from '../config/configuration';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

interface Props {
  children?: React.ReactNode;
}

const IndexPage: React.FC<Props> = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const location = useLocation();
  const locState = location.state as { backgroundLocation?: Location };
  const navigationType = useNavigationType();
  const { siteLocation, darkMode } = useAppSelector((state) => { return state.app });
  const { locale } = useAppSelector((state) => { return state.i18n });

  // React Query usage
  const {
    isLoading: isUsersQueryLoading,
    error: usersQueryError,
    data: usersQueryData,
    refetch: usersQueryRefetch
  } = useListOfUsersGET({ limit: 10 });

  return (
    <>
      <Helmet>
        <title>Index | Boilerplate</title>
      </Helmet>

      {(!locState?.backgroundLocation && navigationType !== 'POP') && (
        <ScrollToTop />
      )}

      <main>
        <div>INDEX</div>
        <p>{t('welcome')}</p>
        <section className="py-20 bg-gray-200 dark:bg-gray-800">
          <div className="container px-6 mx-auto max-w-screen-xl">
            <h2 className="font-medium text-3xl mb-8">React Query</h2>
            {(isUsersQueryLoading && !usersQueryData) && (
              <div>Loading...</div>
            )}

            {(usersQueryData && usersQueryData.length > 1) && (
              <div>
                <h3 className="text-xl font-medium mb-6">Users</h3>
                <div className="flex flex-wrap -mx-6">
                  {usersQueryData.map((user: any, i: number) => {
                    return (
                      <div key={i} className="w-full md:w-4/12 px-6 mb-6">
                        <div className="border border-gray-500 rounded px-4">
                          {user.firstName} {user.lastName}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-8">
          <div className="container px-6 mx-auto max-w-screen-xl">
            <h2 className="text-2xl font-medium">Redux State &rarr;</h2>
            <div>App - Site Location: <strong>{siteLocation}</strong></div>
            <div>App - Dark Mode: <strong>{darkMode ? 'true' : 'false'}</strong></div>
            <div>i18n - Locale: <strong>{locale}</strong></div>
          </div>
        </section>

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

        <Footer />
      </main>
    </>
  )
};

export default IndexPage;
