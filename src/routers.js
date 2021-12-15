import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import {createRouter,createWebHistory} from 'vue-router'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import Team from './components/Team.vue'
import UpdateTeam from './components/UpdateTeam.vue'
import AddTeam from './components/AddTeam.vue'
import Player from './components/Player.vue'
import UpdatePlayer from './components/UpdatePlayer.vue'
import AddPlayer from './components/AddPlayer.vue'
const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'Update',
        component:Update,
        path:'/update/:id'
    },
    {
        name:'Team',
        component:Team,
        path:'/teams/:id'
    },
    {
        name:'UpdateTeam',
        component:UpdateTeam,
        path:'/teams/:id/team/:ids'
    },
    {
        name:'AddTeam',
        component:AddTeam,
        path:'/teams/:id/team'
    },
    {
        name:'Player',
        component:Player,
        path:'/teams/:id/team/:ids/players'
    },
    {
        name:'UpdatePlayer',
        component:UpdatePlayer,
        path:'/teams/:id/team/:ids/players/:i'
    },
    {
        name:'AddPlayer',
        component:AddPlayer,
        path:'/teams/:id/team/:ids/player'
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;