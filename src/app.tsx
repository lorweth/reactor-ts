import { Box, Container } from '@chakra-ui/react';
import React, { Suspense } from 'react';
import { BrowserRouter, Location, Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import { getRoutes } from './routes';

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
    <Box as="div">
      <Suspense fallback={<div>Loading...</div>}>
        {elm}

        {state?.backgroundLocation && modalElm()}
      </Suspense>
    </Box>
  );
}
