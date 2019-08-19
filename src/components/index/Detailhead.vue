<template>
  <div class="header">
    <div class="leftimg" @click="$emit('back')" ><img src="../../assets/images/left_jt.png" alt="">首页</div>
    <div class="title">{{params}}{{param}}</div>
    <!--<select class="titlebox">-->
      <!--<option value="" v-for="(item,index) in selectcon" :key="index">{{item.contitle}}</option>-->
    <!--</select>-->
    <div class="user"><img @click="gologin" src="../../assets/images/user.png" alt=""></div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        params:'',
        param:''
//        selectcon:[
//          {contitle:'11选5'},
//          {contitle:'快3'},
//          {contitle:'赛车'},
//          {contitle:'快乐10分'},
//          {contitle:'时时彩'}
//        ],
      }
    },
    methods:{
      showInfo(){
        this.params = this.$route.query.title,
        this.param = this.$route.query.type
      },
      gologin(){
        this.$router.push('/login')
      }
    },
    mounted(){
      this.showInfo();
    }
  }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 3.6rem;
    line-height: 3.6rem;
    background: #35a4f0;
    font-size: 1.6rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
    z-index: 100;
  }
  /*.titlebox{*/
    /*border:none;*/
    /*padding-right: 2.5rem;*/
    /*font-size: 1.6rem;*/
    /*line-height: 3.6rem;*/
    /*height: 3.6rem;*/
    /*color: #fff;*/
    /*background: none;*/
    /*outline: none;*/
    /*appearance:none;*/
    /*-moz-appearance:none;*/
    /*-webkit-appearance:none;*/
    /*background: url("/static/image/select.png") no-repeat scroll right center transparent;*/
  /*}*/
  /*.titlebox option{*/
    /*color: #707070;*/
    /*padding-left: 1rem;*/
  /*}*/
  .leftimg{
    position: relative;
    text-indent: 1.8rem;
  }
  .leftimg img{
    position: absolute;
    top:.75rem;
    left: 0;
    width: 2rem;
    height: 2rem;
  }
  .user{
    height: 3.6rem;
  }
  .user img{
    width: 2.5rem;
    height: 2.5rem;
    padding: .5rem .7rem;
   }
</style>
