import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import Home from '@/components/Home';
import Detail from "@/components/Detail";
import Login from "@/components/Login";
import Error from "@/components/404";
//二级路由
import Main from "@/pages/main";
import Dingdan from "@/pages/dingdan";
import My from "@/pages/my";
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: "/home/main"
        },
        {
            path: '/home',
            component: Home,
            children: [{
                    path: "/home/main",
                    component: Main
                },
                {
                    path: "/home/dingdan",
                    component: Dingdan
                },
                {
                    path: "/home/my",
                    component: My
                }
            ]
        },
        {
            path: '/detail:id',
            component: Detail
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '*',
            component: Error
        }
    ]
})