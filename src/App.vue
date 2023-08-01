<template>


  <!-- <SignUp/> -->
<router-view/> 
</template>

<script>
// import SignUp from './components/SignUp.vue';

export default{
  name :'App',
  components :{
    
}
}
</script>
<style>
body{
  text-align: center;
  padding: 0;
  margin: 0;
}

.logo{
    width: 100px;
}
.reg , .add{
  
    margin-left: 650px;
   
    
}
.reg input, .add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    border-radius: 10px;
    border: 1px solid skyblue;
}
.reg .butt, .add .butto{
  width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background:  skyblue;
    color: white;
    cursor: pointer;
    border-radius: 10px;
}
/* .reg button{

    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background:  skyblue;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    
} */
</style>