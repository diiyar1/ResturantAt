<template> 
    <Header/>
    <h1>hello {{name}}, Update Reaturant</h1>
    <form class="add">
      <input type="text" name="nameRest" placeholder="entre name" v-model="resturant.name"/>
      <input type="text" name="address" placeholder="entre address" v-model="resturant.address"/>
      <input type="text" name="contact" placeholder="entre contact" v-model="resturant.contact"/>
      <input class="butto" type="submit" value="Update a new resturant" v-on:click="updateRest"/>
    </form>
    
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default{
        name: 'UpdateVue',
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
        methods:{
            async updateRest(){
                console.warn(this.resturant)
                const res =await axios.put("http://localhost:3000/resturant/"+this.$route.params.id,{
                    name:this.resturant.name,
                    address:this.resturant.address,
                    contact:this.resturant.contact
                })
                if(res.status==201)
                    { 
                        this.$router.push({name:'HomeVue'})
                   }
            }

        },
        components:{Header},
       
      async mounted(){
        let user= localStorage.getItem('user-info')
        this.name=JSON.parse(user).name
        if(!user){
            this.$router.push({name:'SignUp'})

        }

        const res =await axios.get("http://localhost:3000/resturant/"+this.$route.params.id)

        // console.warn(this.$route.params.id)
        console.warn(res.data)
        this.resturant=res.data
       }

}
</script>