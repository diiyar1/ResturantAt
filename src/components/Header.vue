<template>
    <div class="nav">
<router-link to="/">Home</router-link>
<router-link to="/add">Add Resturan</router-link>
<!-- <router-link to="/update">Update</router-link> -->
<a v-on:click="logout" >Logout</a>

    </div>
</template>

<script>
    export default {
        name:'HeaderVue',
        methods:{
            logout(){
                localStorage.clear()
                this.$router.push({name:'LogIn'})

            }

        }
    }
</script>

<style>
.nav{
    background-color: #333;
    overflow: hidden;
 
}
.nav a{
    text-decoration: none;
    text-align: center;
    float: left;
    color: #f2f2f2f2;
    padding: 14px 14px;
}
.nav a:hover{
    background: #ddd;
    color: #333;
}
</style>