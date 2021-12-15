<template>
    <img class="logo" src="../assets/Football-Manager-1024x683.jpg"/>
    <h1>Scouting Tool</h1>
    <div class="register">
        <input type="text" v-model="userName" placeholder="Enter Name"/>
        <input type="password" v-model="password" placeholder="Enter Password"/>
        <input type="text" v-model="email" placeholder="Enter Email"/>
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'SignUp',
    data(){
        return{
            userName:'',
            password:'',
            email:''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("https://saitynulab.azurewebsites.net/api/register",{
                userName:this.userName,
                password:this.password,
                email:this.email
            });

            console.warn(result);
            if(result.status==201){
                localStorage.setItem("user-info", JSON.stringify(result.data))
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

<style>

</style>