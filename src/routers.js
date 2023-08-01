import Home from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import LogIn from './components/LogIn.vue'
import Add from './components/Add.vue';
import Update from './components/Update.vue';

import {createRouter,createWebHistory} from 'vue-router';

const routes=[
    {   name:'HomeVue',
        component:Home,
        path:'/'
    },
    {   name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {   name:'LogIn',
        component:LogIn,
        path:'/login'
    },
    {   name:'AddVue',
        component:Add,
        path:'/add'
    },
    {    name:'UpdateVue',
        component:Update,
        path:'/update/:id'
    },

];
const router = createRouter({
    history:createWebHistory(),routes
})

export default router;