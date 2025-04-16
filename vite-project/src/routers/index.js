import {createRouter,createWebHashHistory} from "vue-router"
// 路由数组
const routes = [
    {
        path:"/",
        redirect:'login'
    },
    {
        path:"/login",
        name:"login",
        component:()=>(import('../components/Login.vue'))
    },
    {
        path:"/home",
        name:"home",
        component:()=>(import('../components/Home.vue'))
    },
]
// 创建路由器
const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
});
//导出路由器
export default router;