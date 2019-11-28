import loadable from '@loadable/component';
import * as React from 'react';
import pMinDelay from 'p-min-delay';
import Preloader from '../_common/Preloader';
import { app1Routes } from '../app1/routes';

const FallbackPreload = { fallback: <Preloader/>};

const Welcome = loadable(() => import(/* webpackPrefetch: true */ './../home/Welcome'), FallbackPreload);
const App1DealList = loadable(() => import(/* webpackPrefetch: true */ '../app1/deal-list/DealList'), FallbackPreload);
const App2DealList = loadable(
  () => pMinDelay(import(/* webpackPrefetch: true */ '../app2/deal-list/DealList'), 800),
  FallbackPreload
);
const Environment = loadable(() => import(/* webpackPrefetch: true */ '../env/Environment'), FallbackPreload);

// Environment.preload();
// Welcome.preload();


export const routes = [
  {
    path: '/',
    exact: true,
    component: Welcome
  },
  {
    path: '/env',
    component: Environment,
  },
  {
    path: '/app1',
    routes: app1Routes
  },
  {
    path: '/app2',
    component: App2DealList,
  }
];
