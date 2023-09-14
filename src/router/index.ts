import { RouteRecordRaw, createRouter, createWebHistory, RouterScrollBehavior } from 'vue-router'
import Home from '../views/Home.vue'

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (to.hash ) {
    return { el: to.hash};
  }
  if (savedPosition) {
    return savedPosition;
  }
  return { left: 0, top: 0 };
}

const routes:RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/About.vue')
    },
    {
      path: '/care',
      name: 'care',
      component: () => import('../views/about/Care.vue')
    },
    {
      path: '/sustainability',
      name: 'sustainability',
      component: () => import('../views/about/Sustainability.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/contacts/Conatcts.vue')
    },
    {
      path: '/lookbooks',
      name: 'lookbooks',
      component: () => import('../views/shop/Lookbooks.vue')
    },
    {
      path: '/lookbooks/:id',
      name: 'single-lookbook',
      component: () => import('../views/shop/SingleLookbook.vue'),
      props: true
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('../views/shop/Catalog.vue')
    },
    {
        path: '/catalog/:id',
        // alias: '/good-item/:id',
        name: 'single',
        component: () => import('../views/shop/SingleGood.vue'),
        props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/cart/Cart.vue')
    },
    {
      path: '/cart/checkout',
      name: 'checkout',
      component: () => import('../views/cart/Checkout.vue')
    },
    {
      path: '/success-order',
      name: 'success-order',
      component: () => import('../views/cart/SuccessOrder.vue')
    },
    {
      path: '/cookie',
      name: 'cookie',
      component: () => import('../views/contacts/Cookie.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/Notfound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior
})

export default router