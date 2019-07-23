<template>
  <div>
    <a-form :form="form" @submit="handleSubmit">
      <div class="wrap">
        <div class="title">用户登录</div>
        <div class="form-wrap">
          <a-form-item>
            <a-input
              maxlength="11"
              placeholder="请输入手机号"
              v-decorator="['userAcc', {
                rules: [{
                  required: true, 
                  pattern: $utils.default.regexp.phone,
                  validator: validateUserAcc,
                }],
              }]"
            />
          </a-form-item>
          <div class="pwd-wrap">
            <a-form-item>
              <a-input
                maxlength="20"
                placeholder="请输入登录密码"
                :type="state.iconStatus && 'text' || 'password'"
                v-decorator="['userPwd', {
                  rules: [{
                    required: true, 
                    validator: validateUserPwd,
                  }],
                }]"
              />
            </a-form-item>
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
          <a-button type="primary" size="large" block html-type="submit">登录</a-button>
        </div>
        <div class="reg-wrap">
          没有账号？
          <router-link to="/user/register">立即注册</router-link>
        </div>
      </div>
    </a-form>
  </div>
</template>

<script>
import { checkErrorCode } from "@/utils/utils";

export default {
  name: "T-login",
  data() {
    return {
      state: {
        iconStatus: true
      },
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!!err) {
          console.log('err')
          return false
        }
        console.log('succ')
      });
    },

    changeIcon() {
      this.state.iconStatus = !this.state.iconStatus;
    },

    validateUserAcc(rule, value, callback) {
      if (!rule.pattern.test(value)) {
        return callback(
          <span>
            <a-icon
              type="exclamation-circle"
              theme="twoTone"
              twoToneColor="#f5222d"
            />
            &nbsp;请输入正确的手机号
          </span>
        );
      }
      return callback();
    },

    validateUserPwd(rule, value, callback) {
      console.log(".............");
      if (!value) {
        return callback(
          <span>
            <a-icon
              type="exclamation-circle"
              theme="twoTone"
              twoToneColor="#f5222d"
            />
            &nbsp;请输入密码
          </span>
        );
      }
      return callback();
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
      top: 10px;
      right: 10px;
      //transform: translateY(-50%);
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


