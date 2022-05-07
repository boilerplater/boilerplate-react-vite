import React from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import Link from './Link';
import configs from '@/config/configuration';

interface Props {
  children?: React.ReactNode;
  className?: String; // any | null | undefined
}

const Footer: React.FC<Props> = ({ className }) => {
  let location = useLocation();
  const { pathname } = useLocation();
  const classNames = className ? ' ' + className : '';

  return (
    <footer id="Footer" className={"dark:bg-gray-900 dark:text-gray-300 " + classNames}>
      <hr className="border-gray-300 dark:border-gray-800" />

      <div id="FooterSitemap">
        <div className="container max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full md:w-auto order-last md:order-first flex-1 px-6">
              <ul className="flex flex-wrap -mx-2">
                <li className="flex-initial px-2">
                  <Link
                    to="/"
                    className={'dark:text-gray-300' + (matchPath(pathname, "/") ? ' active' : '')}
                    data-disabled={!!matchPath(pathname, "/")}
                  >
                    Home
                  </Link>
                </li>
                <li className="flex-initial px-2">
                  <Link
                    to="/about"
                    className={'dark:text-gray-300' + (matchPath(pathname, "/about") ? ' active' : '')}
                    data-disabled={!!matchPath(pathname, "/about")}
                  >
                    About Us
                  </Link>
                </li>
                <li className="flex-initial px-2">
                  <Link
                    to="/about/privacy"
                    className={'dark:text-gray-300' + (matchPath(pathname, "/about/privacy") ? ' active' : '')}
                    data-disabled={!!matchPath(pathname, "/about/privacy")}
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-xl mx-auto px-6 py-4">
        {configs.APP_ENV} &middot; {configs.PKG_VERSION}
      </div>
    </footer>
  )
};

export default Footer;
