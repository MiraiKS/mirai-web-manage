import Vue from 'vue'
import Router from 'vue-router'
const Index =()=>import('../pages/index/index')
Vue.use(Router)

function importRoutes(r) {
  return r.keys().map(key => r(key).default);
}

const children = importRoutes(require.context('../', true, /^\.\/pages\/((?!\/)[\s\S])+\/route\.js$/));

export default  new Router({
  routes: [
    ...[
      {
        path: '*',
        redirect: '/',
      },
      {
        path: '/',
        name:'index',
        component:Index
      }],
    ...children
  ]
});
