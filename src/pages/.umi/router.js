import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import RendererWrapper0 from 'E:/Altmed_Admin/src/pages/.umi/LocaleWrapper.jsx';
import _dvaDynamic from 'dva/dynamic';

const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/user',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__UserLayout" */ '../../layouts/UserLayout'),
          LoadingComponent: require('E:/Altmed_Admin/src/components/PageLoading/index')
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
                import(/* webpackChunkName: 'p__User__models__register.js' */ 'E:/Altmed_Admin/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__User__Login" */ '../User/Login'),
              LoadingComponent: require('E:/Altmed_Admin/src/components/PageLoading/index')
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
                import(/* webpackChunkName: 'p__User__models__register.js' */ 'E:/Altmed_Admin/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__User__Register" */ '../User/Register'),
              LoadingComponent: require('E:/Altmed_Admin/src/components/PageLoading/index')
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
                import(/* webpackChunkName: 'p__User__models__register.js' */ 'E:/Altmed_Admin/src/pages/User/models/register.js').then(
                  m => {
                    return { namespace: 'register', ...m.default };
                  },
                ),
              ],
              component: () =>
                import(/* webpackChunkName: "p__User__RegisterResult" */ '../User/RegisterResult'),
              LoadingComponent: require('E:/Altmed_Admin/src/components/PageLoading/index')
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
              LoadingComponent: require('E:/Altmed_Admin/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('E:/Altmed_Admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
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
          LoadingComponent: require('E:/Altmed_Admin/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BasicLayout').default,
    routes: [
      {
        path: '/',
        redirect: '/user/login',
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
                  LoadingComponent: require('E:/Altmed_Admin/src/components/PageLoading/index')
                    .default,
                })
              : require('../DashboardLite/DashboardLite').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('E:/Altmed_Admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/doctor-view',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Doctors__DoctorView" */ '../Doctors/DoctorView'),
              LoadingComponent: require('E:/Altmed_Admin/src/components/PageLoading/index')
                .default,
            })
          : require('../Doctors/DoctorView').default,
        exact: true,
      },
      {
        path: '/doctors',
        icon: 'user',
        name: 'Doctors',
        tagColor: '#FFAB00',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__Doctors__DoctorsList" */ '../Doctors/DoctorsList'),
              LoadingComponent: require('E:/Altmed_Admin/src/components/PageLoading/index')
                .default,
            })
          : require('../Doctors/DoctorsList').default,
        exact: true,
      },
      {
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__404" */ '../404'),
              LoadingComponent: require('E:/Altmed_Admin/src/components/PageLoading/index')
                .default,
            })
          : require('../404').default,
        exact: true,
      },
      {
        component: () =>
          React.createElement(
            require('E:/Altmed_Admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('E:/Altmed_Admin/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
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
