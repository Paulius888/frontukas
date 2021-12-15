<template>
    <div id="navigation-icon" v-if="mobileView">
        <i class="fas fa-bars"></i>
    </div>
    <div class="nav" v-if="!mobileView">
    <router-link to="/">Home</router-link>   
    <a v-on:click="logout" href="#">Logout</a>
    <a  href="#">Nieko</a>
    <a  href="#">Nieko</a>
    </div>
</template>

<script>
export default {
    data(){
        return{
            mobileView: true,
            showNav: false,
        }
    },
    name: 'Header',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        },
        handleView(){
            this.mobileView = window.innerWidth <= 900;
            let pepe = this.mobileView;
            console.log("rukas", pepe);
        },
        mounted(){
            this.handleView();
            console.log("rukas");
        }
    }
}
</script>

<style>
.nav{
    background-color: #333;
    overflow: hidden;
}

.nav a {
    float: left;
    color: #f2f2f2f2;
    padding: 16px 14px;
    text-align: center;
    font-size: 20px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background:#ddd;
    color:#333;
}
.navigation-icon{
    padding: 10px 10px 20px;
    margin-right: 10px;
    font-size: 100px;
    cursor: pointer;
    
}
</style>