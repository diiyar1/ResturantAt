<template>
    <div >
         
          <div class="icon">

        <img class="logo" src="../assets/restaurant-logo.png" alt="">
        <h1>Login Page</h1>
        </div>
        <div class="reg">
            
            <input type="text" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" placeholder="enter Password">
            <input class="butt" type="submit" value="Login" v-on:click="login">
        </div>
        <router-link to="/sign-up">sign up</router-link>
            </div>
</template>

<script>
import axios from 'axios'

    export default {
        name:'LogIn',
        data(){
        return{
         
            email:'',
            password:''
        }
    },
    methods:{
      async login()
       {
        let res =await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
        console.warn(res)
        if(res.status==200 && res.data.length>0){
              localStorage.setItem("user-info",JSON.stringify(res.data[0]))
              this.$router.push({name:'HomeVue'})
          }
        
       },
       mounted(){
        let user= localStorage.getItem("user-info")
        if(user){
            this.$router.push({name:'HomeVue'})

        }
       }
    }
}
</script>

