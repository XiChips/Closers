import VueRouter from 'vue-router'
import home from './components/tabbar/Home.vue'
import member from './components/tabbar/Member.vue'
import search from './components/tabbar/Search.vue'
import shopcar from './components/tabbar/Shopcar.vue'
import newslist from './components/news/NewsList.vue'
import collections from './components/collections/collections.vue'

var router = new VueRouter({
    routes:[
        {path: '/' , redirect : '/home' },
        {path:'/home',component : home},
        {path:'/member',component : member},
        {path:'/search',component : search},
        {path:'/shopcar',component : shopcar},
        {path:'/home/newslist',component : newslist},
        {path:'/home/collections',component : collections},
    ],
    linkActiveClass: 'mui-active'
})

export default router