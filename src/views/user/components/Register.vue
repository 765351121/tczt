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

        <div class="imgvc-wrap">
          <a-form>
            <a-form-item>
              <a-input placeholder="请输入图形验证码"/>
            </a-form-item>
          </a-form>
          <span class="imgvc" @click="getImgvc">
            <img :src="require(`@/assets/images/imgvc/${state.imgvc}.jpg`)" alt>
          </span>
        </div>

        <div class="sms-code-wrap">
          <a-form>
            <a-form-item>
              <a-input placeholder="请输入短信验证码"/>
            </a-form-item>
          </a-form>
          <span class="sms-code-btn">
            <a-button 
              block 
              @click="handleSmsCode"
              :disabled="!!state.count"
              v-text="!state.count && state.tips || (`${state.count}s后可重发`)"
            ></a-button>
          </span>
        </div>

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
  name: "T-register",
  data() {
    return {
      state: {
        imgvc: 1,
        imgArr: new Array(7).join(),
        count: 0,
        tips: '获取验证码',
      }
    };
  },
  methods: {
    getImgvc() {
      // mock for getImgvc
      let rand = Math.floor(Math.random() * this.state.imgArr.length) + 1;
      const { imgvc } = this.state;
      if (rand == imgvc) {
        return this.getImgvc();
      }
      return (this.state.imgvc = rand);
    },
    smsCountDown() {
      let count = 60;
      this.state.count = count;
      this.interval = setInterval(() => {
        count -= 1;
        this.state.count = count;
        if (count === 0) {
          this.state.tips = '重新发送';
          clearInterval(this.interval);
        }
      }, 1000);
    },
    handleSmsCode() {
      console.log('..........')
      // check form 
      // count down
      this.smsCountDown()
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

.imgvc-wrap {
  position: relative;
  .imgvc {
    display: inline-block;
    width: 100px;
    height: 36px;
    line-height: 36px;
    cursor: pointer;
    img {
      width: 100px;
      height: auto;
    }
    position: absolute;
    top: -10px;
    right: 0;
  }
}

.sms-code-wrap {
  position: relative;
  .sms-code-btn {
    display: inline-block;
    width: 100px;
    height: 32px;
    line-height: 32px;
    position: absolute;
    top: -5px;
    right: 0;
    button {
      border: none;
      color: #0181fe;
      background-color: transparent!important;
    }
    /deep/ [ant-click-animating-without-extra-node]:after, .ant-click-animating-node {
      display: none;
    }
  }
}


</style>


