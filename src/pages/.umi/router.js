import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/user',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__UserLayout" */ '../../layouts/UserLayout'),
          LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/UserLayout').default,
    routes: [
      {
        path: '/user/login',
        name: 'login',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__User__models__register.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__User__Login" */ '../User/Login'),
              LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                .default,
            })
          : require('../User/Login').default,
        exact: true,
      },
      {
        path: '/user/register',
        name: 'register',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__User__models__register.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__User__Register" */ '../User/Register'),
              LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                .default,
            })
          : require('../User/Register').default,
        exact: true,
      },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import(/* webpackChunkName: 'p__User__models__register.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__User__RegisterResult" */ '../User/RegisterResult'),
              LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                .default,
            })
          : require('../User/RegisterResult').default,
        exact: true,
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__BasicLayout" */ '../../layouts/BasicLayout'),
          LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    routes: [
      {
        path: '/',
        redirect: '/dashboardlite',
        exact: true,
      },
      {
        path: '/dashboardlite',
        avantHeadline: 'Feature',
        name: 'Dashboard',
        icon: 'laptop',
        routes: [
          {
            path: '/dashboardlite',
            initials: 'A',
            name: 'Analytics',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__DashboardLite__DashboardLite" */ '../DashboardLite/DashboardLite'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../DashboardLite/DashboardLite').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/App',
        icon: 'scan',
        name: 'App',
        routes: [
          {
            path: '/app/email',
            name: 'Email',
            initials: 'E',
            number: '12',
            tagColor: '#00B8D9',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__App__MailPage" */ '../App/MailPage'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../App/MailPage').default,
            exact: true,
          },
          {
            path: '/app/kanban',
            initials: 'KB',
            name: 'Kanban Board',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__App__KanbanPage" */ '../App/KanbanPage'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../App/KanbanPage').default,
            exact: true,
          },
          {
            path: '/app/chat-page',
            name: 'Chat',
            initials: 'C',
            number: 'New 89',
            tagColor: '#6554C0',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__App__ChatPage" */ '../App/ChatPage'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../App/ChatPage').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/icon',
        icon: 'bulb',
        name: 'Icon',
        number: '9.635',
        tagColor: '#FFAB00',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__UiElement__IconElement" */ '../UiElement/IconElement'),
              LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                .default,
            })
          : require('../UiElement/IconElement').default,
        exact: true,
      },
      {
        path: '/Layout',
        icon: 'layout',
        name: 'Layout',
        routes: [
          {
            path: '/layout/GridElement',
            name: 'Grid',
            initials: 'G',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Layout__GridElement" */ '../Layout/GridElement'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Layout/GridElement').default,
            exact: true,
          },
          {
            path: '/layout/LayoutElement',
            name: 'Layout',
            initials: 'L',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Layout__LayoutElement" */ '../Layout/LayoutElement'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Layout/LayoutElement').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/form',
        icon: 'file-zip',
        avantHeadline: 'GENERAL',
        name: 'Form Entry',
        routes: [
          {
            path: '/form/basic-form',
            name: 'Basic Form',
            initials: 'BF',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Forms__models__form.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/Forms/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Forms__BasicForm" */ '../Forms/BasicForm'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Forms/BasicForm').default,
            exact: true,
          },
          {
            path: '/form/step-form',
            name: 'Step Form',
            initials: 'SF',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Forms__models__form.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/Forms/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Forms__StepForm" */ '../Forms/StepForm'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Forms/StepForm').default,
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                redirect: '/form/step-form/confirm',
                exact: true,
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Forms__models__form.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/Forms/models/form.js').then(
                          m => {
                            return { namespace: 'form', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Forms__StepForm" */ '../Forms/StepForm/Step1'),
                      LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Forms/StepForm/Step1').default,
                exact: true,
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Forms__models__form.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/Forms/models/form.js').then(
                          m => {
                            return { namespace: 'form', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Forms__StepForm" */ '../Forms/StepForm/Step2'),
                      LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Forms/StepForm/Step2').default,
                exact: true,
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__Forms__models__form.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/Forms/models/form.js').then(
                          m => {
                            return { namespace: 'form', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__Forms__StepForm" */ '../Forms/StepForm/Step3'),
                      LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../Forms/StepForm/Step3').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/form/advanced-form',
            name: 'Advanced Form',
            initials: 'AF',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Forms__models__form.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/Forms/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Forms__AdvancedForm" */ '../Forms/AdvancedForm'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Forms/AdvancedForm').default,
            exact: true,
          },
          {
            path: '/form/upload-form',
            name: 'Upload',
            initials: 'U',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Forms__models__form.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/Forms/models/form.js').then(
                      m => {
                        return { namespace: 'form', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Forms__UploadForm" */ '../Forms/UploadForm'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Forms/UploadForm').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/UiElement',
        icon: 'save',
        name: 'Data Display',
        routes: [
          {
            path: '/uiElement/button',
            name: 'Button',
            initials: 'B',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__UiElement__ButtonElement" */ '../UiElement/ButtonElement'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../UiElement/ButtonElement').default,
            exact: true,
          },
          {
            path: '/uiElement/avatar',
            name: 'Avatar Comment',
            initials: 'AC',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__UiElement__AvatarElement" */ '../UiElement/AvatarElement'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../UiElement/AvatarElement').default,
            exact: true,
          },
          {
            path: '/uiElement/carousel',
            name: 'Carousel',
            initials: 'C',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__UiElement__CarouselElement" */ '../UiElement/CarouselElement'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../UiElement/CarouselElement').default,
            exact: true,
          },
          {
            path: '/uiElement/timeline',
            name: 'Timeline',
            initials: 'T',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__UiElement__TimelineElement" */ '../UiElement/TimelineElement'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../UiElement/TimelineElement').default,
            exact: true,
          },
          {
            path: '/uiElement/slider',
            name: 'Slider',
            initials: 'S',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__UiElement__SliderElement" */ '../UiElement/SliderElement'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../UiElement/SliderElement').default,
            exact: true,
          },
          {
            path: '/uiElement/map',
            name: 'Map',
            initials: 'M',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__UiElement__MapElement" */ '../UiElement/MapElement'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../UiElement/MapElement').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/Feedback',
        icon: 'alert',
        name: 'Feedback',
        routes: [
          {
            path: '/feedback/alert',
            name: 'Alert',
            initials: 'A',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Feedback__AlertElement" */ '../Feedback/AlertElement'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Feedback/AlertElement').default,
            exact: true,
          },
          {
            path: '/feedback/modal',
            name: 'Modal',
            initials: 'M',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Feedback__ModalElement" */ '../Feedback/ModalElement'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Feedback/ModalElement').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/table',
        icon: 'table',
        name: 'Table',
        routes: [
          {
            path: '/table/basic-table',
            name: 'Basic Table',
            initials: 'BT',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Table__BasicTable" */ '../Table/BasicTable'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Table/BasicTable').default,
            exact: true,
          },
          {
            path: '/table/dynamic-table',
            name: 'Dynamic Table',
            initials: 'DT',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__Table__DynamicTable" */ '../Table/DynamicTable'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Table/DynamicTable').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        name: 'Exception',
        icon: 'experiment',
        avantHeadline: 'SPECIAL PAGE',
        path: '/exception',
        routes: [
          {
            path: '/user/login',
            name: 'Login',
            initials: 'L1',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__User__models__register.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/User/models/register.js').then(
                      m => {
                        return { namespace: 'register', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__User__Login" */ '../User/Login'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../User/Login').default,
            exact: true,
          },
          {
            path: '/user/register',
            name: 'Register',
            initials: 'R5',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__User__models__register.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/User/models/register.js').then(
                      m => {
                        return { namespace: 'register', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__User__Register" */ '../User/Register'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../User/Register').default,
            exact: true,
          },
          {
            path: '/user/register-result',
            name: 'Register Result',
            initials: 'RR',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__User__models__register.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/User/models/register.js').then(
                      m => {
                        return { namespace: 'register', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__User__RegisterResult" */ '../User/RegisterResult'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../User/RegisterResult').default,
            exact: true,
          },
          {
            path: '/exception/403',
            name: 'Not Permission',
            initials: 'NT',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Exception__models__error.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Exception__403" */ '../Exception/403'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/403').default,
            exact: true,
          },
          {
            path: '/exception/404',
            name: 'Not Find',
            initials: 'Nn',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Exception__models__error.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Exception__404" */ '../Exception/404'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/404').default,
            exact: true,
          },
          {
            path: '/exception/500',
            name: 'Server Error',
            initials: 'SE',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Exception__models__error.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Exception__500" */ '../Exception/500'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/500').default,
            exact: true,
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__Exception__models__error.js' */ 'C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/pages/Exception/models/error.js').then(
                      m => {
                        return { namespace: 'error', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__Exception__TriggerException" */ '../Exception/TriggerException'),
                  LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                    .default,
                })
              : require('../Exception/TriggerException').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/menu-level',
        icon: 'bars',
        avantHeadline: 'OTHERS',
        name: 'Menu Level',
        routes: [
          {
            path: '/menu-level-one',
            initials: '01',
            name: 'Level One',
            exact: true,
          },
          {
            path: '/menu-level-two',
            name: 'Level Two',
            routes: [
              {
                path: '/menu-level-two/menu-level-three',
                name: 'Level Three',
                exact: true,
              },
              {
                path: '/menu-level-two/menu-level-three',
                name: 'Level Three',
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            component: () =>
              React.createElement(
                require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/User/Documents/Themeforest/UPLOAD/v.1.0.1/AVANT/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
