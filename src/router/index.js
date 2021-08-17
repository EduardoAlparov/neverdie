import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../components/MainLayout.vue'
import PopupOneComp from '../views/PopupOneComp.vue'
import PopupTwoComp from '../views/PopupTwoComp.vue'
import PopupThreeComp from '../views/PopupThreeComp.vue'
import PopupFourComp from '../views/PopupFourComp.vue'
import PopupFinalComp from '../views/PopupFinalComp.vue'
import ResponseComp from '../views/ResponseComp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "Home",
    component: MainLayout,
  },
  {
    path: "/popupone",
    name: "PopupOne",
    component: PopupOneComp
  },
  {
    path: "/popuptwo",
    name: "PopupTwoComp",
    component: PopupTwoComp
  },
  {
    path: "/popupthree",
    name: "PopupThreeComp",
    component: PopupThreeComp
  },
  {
    path: "/popupfour",
    name: "PopupFourComp",
    component: PopupFourComp
  },
  {
    path: "/popupfinal",
    name: "PopupFinalComp",
    component: PopupFinalComp,
    props: true
  },
  {
    path: "/response",
    name: "ResponseComp",
    component: ResponseComp,
    props: true
  }
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
