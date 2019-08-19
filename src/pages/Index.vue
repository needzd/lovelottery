<template>
  <div class="conbox">
    <headlogo/>
    <div id="topbox">
      <div class="swiper_img">
        <a href="#"><img src="../assets/images/banner_img1.png" alt=""></a>
      </div>
      <ul class="item_list">
        <li class="item_list_con">
          <a href="#">
            <img src="../assets/images/icon1.png" alt="">
            <p>号码推荐</p>
          </a>
        </li>
        <li class="item_list_con">
          <a href="#">
            <img src="../assets/images/icon2.png" alt="">
            <p>电视图表</p>
          </a>
        </li>
        <li class="item_list_con">
          <a href="#">
            <img src="../assets/images/icon3.png" alt="">
            <p>号码查询</p>
          </a>
        </li>
        <li class="item_list_con">
          <a href="#">
            <img src="../assets/images/icon4.png" alt="">
            <p>分享好友</p>
          </a>
        </li>
      </ul>
    </div>
    <ul class="anchored" :class="navBarFixed == true ? 'navBarWrap' :''">
      <li v-for="(item,index) in nav_list" :key="index" @click = "navchange(index)">
        <a :class="{an_active : active == item.nav}" @click="selected(item.nav)" href="javascript:;">{{item.nav}}</a>
      </li>
    </ul>
    <div class="province_box">
      <div class="province_con" v-for="(item,index) in kind" :key="index">
        <div class="title_type">
          <span>{{item.kindtitle}}省份</span>
          <span>共{{item.kindzong}}个省份</span>
        </div>
        <div class="little_box">
          <p class="province" v-for="(items,index) in item.kindcon" :key="index">
            <router-link :to='{path:"lotterydetail",query:{id:items.conid,title:items.conname,type:items.conkind}}'>
                {{items.conname}}<span>{{items.conkind}}</span>
            </router-link>
          </p>
        </div>
      </div>
    </div>
    <div class="contact_info">
      <div class="contact_con">
        <a href="#"><span>登录</span></a>
        <span>|</span>
        <a href="#"><span>注册</span></a>
        <span>|</span>
        <a href="#"><span>意见反馈</span></a>
      </div>
    </div>
    <footbox/>
  </div>
</template>

<script>
  import footbox from '../components/footbox';
  import headlogo from '../components/headlogo';
  export default {
    components:{
      footbox,
      headlogo
    },
    data () {
      return {
        navBarFixed:false,
        active:'11选5',
        current:'0',
        nav_list:[
          {nav:'11选5'},
          {nav:'快3'},
          {nav:'赛车'},
          {nav:'快乐10分'},
          {nav:'时时彩'}
        ],
        kind:[
          {
            kindid:'1',
            kindtitle:'11选5',
            kindzong:'24',
            kindcon:[
              {
                conid:'gd',
                conname:'广东',
                conkind:'11选5'
              },
              {
                conid:'hb',
                conname:'河北',
                conkind:'11选5'
              },
              {
                conid:'sd',
                conname:'山东',
                conkind:'11选5'
              },
              {
                conid:'hn',
                conname:'河南',
                conkind:'11选5'
              },
              {
                conid:'gx',
                conname:'广西',
                conkind:'11选5'
              },
              {
                conid:'gs',
                conname:'甘肃',
                conkind:'11选5'
              },
              {
                conid:'hub',
                conname:'湖北',
                conkind:'11选5'
              },
              {
                conid:'hun',
                conname:'湖南',
                conkind:'11选5'
              },
              {
                conid:'sx',
                conname:'山西',
                conkind:'11选5'
              },
              {
                conid:'ah',
                conname:'安徽',
                conkind:'11选5'
              }
            ]
          },
          {
            kindid:'2',
            kindtitle:'快3',
            kindzong:'12',
            kindcon:[
              {
                conid:'gd',
                conname:'广东',
                conkind:'快3'
              },
              {
                conid:'hb',
                conname:'河北',
                conkind:'快3'
              },
              {
                conid:'sd',
                conname:'山东',
                conkind:'快3'
              },
              {
                conid:'hn',
                conname:'河南',
                conkind:'快3'
              },
              {
                conid:'gx',
                conname:'广西',
                conkind:'快3'
              },
              {
                conid:'gs',
                conname:'甘肃',
                conkind:'快3'
              },
              {
                conid:'hub',
                conname:'湖北',
                conkind:'快3'
              },
              {
                conid:'hun',
                conname:'湖南',
                conkind:'快3'
              },
              {
                conid:'sx',
                conname:'山西',
                conkind:'快3'
              },
              {
                conid:'ah',
                conname:'安徽',
                conkind:'快3'
              }
            ]
          },
          {
            kindid:'3',
            kindtitle:'赛车',
            kindzong:'14',
            kindcon:[
              {
                conid:'gd',
                conname:'广东',
                conkind:'赛车'
              },
              {
                conid:'hb',
                conname:'河北',
                conkind:'赛车'
              },
              {
                conid:'sd',
                conname:'山东',
                conkind:'赛车'
              },
              {
                conid:'hn',
                conname:'河南',
                conkind:'赛车'
              },
              {
                conid:'gx',
                conname:'广西',
                conkind:'赛车'
              },
              {
                conid:'gs',
                conname:'甘肃',
                conkind:'赛车'
              },
              {
                conid:'hub',
                conname:'湖北',
                conkind:'赛车'
              },
              {
                conid:'hun',
                conname:'湖南',
                conkind:'赛车'
              },
              {
                conid:'sx',
                conname:'山西',
                conkind:'赛车'
              },
              {
                conid:'ah',
                conname:'安徽',
                conkind:'赛车'
              }
            ]
          },
          {
            kindid:'4',
            kindtitle:'快乐10分',
            kindzong:'14',
            kindcon:[
              {
                conid:'gd',
                conname:'广东',
                conkind:'快乐10分'
              },
              {
                conid:'hb',
                conname:'河北',
                conkind:'快乐10分'
              },
              {
                conid:'sd',
                conname:'山东',
                conkind:'快乐10分'
              },
              {
                conid:'hn',
                conname:'河南',
                conkind:'快乐10分'
              },
              {
                conid:'gx',
                conname:'广西',
                conkind:'快乐10分'
              },
              {
                conid:'gs',
                conname:'甘肃',
                conkind:'快乐10分'
              },
              {
                conid:'hub',
                conname:'湖北',
                conkind:'快乐10分'
              },
              {
                conid:'hun',
                conname:'湖南',
                conkind:'快乐10分'
              },
              {
                conid:'sx',
                conname:'山西',
                conkind:'快乐10分'
              },
              {
                conid:'ah',
                conname:'安徽',
                conkind:'快乐10分'
              }
            ]
          },
          {
            kindid:'5',
            kindtitle:'时时彩',
            kindzong:'14',
            kindcon:[
              {
                conid:'gd',
                conname:'广东',
                conkind:'时时彩'
              },
              {
                conid:'hb',
                conname:'河北',
                conkind:'时时彩'
              },
              {
                conid:'sd',
                conname:'山东',
                conkind:'时时彩'
              },
              {
                conid:'hn',
                conname:'河南',
                conkind:'时时彩'
              },
              {
                conid:'gx',
                conname:'广西',
                conkind:'时时彩'
              },
              {
                conid:'gs',
                conname:'甘肃',
                conkind:'时时彩'
              },
              {
                conid:'hub',
                conname:'湖北',
                conkind:'时时彩'
              },
              {
                conid:'hun',
                conname:'湖南',
                conkind:'时时彩'
              },
              {
                conid:'sx',
                conname:'山西',
                conkind:'时时彩'
              },
              {
                conid:'ah',
                conname:'安徽',
                conkind:'时时彩'
              }
            ]
          }
        ]
      }
    },
    methods:{
      selected(nav){
        this.active = nav;
      },
      watchScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//        let offsetHeight = document.querySelector('#topbox').offsetHeight;
        if (scrollTop >= 195) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
      },
      navchange(index){
        var i = index;
        var el=document.getElementsByClassName(`province_con`)[i];
        this.$nextTick(function () {
          window.scrollTo({"behavior":"smooth","top":el.offsetTop - 280});
        })
      }
    },
    mounted() {
      window.addEventListener('scroll', this.watchScroll)
    },

  }
</script>
<style scoped>
  .swiper_img{
    width: 100%;
    height: 6.7rem;
    margin-bottom: .6rem;
  }
  .swiper_img a img{
    width: 100%;
    height: 100%;
  }
  .item_list{
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
    background-color: #fff;
    margin-bottom: 0.6rem;
    padding:1rem 0 ;
  }
  .item_list_con{
    display: inline-block;
    text-align: center;
  }
  .item_list_con a img{
    width: 4.5rem;
    height: 4.5rem;
    margin: auto;

  }
  .item_list_con a p{
    margin-top:1rem;
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
  .anchored{
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    display: -webkit-flex;
    -webkit-justify-content: space-around;
    -webkit-align-items: center;
    border-bottom: .1rem solid #ccc;
  }
  .anchored li{
    display: inline-block;
  }
  .anchored li a{
    font-size: 1.4rem;
    padding:1rem;
    display: inline-block;
  }
  .an_active{
    color: #3b92d5;
    border-bottom: .2rem solid #3b92d5;
  }
  .province_box{
    background: url("/static/image/miss_tiao.png") repeat-x top;
    padding-top:1.4rem;
    background-color: #fff;
    padding-bottom: 2rem;
  }
  .title_type{
    border-bottom: .2rem solid #3b92d5;
    margin: 0 1.2rem .5rem 1.2rem;
    line-height: 2rem;
  }
  .title_type span:first-child{
    font-size: 1.4rem;
    color: #3b92d5;
  }
  .title_type span:last-child{
    font-size: 1.2rem;
    float: right;
  }
  .little_box{
    display: flex;
    padding:0 1.2rem;
    box-sizing: border-box;
    flex-wrap: wrap;
    width: 100%;
  }
  .province{
    border:.1rem solid #ededed;
    flex: 0 0 23.29%;
    margin: .5rem .39rem .5rem 0;
    font-size: 1.4rem;
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
    border-radius: .5rem;
  }
  .province_con .province:nth-of-type(4n){
    margin-right: 0;
  }
  .province a span{
    color: #3b92d5;
    font-size: 1.2rem;
    display: inline-block;
    padding-left:.2rem;
  }
  .contact_info{
    padding-bottom: 7rem;
    background: #fff;
  }
  .contact_con{
    background: #eee;
    text-align: center;
    height: 3.5rem;
    line-height: 3.5rem;
  }
  .contact_con span{
    padding:.3rem;
    vertical-align: middle;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: #666;
  }
  .navBarWrap {
    position:fixed;
    top:3.25rem;
    z-index:99;
    width: 100%;
  }
</style>
