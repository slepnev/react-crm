# react-crm
React &amp; Redux\
Use all actual React packeges

## Npm packeges

#### React
- `react-router-dom` - Router
- `react-router-config` - Render routers from config
- `@loadable/component` - Code splitting, lazy loading

#### State
- `redux` `react-redux` - State manager, methodology Flax
- `redux-devtools-extension` - Chrome Dev Tools for Redux
- `redux-thunk` - Redux middleware for async dispatch. Function

#### UI
- `styled-components` - CSS in JS
- `materialize-css@next` - CSS framework Materialize
- `@material-ui/core` `@material-ui/icons`  - UI lib Material design

#### Utils
- `classnames` - Бибилотека для работы с CSS классами
- `lodash` - Бибилотека для работы с данными
- `redux-cli` - Code generator

#### TypeScript
- `typescript`
- `@types/node` `@types/react` `@types/react-dom` `@types/jest` `@types/react-router-dom` `@types/enzyme` `@types/loadable__component` `@types/materialize-css` `@types/classnames` `@types/styled-components` `@types/react-redux` `@types/lodash`

#### Test (_setupProxy.js_)
- `enzyme` `enzyme-adapter-react-16` `react-test-renderer` `jest-enzyme` - Enzyme support test
- `react-testing-library` `jest-dom` - Альтернатива enzyme, для тестирования

#### Proxy (_setupProxy.js_)
- `http-proxy-middleware` - Proxy for api

#### Pre-Rendering
- `react-snapshot` - Создает статитечкую первоначальную версию сайта
- `react-helmet` - Manages the document head, including title, description and meta tags
---
###### Изучить
+ redux-devtools-extension
- webpack custom build and dev
- props type
+ redux thunk
- redux observable and rxjs request for api
- redux saga
- redux rematch
- redux reselect
- redux persist
- effector effector-react
- mobx
- css reshadow
- css emotion
- lib ramda
- lib datejs
- lib numeral
+ lib lodash
- form redux form
- form formik
- form final form
- l18n React Inti
- Next.js
- Gatsby
- React Native
- e2e Puppeteer
- e2e Cypress
- test Jest
- test Enzyme
- test Snapshots
+ React.memo
+ code-generation redux-cli
---
###### План разработки
+ Настроить redux и redux-devtools-extension
+ Список компаний через redux thunk
- Создание компании через обычный запрос и final form
- Удаление компании через обычный запрос
- Создание компании через redux thunk и redux form
- Удаление компании через redux thunk
- ...
