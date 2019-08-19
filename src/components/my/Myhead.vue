<template>
  <div class="head">
    <div class="headbox">
      <img @click="$emit('back')" class="jb_back" src="../../assets/images/head1.png" alt="">
      <span>{{title}}</span>
      <span></span>
      <!--<slot name='right'></slot>-->
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      title:String
    }
  }
</script>

<style scoped>
  .head{
    background: #fff;
    padding: 1.5rem 1.3rem;
    border-bottom: 1px solid #EEEEEE;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
  }
  .headbox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
  }
  .headbox span:nth-child(2){
    font-size: 1.6rem;
  }
  .headbox img{
    width: .9rem;
    height: 1.5rem;
  }
</style>
