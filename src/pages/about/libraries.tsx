import { useLocation, useNavigationType } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '@/components/ScrollToTop';

interface Props {
  children?: React.ReactNode;
}

const AboutLibrariesPage: React.FC<Props> = () => {
  const location = useLocation();
  const locationState = location.state as { backgroundLocation?: Location };
  const navigationType = useNavigationType();

  return (
    <>
      <Helmet>
        <title>About Us | Boilerplate</title>
      </Helmet>

      {(!locationState?.backgroundLocation && navigationType !== 'POP') && (
        <ScrollToTop />
      )}

      <div className="md:hidden sticky top-0 bg-white border-b border-gray-200 shadow-sm z-1 px-6 py-4">
        Libraries
      </div>

      <section className="bg-gradient-to-b from-gray-100 to-transparent py-10 jumbotron rounded-0">
        <div className="container px-6">
          <h1 className="font-display font-light tracking-tight inline-block mb-2 py-2 text-5xl">
            Libraries
          </h1>

          <p>
            The following sets forth attribution notices for third party software that may be contained in portions
            of Adtaco. We thank the open source community for all of their contributions.
          </p>
        </div>
      </section>

      <div className="px-6">
        <section>
          <ol className="list-disc">
            <li className="font-display text-xl font-medium ml-5 mb-12">
              <h2 className="mb-4">curl</h2>

              <pre className="!bg-gray-50 border border-gray-200 rounded text-sm p-4 whitespace-pre-line"><code>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
                `}
              </code></pre>
            </li>

            <li className="font-display text-xl font-medium ml-5 mb-12">
              <h2 className="mb-4">JSONKit</h2>

              <pre className="!bg-gray-50 border border-gray-200 rounded text-sm p-4 whitespace-pre-line"><code>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
                `}
              </code></pre>
            </li>
          </ol>

        </section>
      </div>
    </>
  )
};

export default AboutLibrariesPage;
