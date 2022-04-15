import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Document from './_document';

interface Props {
  children?: React.ReactNode;
}

const App: React.FC<Props> = () => {
  return (
    <HelmetProvider>
      <Document />
    </HelmetProvider>
  )
}

export default App;
