<template>
  <div class="con">
    <myhead @back="goback" title="编辑名称"/>
    <div class="content_pwd">
      <form action="">
        <p>旧密码</p>
        <input class="pwd_input oldpwd" type="password" name="old_password" >
        <p>新密码</p>
        <input class="pwd_input newpwd" type="password" name="password"  >
        <p>确认密码</p>
        <input class="pwd_input qrnewpwd" type="password" name="password_confirm" >
        <div class="pwd_ts"></div>
      </form>
      <div class="btnpwd">
        <router-link :to="{path:'xginfo'}"><button class="btn xgpwb_btn">确定</button></router-link>
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
