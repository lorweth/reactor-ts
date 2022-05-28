import React, { Suspense } from 'react';
import { Location, Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import { getRoutes } from './routes';
import Main from './shared/layouts/main-layout';
import pkgJson from '@pkg/package.json';
import Sidebar, { SidebarItem } from './shared/layouts/sidebar';
import AppBar from './shared/layouts/appbar';
import { Box, Drawer } from '@chakra-ui/react';
import Footer from './shared/layouts/footer';

export default function App() {
  const title = pkgJson.name;
  const brandIcon = '/assets/img/brand-icon.svg';

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

  const sidebarItems: Array<SidebarItem> = [
    {
      name: 'Home',
      icon: 'home',
      path: '/',
    },
    {
      name: 'About',
      icon: 'info-circle',
      path: '/about',
    },
  ];

  return (
    <Main>
      <AppBar title={title} brandIcon={brandIcon} />
      <Sidebar title={title} brandIcon={brandIcon} items={sidebarItems} showDetail={true} />
      <Box ml={{ base: 0, md: 70 }} p="4">
        <Suspense fallback={<div>Loading...</div>}>
          {elm}

          {state?.backgroundLocation && modalElm()}
        </Suspense>
      </Box>
      <Footer />
    </Main>
  );
}
