<template>
  <div class="tools-beitou-panel">
    <li>滚雪球计算器</li>
    <table>
      <tbody>
      <tr>
        <td>选择玩法</td>
        <td><label class="radio rad"><input class="input1" type="radio" name="check" value="1" checked /> 定位胆 </label></td>
      </tr>
      <tr>
        <td>赔率设置</td>
        <td><input type="number" value="5.0" class="input-1" /></td>
      </tr>
      <tr>
        <td>号码个数</td>
        <td>
          <div class="number-box">
            <li class="active">5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
          </div></td>
      </tr>
      <tr>
        <td>首期本钱</td>
        <td><input type="number" value="20" class="input-1" /> 元</td>
      </tr>
      <tr>
        <td>每号投入</td>
        <td><span>100</span>元</td>
      </tr>
      <tr>
        <td>滚雪球期数</td>
        <td><input type="number" value="4" max="10" class="input-1" /> 期</td>
      </tr>
      </tbody>
    </table>
    <div class="tools-beitou-btn">
      <ul class="fh">
        <li id="reset" class="fh-f2">恢复默认设置</li>
        <li id="submit" class="fh-f2">开始计算</li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style scoped>
  @import "../../assets/css/beitou.css";
  .tools-beitou-panel>table:first-of-type td:first-child{
    width: 22%;
  }
</style>
