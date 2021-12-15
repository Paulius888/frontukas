<template>
<Header />
    <h1>Hello welcome to Players page</h1>
    <table border="1">
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
        <tr v-for="item in players" :key="item.id">
        <td>{{item.id}} </td>    
        <td>{{item.name}} </td>
        <td>{{item.surname}} </td>
        <td><router-link :to="'/teams/'+this.$route.params.id+'/team/'+item.teamId+'/players/'+item.id">Update</router-link></td>
        <button v-on:click="deleteLeague(item.id)">Delete</button>
        <button type="button">
        <router-link :to="'/teams/'+this.$route.params.id+'/team/'+item.teamId+'/player'">Add Player</router-link>
        </button>
        </tr>
    </table>
</template>

<script>
import Header from './Header.vue'
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
        Header
    },
    methods:{
        async deleteLeague(id){
            const token = localStorage.getItem("user-info")
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            let result= await axios.delete("https://saitynulab.azurewebsites.net/api/leagues/"+this.$route.params.id
        +"/teams/"+this.$route.params.ids+"/players/"+id);
            console.warn(result)
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
</style>