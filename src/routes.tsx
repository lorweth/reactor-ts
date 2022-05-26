import React from 'react';
import { RouteObject } from 'react-router-dom';

const WelcomePage = React.lazy(() => import('./pages/WelcomePage'));

const ROUTES: Array<RouteObject> = [
  {
    path: '/',
    element: <WelcomePage />,
  },
  {
    path: '/welcome',
    element: <WelcomePage />,
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
};
