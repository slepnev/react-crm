import loadable from '@loadable/component';

const Welcome = loadable(() => import(/* webpackPreload: true */ './components/Welcome/Welcome'));
const DealList = loadable(() => import(/* webpackPreload: true */ './components/DealList/DealList'));
const Environment = loadable(() => import(/* webpackPreload: true */ './components/Environment/Environment'));
// Environment.preload();
// DealList.preload();
// Welcome.preload();


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
