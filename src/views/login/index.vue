<template>
  <div class="login-container">
    <div class="login-form">
      <h3 class="title">上海城地办公系统</h3>
      <el-tabs v-show="!wechat" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="item in tabList" :key="item.name" :label="item.label" :name="item.name">
          <login-form ref="loginForm" :cur-tab="activeName" @wechatLogin="changeLogin" />
        </el-tab-pane>
      </el-tabs>
      <div v-show="wechat" class="qrcode_container">
        <div class="qrcode">
          <img src="@/assets/icon/folder.png">
        </div>
        <div class="tips">请使用微信扫码登录</div>
        <el-button type="text" @click="changeLogin">&lt;&lt; 切换至账号登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data() {
    return {
      wechat: false,
      activeName: 'account',
      tabList: [{
        label: '账户密码登录',
        name: 'account'
      },
      {
        label: '手机号登录',
        name: 'phone'
      }]
    }
  },
  methods: {
    handleClick() {
      this.$refs.loginForm.forEach(item => {
        item.resetForm()
      })
    },
    changeLogin() {
      this.wechat = !this.wechat
    }
  }
}
</script>

<style lang="scss" scoped>

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  position: relative;
  overflow: hidden;
  background:url('../../assets/login/bg.jpg')  no-repeat;
  background-size: cover;
  .login-form {
    position: absolute;
    top:50%;
    right: 15%;
    transform: translateY(-50%);
    width: 520px;
    height: 600px;
    background-color: rgba(255,255,255,0.24);
    color: #f6f6f6;
    // background-color: #fff;
    // color: #000;
    padding: 80px 75px 0;
    margin: 0 auto;
    .title {
      font-size: 32px;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .el-tabs{
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
      ::v-deep.el-tabs__nav{
        width: 100%;
        .el-tabs__item{
          width: 50%;
          text-align: center;
          padding: 0;
          font-size: 18px;
          color: #f6f6f6;
        }
        .el-tabs__item.is-active{
          color: #1890ff;
        }
      }
    }
    .qrcode_container{
      text-align: center;
      .qrcode{
        background-color: #fff;
        width: 200px;
        height: 200px;
        margin: 0 auto 15px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .tips{
        font-size: 16px;
      }
      .el-button{
        font-size: 16px;
      }
    }
  }
}
</style>
