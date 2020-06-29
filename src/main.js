import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

import { Header , Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js';





import app from './App.vue'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import $ from 'jquery'


var vm = new Vue({
    el: '.app',
    render : c=> c (app),
    router
})
