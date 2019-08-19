<template>
  <div>
    <ul class="jihua_panel_nav mar">
      <li @click="toggleTabs(index)" :class="{active:index == nowIndex}" v-for="(item,index) in jhpanelnav" :key="index">{{item.nav}}</li>
    </ul>

    <div class="jihua_panel_con" v-show="nowIndex === 0">
      <div class="hot_panel_box">
        <p class="hot_panel_qishu">
          <span>期数</span>
          <select name="" id="">
            <option value="">100期</option>
            <option value="">1000000期</option>
          </select>
        </p>
        <p class="hot_panel_sort">
          <span>排序:</span>
          <label class="radio"><input name="0" type="radio" checked>按号码</label>
          <label class="radio"><input name="0" type="radio">按次数</label>
        </p>
      </div>
      <div class="hot_modul">
        <div class="hot_panel_boxcontent">
          <ul class="hot_panel_con_title">
            <li>冠军</li>
            <li>亚军</li>
            <li>三名</li>
            <li>四名</li>
            <li>五名</li>
            <li>六名</li>
            <li>七名</li>
            <li>八名</li>
            <li>九名</li>
            <li>十名</li>
          </ul>
          <ul class="hot_panel_con_list">
            <li>
              <p class="con_list"><span>1</span><em>12</em></p>
              <p class="con_list"><span>1</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>1</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>1</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>1</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>1</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>1</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>1</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>1</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>1</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>1</span><em>12</em></p>
            </li>
          </ul>
        </div>
        <div class="hot_panel_charts">
          <div class="hot_panel_charts_title"><img src="../../assets/images/lr_zxt.png" alt=""><span>冠军柱状图</span></div>
          <div>图表</div>
        </div>
      </div>
    </div>
    <div class="jihua_panel_con" v-show="nowIndex === 1">
      <div class="hot_modul">
        <ul class="history_panel">
          <li class="history_active">冠军</li>
          <li>亚军</li>
          <li>三名</li>
          <li>四名</li>
          <li>五名</li>
          <li>六名</li>
          <li>七名</li>
          <li>八名</li>
          <li>九名</li>
          <li>十名</li>
        </ul>
        <div class="panel_table">
          <ul class="panel_table_thead">
            <li><span>号码</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>今日</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-16</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-15</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-14</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-13</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>总和</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
          </ul>
          <ul class="panel_table_tbody">
            <li>
              <span class="bg_num"><em class="bg_num_1"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_2"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_3"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_4"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_5"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_6"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_7"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_8"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_9"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_10"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
          </ul>
          <ul class="panel_table_js">
            <li>
              <span>总次数</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span>均值</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span>冷热差</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="jihua_panel_con" v-show="nowIndex === 2">
      <div class="hot_panel_box">
        <p class="hot_panel_qishu">
          <span>期数</span>
          <select name="" id="">
            <option value="">100期</option>
            <option value="">1000000期</option>
          </select>
        </p>
        <p class="hot_panel_sort">
          <span>排序:</span>
          <label class="radio"><input name="3" type="radio" checked>按号码</label>
          <label class="radio"><input name="3" type="radio">按次数</label>
        </p>
      </div>
      <div class="hot_modul">
        <div class="hot_panel_boxcontent sm_content">
          <ul class="hot_panel_con_title sm_title">
            <li>冠军</li>
            <li>亚军</li>
            <li>三名</li>
            <li>四名</li>
            <li>五名</li>
            <li>六名</li>
            <li>七名</li>
            <li>八名</li>
            <li>九名</li>
            <li>十名</li>
            <li>冠亚和</li>
          </ul>
          <ul class="hot_panel_con_list sm_con_list">
            <li>
              <p class="con_list"><span>大</span><em>12</em></p>
              <p class="con_list"><span>小</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>单</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>13</em></p>
            </li>
          </ul>
        </div>
        <div class="hot_panel_charts">
          <div class="hot_panel_charts_title"><img src="../../assets/images/lr_zxt.png" alt=""><span>冠军柱状图</span></div>
          <div>图表</div>
        </div>
      </div>
    </div>
    <div class="jihua_panel_con" v-show="nowIndex === 3">
      <div class="hot_modul">
        <ul class="history_panel">
          <li class="history_active">冠军</li>
          <li>亚军</li>
          <li>三名</li>
          <li>四名</li>
          <li>五名</li>
          <li>六名</li>
          <li>七名</li>
          <li>八名</li>
          <li>九名</li>
          <li>十名</li>
        </ul>
        <div class="panel_table">
          <ul class="panel_table_thead">
            <li><span>号码</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>今日</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-16</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-15</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-14</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-13</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>总和</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
          </ul>
          <ul class="panel_table_tbody">
            <li>
              <span class="bg_num"><em class="bg_num_11"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_12"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_13"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_14"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_15"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_16"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
          </ul>
          <ul class="panel_table_js">
            <li>
              <span>总次数</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span>均值</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span>冷热差</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="jihua_panel_con" v-show="nowIndex === 4">
      <div class="hot_panel_box">
        <p class="hot_panel_qishu">
          <span>期数</span>
          <select name="" id="">
            <option value="">100期</option>
            <option value="">1000000期</option>
          </select>
        </p>
        <p class="hot_panel_sort">
          <span>排序:</span>
          <label class="radio"><input name="2" type="radio" checked>按号码</label>
          <label class="radio"><input name="2" type="radio">按次数</label>
        </p>
      </div>
      <div class="hot_modul">
        <div class="hot_panel_boxcontent sm_content">
          <ul class="hot_panel_con_title sm_title zh_title">
            <li>冠军</li>
            <li>亚军</li>
            <li>三名</li>
            <li>四名</li>
            <li>五名</li>
            <li>六名</li>
            <li>七名</li>
            <li>八名</li>
            <li>九名</li>
            <li>十名</li>
            <li>冠亚和</li>
          </ul>
          <ul class="hot_panel_con_list sm_con_list zh_con_list">
            <li>
              <p class="con_list"><span>大单</span><em>12</em></p>
              <p class="con_list"><span>小单</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>单</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>12</em></p>
            </li>
            <li>
              <p class="con_list"><span>双</span><em>13</em></p>
            </li>
          </ul>
        </div>
        <div class="hot_panel_charts">
          <div class="hot_panel_charts_title"><img src="../../assets/images/lr_zxt.png" alt=""><span>冠军柱状图</span></div>
          <div>图表</div>
        </div>
      </div>
    </div>
    <div class="jihua_panel_con" v-show="nowIndex === 5">
      <div class="hot_modul">
        <ul class="history_panel">
          <li class="history_active">冠军</li>
          <li>亚军</li>
          <li>三名</li>
          <li>四名</li>
          <li>五名</li>
          <li>六名</li>
          <li>七名</li>
          <li>八名</li>
          <li>九名</li>
          <li>十名</li>
        </ul>
        <div class="panel_table">
          <ul class="panel_table_thead">
            <li><span>号码</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>今日</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-16</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-15</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-14</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-13</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>总和</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
          </ul>
          <ul class="panel_table_tbody">
            <li>
              <span class="bg_num"><em class="bg_num_11"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_12"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_13"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_14"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_15"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="bg_num"><em class="bg_num_16"></em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
          </ul>
          <ul class="panel_table_js">
            <li>
              <span>总次数</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span>均值</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span>冷热差</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="jihua_panel_con" v-show="nowIndex === 6">
      <div class="hot_panel_box">
        <p class="hot_panel_qishu">
          <span>期数</span>
          <select name="" id="">
            <option value="">100期</option>
            <option value="">1000000期</option>
          </select>
        </p>
        <p class="hot_panel_sort">
          <span>排序:</span>
          <label class="radio"><input name="2" type="radio" checked>按号码</label>
          <label class="radio"><input name="2" type="radio">按次数</label>
        </p>
      </div>
      <div class="hot_modul">
        <div class="hot_panel_charts">
          <div class="hot_panel_charts_title"><img src="../../assets/images/lr_zxt.png" alt=""><span>冠军柱状图</span></div>
          <div>图表</div>
        </div>
      </div>
    </div>
    <div class="jihua_panel_con" v-show="nowIndex === 7">
      <div class="hot_modul">
        <div class="panel_table">
          <ul class="panel_table_thead">
            <li><span>号码</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>今日</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-16</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-15</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-14</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>8-13</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li><span>总和</span><img src="../../assets/images/list-icon-def.png" alt=""></li>
          </ul>
          <ul class="panel_table_tbody">
            <li>
              <span class="gyhis_bg_num"><em>11</em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="gyhis_bg_num"><em>12</em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="gyhis_bg_num"><em>13</em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="gyhis_bg_num"><em>14</em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="gyhis_bg_num"><em>15</em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span class="gyhis_bg_num"><em>16</em></span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
          </ul>
          <ul class="panel_table_js">
            <li>
              <span>总次数</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span>均值</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
            <li>
              <span>冷热差</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        jhpanelnav:[
          {id:'0',nav:'号码冷热'},
          {id:'1',nav:'号码历史'},
          {id:'2',nav:'双面冷热'},
          {id:'3',nav:'双面历史'},
          {id:'4',nav:'组合冷热'},
          {id:'5',nav:'组合历史'},
          {id:'6',nav:'冠亚和号码冷热'},
          {id:'7',nav:'冠亚和号码历史'}
        ],
        nowIndex:0
      }
    },
    methods:{
      toggleTabs:function(index){
        this.nowIndex = index
      }
    },
    mounted(){
    }
  }
</script>
<style scoped>
  .mar{
    margin-top: .8rem;
  }
  .jihua_panel_nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.6rem;
    line-height: 3.6rem;
    background: #fff;
    box-sizing: border-box;
    overflow-x: scroll;
  }
  .jihua_panel_nav li{
    flex-shrink: 0;
    padding:0 .8rem;
    text-align: center;
    font-size: 1.4rem;
    border-bottom: .1rem solid #C9C9C9;
    box-sizing: border-box;
  }
  .jihua_panel_nav .active{
    color: crimson;
    font-weight: 600;
    border-bottom: .1rem solid crimson;
  }
  .hot_panel_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:.8rem;
    font-size: 1.3rem;
  }
  .hot_panel_qishu span,.hot_panel_qishu select{
      vertical-align: middle;
  }
  .hot_panel_qishu select{
    color: #666666;
    border:none;
    border-radius: .3rem;
    padding:.5rem 1rem;
    margin-left: .2rem;
  }
  .radio {
    display: inline-block;
    position: relative;
    width: 67px;
  }
  .radio input[type="radio"] {
    position: absolute;
    width: 0;
    height: 0;
  }
  input[type="radio"]:after {
    content:'';
    background-image: url("../../assets/images/radio.png");
    background-size: 2rem 2rem;
    width: 2rem;
    height: 2rem;
    position: absolute;
    left:3.2rem;
    z-index: 100;
    top: -.3rem;
  }
  input[type="radio"]:checked:after {
    background-image: url("../../assets/images/radio-active.png");
    background-size: 2rem 2rem;
    width: 2rem;
    height: 2rem;
  }
  .hot_modul{
    background: #fff;
  }
  .hot_panel_con_title{
    background: #fdf8de;
    display: flex;
    text-align: center;
    font-size: 1.4rem;
  }
  .hot_panel_con_title li{
    flex: 1;
    height: 3.5rem;
    line-height: 3.5rem;
    border-right: #f0f0f0 1px solid;
  }
  .hot_panel_con_title li:last-child{
    border-right: none;
  }
  .hot_panel_con_list{
    display: flex;
    box-sizing: border-box;
    border-bottom: #f0f0f0 1px solid;
  }
  .hot_panel_con_list li{
    flex:1;
    border-right: #f0f0f0 1px solid;
  }
  .con_list{
    background: #FD482C;
    margin:.8rem auto;
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 2rem;
    border-radius: 1rem;
    position: relative;
  }
  .con_list span{
    color: #fff;
  }
  .con_list em{
    position: absolute;
    color: #1D95FC;
    top:-.9rem;
    right: -.6rem;
    display: block;
  }
  .hot_panel_charts_title{
    font-weight: 600;
    font-size: 1.4rem;
    padding:.8rem 1rem;
  }
  .hot_panel_charts_title img{
    width: 2rem;
    height: 2rem;
    margin-right: .6rem;
  }
  .hot_panel_charts_title img,.hot_panel_charts_title span{
    vertical-align: middle;
  }
  .history_panel{
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    height: 3rem;
  }
  .history_panel li{
    flex: 1;
    text-align: center;
    border-radius: 1rem;
  }
  .history_active{
    color: #e80301;
    background-color: #fff7f2;
  }
  .panel_table_thead{
    display: flex;
    height: 3rem;
    font-size: 1.3rem;
    align-items: center;
    background: #e3f5fe;
  }
  .panel_table_thead li{
    text-align: center;
    height: 3rem;
    line-height: 3rem;
    border-right: .1rem solid #fff;
    border-bottom: .1rem solid #fff;
    flex:1;
  }
  .panel_table_thead li:last-child{
    border-right: none;
  }
  .panel_table_thead li img{
    width: .9rem;
    padding-left: .2rem;
  }
  .panel_table_thead li img,.panel_table_thead li span{
    vertical-align: middle;
  }
  .panel_table_tbody li,.panel_table_js li{
    display: flex;
    text-align: center;
  }
  .panel_table_tbody li span,.panel_table_js li span{
    flex: 1;
    font-size: 1.3rem;
    height: 3rem;
    line-height: 3rem;
    border-right: .1rem solid #ffffff;
  }
  .panel_table_tbody li span:nth-child(1),.panel_table_tbody li span:nth-child(2){
    border-right: .1rem solid #eaeaea;
    border-bottom: .1rem solid #eaeaea;
  }
  .panel_table_tbody li span:nth-child(3),.panel_table_tbody li span:nth-child(4),.panel_table_tbody li span:nth-child(5),.panel_table_tbody li span:nth-child(6) {
    background-color: #ffebea;
    border-right: .1rem solid #ffffff;
    border-bottom: .1rem solid #ffffff ;
  }
  .panel_table_tbody li span:last-child{
    border-bottom: .1rem solid #eaeaea ;
  }
  .panel_table_js{
    background: #e2e2e2;
  }
  .panel_table_js li{
    border-bottom: .1rem solid #fff;
  }
  .panel_table_tbody li span:last-child,.panel_table_js li span:last-child{
    border-right: none;
  }
  .bg_num em{
    display: inline-block;
    width: 2rem;
    height: 2.6rem;
    background: url("../../assets/images/numbers.png") no-repeat;
    background-size: auto 4rem;
  }
  .hot_modul .sm_content{
    overflow-x: scroll;
  }
  .sm_title li{
    flex: none;
    width: 3.05rem;
  }
  .sm_title li:last-child{
    width: 3.5rem;
    background: #fdf8de;
  }
  .sm_content .sm_con_list li{
    width: 3.05rem;

    flex: none!important;
  }
  .sm_con_list li:last-child{
    width: 3.5rem;
    border-right: none;
    border-bottom: .1rem solid #f0f0f0;
  }
 .zh_title li,.zh_con_list li{
    padding: 0 .6rem!important;
  }
  .zh_title li{
    background: #fdf8de;
  }
  .zh_con_list li p{
    width: auto;
  }
  .bg_num_1{
    background-position: -2rem .55rem!important;
  }
  .bg_num_2{
    background-position: -4rem .55rem!important;
  }
  .bg_num_3{
    background-position: -6rem .55rem!important;
  }
  .bg_num_4{
    background-position: -8rem .55rem!important;
  }
  .bg_num_5{
    background-position: -10rem .55rem!important;
  }
  .bg_num_6{
    background-position: -12rem .55rem!important;
  }
  .bg_num_7{
    background-position: -14rem .55rem!important;
  }
  .bg_num_8{
    background-position: -16rem .55rem!important;
  }
  .bg_num_9{
    background-position: -18rem .55rem!important;
  }
  .bg_num_10{
    background-position: -20rem .55rem!important;
  }
  .bg_num_11{
    background-position: -32rem .55rem!important;
  }
  .bg_num_12{
    background-position: -30rem .55rem!important;
  }
  .bg_num_13{
    background-position: -28rem .55rem!important;
  }
  .bg_num_14{
    background-position: -26rem .55rem!important;
  }
  .bg_num_15{
    background-position: -24rem .55rem!important;
  }
  .bg_num_16{
    background-position: -22rem .55rem!important;
  }
  .gyhis_bg_num em{
    background: #1D95FC;
    padding: .25rem;
    border-radius: .2rem;
    color: #fff;
  }
</style>
