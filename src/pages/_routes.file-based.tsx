import React, { Fragment, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Modal } from 'antd';

const PRESERVED = import.meta.globEager('/src/pages/(_app|404).tsx')
const ROUTES = import.meta.globEager('/src/pages/**/[a-z[]*.tsx');

const preserved: any = Object.keys(PRESERVED).reduce((preserved, file) => {
  const key = file.replace(/\/src\/pages\/|\.tsx$/g, '')
  return { ...preserved, [key]: PRESERVED[file].default }
}, {})

const routes = Object.keys(ROUTES).map((route) => {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')

  return { path, component: ROUTES[route].default }
})

interface Props {
  children?: React.ReactNode;
}

export const AppRoutes: React.FC<Props> = () => {
  const location = useLocation(); // const location = useLocation<{ backgroundLocation?: Location<Record<string, unknown> | null | undefined> }>();
  let navigate = useNavigate();
  const App = preserved?.['_app'] || Fragment;
  const NotFound = preserved?.['404'] || Fragment;

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  const locState = location.state as { backgroundLocation?: Location };
  // const returnHref: any = (history.length > 2) ? -1 : '/';
  const returnHref: any = -1;

  return (
    <App>
      <Suspense fallback={(<div className="text-center p-12">Loading...</div>)}>
        <Routes location={locState?.backgroundLocation || location}>
          {routes.map(({ path, component: Component = Fragment }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {locState?.backgroundLocation && (
        <Suspense fallback={(<div className="text-center p-12">Loading in Modal...</div>)}>
          <Modal
            title="Post Modal"
            visible={!!locState?.backgroundLocation}
            onCancel={() => navigate(returnHref)}
          >
            <Routes>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Modal>
        </Suspense>
      )}
    </App>
  )
}

export default AppRoutes;
