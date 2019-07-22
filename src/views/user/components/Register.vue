<template>
  <div>
    <div class="wrap">
      <div class="title">免费注册</div>
      <div class="form-wrap">
        <a-form>
          <a-form-item>
            <a-input placeholder="请输入手机号"/>
          </a-form-item>
        </a-form>

        <a-form>
          <a-form-item>
            <a-input placeholder="请输入图形验证码"/>
          </a-form-item>
        </a-form>

        <a-form>
          <a-form-item>
            <a-input placeholder="请输入短信验证码"/>
          </a-form-item>
        </a-form>

        <a-form>
          <a-form-item>
            <a-input placeholder="6-16位字符，数字、字母、下划线至少两种元素组成"/>
          </a-form-item>
        </a-form>
      </div>

      <div class="btn-wrap">
        <a-button type="primary" size="large" block>立即注册</a-button>
      </div>

      <div class="checkbox">
        <a-checkbox>
          我已阅读并同意
          <a href="http://www.baidu.com" target="_blank">《天辰智投平台用户注册及服务协议》</a>
        </a-checkbox>
      </div>

      <div class="login-wrap">
        已有账号？
        <router-link to="/user/login">马上登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-register"
};
</script>

<style lang="less" scoped>
.title {
  text-align: center;
  font-size: 22px;
  color: #333;
  font-weight: normal;
  margin-bottom: 60px;
}

.form-wrap {
  /deep/ .ant-input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    font-size: 16px;
    &:focus {
      border-color: #d9d9d9;
      box-shadow: none;
    }
    &:hover {
      border-color: #d9d9d9;
    }
  }
}

.btn-wrap {
  margin-top: 40px;
}

.checkbox {
  margin-top: 15px;
}

.login-wrap {
  margin-top: 15px;
  text-align: center;
}
</style>


