import React, { useRef, useEffect } from 'react';
import { getScrollParent } from '@/resources/helpers/scroll.helper';

interface Props {
  children?: React.ReactNode;
}

const ScrollToTop: React.FC<Props> = (props) => {
  // const { pathname } = useLocation();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollParent = getScrollParent(ref.current as HTMLElement) || window;
    scrollParent.scrollTo(0, 0);
  }, [ref]);

  return null; // return (<span ref={ref}></span>);
}

export default ScrollToTop;
