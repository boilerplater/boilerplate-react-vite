import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface Props {
  children?: React.ReactNode;
}

const App: React.FC<Props> = ({children}) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  )
}

export default App;
