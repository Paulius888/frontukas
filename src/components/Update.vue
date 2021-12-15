<template>
<Header />
<h1>Hello welcome to Update page</h1>
<form class="add">
<input type="text" name="name" placeholder="Enter Name" v-model="league.name"/>
<button type="button" v-on:click="updateLeague">Update League </button>
</form>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default {
    name:'Update',
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
        async updateLeague()
        {
            const token = localStorage.getItem("user-info")
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            //console.warn(this.league)
            console.warn(this.league)
            const result = await axios.put("https://saitynulab.azurewebsites.net/api/leagues/"+this.$route.params.id,{
                name:this.league.name,
                country:this.league.country
            });   
            if(result.status==200){
                this.$router.push({name:'Home'})
            }    
            //console.warn("result", result)  
        }
    },
    async mounted(){
        let user= localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        const result = await axios.get('https://saitynulab.azurewebsites.net/api/leagues/'+this.$route.params.id)
        //console.warn(this.$route.params.id)
        console.warn(result.data)
        this.league=result.data
    }
}
</script>