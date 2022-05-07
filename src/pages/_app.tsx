import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

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
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </HelmetProvider>
  )
}

export default App;
