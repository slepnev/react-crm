import loadable from '@loadable/component';

const Welcome = loadable(() => import(/* webpackPreload: true */ '../home/Welcome'));
const DealList = loadable(() => import(/* webpackPreload: true */ '../deal/DealList'));
const Environment = loadable(() => import(/* webpackPreload: true */ '../environment/Environment'));
const Entities = loadable(() => import(/* webpackPreload: true */ '../entitie/Entities'));

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
    component: Entities,
  }
];
