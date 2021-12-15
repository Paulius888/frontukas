<template>
<Header />
<h1>Hello welcome to Add page</h1>
<form class="add">
<input type="text" name="name" placeholder="Enter Name" v-model="league.name"/>
<input type="text" name="country" placeholder="Enter Country"  v-model="league.country"/>
<button type="button" v-on:click="addLeague">Add new League </button>
</form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name:'Add',
    components:{
        Header
    },
    data(){
        return{
            league: {
                name:'',
                country:''
            }
        }
    },
    methods:{
        async addLeague(){
            console.warn(this.league)
            //firmekas
            const token = localStorage.getItem("user-info")
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            //
            const result = await axios.post("https://saitynulab.azurewebsites.net/api/leagues",{
                name:this.league.name,
                country:this.league.country,
            });   
            if(result.status==201){
                this.$router.push({name:'Home'})
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