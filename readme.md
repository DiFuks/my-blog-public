<p align="center"><img src="https://uploads.photo/images/Ed7f.png" width="200"/></p>


<p align="center" style="font-size:1.8em;">Мой блог. Публичная часть</p>

##  Список основых технологий
- Язык программирования: [TypeScript](https://www.typescriptlang.org)
- Синтаксис [ECMAScript2017](https://www.ecma-international.org/ecma-262/8.0/#sec-async-function-definitions)
- Архитекура: [Ducks](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/), [организация структуры проекта](https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7)
- [Docker](https://docs.docker.com/get-started/)
- [React](https://ru.reactjs.org)
- [Redux](https://redux.js.org)
- [Redux Saga](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
- [React Intl](https://github.com/formatjs/react-intl/blob/master/docs/README.md)
- [React Helmet](https://github.com/nfl/react-helmet)
- [Styled.Components](https://www.styled-components.com)

## Список дополнительных технологий

- [React Router Redux](https://github.com/supasate/connected-react-router)
- [Webpack Encore](https://symfony.com/doc/current/frontend.html)
- [Grid Styled](https://github.com/rebassjs/grid)
- [Lodash](https://lodash.com)
- [Moment](https://momentjs.com)
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [React Rnd](https://github.com/bokuweb/react-rnd)
- [React Syntax Highlighter](https://github.com/conorhastings/react-syntax-highlighter#readme)
- [Reselect](https://github.com/reduxjs/reselect)
- [Socket.io Client](https://github.com/socketio/socket.io-client)

## Разворачивание проекта для разработки

1. Скопировать файл окружения
    ```bash
    cp ./.env.dist ./.env
    ```
    
2. Заменить переменные окружения в созданном файле

3. Установить npm зависимости
    ```bash
    yarn install
    ```
    
4. Запустить webpack dev server
    ```bash
    yarn run dev
    ```

## Разворачивание проекта для работы

1. Скопировать файл окружения
    ```bash
    cp ./.env.dist ./.env
    ```
    
2. Заменить переменные окружения в созданном файле

3. Установить npm зависимости
    ```bash
    make prod-yarn-install
    ```
    
4. Запустить сборку бандла
    ```bash
    make prod-encore
    ```

5. Запустить nginx сервер
    ```bash
    make server
    ```
