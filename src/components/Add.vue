<template> 
    <Header/>
    <h1>hello {{name}} Add Reaturant</h1>
    <form class="add">
      <input type="text" name="nameRest" placeholder="entre name" v-model="resturant.name"/>
      <input type="text" name="address" placeholder="entre address" v-model="resturant.address"/>
      <input type="text" name="contact" placeholder="entre contact" v-model="resturant.contact"/>
      <input class="butto" type="submit" value="Add a new resturant" v-on:click="addRest"/>
    </form>
    
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default{
        name: 'AddVue',
        data(){
            return{
                name:'',
                resturant:{
                    name:'',
                    address:'',
                    contact:''
                }
            }
        },
        components:{Header},
        methods: {
           async addRest(){
                console.warn(this.resturant)
                const res =await axios.post("http://localhost:3000/resturant",{
                    name:this.resturant.name,
                    address:this.resturant.address,
                    contact:this.resturant.contact
                })
                if(res.status==200)
                    { 
                        this.$router.push({name:'HomeVue'})
                   }console.warn(res)
            }
        },
        mounted(){
        let user= localStorage.getItem('user-info')
        this.name=JSON.parse(user).name
        if(!user){
            this.$router.push({name:'SignUp'})

        }
       }

}
</script>