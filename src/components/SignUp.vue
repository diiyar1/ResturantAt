<template>
   <div class="icon">

    <img class="logo" src="../assets/restaurant-logo.png" alt="">
    <h1>sign up  </h1>
   </div>
    <div class="reg">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="enter Password">
        <input class="butt" type="submit" value="Sign UP" v-on:click="signUp">
        <!-- <button v-on:click="signUp">Sign UP</button> -->
        
    </div>
    <router-link to="/login">login</router-link>

</template>

<script>
import axios from 'axios'
export default{
    name: 'SignUp',

    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
      async signUp()
       {
          let res =await axios.post("http://localhost:3000/user",{
              name:this.name,
              email:this.email,
              password:this.password

          })
          console.warn(res)
          if(res.status==201){
              localStorage.setItem("user-info",JSON.stringify(res.data))
              this.$router.push({name:'HomeVue'})
          }
       },
       mounted(){
        let user= localStorage.getItem('user-info')
        if(user){
            this.$router.push({name:'HomeVue'})

        }
       }

       

    }
}
</script>

<style>

</style>