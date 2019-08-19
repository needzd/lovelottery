<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import $ from 'jquery'
export default {
  name: 'App',
  components:{
  },

}
</script>

<style>
#app{
    width: 100%;
    height: 100%;
  }
body,p,dl,dd,ul,ol,li,div,h1,h2,h3,h4,h5,h6,form,input,table,tr,td{
	margin:0;
	padding:0;
}
html{
  font-size: 10px;
}
html,body{
	height: 100%;
}
body{
  font-family: "微软雅黑",Arial;
  background: #f2f2f2;
  color: #3C3C3C;
}
ul,ol,li{
	list-style:none;
}
img{
	border: 0;
	/*display: block;*/
}
a{
	text-decoration: none;
  color: #3c3c3c;
}
em,i{
  font-style: normal;
}
input,button{
  outline: none;
}
.conbox{
  margin-top: 3.25rem;
}
.num1{
  background:#4d4dff;
}
.num2{
  background:#990033;
}
.num3{
  background:#ff9966;
}
.num4{
  background:#99668c;
}
.num5{
  background:#99ccff;
}
.num6{
  background:#669999;
}
.num7{
  background:#c2c2d6;
}
.num8{
  background:#8080ff;
}
.num9{
  background:#99cc00;
}
.num10{
  background:#cc6699;
}
</style>
