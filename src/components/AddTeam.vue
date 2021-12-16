<template>
<Header />
<h1>Hello welcome to Add page</h1>
<form class="add">
<input type="text" name="name" placeholder="Enter Name" v-model="team.name"/>
<input type="text" name="ranking" placeholder="Enter Ranking" v-model="team.ranking"/>
<input type="text" name="finances" placeholder="Enter Finances"  v-model="team.finances"/>
<button type="button" v-on:click="addTeams">Add new Team </button>
<p>
    <router-link :to="'/teams/'+this.$route.params.id"><button>Return</button></router-link>
</p>
</form>
<Footer />
</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import axios from 'axios'
export default {
    name:'AddTeam',
    components:{
        Header,
        Footer
    },
    data(){
        return{
            team: {
                name:'',
                ranking:'',
                finances:''
            }
        }
    },
    methods:{
        async addTeams(){
            //console.warn(this.team)
            //firmekas
            const token = localStorage.getItem("user-info")
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            //
            const result = await axios.post("https://saitynulab.azurewebsites.net/api/leagues/"
            +this.$route.params.id+"/teams",{
                name:this.team.name,
                ranking:this.team.ranking,
                finances:this.team.finances,
                }).catch (function (error){
                console.log(error.toJSON());
                alert(error);
            });   
            if(result.status==201){
                this.$router.push({name:'Team'})
            }    
           // console.warn("result", result)
        }
    },
     mounted(){
        let user= localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>