<template>
  <div class="con">
    <myhead @back="goback" title="更换手机号码"/>
    <div class="contentbox">
      <p class="big_tit">更换手机号码</p>
      <p class="small_tit">请输入新的手机号码</p>
      <input class="number" maxlength="11" type="text" placeholder="请输入手机号">
      <p class="ts_text"></p>
      <div class="btnpwd">
        <router-link :to="{path:'xgphoneyzm'}">
          <button class="btn sjh_next">下一步</button>
        </router-link>
      </div>
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
