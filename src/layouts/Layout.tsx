import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import I18nModal from '@/components/I18nModal';

interface Props {
  children?: React.ReactNode;
  className?: String; // any | null | undefined
}

const Layout: React.FC<Props> = ({ className }) => {
  const classNames = className ? className : '';

  return (
    <div id="LayoutMain" className={'min-h-screen bg-gray-100' + classNames}>
      <div id="main">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Outlet />
        </div>
      </div>

      <I18nModal />
    </div>
  )
};

export default Layout;
