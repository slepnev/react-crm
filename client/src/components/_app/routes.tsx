import loadable from '@loadable/component';

const Welcome = loadable(() => import(/* webpackPreload: true */ './../home/Welcome'));
const DealList = loadable(() => import(/* webpackPreload: true */ './../deal/DealList'));
const EntitieList = loadable(() => import(/* webpackPreload: true */ './../entitie/EntitieList'));
const Environment = loadable(() => import(/* webpackPreload: true */ '../env/Environment'));

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
  },
  {
    path: "/entities",
    component: EntitieList,
  }
];
