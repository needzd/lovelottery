<template>
  <div>
    <!--开奖历史-->
    <div class="kj_history">
      <h3 class="hist_tit">开奖历史</h3>
      <span>
        <input type="text" id="test" class="sx_time" v-model="date">
      </span>
    </div>
    <!--筛选-->
    <div class="sx_box" v-if="isshow">
      <span class="sx_phonenum">号码</span>
      <ul>
        <li class="panel-select-nums" >
          <span>1</span> <span>2</span> <span>3</span> <span>4</span><span>5</span>
          <span>6</span> <span>7</span> <span>8</span> <span>9</span> <span>10</span>
        </li>
        <li class="panel-select-nums">
          <span>大</span> <span>小</span> <span>单</span> <span>双</span>
          <span>龙</span> <span>虎</span> <span class="sx_other">全白</span> <span class="sx_other">还原</span>
        </li>
      </ul>
    </div>
    <!--内容-->
    <div>
      <div class="panel-nav">
        <ul class="panel-nav_list">
          <li v-for="(item,index) in panel_nav" :key="index" :class="{p_nav_active : index === curId}" @click="p_selected(index)" >
            <span>{{item.p_nav}}</span>
          </li>
        </ul>
        <span class="panel_nav_sx" @click="shows"><em>筛选</em> <img src="../../assets/images/shaixuan.png" alt=""></span>
      </div>
      <div class="panel_con_title">
        <span>期数</span> <span>冠</span> <span>亚</span> <span>三</span>
        <span>四</span> <span>五</span> <span>六</span> <span>七</span> <span>八</span>
        <span>九</span> <span>十</span> <span>时间</span>
      </div>
      <div>
        <ul v-show="index === curId" class="panel_con_box" v-for="(item,index) in panel_nav" :key="index" >
          <!--{{item.p_con}}-->
          <li class="panel_con_list" v-for="(items,index) in item.p_con" :key="index" >
            <span>{{items.qi}}期</span>
            <span class="open_num">
              <em :class=" 'num' + i.n " v-for="(i,index) in items.num" :key="index">{{i.n}}</em>
             </span>
            <span>{{items.time}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import laydate from '../../../static/laydate/laydate';
  export default {
    components:{

    },
    data(){
      return{
        date: '2019-08-08',
        curId: 0,
        isshow:false,
        p_active:'号码',
        panel_nav:[
          {
            p_nav:'号码',
            p_con:[
              {
                qi:'226',
                num:[
                  {n:'1'},
                  {n:'3'},
                  {n:'6'},
                  {n:'7'},
                  {n:'5'},
                  {n:'9'},
                  {n:'10'},
                  {n:'2'},
                  {n:'4'},
                  {n:'8'}
                ],
                time:'12:00'
              },
              {
                qi:'226',
                num:[
                  {n:'1'},
                  {n:'3'},
                  {n:'6'},
                  {n:'7'},
                  {n:'5'},
                  {n:'9'},
                  {n:'10'},
                  {n:'2'},
                  {n:'4'},
                  {n:'8'}
                ],
                time:'12:00'
              }
            ]
          },
          {
            p_nav:'大小',
            p_con:[
              {
                qi:'225',
                num:[
                  {n:'1'},
                  {n:'3'},
                  {n:'6'},
                  {n:'7'},
                  {n:'5'},
                  {n:'9'},
                  {n:'10'},
                  {n:'2'},
                  {n:'4'},
                  {n:'8'}
                ],
                time:'12:00'
              },
              {
                qi:'226',
                num:[
                  {n:'1'},
                  {n:'3'},
                  {n:'6'},
                  {n:'7'},
                  {n:'5'},
                  {n:'9'},
                  {n:'10'},
                  {n:'2'},
                  {n:'4'},
                  {n:'8'}
                ],
                time:'12:00'
              }
            ]
          },
          {
            p_nav:'单双',
            p_con:[
              {
                qi:'224',
                num:[
                  {n:'1'},
                  {n:'3'},
                  {n:'6'},
                  {n:'7'},
                  {n:'5'},
                  {n:'9'},
                  {n:'10'},
                  {n:'2'},
                  {n:'4'},
                  {n:'8'}
                ],
                time:'12:00'
              },
              {
                qi:'226',
                num:[
                  {n:'1'},
                  {n:'3'},
                  {n:'6'},
                  {n:'7'},
                  {n:'5'},
                  {n:'9'},
                  {n:'10'},
                  {n:'2'},
                  {n:'4'},
                  {n:'8'}
                ],
                time:'12:00'
              }
            ]
          },
          {
            p_nav:'对子',
            p_con:[
              {
                qi:'226',
                num:[
                  {n:'1'},
                  {n:'3'},
                  {n:'6'},
                  {n:'7'},
                  {n:'5'},
                  {n:'9'},
                  {n:'10'},
                  {n:'2'},
                  {n:'4'},
                  {n:'8'}
                ],
                time:'12:00'
              },
              {
                qi:'226',
                num:[
                  {n:'1'},
                  {n:'3'},
                  {n:'6'},
                  {n:'7'},
                  {n:'5'},
                  {n:'9'},
                  {n:'10'},
                  {n:'2'},
                  {n:'4'},
                  {n:'8'}
                ],
                time:'12:00'
              }
            ]
          },
          {
            p_nav:'冠亚和龙',
            p_con:[
              {
                qi:'226',
                num:[
                  {n:'1'},
                  {n:'3'},
                  {n:'6'},
                  {n:'7'},
                  {n:'5'},
                  {n:'9'},
                  {n:'10'},
                  {n:'2'},
                  {n:'4'},
                  {n:'8'}
                ],
                time:'12:00'
              },
              {
                qi:'226',
                num:[
                  {n:'1'},
                  {n:'3'},
                  {n:'6'},
                  {n:'7'},
                  {n:'5'},
                  {n:'9'},
                  {n:'10'},
                  {n:'2'},
                  {n:'4'},
                  {n:'8'}
                ],
                time:'12:00'
              }
            ]
          },
          {
            p_nav:'综合',
            p_con:[
              {
                qi:'226',
                num:[
                  {n:'1'},
                  {n:'3'},
                  {n:'6'},
                  {n:'7'},
                  {n:'5'},
                  {n:'9'},
                  {n:'10'},
                  {n:'2'},
                  {n:'4'},
                  {n:'8'},
                  {n:'1'},
                  {n:'3'},
                  {n:'6'},
                  {n:'7'},
                  {n:'5'},
                  {n:'9'},
                  {n:'10'},
                  {n:'2'},
                  {n:'4'},
                  {n:'8'},
                ],
                time:'12:00'
              },
            ]
          },
        ],
      }
    },
    methods:{
      p_selected(index){
        this.curId = index;
      },
      shows:function(){
        this.isshow = !this.isshow;
      },
    },
    mounted(){
      laydate.render({
        elem: '#test',
        type:'date',
        done: (value) => {
          this.date = value
        }
      });
    }
  }
</script>

<style scoped>
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
  .kj_history{
    height: 3.5rem;
    line-height: 3.5rem;
    padding: 0 .5rem;
    display: flex;
    justify-content: space-between;
  }
  .hist_tit{
    color: #282C34;
    font-size: 1.6rem;
  }
  .panel-nav{
    display: flex;
    background: #fff;
    padding:0 .5rem;
  }
  .panel-nav_list{
    height: 3.5rem;
    display: flex;
    width: 90%;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
  }
  .panel_nav_sx{
    width: 5rem;
    height: 3.5rem;
    font-size: 1.4rem;
    line-height: 3rem;
    margin-left:1.5rem;
  }
  .panel-nav_list li span{
    display: inline-block;
    height: 3rem;
    line-height: 3rem;
  }
  .panel_nav_sx em{
    vertical-align: middle;
  }
  .panel_nav_sx img{
    width: 1.6rem;
    height: 1.6rem;
    vertical-align: middle;
  }
  .sx_box{
    width: 100%;
    background: #fff6dd;
    padding:.5rem;
    font-size: 1.4rem;
    display: flex;
    box-sizing: border-box;
  }
  .sx_phonenum{
    width: 3.5rem;
    display: inline-block;
    word-wrap: break-word;
    letter-spacing: 20px;
    padding:.5rem;
  }
  .sx_time{
    width: 8rem;
    padding: .5rem .7rem;
    border-radius: .2rem;
    border: .1rem solid #ccc;
    font-size: 1.4rem;
    background: #fff url("../../assets/images/icon-active-asc1.png") no-repeat 7.4rem center;
    background-size: 1.2rem
  }
  .panel-select-nums{
    margin-top:.5rem;
    display: flex;
    flex-wrap: wrap
  }
  .panel-select-nums span{
    padding:0 .63rem;
    height: 2rem;
    margin-right: .3rem;
    line-height: 2.1rem;
    text-align: center;
    font-size: 1.4rem;
    display: inline-block;
    border:.1rem solid coral;
    border-radius: .3rem;
    margin-bottom:.5rem;
    background:#fff url("../../assets/images/ico-right-correct.png") no-repeat right bottom;
    background-size: 1.2rem;
  }
  .p_nav_active{
    color: coral;
    /*background: url("/static/image/top_jt.png") no-repeat bottom center;*/
    /*background-size: 1.6rem 1.6rem;*/
  }
  .panel_con_title{
    font-size: 1.4rem;
    display:flex;
    justify-content: space-around;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    width: 100%;
  }
  .panel_con_box{
    width: 100%;
    background: #fff;
  }
  .panel_con_list{
    display: flex;
    justify-content: space-around;
    /*align-items: center;*/
    font-size: 1.4rem;
    border-bottom: .1rem solid #ededed;
    padding: 1rem .5rem;
    box-sizing: border-box;
  }
  .panel_con_list span:first-child,.panel_con_list span:last-child{
    display: inline-block;
    flex:0 0 11%;
    padding-top: .3rem;
  }
  .panel_con_list span:nth-child(2){
    display: inline-block;
    flex: 0 0 77%;
  }
</style>
