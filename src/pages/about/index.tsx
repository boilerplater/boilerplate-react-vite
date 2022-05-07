import { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigationType, matchPath } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '@/components/ScrollToTop';
import AboutPage from './about';
import AboutPrivacyPage from './privacy';
import AboutTermsPage from './terms';
import AboutLibrariesPage from './libraries';
import Error404Page from '../404';

interface Props {
  children?: React.ReactNode;
}

interface RouteChildrenProps {
  match?: any
}

const AboutIndexPage: React.FC<Props> = () => {
  const [count, setCount] = useState(0);
  const location = useLocation();
  const locState = location.state as { backgroundLocation?: Location };
  const navigationType = useNavigationType();

  return (
    <>
      <Helmet>
        <title>About Us | Boilerplate</title>
      </Helmet>

      {(!locState?.backgroundLocation && navigationType !== 'POP') && (
        <ScrollToTop />
      )}

      <div className="page-overlay md:page-static h-full w-full flex-1 flex flex-wrap md:!relative">
        <div className="absolute inset-0 flex flex-wrap">
          <div className="w-full md:w-3/12 hidden md:block h-full bg-white border-r border-gray-200 overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl text-gray-600 font-semibold font-display tracking-tight mb-6">
                About
              </h2>

              <ul className="nav nav-pills flex-col">
                <li className="nav-item">
                  <Link
                    to={'/about'}
                    className={'nav-link flex flex-wrap' + (matchPath(location.pathname, "/about") ? ' active bg-blue' : '')}
                    data-disabled={!!matchPath(location.pathname, "/about")}
                  >
                    <div className="flex-initial w-8">
                      {matchPath(location.pathname, "/about") ? (
                        <ion-icon class="align-middle text-xl" name="information-circle" />
                      ) : (
                        <ion-icon class="align-middle text-xl" name="information-circle-outline" />
                      )}
                    </div>
                    <div className="flex-1">About Us</div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to={'/about/how-it-works'}
                    className={'nav-link flex flex-wrap' + (matchPath(location.pathname, "/about/how-it-works") ? ' active bg-blue' : '')}
                    data-disabled={!!matchPath(location.pathname, "/about/how-it-works")}
                  >
                    <div className="flex-initial w-8">
                      {matchPath(location.pathname, "/about/how-it-works") ? (
                        <ion-icon class="align-middle text-xl" name="document-lock" />
                      ) : (
                        <ion-icon class="align-middle text-xl" name="document-lock-outline" />
                      )}
                    </div>
                    <div className="flex-1">How It Works</div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to={'/about/privacy'}
                    className={'nav-link flex flex-wrap' + (matchPath(location.pathname, "/about/privacy") ? ' active bg-blue' : '')}
                    data-disabled={!!matchPath(location.pathname, "/about/privacy")}
                  >
                    <div className="flex-initial w-8">
                      {matchPath(location.pathname, "/about/privacy") ? (
                        <ion-icon class="align-middle text-xl" name="document-lock" />
                      ) : (
                        <ion-icon class="align-middle text-xl" name="document-lock-outline" />
                      )}
                    </div>
                    <div className="flex-1">Privacy Policy</div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to={'/about/terms'}
                    className={'nav-link flex flex-wrap' + (matchPath(location.pathname, "/about/terms") ? ' active bg-blue' : '')}
                    data-disabled={!!matchPath(location.pathname, "/about/terms")}
                  >
                    <div className="flex-initial w-8">
                      {matchPath(location.pathname, "/about/terms") ? (
                        <ion-icon class="align-middle text-xl" name="document-text" />
                      ) : (
                        <ion-icon class="align-middle text-xl" name="document-text-outline" />
                      )}
                    </div>
                    <div className="flex-1">Terms & Condition</div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to={'/about/libraries'}
                    className={'nav-link flex flex-wrap' + (matchPath(location.pathname, "/about/libraries") ? ' active bg-blue' : '')}
                    data-disabled={!!matchPath(location.pathname, "/about/libraries")}
                  >
                    <div className="flex-initial w-8">
                      {matchPath(location.pathname, "/about/libraries") ? (
                        <ion-icon class="align-middle text-xl" name="book" />
                      ) : (
                        <ion-icon class="align-middle text-xl" name="book-outline" />
                      )}
                    </div>
                    <div className="flex-1">Libraries</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-9/12 h-full bg-white overflow-y-auto">
            <Routes>
              <Route path="/" element={<AboutPage />} />
              <Route path="/privacy" element={<AboutPrivacyPage />} />
              <Route path="/terms" element={<AboutTermsPage />} />
              <Route path="/libraries" element={<AboutLibrariesPage />} />
              <Route path="/*" element={<Error404Page />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
};

export default AboutIndexPage;
