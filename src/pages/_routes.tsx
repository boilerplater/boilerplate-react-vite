import React, { Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import App from './_app';
import Layout from '@/layouts/Layout';
import PreloaderSpinner from '@/components/PreloaderSpinner';
// Pages required
import IndexPage from './index';
import Error404Page from './404';
// Code Splitting with delay
const AboutPage = React.lazy(() => import('./about'));

interface Props {
  children?: React.ReactNode;
}

// interface RouteChildrenProps {
//   match?: any
// }

export const AppRoutes: React.FC<Props> = () => {
  const location = useLocation(); // const location = useLocation<{ backgroundLocation?: Location<Record<string, unknown> | null | undefined> }>();
  let navigate = useNavigate();

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  const locState = location.state as { backgroundLocation?: Location };

  const handleModalCancel = () => {
    // const returnHref: any = (history.length > 2) ? -1 : '/';
    const returnHref: any = -1;

    navigate(returnHref);
  };

  return (
    <App>
      <Suspense fallback={(<div className="text-center p-12"><PreloaderSpinner /></div>)}>
        <Routes location={locState?.backgroundLocation || location}>
          <Route element={<Layout />}>.
            <Route index element={<IndexPage />} />
            <Route path="/about/*" element={<AboutPage />} />
            <Route path="*" element={<Error404Page />} />
          </Route>
        </Routes>
      </Suspense>

      {/*
        <Route path="*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </Layout>
          } />

        <Routes location={locState?.backgroundLocation || location}>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="gallery" element={<Error404 />} />
            <Route path="/img/:id" element={<Error404 />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>


        <Routes location={locState?.backgroundLocation || location}>
          <AdminRoute path="/admin" component={AdminPage} />
          <Route path="*" render={() => (
            <LayoutMain>
              <Switch>
                <Route path="/" exact={true} component={IndexPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/forgot-password" component={ForgotPasswordPage} />
                <Route path="/auth/action" component={AuthActionPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/shop(s)?" component={ShopsPage} />
                <PrivateRoute path="/settings" component={SettingsPage} />
                <Route path="*" render={() => (
                  <Error404 />
                )} />
              </Switch>
            </LayoutMain>
          )} /></ion-app>
          <AdminRoute path={["/admin"]} render={() => (
            <Switch>
              <Route path="/debug" component={DebugPage} />
              <Route path="/admin/*" render={() => (
                <LayoutMain>
                  <Error404 />
                </LayoutMain>
              )} />
            </Switch>
          )} />
          <Route path="/search" component={SearchPage} />
          <Route path="/listing" component={ListingPage} />


          <PrivateRoute path="/messages" component={MessagesPage} />

          <Route path={["/"]} render={() => (
            <LayoutMain className="IndexPage">
              <Switch>
                <Route path="/" exact={true} component={IndexPage}  />
                <Route path="/about" component={AboutPage} />


                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/forgot-password" component={ForgotPasswordPage} />
                <Route path="/auth/action" component={AuthActionPage} />

                <PrivateRoute path="/settings" component={SettingsPage} />
              </Switch>
            </LayoutMain>
          )} />

          <Route path={["/admin"]} render={() => (
            <LayoutIonDashboard>
              <Switch>
                <Route path="/debug" component={DebugPage} />
                <Route path="*" render={() => (
                  <Error404 />
                )} />
              </Switch>
            </LayoutIonDashboard>
          )} />
        </Routes>
      */}

      {locState?.backgroundLocation && (
        <Modal
          title="Post Modal"
          visible={!!locState?.backgroundLocation}
          onCancel={handleModalCancel}
          // centered
          // width={'auto'}
          // footer={null}
          // closable={false}
          // bodyStyle={{ padding: 0 }}
          // className="sm:max-w-2xl max-w-full !w-full md:max-w-5xl !my-0"
        >
          <Suspense fallback={(<div className="text-center p-12"><PreloaderSpinner /></div>)}>
            <Routes>
              {/*
              Old v5 react router
              <Route path={['/items/:slug']} render={({match, history}) => (
                <ItemsPage inModal={true} />
              )} />
              */}
              <Route path="*" element={<Error404Page />} />
            </Routes>
          </Suspense>
        </Modal>
      )}
    </App>
  )
}

export default AppRoutes;
