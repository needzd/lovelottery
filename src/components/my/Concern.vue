<template>
  <div class="con">
    <myhead @back="goback" title="我的关注"/>
    <div class="contentbox">
      <p class="concern_num">关注人数：<em>4</em>人</p>
      <ul>
        <li class="con_list">
          <div class="list_left">
            <span class="head_img"><img src="/static/image/tx.png" alt=""></span>
            <span class="con_person">
                <em class="con_per">超级弟弟</em>
                <em class="con_per">准确率<em class="percentage">90</em>%</em>
            </span>
          </div>
          <button class="list_right">取消关注</button>
        </li>
        <li class="con_list">
          <div class="list_left">
            <span class="head_img"><img src="/static/image/tx.png" alt=""></span>
            <span class="con_person">
                <em class="con_per">超级弟弟</em>
                <em class="con_per">准确率<em class="percentage">90</em>%</em>
            </span>
          </div>
          <button class="list_right">取消关注</button>
        </li>
        <li class="con_list">
          <div class="list_left">
            <span class="head_img"><img src="/static/image/tx.png" alt=""></span>
            <span class="con_person">
                <em class="con_per">超级弟弟</em>
                <em class="con_per">准确率<em class="percentage">90</em>%</em>
            </span>
          </div>
          <button class="list_right">取消关注</button>
        </li>
      </ul>
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
  .con{
    background: #fff;
    height: 100%;
  }
  .concern_num{
    padding: 1.2rem 0 1.2rem 1.5rem;
    color: #333333;
    font-size: 1.1rem;
  }
  .contentbox{
    padding-top: 4.8rem;
    box-sizing: border-box;
  }
  .contentbox ul{
    padding-left: 2.9rem;
  }
  .con_list{
    height: 8rem;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
  }
  .list_left{
    display: flex;
    display: -webkit-flex;
  }
  .head_img{
    display: inline-block;
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
  }
  .head_img img{
    width: 5rem;
    height: 5rem;
  }
  .con_person{
    display: flex;
    flex-direction: column;
    justify-content: center;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    -webkit-justify-content: center;
  }
  .con_person .con_per{
    display: block;
  }
  .con_person em:nth-child(1),.percentage{
    font-size: 1.2rem;
    line-height: 1.2rem;
    color: #333333;
  }
  .con_person em:nth-child(2){
    font-size: 1rem;
    color: #666666;
    line-height: 1rem;
    padding-top: 1.5rem;
  }
  .list_right{
    border: 1px solid #ccc;
    padding: 1rem;
    font-size: 1rem;
    line-height: 1rem;
    color: #333;
    border-radius: .4rem;
    -webkit-border-radius: .4rem;
    margin-right: 2.8rem;
    background: none;
  }
</style>
