<template>
<Header />
<h1>Team Update page</h1>
<form class="add">
<input type="text" name="name" placeholder="Enter Name" v-model="team.name"/>
<input type="text" name="ranking" placeholder="Enter Ranking" v-model="team.ranking"/>
<input type="text" name="finances" placeholder="Enter Finances"  v-model="team.finances"/>
<button type="button" v-on:click="updateTeam">Update Team </button>
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
    name:'UpdateTeam',
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
        async updateTeam()
        {
            const token = localStorage.getItem("user-info")
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            //console.warn(this.league)
            //console.warn(this.team)
            const result = await axios.put("https://saitynulab.azurewebsites.net/api/leagues/"+
            this.$route.params.id+"/teams/"+this.$route.params.ids,{
                name:this.team.name,
                ranking:this.team.ranking,
                finances:this.team.finances,
                }).catch (function (error){
                console.log(error.toJSON());
                alert(error);
            });   
            if(result.status==200){
                this.$router.push({name:'Team'})
            }    
            //console.warn("result", result)  
        }
    },
    async mounted(){
        let user= localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        const result = await axios.get('https://saitynulab.azurewebsites.net/api/leagues/'+
        this.$route.params.id+"/teams/"+this.$route.params.ids)
        //console.warn(this.$route.params.id)
        //console.warn(result.data)
        this.team=result.data
    }
}
</script>