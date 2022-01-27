<template>
  <div>
    <el-form ref="form" :model="loginForm" :rules="loginRules">
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.username" :placeholder="curTab === 'account' ?'请输入账号': '请输入手机号码'" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input v-model="loginForm.password" placeholder="请输入密码" @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
    </el-form>
    <div class="other_login">
      其他登录方式
      <img src="@/assets/icon/wechat.png" alt="" width="60px" @click="wechatLogin">
    </div>
    <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
  </div>
</template>

<script>
export default {
  props: {
    curTab: {
      type: String,
      default: 'account'
    }
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error(this.curTab === 'account' ? '账户名不能为空' : '手机号码不能为空'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    },
    wechatLogin() {
      this.$emit('wechatLogin')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form{
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #fff;
    // color: #889aa4;
    vertical-align: middle;
    width: 45px;
    display: inline-block;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: #889aa4;
    cursor: pointer;
    user-select: none;
  }
  ::v-deep.el-form-item__error{
    left: 15px;
    font-size: 14px;
  }

}
.other_login{
    line-height: 60px;
    img{
      vertical-align: middle;
      margin-left: 50px;
    }
  }
</style>
