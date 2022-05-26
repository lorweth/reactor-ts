import React, { Suspense } from 'react';
import { Location, Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import { getRoutes } from './routes';
import AppBar from './shared/layouts/appbar';
import Main from './shared/layouts/main-layout';

export default function App() {
  const routes = getRoutes();
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  const elm = useRoutes(routes.routes, state?.backgroundLocation || location);

  const modalElm = () => {
    const modalRoutes = routes.modalRoutes;
    return (
      <Routes>
        {modalRoutes &&
          modalRoutes.length > 0 &&
          modalRoutes.map(r => <Route key={r.path} path={r.path} element={r.element} />)}
      </Routes>
    );
  };

  return (
    <Main>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        {elm}

        {state?.backgroundLocation && modalElm()}
      </Suspense>
    </Main>
  );
}
