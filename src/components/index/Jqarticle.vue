<template>
  <div>
    <div class="header">
      <div class="leftimg" @click="back" ><img src="../../assets/images/left_jt.png" alt=""></div>
      <div class="title">技巧详情</div>
      <div class="user"><img src="../../assets/images/user.png" alt=""></div>
    </div>

    <div class="article">
      <h3>PK10掌控局势法</h3>
      <h4>作者:八方名动     时间:2019-03-26 16:04</h4>
      <div class="con">
        不管是用什么方法玩PK10，你总会输多赢少，方法用不对占一部分。
        在PK10里玩法需要掌握是关键，想要更多的成功的效果就要从多方面来下手，
        相信很多玩家也是在其中不断的失败，后悔不已，那么要怎样面对玩PK10
        过程中遇到的各种挫折并改变。
      </div>
    </div>

    <div class="footerbox">
      <div class="foots">
        <span>触屏版</span> | <span>电脑版</span> | <span>双彩论坛</span> | <span>APP下载</span>
      </div>
      <div class="shengm">免责声明：本站所有数据与资料仅供您参考，访问本站表明您同意该条款。本站不承担您的任何损失和任何法律责任 。</div>
    </div>

  </div>
</template>
<script>
  import detailhead from '../../components/index/Detailhead';
  import confoot from '../../components/index/Confoot';
  export default {
    compontent: {
      detailhead,
      confoot
    },
    data() {
      return {
        msg: ''
      }
    },
    methods:{
      back() {
        this.$router.go(-1);//返回上一层
      },
//      getParams(){//接收函数
//        console.log(this.$router)
//        this.msg = this.$router.history.current.query.id;
//        this.msg = this.$router.history.current.query.id;
//        console.log('dd',this.msg)
//      }
    },
//    created() {//在模板编译进路由前调用created方法，触发接收函数
//      var self = this;
//      self.getParams();
//    }
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
  .leftimg{
    width: 3rem;
    height: 3.6rem;
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
  .article{
    padding-top:3.6rem;
    padding-bottom: 7rem;
    background: #fff;
    box-sizing: border-box;
    font-size: 1.3rem;
  }
  .article h3,.article h4{
    text-align: center;
  }
  .article h3{
    padding-top:1.5rem;
  }
  .article h4{
    font-weight: normal;
    padding: 1.5rem 0;
  }
  .con{
    padding:0 1rem;
  }
  .footerbox{
    text-align: center;
    padding:2rem 0;
  }
  .foots{
    padding-bottom: 2rem;
    font-size: 1.4rem;
  }
  .shengm{
    font-size: 1.3rem;
    text-align: center;
    line-height: 1.6rem;
    color: rgb(153, 153, 153);
  }
</style>

