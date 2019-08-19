<template>
  <div class="footer">
    <ul class="foot">
      <li class="foot_list">
        <a href="javascript:;"  @click="goto('/index')">
          <img :src="'/index' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" />
          <p :class="{foot_active : '/index' === $route.path}">首页</p>
        </a>
      </li>
      <li class="foot_list">
        <a href="javascript:;" @click="goto('/tvchart')">
          <img :src="'/tvchart' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" />
          <p :class="{foot_active : '/tvchart' === $route.path}" >电视图表</p>
        </a>
      </li>
      <li class="foot_list">
        <a href="javascript:;" @click="goto('/codetrend')">
          <img :src="'/codetrend' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" />
          <p :class="{foot_active : '/codetrend' === $route.path}" >码型走势</p>
        </a>
      </li>
      <li class="foot_list">
        <a href="javascript:;" @click="goto('/missdata')">
          <img :src="'/missdata' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" />
          <p :class="{foot_active : '/missdata' === $route.path}" >遗漏数据</p>
        </a>
      </li>
      <li class="foot_list">
        <a href="javascript:;" @click="goto('/my')">
          <img :src="'/myindex' === $route.path ? tabBarImgArr[4].selected : tabBarImgArr[4].normal" />
          <p :class="{foot_active : '/myindex' === $route.path}" >我的</p>
        </a>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        tabBarImgArr:[
          {normal: require('../assets/images/home.png'), selected: require('../assets/images/home-current.png')},
          {normal: require('../assets/images/result.png'), selected: require('../assets/images/result.png')},
          {normal: require('../assets/images/chart.png'), selected: require('../assets/images/chart-current.png')},
          {normal: require('../assets/images/miss.png'), selected: require('../assets/images/miss-current.png')},
          {normal: require('../assets/images/mine.png'), selected: require('../assets/images/mine-current.png')}
        ]
      }
    },
    methods:{
      goto(path){
        this.$router.replace(path);
      },
    },
    mounted(){
//
    }

  }
</script>

<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
  }
  .foot{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    padding:.5rem 0;
    box-shadow: 0 -4px 12px rgba(0,0,0,.2);
  }
  .foot_list{
    display: flex;
  }
  .foot_list a{
    text-align: center;
  }
  .foot_list a img{
    width: 1.8rem;
    height: 1.8rem;
    margin: auto;
  }
  .foot_list a p{
    margin-top: .2rem;
  }
  .foot_active{
    color: #3b92d5;
  }
</style>
