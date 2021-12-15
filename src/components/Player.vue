<template>
<Header />
    <transition appear name="fade" mode="out-in">
    <h1>Hello welcome to Players page</h1>
    </transition>
    <router-link :to="'/teams/'+this.$route.params.id+'/team/'+this.$route.params.ids+'/player'">
    <button class="btn btn-primary m-2 fload-end" >Add Player</button></router-link>
    <router-link :to="'/teams/'+this.$route.params.id">
    <button class="btn btn-primary m-2 fload-end" >Go Back</button></router-link>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>
            Player Id
        </th>
        <th>
            Name
        </th>
        <th>
            Surname
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody> 
        <tr v-for="item in players" :key="item.id">
        <td>{{item.id}} </td>    
        <td>{{item.name}} </td>
        <td>{{item.surname}} </td>
        <td><button>
            <router-link :to="'/teams/'+this.$route.params.id+'/team/'+item.teamId+'/players/'+item.id"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>
            </router-link>
            </button>
            <button v-on:click="deleteLeague(item.id)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
            </button>
            </td>
        </tr>
    </tbody>
    </table>
<Footer />
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import axios from 'axios';
export default {
    name:'Player',
    data(){
        return{
            name:'',
            players:[],
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
        async deleteLeague(id){
            const token = localStorage.getItem("user-info")
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            let result= await axios.delete("https://saitynulab.azurewebsites.net/api/leagues/"+this.$route.params.id
        +"/teams/"+this.$route.params.ids+"/players/"+id);
            console.warn(result)
            location.reload()
            if(result.status==200){
                this.loadData();
            }
        },
        async loadData(){
            let user= localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        let result= await axios.get("https://saitynulab.azurewebsites.net/api/leagues/"+this.$route.params.id
        +"/teams/"+this.$route.params.ids+"/players")
        console.warn(result);
        this.players=result.data;
        }
    },
    async mounted(){
        this.loadData();
    }
}
</script>

<style>
td{
    width:160px;
    height:40px;
}
.fade-enter-from{
    opacity: 0;
}
.fade-enter-to{
    transition: opacity 3.5s;
}
.fade-enter-active{
    transition: opacity 3.5s;
}
</style>