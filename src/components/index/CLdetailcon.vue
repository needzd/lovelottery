<template>
  <!--内容-->
  <div>
    <ul class="jihua-panel-nav mar">
      <li @click="toggleTabs(index)" :class="{active:index == nowIndex}" v-for="(item,index) in jhpanelnav" :key="index">{{item.nav}}</li>
      <span class="remind"><em>提醒</em><img src="../../assets/images/txsz.png" alt=""></span>
    </ul>
    <div class="jihua-panel-con" v-show="nowIndex === 0">
      <div class="yinlibox">
        <ul class="yl_title">
          <li @click="code(index)" :class="{codeact:index == codeIndex}" v-for="(item,index) in codenum" :key="index">{{item.code}}</li>
        </ul>
        <ul class="jhfilter">
          <li>
            <select name="" id="">
              <option value="">位置</option>
            </select>
          </li>
          <li>
            <span><em>号码</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
          </li>
          <li>
            <span><em>连开</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
          </li>
        </ul>
        <ul class="yinli_con">
          <li class="yl_con_list">
            <span>冠军</span>
            <span>双</span>
            <span>5</span>
          </li>
          <li class="yl_con_list">
            <span>冠军</span>
            <span>双</span>
            <span>5</span>
          </li>
          <li class="yl_con_list">
            <span>冠军</span>
            <span>双</span>
            <span>5</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="jihua-panel-con" v-show="nowIndex === 1">
      <ul class="jhfilter  other">
        <li>
          <span><em>选择位置</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
          <select name="" id="">
            <option value="">全部</option>
          </select>
        </li>
        <li>
          <span><em>选择指标</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
          <select name="" id="">
            <option value="">全部</option>
          </select>
        </li>
        <li>
          <span><em>选择追期</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
          <select name="" id="">
            <option value="">全部</option>
          </select>
        </li>
      </ul>
      <div class="yinlibox">
        <ul class="tabletitle">
          <li>玩法</li>
          <li>位置</li>
          <li>号码</li>
          <li class="list_img">当前连出 <img src="../../assets/images/list-icon-def.png" alt=""></li>
          <li class="list_img">最大连出 <img src="../../assets/images/list-icon-def.png" alt=""></li>
        </ul>
        <ul class="yinli_con">
          <li class="yl_con_list tablecon_list">
            <span>1码</span>
            <span>6名</span>
            <span>6</span>
            <span>39</span>
            <span>14.12</span>
          </li>
        </ul>
        <div class="pagebox">
          <div class="yl_page">
            <span>首页</span><span>上一页</span><span>下一页</span><span>末页</span>
          </div>
        </div>
      </div>
    </div>
    <div class="jihua-panel-con" v-show="nowIndex === 2">
      <ul class="jhfilter  other">
        <li>
          <span><em>选择位置</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
          <select name="" id="">
            <option value="">冠军</option>
          </select>
        </li>
        <li>
          <span><em>选择玩法</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
          <select name="" id="">
            <option value="">1码</option>
          </select>
        </li>
        <li>
          <span><em>选择期数</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
          <select name="" id="">
            <option value="">100期</option>
          </select>
        </li>
      </ul>
      <div class="yinlibox">
        <ul class="tabletitle">
          <li>位置</li>
          <li>玩法</li>
          <li>号码</li>
          <li class="list_img">当前连出 <img src="../../assets/images/list-icon-def.png" alt=""></li>
          <li class="list_img">最大连出 <img src="../../assets/images/list-icon-def.png" alt=""></li>
        </ul>
        <ul class="yinli_con">
          <li class="yl_con_list tablecon_list">
            <span>1码</span>
            <span>6名</span>
            <span>6</span>
            <span>39</span>
            <span>14.12</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        jhpanelnav:[
          {id:'0',nav:'精选长龙'},
          {id:'1',nav:'玩法模式'},
          {id:'2',nav:'位置模式'},
        ],
        codenum:[
          {code:'双面'},
          {code:'1码'},
          {code:'2码'},
          {code:'3码'},
          {code:'4码'},
          {code:'5码'},
          {code:'6码'},
          {code:'7码'},
          {code:'8码'},
          {code:'9码'},
          {code:'和值'},
        ],
        nowIndex:0,
        codeIndex:0
      }
    },
    methods:{
      toggleTabs:function(index){
        this.nowIndex = index
      },
      code:function(index){
        this.codeIndex = index
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/detail.css";
  .jihua-panel-con{
    margin-top: .1rem;
  }
  .jihua-panel-nav li{
    border-right: none;
    font-weight:600;
    border-bottom: .1rem solid #C9C9C9;
  }
  .remind{
    width: 25%;
    color:#0493cf;
    text-align: right;
    font-size: 1.3rem;
    height: 3.5rem;
    padding-right: .5rem;
    border-bottom: .1rem solid #C9C9C9;
  }
  .remind em{
    vertical-align: middle;
  }
  .remind img{
    width: 2rem;
    height: 2rem;
    display: inline-block;
    vertical-align: middle;
  }
  .yl_title li{
    flex:0 0 14%!important;
  }
  .yl_title{
    overflow-x: scroll;
    justify-content: flex-start;
  }
  .yl_title .codeact{
    color: crimson;
    font-weight: 600;
  }
  .jhfilter select{
    color: #999;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    padding:0 1.3rem 0 .5rem;
    background: url("../../assets/images/icon-active-asc1.png") no-repeat right center;
    background-size:1.2rem 1.2rem ;
    box-sizing: border-box;
    height: 3.5rem;
  }
  .yl_con_list span:nth-child(1),.yl_con_list span:nth-child(3),.jhfilter li:nth-child(1),.jhfilter li:nth-child(3){
    flex: 0 0 29%;
  }
  .yl_con_list span:nth-child(2),.jhfilter li:nth-child(2){
    flex:0 0 40%;
  }
  .yl_con_list span:last-child{
    color: #3C3C3C;
  }
  .jhfilter{
    height: 3.5rem;
    border-bottom: .1rem solid #fefefe;
    background: #e5edf3;
    box-sizing: border-box;
  }
  .jhfilter li{
    height: 3.5rem;
    line-height: 3.5rem;
    border-right: .1rem solid #fefefe;
  }
  .jhfilter li:nth-child(3n){
    border-right: none;
  }
  .yinlibox .yinli_con .yl_con_list{
    background: #ffffff;
    border-bottom: .1rem solid #e5edf3;
    padding:0;
  }
  .yinli_con .yl_con_list span{
    padding:1rem 0;
    border-right: .1rem solid #e5edf3;
  }
  .yl_con_list span:nth-child(3n){
    border-right:none;
  }
  .other, .other li{
    height: 5rem;
    background: #fff;
  }
  .other li span{
    height: 2rem;
    line-height: 2rem;
  }
  .other select{
    color: #38a3f0;
    background: none;
    padding:0;
    appearance: menulist;
    -webkit-appearance: menulist
  }
  .tabletitle{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 3.5rem;
    border-bottom: .1rem solid #fefefe;
    background: #e5edf3;
    font-size: 1.3rem;
  }
  .tablecon_list{
    text-align: center;
  }
  .tabletitle li:nth-child(1),.tabletitle li:nth-child(2),.tablecon_list span:nth-child(1),.tablecon_list span:nth-child(2){
    flex: 0 0 14%;
  }
  .tabletitle li:nth-child(3),.tablecon_list span:nth-child(3){
    flex: 0 0 28%;
  }
  .tabletitle li:nth-child(4),.tabletitle li:nth-child(5),.tablecon_list span:nth-child(4),.tablecon_list span:nth-child(5){
    flex: 0 0 21%;
  }
  .tabletitle li{
    height: 3.5rem;
    line-height: 3.5rem;
    border-right: .1rem solid #fefefe;
  }
  .tabletitle li:nth-child(5n){
    border-right: none;
  }
  .yinli_con .tablecon_list span{
    border-right: .1rem solid #e5edf3;
  }
  .tablecon_list span:nth-child(5n){
    border-right: none;
  }
  .mar{
    margin-top: .8rem;
  }
</style>
