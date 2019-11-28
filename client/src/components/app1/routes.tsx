import loadable from '@loadable/component';
import * as React from 'react';
import Preloader from '../_common/Preloader';

const FallbackPreload = {fallback: <Preloader />};

const DealList = loadable(() => import(/* webpackPrefetch: true */ '../app1/deal-list/DealList'), FallbackPreload);
const DealForm = loadable(() => import(/* webpackPrefetch: true */ '../app1/deal-form/DealForm'), FallbackPreload);


export const app1Routes = [
  {
    path: '/',
    exact: true,
    component: DealList
  },
  {
    path: '/new',
    component: DealForm,
  },
  {
    path: '/:id',
    component: DealForm,
  }
];
