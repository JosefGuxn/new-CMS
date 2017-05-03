<template>
  <div>
      <el-form :model="loginForm" :rules="loginRules" ref="loginRules" label-position="left" label-width="0px" class="ruleForm login-container">
          <h3 class="title">Đăng Nhập</h3>
          <el-form-item prop="account">
            <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="Tài khoản"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="Mật khẩu"></el-input>
          </el-form-item>           
          <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">Đăng nhập</el-button>              
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logining: false,
      loginForm: {
        account: 'admin',
        password: '12345'
      },
      loginRules: {
        account: [
          {required: true, message: 'Xin điền tài khoản.', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'Xin điền mật khẩu', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginRules.validate((valid) => {
        if (valid) {
          this.logining = true
          if (this.loginForm.account === 'admin' && this.loginForm.password === '12345') {
            this.$router.push({path: '/main'})
          } else {
            this.logining = false
            this.$message({
              message: 'Something wrong!',
              type: 'error'
            })
            this.$refs.loginRules.resetFields()
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;   
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
