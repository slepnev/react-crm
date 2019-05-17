import loadable from '@loadable/component';

const Welcome = loadable(() => import(/* webpackPrefetch: true */ './components/Welcome/Welcome'));
const DealList = loadable(() => import(/* webpackPrefetch: true */ './components/DealList/DealList'));
const Environment = loadable(() => import(/* webpackPrefetch: true */ './components/Environment/Environment'));


export const routes = [
  {
    path: "/",
    exact: true,
    component: Welcome
  },
  {
    path: "/deals",
    component: DealList,
  },
  {
    path: "/env",
    component: Environment,
  }
];
