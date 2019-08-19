<template>
  <div class="box">
    <h3 class="title" @click="goback"><img src="/static/image/head1.png" alt="">会员中心</h3>
    <div class="centerbox">
      <div class="tap">
        <span class="tap_one tap_active">找回密码</span>
      </div>
      <div class="find_tap_centent">
        <form action="" class="one_form">
          <div class="find_list">
            <label for="" class="tap_label">
              <input class="find_num_user" name="condition" type="text" placeholder="请输入手机号/用户名">
              <p></p>
            </label>
            <label for="" class="tap_label tap_yzm">
              <input class="find_yzminput" name="verify" type="text" placeholder="请输入验证码">
              <p></p>
              <span class="sjyzm"><img id="verify" src="" alt="captcha" onclick="this.src='http://bljh.ukjh.com/index/verify'+'?'+Math.random();" /></span>
            </label>
            <span class="yzm_ts">看不清,换一张</span>
          </div>
        </form>
        <button class="btn find_nextone_btn">下一步</button>
      </div>
      <div class="find_tap_centent">
        <form action="" class="two_form">
          <div class="find_list">
            <p class="find_p">为了账户安全，请完成身份验证</p>
            <p class="find_p_num">验证手机号为<em>158****5462</em></p>
            <input class="find_hidden_num" name="getpassword_1" type="hidden">
            <label for="" class="tap_label">
              <input class="findphone_dx_yzm" type="text" name="phone_dx_yzm" placeholder="请输入验证码">
              <p></p>
              <span class="code find_dx_code">获取验证码</span>
            </label>
          </div>
        </form>
        <button class="btn find_nexttwo_btn">下一步</button>
      </div>
      <div class="find_tap_centent">
        <form action="" class="three_form">
          <div class="find_list">
            <p class="find_p">请设置新密码</p>
            <input class="find_hidden_pwd" name="getpassword_3" type="hidden">
            <label for="" class="tap_label">
              <input class="new_pwd" name="password" type="password" placeholder="请输入新密码">
              <p></p>
            </label>
            <label for="" class="tap_label">
              <input class="new_qrpwd" name="password_confirm" type="password" placeholder="请确认密码">
              <p></p>
            </label>
          </div>
        </form>
        <button class="btn find_end_btn">完成</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components:{
    },
    data(){
      return{

      }
    },
    methods:{
      goback(){
        console.log("kk")
        this.$router.go(-1);//返回上一层
      },
    },
    mounted(){
      $('.find_tap_centent').eq(0).show();
      // 第一步
      $('.find_nextone_btn').click(function(){
        var num_user = $('.find_num_user').val()
        var yzm = $('.find_yzminput').val()
        if(num_user == ''){
          $('.find_num_user').next('p').text('手机号不能为空').show()
          return false;
        }
        if(yzm == ''){
          $('.find_yzminput').siblings('p').text('验证码不能为空').show()
          return false;
        }else{
          $.get('http://bljh.ukjh.com/user/getPassword1',$('.one_form').serialize(),function(response){
            var code = response.code
            var msg = response.msg
            var data = response.data
            var data2 = data.substr(0,3)+"****"+data.substr(7);
            console.log(response)
            if(code == 0){
              $('.find_tap_centent').eq(0).hide();
              $('.find_tap_centent').eq(1).show();
              $('.find_yzminput').next('p').hide()
              $('.find_hidden_num').val(data)
              var findPnumHtml =  ''
              findPnumHtml +='验证手机号为<em>'+ data2 +'</em>'
              $('.find_p_num').html(findPnumHtml)
            }else{
              $('.find_yzminput').siblings('p').text(msg).show()
              return false;
            }

          })
        }
      })

      // 第二步
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
      $('.find_dx_code').click(function(){
        var h_num = $('.find_hidden_num').val()
        var btn = $('.find_dx_code')
        $.get('http://bljh.ukjh.com/user/getPassword2',{getpassword_1:h_num,mobile:h_num},function(response){
          var code = response.code
          var msg = response.msg
          console.log('ff',response)
          if(code == 0){
            send(btn)
            $('.findphone_dx_yzm').next('p').hide()
          }else{
            $('.findphone_dx_yzm').next('p').text(msg).show()
            return false;
          }
        })
      })
      $('.find_nexttwo_btn').click(function(){
        var h_num = $('.find_hidden_num').val()
        var yzm = $('.findphone_dx_yzm').val()
        if(yzm == ''){
          $('.findphone_dx_yzm').next('p').text('请输入验证码').show()
          return false;
        }else{
          $.get('http://bljh.ukjh.com/user/getPassword3',{getpassword_2:h_num,mobile:h_num,verify:yzm},function(response){
            var code = response.code
            var msg = response.msg
            var data = response.data
            console.log('fff',response)
            if(code == 0){
              $('.find_tap_centent').eq(1).hide();
              $('.find_tap_centent').eq(2).show();
              $('.find_hidden_pwd').val(data)
            }else{
              $('.findphone_dx_yzm').next('p').text(msg).show()
              return false;
            }
          })
        }
      })
      // 第三步
      $('.find_end_btn').click(function(){
        console.log('ll')
        var h_num = $('.find_hidden_pwd').val()
        var pwd = $('.new_pwd').val()
        var qrpwd = $('.new_qrpwd').val()
        var mima=/^[a-zA-Z0-9]{6,12}$/
        if(pwd == '' && qrpwd == ''){
          $('.new_pwd').next('p').text('请填写密码').show()
          $('.new_qrpwd').next('p').text('请填写确认密码').show()
          return false;
        }else if(!mima.test(pwd)){
          $('.new_pwd').next('p').text('密码由英文字母和数字组成,6-12位').show()
          return false;
        }else{
          // $.post('http://bljh.ukjh.com/user/getPassword4',$('.three_form').serialize(),function(response){
          $.post('http://bljh.ukjh.com/user/getPassword4',{getpassword_3:h_num,mobile:h_num,password:pwd,password_confirm:qrpwd},function(response){

            var code = response.code
            var msg = response.msg
            console.log('lll',response)
            if(code == 0){
              $('.new_pwd').next('p').hide()
              $('.new_qrpwd').next('p').hide()
              layer.msg('密码已重置',{
                time:2000,
              },function(){
                location.href = 'login.html'
              });
            }else{
              $('.new_qrpwd').next('p').text(msg).show()
              return false;
            }
          })


        }

      })

      // 图片验证码
      $('#verify').attr('src',"http://bljh.ukjh.com/index/verify");
      $('.yzm_ts').click(function () {
        $('#verify').attr('src',"http://bljh.ukjh.com/index/verify"+'?'+Math.random());
      })
    }
  }
</script>

<style scoped>
  @import "../../assets/css/logregpublic.css";
  .title img{
    width: .9rem;
    height: 1.4rem;
    margin-right: 1rem;
  }
</style>
