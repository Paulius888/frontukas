<template>
<Header />
    <h1>Hello welcome to Teams page</h1>
    <table border="1">
        <tr>
        <th>
            TeamId
        </th>
        <th>
            Name
        </th>
        <th>
            Ranking
        </th>
        <th>
            Finances
        </th>
        <th>
            Options
        </th>
    </tr>
        <tr v-for="item in teams" :key="item.id">
        <td>{{item.id}} </td>    
        <td>{{item.name}} </td>
        <td>{{item.ranking}} </td>
        <td>{{item.finances}} </td>
        <td><router-link :to="'/teams/'+item.leagueId+'/team/'+item.id">Update</router-link></td>
        <button v-on:click="deleteLeague(item.id)">Delete</button>
        <router-link :to="'/teams/'+item.leagueId+'/team/'+item.id+'/players'">Players</router-link>
        <button type="button">
        <router-link :to="'/teams/'+item.leagueId+'/team'">Add Team</router-link>
        </button>
        </tr>
    </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    name:'Team',
    data(){
        return{
            name:'',
            teams:[],
        }
    },
    components:{
        Header
    },
    methods:{
        async deleteLeague(id){
            const token = localStorage.getItem("user-info")
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            let result= await axios.delete("https://saitynulab.azurewebsites.net/api/leagues/"+this.$route.params.id+"/teams/"+id);
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
        let result= await axios.get("https://saitynulab.azurewebsites.net/api/leagues/"+this.$route.params.id+"/teams")
        console.warn(result);
        this.teams=result.data;
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