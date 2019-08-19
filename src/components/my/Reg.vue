<template>
  <div class="box">
    <h3 class="title">会员中心</h3>
    <div class="centerbox">
      <div class="tap">
        <span class="tap_one tap_active">手机号注册</span>
        <span class="tap_two">用户名注册</span>
      </div>
      <div class="tap_centent">
        <div class="tap_list">
          <form action="">
            <label for="" class="tap_label">
              <input class="reg_p_num" maxlength="11" type="text" placeholder="请输入手机号">
              <p></p>
            </label>
            <label for="" class="tap_label">
              <input  class="reg_yzm_num" type="text" placeholder="请输入短信验证码">
              <p></p>
              <span class="r_code">获取验证码</span>
            </label>
          </form>
          <button class="btn p_regbtn">下一步</button>
        </div>
        <div class="tap_list">
          <form action="" class="user_form">
            <input type="hidden" name='mobile' class="u_phone">
            <input type="hidden" name='verify' class='u_yzm'>
            <label for="" class="tap_label">
              <input class="user_name" type="text" placeholder="请输入用户名">
              <p></p>
            </label>
            <label for="" class="tap_label">
              <input class="user_mm" type="password" placeholder="请输入密码">
              <p></p>
            </label>
            <label for="" class="tap_label">
              <input class="user_qr_mm" type="password" placeholder="请确认密码">
              <p></p>
            </label>
          </form>
          <button class="btn u_regbtn">注册</button>
        </div>
      </div>
      <div class="tishi">
        <span>已有账号</span>
        <span @click="login" class="ts_color login_btn">直接登录</span>
        <span @click="findpwd" class="findpass_btn">找回密码</span>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    components:{
    },
    data(){
      return {

      }
    },
    methods:{
      login(){
        this.$router.push('/login')
      },
      findpwd(){
        this.$router.push('/findpwd')
      }
    },
    mounted(){
      $('.tap_list').eq(0).show();
      // 注册
      // 手机号注册
      $('.p_regbtn').prop('disabled', true);
      $('.reg_p_num').focus(function(){
        $('.p_regbtn').attr('disabled', false);
      })
      $('.reg_p_num').blur(function(){
        var val = $(this).val()
        if(val != ''){
          $('.p_regbtn').attr('disabled', false);
        }else{
          $('.p_regbtn').attr('disabled', true);
        }
      })

      var yzmurl = 'http://bljh.ukjh.com/user/regSendVerify'
      var nexturl = 'http://bljh.ukjh.com/user/regCheckVerify'
      var regurl = 'http://bljh.ukjh.com/user/reg'
      // 获取验证码
      $('.r_code').click(function(){
        var p_num = $('.reg_p_num').val()
        if(p_num == ''){
          $('.reg_p_num').next('p').text('手机号不能为空').show()
          return false;
        }else if(!(/^1[34578]\d{9}$/.test(p_num))){
          $('.reg_p_num').next('p').text('请输入正确的手机号').show()
          return false;
        }else{
          var btn = $('.r_code')
          $.get(yzmurl,{mobile:p_num},function(response){
            var data = response.msg
            var code = response.code
            console.log('code',response)
            if(code == 0){
              $('.reg_p_num').next('p').hide()
              send(btn)
            }else if(code == 1){
              $('.reg_p_num').next('p').text(data).show()
            }
          })
        }
      })
      // 验证码倒计时
      var wait = 60;
      function send(btn){
        if(wait == 0 ){
          btn.attr('disabled',false);
          // btn.val("获取验证码");
          btn.text("获取验证码")
          wait = 60;
          return;
        }else{
          btn.attr('disabled',true);
          btn.text(wait + '秒后重发')
          wait --;
          setTimeout(function(){
            send(btn)
          },1000)
        }
      }
      // 下一步
      $('.p_regbtn').click(function(){
        var yzm_num = $('.reg_yzm_num').val()
        var p_num = $('.reg_p_num').val()
        if( yzm_num == ''){
          $('.reg_yzm_num').next('p').text('验证码不能为空').show()
          return false;
        }else{
          $.get(nexturl,{mobile:p_num,verify:yzm_num},function(response){
            var data = response.msg
            var code = response.code
            console.log(response)
            if(code == 0){
              $('.reg_p_num').next('p').hide()
              $('.tap_list').eq(0).hide();
              $('.tap_list').eq(1).show();
              $('.tap>span').eq(1).addClass('tap_active').siblings().removeClass('tap_active')
              $('.u_phone').val(p_num)
              $('.u_yzm').val(yzm_num)
            }else if(code == 1){
              $('.reg_yzm_num').next('p').text(data).show()
            }
          })
        }
      })
      // 注册按钮
      $('.u_regbtn').prop('disabled', true);
      $('.user_name').focus(function(){
        $('.u_regbtn').attr('disabled', false);
      })
      $('.user_name').blur(function(){
        var val = $(this).val()
        if(val != ''){
          $('.u_regbtn').attr('disabled', false);
        }else{
          $('.u_regbtn').attr('disabled', true);
        }
      })

      $('.u_regbtn').click(function(){
        var username = $('.user_name').val()
        var mm = $('.user_mm').val()
        var qrmm = $('.user_qr_mm').val()
        var reg=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/
        var mima=/^[a-zA-Z0-9]{6,12}$/

        if( mm == '' && qrmm == ''){
          $('.user_mm').next('p').text('用户名不能为空').show()
          return false
        }else if(qrmm != mm){
          $('.user_qr_mm').next('p').text('密码不一致').show()
          return false
        }else if(!reg.test(username)){
          $('.user_name').next('p').text('用户名由英文字母和数字组成,4-16位,字母开头').show()
          return false;
        }else if(!mima.test(mm)){
          $('.user_mm').next('p').text('密码由英文字母和数字组成,6-12位').show()
          return false;
        }else{
          $('.user_name').next('p').hide()
          $('.user_mm').next('p').hide()
          $('.user_mm').next('p').hide()
          $('.user_qr_mm').next('p').hide()

          let data = {
            "u_phone": $('.u_phone').val(),
            "u_yzm": $('.u_yzm').val(),
            "username": $('.user_name').val(),
            "mm": $('.user_mm').val(),
            "qrmm": $('.user_qr_mm').val()
          }
          this.$axios.post(regurl,qs.stringify(data))
            .then((response)=>{
              var code = response.code
              var msg = response.msg
              if(code == 0){
                alert('注册成功')
                this.$router.push({path:'/login'})
              }else{
                alert(msg)
              }
            })
        }

      })

    }
  }
</script>

<style scoped>
  @import "../../assets/css/logregpublic.css";
</style>
