<template>
<Header />
<h1>Player Update page</h1>
<form class="add">
<input type="text" name="name" placeholder="Enter Name" v-model="player.name"/>
<input type="text" name="surname" placeholder="Enter Surname" v-model="player.surname"/>
<button type="button" v-on:click="updatePlayer">Update Player </button>
</form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name:'UpdatePlayer',
    components:{
        Header
    },
    data(){
        return{
            player: {
                name:'',
                surname:''
            }
        }
    },
    methods:{
        async updatePlayer()
        {
            const token = localStorage.getItem("user-info")
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            //console.warn(this.league)
            console.warn(this.player)
            const result = await axios.put("https://saitynulab.azurewebsites.net/api/leagues/"+
            this.$route.params.id+"/teams/"+this.$route.params.ids+"/players/"+this.$route.params.i,{
                name:this.player.name,
                surname:this.player.surname
            });   
            if(result.status==200){
                this.$router.push({name:'Player'})
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
        this.$route.params.id+"/teams/"+this.$route.params.ids+"/players/"+this.$route.params.i)
        //console.warn(this.$route.params.id)
        //console.warn(result.data)
        this.player=result.data
    }
}
</script>