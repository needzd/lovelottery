<template>
  <div class="con">
    <myhead @back="goback" title="更换手机号码"/>
    <div class="contentbox">
      <p class="big_tit">获取验证码</p>
      <div class="small_posi">
        <p class="small_tit">已经给手机号 <em class="small_phonenumber"></em> 发送了短信验证码</p>
      </div>
      <input class="number" type="text" placeholder="请输入验证码">
      <p class="ts_text"></p>
      <span class="count_time">获取验证码</span>
      <div class="btnpwd">
        <router-link :to="{path:'my'}">
          <button class="btn btnyzm">完成</button>
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
