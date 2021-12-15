<template>
        <img class="logo" src="../assets/Football-Manager-1024x683.jpg"/>
    <h1>Scouting Tool Login</h1>
    <div class="login">
        <input type="text" v-model="userName" placeholder="Enter Name"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/sign-up"><button>Go to Sign Up</button></router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return {
            userName:'',
            password:''
        }
    },
    methods:{
        async login(){
            let result = await axios.post("https://saitynulab.azurewebsites.net/api/login",{
                userName:this.userName,
                password:this.password,
            });
            console.warn(result)
            const token = result.data.accessToken;
            console.log("barbinas",token)
            if(result.status==200){
                localStorage.setItem("user-info", token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                this.$router.push({name:'Home'})
            }
        }
    },
    mounted(){
        let user= localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
    }
}
</script>