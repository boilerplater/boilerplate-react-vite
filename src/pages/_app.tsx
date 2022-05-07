import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/lib/redux/hooks';
import '@/lib/i18next';

interface Props {
  children?: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ref: https://react-query.tanstack.com/guides/window-focus-refetching
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC<Props> = ({children}) => {
  const { i18n } = useTranslation();
  const appState = useAppSelector((state) => { return state.app });
  // const { authUser } = useAppSelector((state) => { return state.auth });
  const i18nLocale = useAppSelector((state) => { return state.i18n.locale });
  // const locale = authUser?.profile?.settings?.language || i18nLocale;

  /**
   * Handle Internationalization
   */
  useEffect(() => {
    i18n.changeLanguage(i18nLocale);
  }, [i18nLocale]);

  /**
   * Handle Dark Mode
   */
  useEffect(() => {
    if (appState.darkMode === true || (!('darkMode' in appState) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [appState.darkMode]);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App;
