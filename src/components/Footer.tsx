import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  className?: String; // any | null | undefined
}

const Footer: React.FC<Props> = ({ className }) => {
  let location = useLocation();
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
                  <NavLink to="/" className={"dark:text-gray-300"}>Home</NavLink>
                </li>
                <li className="flex-initial px-2">
                  <NavLink to="/about" className={"dark:text-gray-300"}>About Us</NavLink>
                </li>
                <li className="flex-initial px-2">
                  <NavLink to="/about/privacy" className="dark:text-gray-300">Privacy</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
