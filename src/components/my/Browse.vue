<template>
  <div class="con">
    <myhead @back="goback" title="浏览记录"/>
    <div class="contentbox">
      <div class="browse">
        <p class="browse_time"><span>今天</span><span>7月19日</span></p>
        <ul class="browse_con">
          <li class="browse_con_list">
            <span>标题</span>
            <span>分类</span>
          </li>
          <li class="browse_con_list">
            <span>标题</span>
            <span>分类</span>
          </li>
        </ul>
      </div>
      <div class="browse">
        <p class="browse_time"><span>今天</span><span>7月19日</span></p>
        <ul class="browse_con">
          <li class="browse_con_list">
            <span>标题</span>
            <span>分类</span>
          </li>
          <li class="browse_con_list">
            <span>标题</span>
            <span>分类</span>
          </li>
        </ul>
      </div>
      <div class="browse">
        <p class="browse_time"><span>今天</span><span>7月19日</span></p>
        <ul class="browse_con">
          <li class="browse_con_list">
            <span>标题</span>
            <span>分类</span>
          </li>
          <li class="browse_con_list">
            <span>标题</span>
            <span>分类</span>
          </li>
        </ul>
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

<style>
  .con{
    background: #fff;
    height: 100%;
  }
  .contentbox{
    padding-top: 4.8rem;
    box-sizing: border-box;
  }
  .browse_time{
    height: 2.2rem;
    line-height: 2.2rem;
    font-size: 1rem;
    color: #666666;
    background: #F4F4F4;
  }
  .browse_time span:nth-child(1){
    padding: 0 1.3rem;
  }
  .browse_con{
    padding-left: 3rem
  }
  .browse_con li{
    border-top: 1px solid #EEEEEE;
    height: 4.5rem;
  }
  .browse_con li:first-child{
    border-top: none;
  }
  .browse_con_list{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .browse_con_list span:nth-child(1){
    color: #333;
    font-size: 1.3rem;
  }
  .browse_con_list span:nth-child(2){
    color:#666;
    font-size:1.1rem;
    padding-right: 4.2rem;
  }
</style>
