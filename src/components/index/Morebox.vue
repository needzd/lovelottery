<template>
  <div v-show="yc" class="con">
    <div class="head">
      <img class="err"  @click="hide" src="../../assets/images/err.png" alt="">
      <span class="edin">编辑</span>
    </div>
    <div class="content">
      <div class="mycon">
        <div class="mycon_tit">
          <h3>我的频道</h3>
          <span>点击进入频道</span>
        </div>
        <div class="con_list">
            <span v-for="(item,index) in mycon" :key="index">{{item.str}}</span>
        </div>
      </div>
      <div class="allcon">
        <div class="allcon_tit">
          <h3>所有频道</h3>
          <span>点击添加频道</span>
        </div>
        <div class="allcon_list">
          <span v-for="(item,index) in allcon" :key="index">{{item.str}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        yc:true,
        mycon:[
          {str:'开奖'},
          {str:'走势'},
          {str:'计划'},
          {str:'雪球'},
          {str:'追号'},
          {str:'单期'},
          {str:'遗漏'},
          {str:'长龙'},
          {str:'分析'},
          {str:'路珠'},
          {str:'冷热'},
          {str:'倍投'}
        ],
        allcon:[
          {str:'开奖'},
          {str:'走势'},
          {str:'计划'},
          {str:'雪球'},
          {str:'追号'},
          {str:'单期'},
          {str:'遗漏'},
          {str:'长龙'},
          {str:'分析'},
          {str:'路珠'},
          {str:'冷热'},
          {str:'倍投'}
        ]
      }
    },
    methods:{
      hide(){
        this.yc = !this.yc;
        console.log('yc',this.yc)
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>
  .con{
    height: 100%;
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    z-index: 101;
  }
  .head{
    height: 3.6rem;
    background: #35a4f0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding:0 1rem 0 .5rem;
    box-shadow: #bbb 0px 1px 2px;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left:0;
  }
  .err{
    width: 2.3rem;
    height: 2.3rem;
    margin-top: .6rem;
  }
  .edin{
    font-size: 1.4rem;
    border-radius: 5rem;
    border: .1rem solid #fff;
    display: inline-block;
    padding: .1rem .9rem;
    height: 1.8rem;
    margin-top: .7rem;
  }
  .content{
    background: #fff;
    height: 100%;
    box-sizing: border-box;
    padding:5rem .8rem;
  }
  .mycon_tit,.allcon_tit{
    display: flex;
    margin-bottom: 1.5rem;
  }
  .mycon_tit h3,.allcon_tit h3{
    font-size: 1.5rem;
    margin-right:.5rem;
  }
  .mycon_tit span,.allcon_tit span{
    font-size: 1.4rem;
    color: #999999;
  }
  .mycon{
    border-bottom: .1rem solid #ededed;
    margin-bottom: 1.5rem;
  }
  .con_list{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 1rem;
  }
  .con_list span,.allcon_list span{
    display: inline-block;
    background: #f0f0f0;
    font-size: 1.4rem;
    height: 3rem;
    border-radius: 3rem;
    width: 18%;
    margin:0 .7rem 1rem 0;
  }
  .con_list span{
    line-height: 3rem;
    text-align: center;
  }
  .con_list span:nth-child(5n),.allcon_list span:nth-child(5n){
    margin-right: 0;
  }
  .allcon_list{
    display: flex;
    flex-wrap: wrap;
  }
  .allcon_list span{
    line-height: 2.8rem;
    background: #fff url("../../assets/images/add(1).png") no-repeat .5rem .75rem ;
    background-size: 1.2rem;
    text-align: right;
    padding-right: .8rem;
    border:.1rem solid #f0f0f0;
    box-sizing: border-box;
  }

</style>
