import loadable from '@loadable/component';
import * as React from 'react';
import Preloader from '../_common/Preloader';

const FallbackPreload = {fallback: <Preloader />};

const DealList = loadable(() => import(/* webpackPrefetch: true */ './deal-list/DealList'), FallbackPreload);
const DealForm = loadable(() => import(/* webpackPrefetch: true */ './deal-form/DealForm'), FallbackPreload);


export const app1Routes = [
  {
    path: '/app1',
    exact: true,
    component: DealList
  },
  {
    path: '/app1/new',
    component: DealForm,
  },
  {
    path: '/app1/edit/:id',
    component: DealForm,
  }
];
