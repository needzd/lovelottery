<template>
  <div class="head">
    <div class="logobox">
      <img class="logoimg" src="../assets/images/logoN.png" />
      <p class="logotext">专注于数据服务</p>
    </div>
  </div>
</template>

<scripr>
  export default{
    name:"index"
  }
</scripr>

<style scoped>
  .head{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    z-index: 99;
  }
  .logobox {
    position: relative;
    height: 3.25rem;
    background:#1b77b8;
  }
  .logoimg{
    height: 2.65rem;
    padding: .3rem 0 0 2rem;
  }
  .logotext{
    position: absolute;
    font-size: 1.4rem;
    left: 40%;
    top: .8rem;
    color: #fff;
  }
</style>
