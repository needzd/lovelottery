<template>
  <div>
    <detailhead @back="goback"/>
    <detailcon/>

  </div>
</template>
<script>
  import detailhead from '../../components/index/Detailhead';
  import detailcon from  '../../components/index/Detailcon'
  export default {
    components:{
      detailhead,
      detailcon
    },
    methods: {
      goback(){
        this.$router.push ('/index');//返回上一层
      },
    }
  }
</script>
