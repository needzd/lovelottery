<template>
  <div>
    <div class="head">
      <div class="headbox">
        <img src="../../assets/images/head2.png" alt="">
        <span>会员中心</span>
        <span></span>
      </div>
    </div>
    <div class="content">
      <ul class="my_info">
        <li class="head_img"><img src="../../assets/images/tx.png" alt=""></li>
        <li class="my_info_name">
          <p>{{username}}</p>
          <p><span>金币</span><span>{{money}}</span></p>
        </li>
        <router-link :to="{path:'charge',query:{name:username,mon:money}}">
          <li class="my_info_cz">金币充值</li>
        </router-link>
      </ul>
      <div class="att_rec">
        <router-link :to="{path:'concern'}">
          <div class="att_rec_box guanzhu">
            <img src="../../assets/images/guanzhu.png" alt="">
            <span>我的关注</span>
          </div>
        </router-link>
        <router-link :to="{path:'browse'}">
          <div class="att_rec_box jilu">
            <img src="../../assets/images/liulan.png" alt="">
            <span>浏览记录</span>
          </div>
        </router-link>
      </div>
      <ul class="other_info">
        <li>
          <img class="phone_img" src="../../assets/images/shoujihao.png" alt="">
          <p class="othet_info_con">
            <em>手机号</em>
            <em>13993222660</em>
            <router-link :to="{path:'xgphone'}"><img class="phone_xg" src="../../assets/images/list.png" alt=""></router-link>
          </p>
        </li>
        <li>
          <img class="phone_img" src="../../assets/images/qq.png" alt="">
          <p class="othet_info_con">
            <em>QQ</em>
            <em>265499665</em>
            <img class="pwd_xg" src="../../assets/images/list.png" alt="">
          </p>
        </li>
        <li>
          <img class="phone_img" src="../../assets/images/shezhi.png" alt="">
          <p class="othet_info_con">
            <em>修改资料</em>
            <router-link :to="{path:'xginfo'}"><img class="info_xg" src="../../assets/images/list.png" alt=""></router-link>
          </p>
        </li>
        <p class="time">本次登录时间：<span></span></p>
        <p class="time time_padd">注册时间：2018-06-23  14:19:31</p>
      </ul>
    </div>
    <footbox/>
  </div>
</template>

<script>
  import footbox from '../../components/footbox';
  export default {
    components:{
      footbox
    },
    data(){
      return{
//        title:"金币充值",
        username:'猫咪',
        money:'200'
      }
    },
    methods:{

    },
    mounted(){
      // 本次登录时间
      var myDate = new Date;
      var year = myDate.getFullYear();
      var mon = myDate.getMonth() + 1;
      var date = myDate.getDate();

      var h = myDate.getHours();
      var m = myDate.getMinutes();
      var s = myDate.getSeconds();
      $('.time>span').html(year + "-" + mon + "-" + date + "   " + checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s));
      function checkTime(i){
        if(i<10){
          i = "0" + i
        }
        return i
      }
    }
  }
</script>

<style scoped>
  .head{
    background: #fff;
    padding: 1.5rem 1.3rem;
    border-bottom: 1px solid #EEEEEE;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
  }
  .headbox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
  }
  .headbox span:nth-child(2){
    font-size: 1.6rem;
  }
  .headbox img{
    width: .9rem;
    height: 1.5rem;
  }
  .content{
    padding: 6rem 2rem 0 2rem;
    box-sizing: border-box;
  }
  .my_info{
    overflow: hidden;
    background:linear-gradient(90deg,#6DB9FF 0%,#0188FB 100%);
    border-radius:.5rem;
    padding: 2.8rem 2.1rem;
  }
  .my_info li{
    float: left;
  }
  .my_info li:last-child{
    float: right;
  }
  .head_img{
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    margin-right: 1.4rem;
  }
  .head_img img{
    width: 8rem;
    height: 8rem;
  }
  .my_info_name{
    color: #fff;
  }
  .my_info_name p:nth-child(1){
    font-size: 1.6rem;
    line-height: 1.6rem;
    padding: 2rem 0 1rem 0;
    font-weight: 500;
  }
  .my_info_name p:nth-child(2){
    font: 1.2rem;
  }
  .my_info_name p:nth-child(2) span:nth-child(2){
    color: #F2F058;
    font-size: 1.5rem;
    padding-left: 1rem;
  }
  .my_info_cz{
    padding: .9rem 1.2rem;
    margin-top: 2.2rem;
    color: #fff;
    font-size: 1.1rem;
    border-radius: 1.5rem;
    background: linear-gradient(146deg,#FFC333 0%,#FE8315 100%);
  }
  .att_rec{
    margin: 1.2rem 0;
    display: flex;
    justify-content: space-between;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .att_rec a{
    flex:  0 0 48%;
  }
  .att_rec_box{
    background: #fff;
    border-radius: .4rem;
    -webkit-border-radius: .4rem;
    font-size: 1.4rem;
    height: 6.3rem;
    line-height: 6.3rem;
    text-align: center;
    font-weight: 500;
  }
  .att_rec_box img{
    margin-right: 1.2rem;
    width: 1.6rem;
    height: 1.5rem;
    vertical-align: middle;
  }
  .att_rec_box span{
    /*line-height: 1.4rem;*/
    vertical-align: middle;
  }
  .other_info{
    background: #fff;
    font-size: 1.3rem;
  }
  .other_info li{
    height: 4.4rem;
    line-height: 4.4rem;
    padding-left: 4.1rem;
    position: relative;
  }
  .phone_img{
    position: absolute;
    top: 1.3rem;
    left: 1.8rem;
    width: 1.2rem;
    height: 1.7rem;
  }
  .othet_info_con{
    border-bottom: 1px solid #F2F2F2;
    position: relative;
  }
  .othet_info_con em:nth-child(2){
    color: #999999;
    float: right;
    padding-right: 3.8rem;
  }
  .othet_info_con img{
    width: .7rem;
    height: 1.2rem;
    vertical-align: middle;
    position: absolute;
    right: 1.5rem;
    top:1.7rem;
  }
  .time{
    font-size: 1.2rem;
    color: #999999;
    line-height: 1.2rem;
  }
  .other_info .time{
    padding: 2rem 3.5rem;
  }
  .other_info .time_padd{
    padding-top: 0;
  }
</style>
