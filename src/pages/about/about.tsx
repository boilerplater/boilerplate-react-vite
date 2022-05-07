import { useLocation, useNavigationType } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '@/components/ScrollToTop';

interface Props {
  children?: React.ReactNode;
}

const AboutPage: React.FC<Props> = () => {
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
        About Us
      </div>

      <section className="bg-gradient-to-b from-gray-100 to-transparent py-10 jumbotron rounded-0">
        <div className="container px-6">
          <h1 className="font-display font-light tracking-tight inline-block mb-2 py-2 text-5xl">
            About <span className="font-brand font-normal text-orange-700 text-6xl tracking-normal">adtaco</span>
          </h1>
          <p className="lead">
            Learn more about the team maintaining Adtaco, what the project is all about, and how to get involved.
          </p>
        </div>
      </section>

      <div className="px-6">
        <section>
          <h2 className="my-4">Team</h2>
          <ul>
            <li>
              <div className="flex flex-wrap mb-4">
                <div className="flex-initial">
                  <a href="https://github.com/randelltuazon" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://github.com/randelltuazon.png"
                      className="rounded-full mr-4"
                      alt="@randelltuazon"
                      height="75"
                      width="75"
                    />
                  </a>
                </div>
                <div className="flex-1">
                  <div className="px-4">
                    <h5 className="font-bold">
                      <a
                        href="https://github.com/randelltuazon"
                        className="text-dark hover:text-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Randell Tuazon <small>@randelltuazon</small>
                      </a>
                    </h5>
                    <p className="text-gray-500">
                      Creator
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
};

export default AboutPage;
