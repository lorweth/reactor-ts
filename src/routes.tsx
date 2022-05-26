import React from 'react';
import { RouteObject } from 'react-router-dom';

const Main = React.lazy(() => import('./shared/layouts/main-layout'));
const WelcomePage = React.lazy(() => import('./pages/WelcomePage'));

const ROUTES: Array<RouteObject> = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: '/welcome',
        element: <WelcomePage />,
      },
    ],
  },
];

const MODAL_ROUTES: Array<RouteObject> = [
  // Define your modal routes here
];

export const getRoutes = (): { routes: Array<RouteObject>; modalRoutes: Array<RouteObject> } => {
  return {
    routes: ROUTES,
    modalRoutes: MODAL_ROUTES,
  };
}
