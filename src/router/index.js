import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from "../views/StartPage";
import HousesList from "../views/HousesList";
import HouseDetails from "../views/HouseDetails";
import HouseAdd from "../views/HouseAdd";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/house_list',
    name: 'HousesList',
    component: HousesList
  },
  {
    path: '/house_details/:id',
    name: 'HouseDetails',
    component: HouseDetails,
    props: true
  },
  {
    path: '/house_add',
    name: 'HouseAdd',
    component: HouseAdd
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: 'http://localhost:8080/',  // for the future: process.env.BASE_URL,
  routes
})

export default router;
