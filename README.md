# react-crm
React example project \
Use all actual React packages

#### Concept:
- deal list
- deal add
- deal edit
- deal delete

## Npm packeges

#### React
- `react-router-dom` - Router
- `react-router-config` - Render routers from config
- `@loadable/component` - Code splitting, lazy loading

#### State
- `redux` `react-redux` - State manager, methodology Flax
- `redux-devtools-extension` - Chrome Dev Tools for Redux
- `redux-cli` - Code generator
- `redux-thunk` - [API] Redux middleware for async dispatch. Function

#### UI
- `styled-components` - CSS in JS
- `materialize-css@next` - CSS framework Materialize
- `@material-ui/core` `@material-ui/icons`  - UI lib Material design

#### Utils
- `classnames` - Бибилотека для работы с CSS классами
- `clsx` - Альтернатива `classnames`, но меньше и быстрее
- `lodash` - Бибилотека для работы с данными
- `p-min-delay` - Promise minimum delay

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

#### Mono-repositories
- `lerna` - Следит за изменениями всех проектов. Publishing. Запуск скриптов с одинаковым названием.
---

#### Изучить
+ redux-devtools-extension
- props type
+ redux thunk
- redux observable and rxjs request for api
- redux saga
- redux rematch
- redux reselect
- redux persist
- effector effector-react
- mobx
- React.Context
- css reshadow
- css emotion
- lib rambda
- lib datejs (analog moment.js)
- lib date-fns (analog moment.js)
- lib numeral
+ lib lodash
+ lib p-min-delay
- lib clsx
- styling eslint
- styling Prettier
- form redux form
- form formik
- form final form
- form react-jsonschema-form
- l18n React Inti
- Next.js
- Gatsby
- React Native
- Apollo+GraphQL
- api Axios
- api Superagent
+ React.memo
+ code-generation redux-cli
###### Сборка
- Webpack (custom build and dev)
- Parcel
- Rollup
###### Тестирование
- e2e Puppeteer
- e2e Cypress
- test Jest
- test Enzyme
- test Snapshots
###### Npm managers
+ Lerna
- Rush
- NX
---
#### План разработки
+ Настроить redux и redux-devtools-extension
+ App2. Список сделок через redux thunk
- App1. Создание сделки через обычный запрос и final form
- App1. Редактирование сделки через обычный запрос и final form
- App1. Удаление сделки через обычный запрос без подтверждение
- App2. Создание сделки через redux thunk и redux form
- App2. Редактирование сделки через redux thunk и redux form
- App2. Удаление сделки через redux thunk
- ...
