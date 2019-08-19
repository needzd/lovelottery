<template>
  <div>
    <div class="trend-panel-box1">
      <ul class="fh">
        <li class="fh-f9 n-active" data-val="1" data-type="1">五星</li>
        <li class="fh-f9 " data-val="1" data-type="2">定位</li>
        <li class="fh-f9 " data-val="1" data-type="3">前二</li>
        <li class="fh-f9 " data-val="1" data-type="4">后二</li>
        <li class="fh-f9 " data-val="1" data-type="5">前三</li>
        <li class="fh-f9 " data-val="1" data-type="6">中三</li>
        <li class="fh-f9 " data-val="1" data-type="7">后三</li>
        <li class="fh-f9 " data-val="1" data-type="8">前四</li>
        <li class="fh-f9 " data-val="1" data-type="9">后四</li>
      </ul>
      <ul class="fh">
        <li class="active" data-val="1">组选</li>
        <li class="" data-val="2">直选</li>
        <li class="" data-val="3">和值</li>
        <li class="" data-val="4">跨度</li>
        <li class="" data-val="5">大小</li>
        <li class="" data-val="6">单双</li>
        <li class="" data-val="7">质合</li>
        <li class="" data-val="8">012路</li>
        <li class="" data-val="9">升平降</li>
        <li class="" data-val="10">和尾</li>
        <li class="" data-val="11">重号</li>
        <li class="" data-val="12">最大号</li>
        <li class="" data-val="13">最小号</li>
        <li class="" data-val="14">区段</li>
        <li class="" data-val="15">龙虎</li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  @import "../../assets/css/zoushi.css";
  .fh{
    display: flex;
  }
  .trend-panel-box1>ul:first-child>li{
    flex: 1;
  }
</style>
