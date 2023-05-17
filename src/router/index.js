import {createRouter,createWebHashHistory} from 'vue-router'
import LayOut from '../views/LayOut/LayOut'
import store from "../store/index"
import LoginIn from '../views/Pages/LoginIn.vue'
import Index from '@/views/Pages/index'
import UserList from '../views/Pages/UserList.vue'
import RoleList from '../views/Pages/RoleList.vue'
const routes=[
    {
        path:"/login",
        name:"login",
        component:LoginIn,

    },
    {
        path:'/layout',
        name:'layout',
        component:LayOut,
        redirect:'/role',
        children:[
            {
                path:'/index',
                name:'index',
                component:Index,
            },
            {
                path:'/user',
                name:'user',
                component:UserList,
            },
            {
                path:'/role',
                name:'role',
                component:RoleList,
            }
        ]
    }
]
const router=createRouter({
    history:createWebHashHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to,from,next)=>{
    const userI=store.state.uInfo.userInfo
    
    if(!userI.username) {
        if(to.path==="/login") {
            next()
            return 
        }
        next("/login")
    }else next()
})
export default router