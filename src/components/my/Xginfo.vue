<template>
  <div class="con">
    <myhead @back="goback" title="修改资料"/>
    <div class="contentbox">
      <ul>
        <li class="xg_info">
          <span>编辑头像</span>
          <span class="headimg"><img id="demo1"  src="../../assets/images/tx.png" alt=""></span>
          <img id="test1" class="listimg headimg_modal" src="../../assets/images/list.png" alt="">
        </li>
        <li class="xg_info">
          <span>名称</span>
          <span class="name">啧啧啧啧啧</span>
          <router-link :to="{path:'xgname'}"><img class="listimg mc_next" src="../../assets/images/list.png" alt=""></router-link>
        </li>
        <li class="xg_info" >
          <span>修改密码</span>
          <router-link :to="{path:'xgpwd'}"><img class="listimg mm_next" src="../../assets/images/list.png" alt=""></router-link>
        </li>
      </ul>
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
</style>
