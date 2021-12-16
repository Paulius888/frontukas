<template>
    <nav class="navbar">
        <div class="title"> Scouting Tool</div>
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="navbar-links">
            <ul>
                <li><router-link to="/">Home</router-link></li>   
                <li><a v-on:click="logout" href="#">Logout</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Info</a>
                </li>
            </ul>
        </div>
    </nav>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
    <div class="modal-body">
        <h1> This is Info window</h1>
        <h3> Work is done by Paulius Eidimtas IFF8/7</h3>
        <h3 >Using Vue.js </h3>
        <h5 >All errors are handled by displaying error codes of the requests.</h5>
        <h5 >Main pages of leagues, teams, players contain animations.</h5>
        <h5 >Both picture at the start and navigation meniu are responsive</h5>
    </div>
</div>
</div>
</div>
</template>

<script>
export default {
    name: 'Header',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    },
    mounted(){
        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]

        toggleButton.addEventListener('click', () => {
         navbarLinks.classList.toggle('active')
})
    }
}
</script>

<style>
*{
    box-sizing: border-box;
}

body{
    margin: 0px;
    padding: 0px;
}

.navbar {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
}

.title{
    font-size: 1.5rem;
    margin: .5rem;
}

.navbar-links {
    height: 100%;
}

.navbar-links ul {
    display: flex;
    margin: 0;
    padding: 0;
}

.navbar-links li {
    list-style: none;
}


.navbar-links li a {
    display: block;
    font-size: 20px;
    text-decoration: none;
    color: white;
    padding: 1rem;
}
.navbar-links li:hover{
    background-color:#555;
}

.toggle-button{
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 40px;
}

.toggle-button .bar{
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
}

@media (max-width: 800px){
    .toggle-button{
        display: flex;
    }
    .navbar-links{
       display: none;
       width: 100%;
    }

    .navbar{
        flex-direction: column;
        align-items: flex-start;
    }

    .navbar-links ul {
        width: 100%;
        flex-direction: column;
    }

    .navbar-links li {
        text-align: center;
    }

    .navbar-links li a {
        padding: .5rem 1rem;
    }

    .navbar-links.active {
        display: flex;
    }

}


</style>