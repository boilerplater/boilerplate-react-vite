import React, { Suspense } from 'react';
// Pages
const IndexPage = React.lazy(() => import('./index'));

interface Props {
  children?: React.ReactNode;
}

const Document: React.FC<Props> = () => {
  return (
    <Suspense fallback={(<div className="text-center p-12">Loading...</div>)}>
      <IndexPage />
    </Suspense>
  )
};

export default Document;
