import loadable from '@loadable/component';
import * as React from 'react';
import pMinDelay from 'p-min-delay';
import Preloader from '../_common/Preloader';

const FallbackPreload = { fallback: <Preloader/>};

const Welcome = loadable(() => import(/* webpackPrefetch: true */ './../home/Welcome'), FallbackPreload);
const DealList = loadable(() => import(/* webpackPrefetch: true */ './../deal/DealList'), FallbackPreload);
const EntityList = loadable(() => import(/* webpackPrefetch: true */ '../entity/EntityList'), FallbackPreload);
const EntityReduxThunkList = loadable(
  () => pMinDelay(import(/* webpackPrefetch: true */ '../entity/EntityListReduxThunk'), 800),
  FallbackPreload
);
const Environment = loadable(() => import(/* webpackPrefetch: true */ '../env/Environment'), FallbackPreload);

// Environment.preload();
// DealList.preload();
// Welcome.preload();


export const routes = [
  {
    path: '/',
    exact: true,
    component: Welcome
  },
  {
    path: '/deals',
    component: DealList,
  },
  {
    path: '/env',
    component: Environment,
  },
  {
    path: '/entities',
    component: EntityList,
  },
  {
    path: '/entities-thunk',
    component: EntityReduxThunkList,
  }
];
