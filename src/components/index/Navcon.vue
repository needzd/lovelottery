<template>
  <div class="navbox">
    <ul class="navlist">
      <li v-for="(item,index) in nav_list" :key="index" >
        <span :class="{nav_active : active == index}" @click="selected(index,item.id)" >{{item.nav}}</span>
      </li>
    </ul>
    <span class="shaixuan"><img  @click="$emit('gd')" src="../../assets/images/more.png" alt=""></span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        nav_list: [
          { id:1,
            nav: '开奖'},
          { id:2,
            nav: '走势'},
          { id:3,
            nav: '计划'},
          { id:4,
            nav: '雪球'},
          { id:5,
            nav: '追号'},
          { id:6,
            nav: '单期'},
          { id:7,
            nav: '遗漏'},
          { id:8,
            nav: '长龙'},
          { id:9,
            nav: '分析'},
          { id:10,
            nav: '路珠'},
          { id:11,
            nav: '冷热'},
          { id:12,
            nav: '倍投'},
          { id:13,
            nav: '滚雪球计算器'},
          { id:14,
            nav: '缩水'},
          { id:15,
            nav: '技巧'}
        ],
      }
    },
    methods:{
      selected(nav,id){
        this.active = nav;
        if(id == 1){
          this.$router.push({path:'kjdetailcon'})
        }else if(id == 2){
          this.$router.push({path:'zsdetailcon'})
        }else if(id == 3){
          this.$router.push({path:'jhdetailcon'})
        }else if(id == 4){
          this.$router.push({path:'xqdetailcon'})
        }else if(id == 5){
          this.$router.push({path:'zhdetailcon'})
        }else if(id == 6){
          this.$router.push({path:'dqdetailcon'})
        }else if(id == 7){
          this.$router.push({path:'yldetailcon'})
        }else if(id == 8){
          this.$router.push({path:'cldetailcon'})
        }else if(id == 9){
          this.$router.push({path:'fxdetailcon'})
        }else if(id == 10){
          this.$router.push({path:'lzdetailcon'})
        }else if(id == 11){
          this.$router.push({path:'lrdetailcon'})
        }else if(id == 12){
          this.$router.push({path:'btdetailcon'})
        }else if(id == 13){
          this.$router.push({path:'gxqdetailcon'})
        }else if(id == 15){
          this.$router.push({path:'jqdetailcon'})
        }
      },

    },
    mounted(){

    }
  }
</script>

<style scoped>
  .navbox{
    display: flex;
    position: relative;
  }
  .navlist{
    margin-top:3.6rem;
    display: flex;
    align-items: center;
    height: 3rem;
    width: 100%;
    background: #e3f5fe;
    font-size: 1.4rem;
    margin-right: 3rem;
    overflow-x: scroll;
  }
  .navlist li{
    flex: 0 0 auto;
    padding: 0 1.2rem;
    text-align: center;
  }
  .nav_active{
    color: crimson;
    padding:.5rem 0;
    border-bottom: .2rem solid crimson;
  }
  .shaixuan{
    position: absolute;
    top:3.6rem;
    right: 0;
    width: 3rem;
    height: 3rem;
    text-align: center;
    padding-top: .5rem;
    box-shadow: rgba(0,0,0,0.1) -2px 0px 2px;
    z-index: 99;
    box-sizing: border-box;
    background: #e3f5fe;
  }
  .shaixuan img{
    width: 2rem;
    height: 2rem;
  }
</style>
