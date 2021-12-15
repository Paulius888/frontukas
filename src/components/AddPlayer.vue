<template>
<Header />
<h1>Hello welcome to Add page</h1>
<form class="add">
<input type="text" name="name" placeholder="Enter Name" v-model="player.name"/>
<input type="text" name="surname" placeholder="Enter Surname" v-model="player.surname"/>
<button type="button" v-on:click="addPlayers">Add new Player </button>
</form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name:'AddPlayer',
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
        async addPlayers(){
            console.warn(this.player)
            //let pepe = this.$route.params.ids;
            //console.log(pepe);
            //firmekas
            const token = localStorage.getItem("user-info")
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            //
            const result = await axios.post("https://saitynulab.azurewebsites.net/api/leagues/"
            +this.$route.params.id+"/teams/"+this.$route.params.ids+"/players",{
                name:this.player.name,
                surname:this.player.surname
            });   
            if(result.status==201){
                this.$router.push({name:'Player'})
            }    
            console.warn("result", result)
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