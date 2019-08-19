<template>
  <div class="con">
    <myhead @back="goback" title="金币充值"/>
    <div class="contentbox">
      <ul class="topbox">
        <li class="topbox_list">
          <span>账户</span>
          <span>{{username}}</span>
        </li>
        <li class="topbox_list">
          <span>余额</span>
          <span>{{money}}金币</span>
        </li>
      </ul>
      <div class="chargebox">
        <form action="">
          <div class="import">
            <input type="text" placeholder="输入金额">
          </div>
          <ul class="money">
            <li class="money_list">
              <span class="list_left">
                  <img src="img/jinbi.png" alt="">
                  <em>200</em>
              </span>
              <span class="list_right cz_active"><em class="mon_num">50</em>元</span>
            </li>
            <li class="money_list">
              <span class="list_left">
                  <img src="img/jinbi.png" alt="">
                  <em>500</em>
              </span>
              <span class="list_right"><em>100</em>元</span>
            </li>
            <li class="money_list">
              <span class="list_left">
                  <img src="img/jinbi.png" alt="">
                  <em>1000</em>
              </span>
              <span class="list_right"><em>150</em>元</span>
            </li>
            <li class="money_list">
              <span class="list_left">
                  <img src="img/jinbi.png" alt="">
                  <em>1200</em>
              </span>
              <span class="list_right"><em>200</em>元</span>
            </li>
            <p class="set"><em>共计</em><em class="zong_money"> </em>元</p>
          </ul>
        </form>
        <div class="btnbox">
          <button class="btn zf_btnbg">支付宝</button>
          <button class="btn wx_btnbg">微信支付</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import myhead from '../../components/my/Myhead.vue'
  export default {
    data(){
      return{
        username:'',
        money:''
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
      user(){
        this.username = this.$route.query.name,
        this.money = this.$route.query.mon
      },
    },
    mounted(){
      this.user();
      $('.import input').blur(function(){
        var money = $(this).val();
        $('.set .zong_money').text(money);
        if($('.import input').val() != ''){
          $('.list_right').removeClass('cz_active');
          return false;
        }
      });

      var moren = $(".list_right .mon_num").text();
      $('.zong_money').text(moren);
      $('.money_list').on('click','.list_right',function(){
        if($(this).attr('class'),'cz_active'){
          $('.import input').val('')
        }
        $(this).addClass('cz_active').parent().siblings().children('.list_right').removeClass('cz_active');
        $(this).children('em').addClass('mon_num').parent().siblings().children('.list_right').children('em').removeClass('mon_num');
        var s = $(this).children('em').text();
        $('.zong_money').text(s)
      })
    }
  }
</script>
<style scoped>
  .con{
    background: #fff;
    height: 100%;
  }
  .contentbox{
    padding-top: 4.8rem;
    box-sizing: border-box;
  }
  .topbox{
    padding-left: 1.3rem;
    font-size: 1.3rem;
    color: #333;
  }
  .topbox_list{
    height: 4.4rem;
    line-height: 4.4rem;
  }
  .topbox .topbox_list:first-child,.money .money_list{
    border-bottom: 1px solid #f2f2f2;
  }
  .topbox_list span:nth-child(1){
    padding-right: 1.6rem;
  }
  .chargebox{
    padding-left: 1.2rem;
    box-sizing: border-box;
  }
  .import{
    margin: 1.2rem 0;
    padding-right: 1.3rem;
  }
  .import input{
    background: #F4F4F4;
    border-radius: .4rem;
    -webkit-border-radius: .4rem;
    padding-left: 2.4rem;
    border: none;
    height: 4.4rem;
    line-height: 4.4rem;
    font-size: 1.2rem;
    color: #333;
    width: fill-available;
    width: -webkit-fill-available;
  }
  .import input::placeholder{
    color: #999999;
  }
  .money{
    padding-bottom: 2rem;
  }
  .money_list{
    height: 5.8rem;
    line-height: 5.8rem;
  }
  .list_left{
    float: left;
  }
  .list_left img{
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 1rem;
    vertical-align: middle;
  }
  .list_left em{
    font-size: 1.4rem;
    color: #333;
    vertical-align: middle;
  }
  .list_right{
    width: 6.6rem;
    height: 2.9rem;
    line-height: 2.9rem;
    float: right;
    font-size: 1.2rem;
    text-align: center;
    /* line-height: 1.2rem; */
    color: #1B93FC;
    /* padding: .9rem 1.8rem; */
    border: 1px solid #1B93FC;
    border-radius: .4rem;
    -webkit-border-radius: .4rem;
    margin: 1.3rem 1.5rem 0 0
  }
  .set{
    font-size: 1.3rem;
    color: #333;
    padding-top: 1.5rem;
  }
  .set em:nth-child(1){
    padding-right: 2rem;
  }
  .btn{
    border-radius:.4rem;
    -webkit-border-radius:.4rem;
    color: #fff;
    font-size: 1.4rem;
    line-height: 1.4rem;
    text-align: center;
    padding: 1.5rem 0;
    border: none;
    width: 100%;
    margin-top: 1.5rem;
  }
  .btnbox{
    padding-right: 1.2rem;
    box-sizing: border-box;
  }
  .zf_btnbg{
    background:#079ADF;
  }
  .wx_btnbg{
    background:#40BA49;
  }
  .cz_active{
    background: #079ADF;
    color: #fff;
  }
</style>

