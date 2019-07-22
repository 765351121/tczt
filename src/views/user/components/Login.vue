<template>
  <div>
    <div class="wrap">
      <div class="title">用户登录</div>
      <div class="form-wrap">
        <a-form>
          <a-form-item>
            <a-input placeholder="请输入手机号"/>
          </a-form-item>
        </a-form>
        <div class="pwd-wrap">
          <a-form>
            <a-form-item>
              <a-input 
                placeholder="请输入登录密码" 
                :type="state.iconStatus && 'text' || 'password'" 
              />
            </a-form-item>
          </a-form>
          <span class="icon-wrap" @click="changeIcon">
            <a-icon 
              slot="suffix" 
              style="font-size: 16px; color:rgb(24, 144, 255)"
              :type="state.iconStatus && 'eye' || 'eye-invisible'" 
            />
          </span>
        </div>
      </div>
      <div class="forget-pwd-wrap">
        <span>忘记密码？</span>
      </div>
      <div class="btn-wrap">
        <a-button type="primary" size="large" block>登录</a-button>
      </div>
      <div class="reg-wrap">
        没有账号？
        <router-link to="/">立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-login",
  data() {
    return {
      state: {
        iconStatus: true,
      }
    }
  },
  methods: {
    changeIcon() {
      console.log('...........')
      this.state.iconStatus = !this.state.iconStatus
    }
  }
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

  .pwd-wrap {
    position: relative;
    .icon-wrap {
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      cursor: pointer;
    }
  }
}

.forget-pwd-wrap {
  text-align: right;
  & > span {
    display: inline-block;
    color: #666666;
    cursor: pointer;
    font-size: 14px;
  }
}

.btn-wrap {
  margin-top: 40px;
}

.reg-wrap {
  margin-top: 15px;
  text-align: center;
}
</style>


