import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _498b5752 = () => interopDefault(import('../pages/AboutUs.vue' /* webpackChunkName: "pages/AboutUs" */))
const _65cc9a40 = () => interopDefault(import('../pages/Attributes.vue' /* webpackChunkName: "pages/Attributes" */))
const _06709d21 = () => interopDefault(import('../pages/Chat.vue' /* webpackChunkName: "pages/Chat" */))
const _1f556436 = () => interopDefault(import('../pages/ContactUs.vue' /* webpackChunkName: "pages/ContactUs" */))
const _de4a154c = () => interopDefault(import('../pages/Detail.vue' /* webpackChunkName: "pages/Detail" */))
const _c214b3aa = () => interopDefault(import('../pages/Detail copy.vue' /* webpackChunkName: "pages/Detail copy" */))
const _03386870 = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _718189fc = () => interopDefault(import('../pages/Logindetails.vue' /* webpackChunkName: "pages/Logindetails" */))
const _5f50bbf0 = () => interopDefault(import('../pages/Packag.vue' /* webpackChunkName: "pages/Packag" */))
const _443a832e = () => interopDefault(import('../pages/Post.vue' /* webpackChunkName: "pages/Post" */))
const _7dc00c41 = () => interopDefault(import('../pages/Privacypolicy.vue' /* webpackChunkName: "pages/Privacypolicy" */))
const _1ce9ad5c = () => interopDefault(import('../pages/ProductDetails.vue' /* webpackChunkName: "pages/ProductDetails" */))
const _11ece2f0 = () => interopDefault(import('../pages/Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _754ab1b1 = () => interopDefault(import('../pages/Termsandconditions.vue' /* webpackChunkName: "pages/Termsandconditions" */))
const _3beaf834 = () => interopDefault(import('../pages/Details/_id.vue' /* webpackChunkName: "pages/Details/_id" */))
const _1e8f0e61 = () => interopDefault(import('../pages/Packages/_id.vue' /* webpackChunkName: "pages/Packages/_id" */))
const _9bdd3676 = () => interopDefault(import('../pages/ProfileEdit/_id.vue' /* webpackChunkName: "pages/ProfileEdit/_id" */))
const _06886029 = () => interopDefault(import('../pages/Attribute/_name/_id.vue' /* webpackChunkName: "pages/Attribute/_name/_id" */))
const _26460965 = () => interopDefault(import('../pages/Product/_name/_subname/_id.vue' /* webpackChunkName: "pages/Product/_name/_subname/_id" */))
const _7bc2b50e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/AboutUs",
    component: _498b5752,
    name: "AboutUs"
  }, {
    path: "/Attributes",
    component: _65cc9a40,
    name: "Attributes"
  }, {
    path: "/Chat",
    component: _06709d21,
    name: "Chat"
  }, {
    path: "/ContactUs",
    component: _1f556436,
    name: "ContactUs"
  }, {
    path: "/Detail",
    component: _de4a154c,
    name: "Detail"
  }, {
    path: "/Detail%20copy",
    component: _c214b3aa,
    name: "Detail copy"
  }, {
    path: "/Login",
    component: _03386870,
    name: "Login"
  }, {
    path: "/Logindetails",
    component: _718189fc,
    name: "Logindetails"
  }, {
    path: "/Packag",
    component: _5f50bbf0,
    name: "Packag"
  }, {
    path: "/Post",
    component: _443a832e,
    name: "Post"
  }, {
    path: "/Privacypolicy",
    component: _7dc00c41,
    name: "Privacypolicy"
  }, {
    path: "/ProductDetails",
    component: _1ce9ad5c,
    name: "ProductDetails"
  }, {
    path: "/Profile",
    component: _11ece2f0,
    name: "Profile"
  }, {
    path: "/Termsandconditions",
    component: _754ab1b1,
    name: "Termsandconditions"
  }, {
    path: "/Details/:id?",
    component: _3beaf834,
    name: "Details-id"
  }, {
    path: "/Packages/:id?",
    component: _1e8f0e61,
    name: "Packages-id"
  }, {
    path: "/ProfileEdit/:id?",
    component: _9bdd3676,
    name: "ProfileEdit-id"
  }, {
    path: "/Attribute/:name?/:id?",
    component: _06886029,
    name: "Attribute-name-id"
  }, {
    path: "/Product/:name?/:subname?/:id?",
    component: _26460965,
    name: "Product-name-subname-id"
  }, {
    path: "/",
    component: _7bc2b50e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
