<template>
  <div>
    <!--计划推荐排行-->
    <div class="kj_history" v-show="nowIndex === 0" >
      <h3 class="hist_tit">计划推荐排行</h3>
      <select class="daybox" name="" id="">
        <option value="">今天</option>
        <option value="">昨天</option>
        <option value="">明天</option>
      </select>
    </div>
    <div class="kj_history" v-show="nowIndex === 1" >
      <h3 class="hist_tit">计划排行</h3>
    </div>
    <div class="kj_history" v-show="nowIndex === 2" >
      <h3 class="hist_tit">计划排行</h3>
    </div>
    <div class="kj_history" v-show="nowIndex === 3" >
      <h3 class="hist_tit">专家人气排行</h3>
    </div>
    <!--内容-->
    <div>
      <ul class="jihua-panel-nav">
        <li @click="toggleTabs(index)" :class="{active:index == nowIndex}" v-for="(item,index) in jhpanelnav" :key="index">{{item.nav}}</li>
      </ul>

      <div class="jihua-panel-con" v-show="nowIndex === 0">
        <ul class="jhfilter">
          <li>
            <span><em>选择位置</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
            <select name="" id="">
              <option value="">全部</option>
            </select>
          </li>
          <li>
            <span><em>选择指标</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
            <select name="" id="">
              <option value="">全部</option>
            </select>
          </li>
          <li>
            <span><em>选择追期</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
            <select name="" id="">
              <option value="">全部</option>
            </select>
          </li>
        </ul>
        <div class="yinlibox">
          <ul class="yl_title">
            <li>专家</li>
            <li>类型</li>
            <li class="list_img">盈利率 <img src="../../assets/images/list-icon-def.png" alt=""></li>
            <li class="list_img">累计盈利 <img src="../../assets/images/list-icon-def.png" alt=""></li>
          </ul>
          <ul class="yinli_con">
            <li class="yl_con_list">
              <span class="list_tx">
                <img src="../../assets/images/jhtx.jpg" alt="">
                <em>呵呵</em>
              </span>
              <span>八名定位3胆追7期</span>
              <span>230%</span>
              <span>13.80分</span>
            </li>
            <li class="yl_con_list">
              <span class="list_tx">
                <img src="../../assets/images/jhtx.jpg" alt="">
                <em>呵呵呵呵</em>
              </span>
              <span>八名定位3胆追7期</span>
              <span>230%</span>
              <span>13.80分</span>
            </li>
            <li class="yl_con_list">
              <span class="list_tx">
                <img src="../../assets/images/jhtx.jpg" alt="">
                <em>呵呵呵呵呵呵呵</em>
              </span>
              <span>八名定位3胆追7期</span>
              <span>230%</span>
              <span>13.80分</span>
            </li>
          </ul>
          <div class="pagebox">
            <div class="yl_page">
              <span>首页</span><span>上一页</span><span>下一页</span><span>末页</span>
            </div>
          </div>
        </div>
      </div>
      <div class="jihua-panel-con" v-show="nowIndex === 1">
        <ul class="jhfilter">
          <li>
            <span><em>选择位置</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
            <select name="" id="">
              <option value="">全部</option>
            </select>
          </li>
          <li>
            <span><em>选择指标</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
            <select name="" id="">
              <option value="">全部</option>
            </select>
          </li>
          <li>
            <span><em>选择追期</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
            <select name="" id="">
              <option value="">全部</option>
            </select>
          </li>
        </ul>
        <div class="yinlibox">
          <ul class="yl_title">
            <li>专家</li>
            <li>类型</li>
            <li class="list_img">连红 <img src="../../assets/images/list-icon-def.png" alt=""></li>
          </ul>
          <ul class="yinli_con">
            <li class="yl_con_list">
              <span class="list_tx">
                <img src="../../assets/images/jhtx.jpg" alt="">
                <em>呵呵</em>
              </span>
              <span>八名定位3胆</span>
              <span>14轮</span>
            </li>
          </ul>
          <div class="pagebox">
            <div class="yl_page">
              <span>首页</span><span>上一页</span><span>下一页</span><span>末页</span>
            </div>
          </div>
        </div>
      </div>
      <div class="jihua-panel-con" v-show="nowIndex === 2">
        <ul class="jhfilter">
          <li>
            <span><em>选择位置</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
            <select name="" id="">
              <option value="">全部</option>
            </select>
          </li>
          <li>
            <span><em>选择指标</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
            <select name="" id="">
              <option value="">全部</option>
            </select>
          </li>
          <li>
            <span><em>选择追期</em> <img src="../../assets/images/icon-active-asc1.png" alt=""></span>
            <select name="" id="">
              <option value="">全部</option>
            </select>
          </li>
        </ul>
        <div class="yinlibox">
          <ul class="yl_title">
            <li>专家</li>
            <li>类型</li>
            <li class="list_img">连黑 <img src="../../assets/images/list-icon-def.png" alt=""></li>
          </ul>
          <ul class="yinli_con">
            <li class="yl_con_list">
              <span class="list_tx">
                <img src="../../assets/images/jhtx.jpg" alt="">
                <em>呵呵</em>
              </span>
              <span>八名定位3胆</span>
              <span class="lh_font_color">14轮</span>
            </li>
          </ul>
          <div class="pagebox">
            <div class="yl_page">
              <span>首页</span><span>上一页</span><span>下一页</span><span>末页</span>
            </div>
          </div>
        </div>
      </div>
      <div class="jihua-panel-con" v-show="nowIndex === 3">
        <div class="renqibox">
          <ul class="rq_title">
            <li>专家</li>
            <li>关注</li>
            <li>介绍</li>
          </ul>
          <ul class="renqi_con">
            <li class="rq_con_list">
              <span class="rq_list_tx">
                <img src="../../assets/images/jhtx.jpg" alt="">
                <em>呵呵</em>
              </span>
              <span>230</span>
              <span>14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮</span>
            </li>
            <li class="rq_con_list">
              <span class="rq_list_tx">
                <img src="../../assets/images/jhtx.jpg" alt="">
                <em>呵呵</em>
              </span>
              <span>230</span>
              <span>14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮</span>
            </li>
            <li class="rq_con_list">
              <span class="rq_list_tx">
                <img src="../../assets/images/jhtx.jpg" alt="">
                <em>呵呵</em>
              </span>
              <span>230</span>
              <span>14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮14轮</span>
            </li>
          </ul>
          <div class="pagebox">
            <div class="yl_page">
              <span>首页</span><span>上一页</span><span>下一页</span><span>末页</span>
            </div>
          </div>
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
            {id:'0',nav:'盈利榜'},
            {id:'1',nav:'连红榜'},
            {id:'2',nav:'连黑榜'},
            {id:'3',nav:'人气榜'}
          ],
          nowIndex:0
      }
    },
    methods:{
      toggleTabs:function(index){
        this.nowIndex = index
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/detail.css";
</style>
