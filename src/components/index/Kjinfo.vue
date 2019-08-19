<template>
  <div class="kj_openinfo">
    <p class="open_top">
      <span><em>202</em>期 <em>16.50</em>剩余 <em><b>00</b>时<b>00</b>分<b>00</b>秒</em></span>
      <span class="yikai">今日已开:<em> 22 </em>期 剩余<em> 21 </em>期</span>
    </p>
    <p>
      <span>202</span>期 <span>16.56</span>
      <span class="open_num">
          <em class="num1">1</em><em class="num1">2</em><em class="num1">3</em><em class="num1">4</em><em class="num1">5</em><em class="num1">6</em><em class="num1">7</em><em class="num1">8</em><em class="num1">9</em><em class="num1">10</em>
        </span>
    </p>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .kj_openinfo{
    background: #fff;
    font-size: 1.3rem;
    padding:.5rem;
    box-sizing: border-box;
  }
  .kj_openinfo p{
    line-height: 2.5rem;
  }
  .open_top{
    display: flex;
    justify-content: space-between;
  }
  .open_top span b{
    color: red;
  }
  .yikai em{
    color: #005cd4;
    font-weight: 600;
  }
  .open_num{
    color: #fff;
    line-height: 2rem;
    text-align: center;
    font-weight: 600;
  }
  .open_num em{
    border-radius: .3rem;
    width:2rem;
    height: 2rem;
    display: inline-block;
    margin-right: .3rem;
    margin-bottom: .3rem;
  }
</style>
