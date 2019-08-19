<template>
  <div>
    <!--导航-->
    <navcon @gd="morebtn"/>
    <!--开奖信息-->
    <kjinfo/>

    <!--内容-->
    <router-view/>

    <!--底部-->
    <confoot/>

    <!--隐藏更多内容-->
    <more v-show="more"/>
  </div>
</template>

<script>
  import navcon from '../../components/index/Navcon';
  import kjinfo from '../../components/index/Kjinfo';
  import more from '../../components/index/Morebox';
  import confoot from '../../components/index/Confoot';


export default {
    components:{
      navcon,
      kjinfo,
      more,
      confoot
    },
    data(){
      return{
        more:false,
      }
    },
    methods:{
      morebtn(){
        this.more = !this.more;
        console.log('more',this.more)
      }
    },

  }

</script>

<style scoped>


</style>
