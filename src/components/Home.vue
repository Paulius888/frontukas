<template>
<Header />
    <h1>Hello welcome to home page</h1>
    <button type="button">
    <router-link to="/add">Add League</router-link>
    </button>
    <table border="1">
        <tr>
        <th>
            leagueId
        </th>
        <th>
            Name
        </th>
        <th>
            Country
        </th>
        <th>
            Options
        </th>
    </tr>
        <tr v-for="item in leagues" :key="item.id">
        <td>{{item.id}} </td>    
        <td>{{item.name}} </td>
        <td>{{item.country}} </td>
        <td><router-link :to="'/update/'+item.id">Update</router-link></td>
        <button v-on:click="deleteLeague(item.id)">Delete</button>
        <router-link :to="'/teams/'+item.id">Teams</router-link>
        </tr>
    </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios';
export default {
    name:'Home',
    data(){
        return{
            name:'',
            leagues:[],
        }
    },
    components:{
        Header
    },
    methods:{
        async deleteLeague(id){
            const token = localStorage.getItem("user-info")
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            let result= await axios.delete("https://saitynulab.azurewebsites.net/api/leagues/"+id);
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
        let result= await axios.get("https://saitynulab.azurewebsites.net/api/leagues")
        console.warn(result);
        this.leagues=result.data;
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