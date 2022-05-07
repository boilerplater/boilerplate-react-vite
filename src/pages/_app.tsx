import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useAppSelector } from '@/lib/redux/hooks';

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
  const appState = useAppSelector((state) => { return state.app });

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
