import { useLocation, Location } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface Props {
  children?: React.ReactNode;
  inModal?: boolean;
}

interface LocationState {
  backgroundLocation?: Location; // React.ReactNode
}

const LoginPage: React.FC<Props> = ({ inModal }) => {
  const location = useLocation();
  const locationState = location.state as LocationState;
  const isInModal = (inModal && locationState && locationState.backgroundLocation) ? true : false;

  if (inModal) {
    return (
      <>
        <Helmet>
          <title>Login in Modal | Boilerplate</title>
        </Helmet>

        <div>Login Page in Modal</div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Login | Boilerplate</title>
      </Helmet>

      <div>Login Page</div>
    </>
  )
};

export default LoginPage;
