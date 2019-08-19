<template>
  <div class="con">
    <myhead @back="goback" title="编辑名称"/>
    <div class="content_name">
      <input class="name_input" type="text" name="" id="" value="ddd">
      <span>4/10</span>
    </div>
    <div class="btnbox">
      <router-link :to="{path:'xginfo'}"><button class="btn">确认</button></router-link>
    </div>
  </div>
</template>
<script>
  import myhead from '../../components/my/Myhead.vue'
  export default {
    data(){
      return{

      }
    },
    components:{
      myhead
    },
    methods:{
      goback(){
        console.log("kk")
        this.$router.go(-1);//返回上一层
      },
    },
    mounted(){

    }
  }
</script>

<style scoped>
  @import "../../assets/css/modification.css";
  .con{
    background: #fff;
    height: 100%;
  }
  .btnbox{
    padding:0 2rem;
  }
  .content_name,.name_input{
      background: #f1f1f1;
   }
  .name_input{
    color: #3C3C3C;
  }
</style>
