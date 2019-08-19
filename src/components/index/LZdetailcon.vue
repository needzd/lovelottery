<template>
  <div>
    <ul class="jihua-panel-nav mar">
      <li @click="toggleTabs(index)" :class="{active:index == nowIndex}" v-for="(item,index) in jhpanelnav" :key="index">{{item.nav}}</li>
      <span class="remind"><em>提醒</em><img src="../../assets/images/txsz.png" alt=""></span>
    </ul>
    <div class="jihua-panel-con" v-show="nowIndex === 0">
      <div class="item">
        <ul>
          <li class="item_info">
            <p>
              <span class="info_other"><em>单</em>(<i>46</i>,最大连出<i>5</i>)</span>
              <span class="info_other"><em>双</em>(<i>46</i>,最大连出<i>5</i>)</span>
            </p>
            <p>亚军单双</p>
            <p>长龙</p>
          </li>
        </ul>
        <ul ref="itemscroll" class="item_list">
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
          </li>
          <li>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
          </li>
          <li>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
          </li>
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
          </li>
          <li>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
          </li>
          <li>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
          </li>
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
          </li>
          <li>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
          </li>
          <li>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
          </li>
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
          </li>
          <li>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
          </li>
          <li>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
          </li>
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb_last"></p>
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
      <div class="item">
        <ul>
          <li class="item_info">
            <p>
              <span class="info_other"><em>单</em>(<i>46</i>,最大连出<i>5</i>)</span>
              <span class="info_other"><em>双</em>(<i>46</i>,最大连出<i>5</i>)</span>
            </p>
            <p>亚军单双</p>
            <p>长龙</p>
          </li>
        </ul>
        <ul ref="itemscroll" class="item_list">
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
          </li>
          <li>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
          </li>
          <li>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
          </li>
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
          </li>
          <li>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
          </li>
          <li>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
          </li>
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
          </li>
          <li>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
          </li>
          <li>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
          </li>
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
          </li>
          <li>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
          </li>
          <li>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
          </li>
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb_last"></p>
          </li>
        </ul>
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
      <div class="item">
        <ul>
          <li class="item_info">
            <p>
              <span class="info_other"><em>单</em>(<i>46</i>,最大连出<i>5</i>)</span>
              <span class="info_other"><em>双</em>(<i>46</i>,最大连出<i>5</i>)</span>
            </p>
            <p>亚军单双</p>
            <p>长龙</p>
          </li>
        </ul>
        <ul ref="itemscroll" class="item_list">
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
          </li>
          <li>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
          </li>
          <li>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
          </li>
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
          </li>
          <li>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
          </li>
          <li>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
          </li>
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
          </li>
          <li>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
          </li>
          <li>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
          </li>
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
          </li>
          <li>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
            <p class="rb-solid-0">大</p>
          </li>
          <li>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
            <p class="rb-solid-1">小</p>
          </li>
          <li>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
            <p class="rb-color-0">大</p>
          </li>
          <li>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb-color-1">小</p>
            <p class="rb_last"></p>
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
          {id:'0',nav:'精选路珠'},
          {id:'1',nav:'玩法模式'},
          {id:'2',nav:'位置模式'},
        ],
        nowIndex:0
      }
    },
    methods:{
      toggleTabs:function(index){
        this.nowIndex = index
      },
      code:function(index){
        this.codeIndex = index
      },
    },
    mounted(){
    }
  }
</script>
<style scoped>
  @import "../../assets/css/detail.css";
  .mar{
    margin-top: .8rem;
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
  .other li select{
    appearance: none;
    -webkit-appearance: none;
    padding: 0 3rem;
  }
  .item_info{
    display: flex;
    justify-content: flex-end;
    padding:.7rem 0.5rem;
    color: #888;
  }
  .item_info p:nth-child(2),.item_info p:nth-child(3){
    font-weight: 600;
    padding-left: .5rem;
  }
  .item_info p:nth-child(2){
    color: #3c3c3c;
  }
  .item_info p:nth-child(3){
    color: #e000e5;
  }
  .item_info .info_other:nth-child(1) i{
    color: #279af0;
  }
  .item_info .info_other:nth-child(2) i{
    color: #e84b3d;
  }
  .item_list{
    background: #fff url("../../assets/images/icon-ball-line.png");
    background-size: auto 10.7rem;
    overflow-x: auto;
    padding-bottom: 1rem;
    display: flex;
    min-height: 11rem;
    overflow-x: scroll;
  }
  .item_list li p{
    width: 1.6rem;
    height: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    border-radius: .8rem;
    margin: .3rem 0 0 .3rem;
  }
  .rb-color-1{
    border: #279af0 .1rem solid;
    color: #279af0;
  }
  .rb-color-0{
    border: #e84b3d .1rem solid;
    color: #e84b3d;
  }
  .rb-solid-1{
    border: #279af0 1px solid;
    background-color: #279af0;
    color: #ffffff;
  }
  .rb-solid-0{
    border: #e84b3d 1px solid;
    background-color: #e84b3d;
    color: #ffffff;
  }
  .item_list li .rb_last{
    background: url("../../assets/images/z-new.png") no-repeat center;
    background-size: 1.5rem auto;
    height: 3.5rem;
    line-height: 0;
    text-align: center;
    border-radius:0;
    margin-left: .42rem!important;
  }
  .item_list li:last-child{
    padding-right: .5rem;
  }
</style>
