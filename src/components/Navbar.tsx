import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { updateDarkMode } from '@/lib/redux/app/appSlice';
import { FlagIconUS, FlagIconGB, FlagIconPH } from '@flagkit/react';

interface Props {
  children?: React.ReactNode;
  className?: String; // any | null | undefined
}

const Navbar: React.FC<Props> = ({ className }) => {
  let location = useLocation();
  const dispatch = useAppDispatch();
  const classNames = className ? ' ' + className : '';
  const appState = useAppSelector((state) => { return state.app });
  const { siteLocation } = useAppSelector((state) => { return state.app });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { locale } = useAppSelector((state) => { return state.i18n });

  useEffect(() => {
    if (appState.darkMode === true || (!('darkMode' in appState) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [appState.darkMode]);

  const handleToggleDarkMode = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isDarkMode === true) {
      dispatch(updateDarkMode(false));
    } else {
      dispatch(updateDarkMode(true));
    }
  };

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
              <button
                type="button"
                className="btn bg-transparent nav-link text-gray-700 dark:text-gray-300"
                onClick={handleToggleDarkMode}
              >
                {(isDarkMode === true) ? (
                  <>
                    <ion-icon name="moon-outline" aria-label="moon outline" role="img" class="text-lg md hydrated"></ion-icon>
                  </>
                ) : (
                  <>
                    <ion-icon name="sunny-outline" aria-label="sunny outline" role="img" class="text-lg md hydrated"></ion-icon>
                  </>
                )}
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn bg-transparent nav-link ml-1 hidden md:block"
                data-bs-toggle="modal"
                data-bs-target="#I18nModal"
              >
                {(() => {
                  switch (siteLocation) {
                    case 'US':
                      return (
                        <span className="inline-block relative">
                          <FlagIconUS
                            className="inline-block h-6 w-6 rounded-full align-middle"
                            preserveAspectRatio="xMinYMax slice"
                            style={{ marginRight: '-13px' }}
                          />
                          <FlagIconGB
                            className="inline-block h-6 w-6 rounded-full align-middle"
                            preserveAspectRatio="xMidYMax slice"
                          />
                        </span>
                      );
                    case 'PH':
                    default:
                      return (
                        <FlagIconPH
                          className="inline-block h-6 w-6 rounded-full align-middle"
                          preserveAspectRatio="xMinYMax slice"
                        />
                      );
                  }
                })()}
                <span className="text-xs ml-2">{locale.toUpperCase()}</span>
              </button>
            </li>
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
