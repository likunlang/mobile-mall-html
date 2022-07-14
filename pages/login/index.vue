<template>
    <div class="loginPage">
        <div class="login_logo">
            <img class="login_logo_Img" src="/imgs/logo.png" />
        </div>
        <div class="login_h1">授权登录</div>
        <div class="login_txt">请选择登录方式</div>
        <div class="login_Btn">
            <button class="login_Btn01">
                <img class="login_Btn_icon" src="/imgs/icon_google.png" />
                Google
            </button>
            <button class="login_Btn01">
                <img class="login_Btn_icon" src="/imgs/icon_fb.png" />
                Facebook
            </button>
        </div>
        <div class="login_GXBox">
            <img class="login_GX_icon" src="/imgs/gouY.png" />
            我已阅读并同意“用户协议和隐私条款”
        </div>
    
      
    </div>
</template>

<script>
export default {
  name: 'loginPage',
  data() {
    return {
      title: this.$route.params.title || '',
    };
  },
  head() {
    // 优化seo：动态设置title，keywords 和 description
    return {
      title: '动态设置title',
      meta: [
        {
          hid: 'keywords',
          name: "keywords",
          content:
            "淘宝，西瓜视频，抖音，今日头条，懂球帝，微信，微博",
        },
        // hid是一个唯一标识
        {
          hid: 'description', name: 'names', content: '应用大全'
        },
      ],
    };
  },
}
</script>

<style>
    .loginPage {
        width: 100%;
        padding: 0.3rem;
        min-height: 100vh;
        background-color: #fff;
    }
    .login_logo{
        width: 100%;
        padding: 0.3rem 0;
        text-align: center;
    }
    .login_logo_Img{
        width: 1.08rem;
        height: 0.6rem;
        display: inline-block;
    }
    .login_h1{
        width: 100%;
        text-align: center;
        color: #333333;
        font-size: 0.18rem;
        line-height: 0.3rem;
        font-weight: 600;
    }
    .login_txt{
        width: 100%;
        text-align: center;
        font-size: 0.12rem;
        color: #999999;
        line-height: 0.24rem;
    }
    .login_Btn{
        width: 100%;
        padding: 0.3rem 0.1rem 0.1rem 0.1rem;
    }
    .login_Btn01{
        width: 100%;
        height: 0.4rem;
        line-height: 0.38rem;
        border: 1px solid #E5E5E5;
        border-radius: 8px;
        color: #333333;
        font-size: 0.14rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.2rem;
    }
    .login_Btn_icon{
        width: 0.24rem;
        height: 0.38rem;
        display: inline-block;
        padding: 0.07rem 0;
    }
    .login_GXBox{
        width: 100%;
        line-height: 0.3rem;
        height: 0.3rem;
        align-items: center;
        justify-content: center;
        color: #A8A8A8;
        font-size: 0.14rem;
        text-align: center;
        display: flex;
    }
    .login_GX_icon{
        display: inline-block;
        width: 0.16rem;
        height: 0.3rem;
        padding: 0.07rem 0;
        margin-right: 0.05rem;
    }
    
    
    
    
</style>
