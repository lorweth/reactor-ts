import React from 'react';
import { RouteObject } from 'react-router-dom';

const WelcomePage = React.lazy(() => import('./pages/WelcomePage'));
const Counter = React.lazy(() => import('./pages/Counter'));

const ROUTES: Array<RouteObject> = [
  {
    path: '/',
    element: <WelcomePage />,
  },
  {
    path: '/welcome',
    element: <WelcomePage />,
  },
  {
    path: '/counter',
    element: <Counter />,
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
