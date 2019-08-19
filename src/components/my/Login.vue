<template>
  <div class="box">
    <h3 class="title">会员中心</h3>
    <div class="centerbox">
      <div class="tap">
        <span class="tap_one tap_active">短信登录</span>
        <span class="tap_two">密码登录</span>
      </div>
      <div class="tap_centent">
        <div class="tap_list">
          <form action="">
            <label for="" class="tap_label">
              <input class="p_number" type="text" maxlength="11" placeholder="请输入手机号">
              <p></p>
            </label>
            <label for="" class="tap_label">
              <input class="yzm_number" type="text" placeholder="请输入短信验证码">
              <p></p>
              <span class="code dx_code">获取验证码</span>
            </label>
          </form>
          <button class="btn logbtn dx_log_btn">登录</button>
        </div>
        <div class="tap_list">
          <form action="">
            <label for="" class="tap_label">
              <input class="m_p_number" type="text" placeholder="请输入手机号/用户名">
              <p></p>
            </label>
            <label for="" class="tap_label">
              <input class="m_m_number" type="password" placeholder="请输入密码">
              <p></p>
            </label>
          </form>
          <button class="btn logbtn mm_log_btn">登录</button>

        </div>
      </div>
      <div class="tishi">
        <span>还没有账号</span>
        <span @click="reg" class="ts_color reg_btn">立即注册</span>
        <span @click="findpwd" class="findpass_btn">找回密码</span>
      </div>
    </div>
    <!--<footbox/>-->
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    components:{
    },
    data(){
      return{

      }
    },
    methods:{
      reg(){
        this.$router.push('/reg')
      },
      findpwd(){
        this.$router.push('/findpwd')
      }
    },

    mounted(){
      var yzmurl = 'http://bljh.ukjh.com/user/logSendVerify';
      var dx_logurl = 'http://bljh.ukjh.com/user/mobileLogin';
      var pwd_logurl = 'http://bljh.ukjh.com/user/login';

      $('.tap_list').eq(0).show();
      $('.tap>span').click(function(){
        var i = $(this).index();
        $('.tap>span').eq(i).addClass('tap_active').siblings().removeClass('tap_active');
        $('.tap_list').eq(i).show().siblings('.tap_list').hide();
      });

      // 验证码倒计时
      var wait = 60;
      function send(btn){
        if(wait == 0 ){
          btn.attr('disabled',false);
          // btn.val("获取验证码");
          btn.text("获取验证码");
          wait = 60;
          return;
        }else{
          btn.attr('disabled',true);
          btn.text(wait + '秒后重发');
          wait --;
          setTimeout(function(){
            send(btn)
          },1000)
        }
      }

    // 登录
      // 短信
      $('.dx_log_btn').prop('disabled', true);
      $('.p_number').focus(function(){
        $('.dx_log_btn').attr('disabled', false);
      })
      $('.p_number').blur(function(){
        var val = $(this).val()
        if(val != ''){
          $('.dx_log_btn').attr('disabled', false);
        }else{
          $('.dx_log_btn').attr('disabled', true);
        }
      })

      // 密码
      $('.mm_log_btn').prop('disabled', true);
      $('.m_p_number').focus(function(){
        $('.mm_log_btn').attr('disabled', false);
      })
      $('.m_p_number').blur(function(){
        var val = $(this).val()
        if(val != ''){
          $('.mm_log_btn').attr('disabled', false);
        }else{
          $('.mm_log_btn').attr('disabled', true);
        }
      })

      // 获取验证码
      $('.dx_code').click(function(){
        var p_num = $('.p_number').val();
        var btn = $('.dx_code');
        if(p_num == ''){
          $('.p_number').next('p').text('手机号不能为空').show();
          return false;
        }else if(!(/^1[34578]\d{9}$/.test(p_num))){
          $('.p_number').next('p').text('请输入正确的手机号').show();
          return false;
        }else{
          var btn = $('.dx_code');
          $.get(yzmurl,{mobile:p_num},function(response){
            console.log(response)
            var msg = response.msg
            var code = response.code
            if(code == 0){
              $('.p_number').next('p').hide()
              send(btn)
            }else{
              $('.p_number').next('p').text(msg).show()
              return false;
            }
          })
        }
      })
      // 短信登录按钮
      $('.dx_log_btn').click(()=>{
        let data={
          "mobile":$('.p_number').val(),
          "verify":$('.yzm_number').val()
        };
        this.$axios.post(dx_logurl,qs.stringify(data))
          .then((response)=> {
            console.log('k',response);
            if(response.dada.code == 0){
              alert('登录成功')
              this.$router.push({path:'/myindex'})
            }else{
              alert(response.data.msg)
            }
          })
          .catch(function (error) {
            console.log('kk',error);
          });
      }),

      // 密码登录
      $('.mm_log_btn').click(()=>{
        let data={
          "username":$('.m_p_number').val(),
          "password":$('.m_m_number').val()
        };
        console.log('dd',data)
        this.$axios.post(pwd_logurl,qs.stringify(data))
          .then((response)=> {
            console.log('k',response);
            console.log('k',response.data.code);
            console.log('k',response.data.msg);
            if(response.data.code == 0){
              alert('登录成功')
              this.$router.push({path:'/myindex'})
            }else{
              alert(response.data.msg)
            }
          })

          .catch(function (error) {
            console.log('kk',error);
          });
      })

//      立即注册


//      找回密码
    }
  }
</script>

<style scoped>
  @import "../../assets/css/logregpublic.css";
</style>
