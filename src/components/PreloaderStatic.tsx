import React, { useEffect, useRef } from 'react';
import logo from '@/assets/img/logo.svg';

interface Props {
  bootstrapped: boolean;
  children?: React.ReactNode;
}

const PreloaderStatic: React.FC<Props> = ({ bootstrapped }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const refElem = ref.current;

    const bootstrappedListener = (/*event: AnimationEvent*/) => {
      if (bootstrapped === true) {
        refElem?.classList.add('hidden');
      }
    }

    refElem?.addEventListener('animationend', bootstrappedListener);

    return () => {
      // Do proper cleanup on unmount
      refElem?.removeEventListener('animationend', bootstrappedListener);
    };
  }, [ref, bootstrapped]);

  return (
    <div
      id="PreloaderStatic"
      ref={ref}
      className={'fixed w-full h-full top-0 left-0 z-1070 bg-white animate__animated'
        + (bootstrapped ? ' animate__fadeOut' : ' ')
      }
    >
      <div className="flex justify-center items-center h-full p-4">
        <div className="text-center">
          <h1 className="text-6xl text-center mb-4 font-brand">
            <img src={logo} alt="Logo" className="inline-block h-16 mr-4" />
            Brand
          </h1>
          <div className="spinner-border text-gray-400" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreloaderStatic;
