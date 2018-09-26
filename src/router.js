import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import News from "./views/News";
import Relate from "./views/Relate";
import Service from "./views/Service";
import NewsOne from './views/NewsOne'
import NewsTwo from './views/NewsTwo'
import NewsThree from './views/NewsThree'

Vue.use(Router);

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
        path: "/service",
        name: "service",
        component: Service
    },
    {
        path: "/news",
        name: "news",
        component: News
    },
    {
        path: "/relate",
        name: "relate",
        component: Relate
    },
    {
        path: "/newsone",
        name:'newsone',
        component:NewsOne
    },
    {
        path: "/newstwo",
        name:'newstwo',
        component:NewsTwo
    },
    {
        path: "/newsthree",
        name:'newsthree',
        component:NewsThree
    }
  ],
  mode:'history',
  linkActiveClass:'active'
});
