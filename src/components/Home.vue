<template> 
    <Header/>
    <h1>hello {{name}}</h1>
    <table border="1px">
    <tr class="rowa">
    <td>Id</td>
    <td>Name</td>
    <td>Contact</td>
    <td>Address</td>
    <td>Actions</td>
    </tr>
      <tr v-for="item in resturant" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.address }}</td>
        <td ><router-link :to="'/update/'+item.id">Update</router-link>
            <button style="margin:10px ;" v-on:click="deleteRest(item.id)">Delete</button>
            </td>
        
      </tr>
    </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
export default{
        name: 'HomeVue',
        data(){
            return{
                name:'',
                resturant:[]
            }
        },
        components:{Header},
        methods:{
          async  deleteRest(id){
                
                let res =await axios.delete("http://localhost:3000/resturant/"+id)
                console.warn(res)
                if(res.status==200){
                   this.loadData()
                }

            },
            async loadData(){
                let user= localStorage.getItem('user-info')
                this.name=JSON.parse(user).name
                if(!user){
                    this.$router.push({name:'SignUp'})

                }
                let res =await axios.get("http://localhost:3000/resturant")
                console.warn(res)
                this.resturant=res.data
                    }
        },
       mounted(){
        this.loadData()
       }

}
</script>
<style>
td{
    width: 160px;
    height: 40px;
}
.rowa{
    background-color: aqua;
}
</style>