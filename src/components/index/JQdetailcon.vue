<template>
  <div>
    <div class="jq-title">
      <ul>
        <li>
          <span v-for="(item,index) in jqtitle" :key="index" @click="jqtit(index)" :class="{active: active == index}" href="#"><h4>{{item.title}}</h4></span>
        </li>
      </ul>
    </div>
    <div class="jq-panel-table">
      <table>
        <tbody>
          <tr v-for="(item,index) in jqcon" :key="index" @click="setParams(item)">
              <td>
                <img :src="item.tximg">
                <p class="nowrap-1">{{item.txname}}</p>
              </td>
              <td>
                <p class="nowrap-1"><span>{{item.contitle}}</span></p>
                <p class="nowrap-2"><span>{{item.context}}</span></p>
                <p>
                  <span><img :src="item.fbimg" alt=""><em>发布:{{item.fbtime}}</em></span>&nbsp;
                  <span><img :src="item.llimg" alt=""><em>浏览:{{item.llcount}}</em></span>
                </p>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagebox">
      <div class="yl_page">
        <span>首页</span><span>上一页</span><span>下一页</span><span>末页</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        active:1,
        jqtitle:[
          {id:'0',title:"热门技巧"},
          {id:'1',title:"最新技巧"}
        ],
        jqcon:[
          {
            id:'0',
            tximg:'../../assets/images/jhtx.jpg',
            txname:'八方名动',
            contitle:'PK10掌控局势法',
            context:'不管是用什么方法玩PK10，你总会输多赢少，方法用不对占一部',
            fbimg:'../../assets/images/time.png',
            fbtime:'2019-03-26 16:04:06',
            llimg:'../../assets/images/jqliulan.png',
            llcount:'300'
          },
          {
            id:'1',
            tximg:'../../assets/images/jhtx.jpg',
            txname:'九方名动',
            contitle:'PK10掌控局势法',
            context:'不管是用什么方法玩PK10，你总会输多赢少，方法用不对占一部',
            fbimg:'../../assets/images/time.png',
            fbtime:'2019-03-26 16:04:06',
            llimg:'../../assets/images/jqliulan.png',
            llcount:'300'
          },
        ]
      }
    },
    methods:{
      jqtit(index){
        this.active = index
      },
      setParams(i){//点击跳转函数
        this.$router.push({
          path:'/jqdetailcon/jqarticle',//跳转路由
          query:{//参数对象
            id:i.id,
            name:i.txname
          }
        });
      }
    }
  }
</script>

<style scoped>
  .jq-title {
    width:100%;
    height:auto;
    overflow:hidden;
    background-color:#ffffff;
    border-bottom:#ebeaea .1rem solid;
    margin-top:.6rem;
    font-size: 1.4rem;
  }
  .jq-title>ul {
    height:auto;
    overflow:hidden;
  }
  .jq-title>ul h4 {
    float:left;
    width:7.8rem;
    line-height:3.3rem;
    text-align:center;
  }
  .jq-title .active {
    color:red;
  }
  .jq-panel-table {
    width:100%;
    height:auto;
    overflow:hidden;
    background-color:#ffffff;
  }
  .jq-panel-table>table {
    width:100%;
    border:0;
    border-collapse:collapse;
  }
  .jq-panel-table>table tr {
    border-bottom:#f2f2f2 .1rem solid;
  }
  .jq-panel-table>table td {
    padding: .5rem;
  }
  .jq-panel-table>table td:first-child {
    width:6.2rem;
    text-align:center;
  }
  .jq-panel-table>table td:first-child img {
    width:4.5rem;
    height:4.5rem;
    border-radius:50%;
  }
  .jq-panel-table>table td:first-child p {
    font-size:1.3rem;
    color:#666;
  }
  .jq-panel-table>table td:nth-child(2) p:first-child {
     font-weight:700;
     line-height:1.8rem;
     font-size: 1.3rem;
   }
  .jq-panel-table>table td:nth-child(2) p:nth-child(2) {
    font-size:1.3rem;
    line-height:1.8rem;
  }
  .jq-panel-table>table td:nth-child(2) p:nth-child(3) {
    font-size:1.2rem;
    color:#999;
    line-height:1.8rem;
    text-align:right;
  }
  .jq-panel-table>table td:nth-child(2) p:nth-child(3) span img{
    width: 1.4rem;
    height: 1.4rem;
    vertical-align: middle;
    margin-right: .15rem;
  }
  .jq-panel-table>table td:nth-child(2) p:nth-child(3) span em{
    vertical-align: middle;
  }
  .pagebox{
    background: #fff;
    padding:.8rem 1.2rem;
  }
  .yl_page{
    border:.1rem solid #EEEEEE;
    border-radius: .3rem;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
  }
  .yl_page span{
    height: 3rem;
    flex: 0 0 25%;
    text-align: center;
    line-height: 3rem;
    border-right: .1rem solid #EEEEEE;
  }
  .yl_page span:last-child{
    border-right:none;
  }
</style>
