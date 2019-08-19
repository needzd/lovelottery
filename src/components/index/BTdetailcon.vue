<template>
  <div class="tools-beitou-panel">
    <li>倍投设置</li>
    <table>
      <tbody>
      <tr>
        <td>选择玩法</td>
        <td>
          <label class="radio rad"><input class="input1" type="radio" name="check" value="1" checked /> 定位胆 </label>
          <label class="radio"><input class="input1" type="radio" name="check" value="4" /> 双面 </label></td>
      </tr>
      <tr>
        <td>赔率设置</td>
        <td><input type="number" value="9.9" class="input-1" /></td>
      </tr>
      <tr>
        <td>号码个数</td>
        <td>
          <div class="number-box">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li class="active">5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
          </div></td>
      </tr>
      <tr>
        <td>每号投入</td>
        <td><input type="number" value="20" class="input-1" /> 元</td>
      </tr>
      <tr>
        <td>起始投入</td>
        <td>100元</td>
      </tr>
      <tr>
        <td>投注期数</td>
        <td><input type="number" value="5" max="10" class="input-1" /> 期</td>
      </tr>
      <tr>
        <td>起始倍数</td>
        <td>1倍</td>
      </tr>
      <tr>
        <td>结束倍数</td>
        <td>1000倍</td>
      </tr>
      </tbody>
    </table>
    <li>盈利设置</li>
    <table>
      <tbody>
      <tr>
        <td><label class="radio"><input class="input2" type="radio" name="radio2" value="2"  checked />利润率不低于<input type="tel" value="20" class="input-2" />% </label></td>
      </tr>
      <tr>
        <td><label class="radio"><input class="input2" type="radio" name="radio2" value="1" />净利润不低于<input type="tel" value="90" class="input-2" />元 </label></td>
      </tr>
      <tr>
        <td><label class="radio"><input class="input2" type="radio" name="radio2" value="3" />前<input type="tel" value="3" class="input-2" />期盈利率不低于<input type="tel" value="40" class="input-2" />%之后盈利率不低于<input type="tel" value="20" class="input-2" />% </label></td>
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

<script>

</script>

<style scoped>
  @import "../../assets/css/beitou.css";
</style>
