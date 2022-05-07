import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  className?: String; // any | null | undefined
}

const Navbar: React.FC<Props> = ({ className }) => {
  let location = useLocation();
  const classNames = className ? ' ' + className : '';

  return (
    <div id="Navbar" className={'navbar bg-white navbar-light py-2.5 md:flex-nowrap md:flex-start' + classNames}>
      <div className="flex flex-wrap items-center justify-between w-full px-4 mx-auto md:flex-nowrap md:flex-start">
        <span className="whitespace-nowrap">
          <button
            type="button"
            className="navbar-toggler sidenav-trigger px-0 py-1 mr-5 align-middle rounded-full border-0 text-3xl h-9 w-9 lg:hidden"
            data-target="Sidenav"
            aria-controls="Sidenav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <ion-icon class="relative -top-px" name="menu" />
          </button>
          <NavLink to={'/'} className="navbar-brand font-brand align-middle">
            {/* <img src={logo} alt="Logo" className="inline-block h-8 mr-4" /> */}
            <span className="md:inline">Brand</span>
          </NavLink>
        </span>
        <div className="collapse navbar-collapse md:!flex" id="NavbarCollapse">
          <ul className="navbar-nav hidden md:flex md:flex-row">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link py-2.5">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/about'} className="nav-link py-2.5">About Us</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav hidden md:flex md:flex-row ml-auto">
            <li className="nav-item">
              <NavLink
                to={'/login'}
                state={{
                  backgroundLocation: location,
                  // modalSize: 'small',
                  // returnTo: location.pathname,
                }}
                className="nav-link py-2.5"
              >
                Sign in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={'/register'}
                state={{
                  backgroundLocation: location,
                  // modalSize: 'small',
                  // returnTo: location.pathname,
                }}
                className="nav-link py-2.5"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
