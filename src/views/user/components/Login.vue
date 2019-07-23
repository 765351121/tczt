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
import { checkErrorCode, encryptAES, handleWebStorage } from "@/utils/utils";

export default {
  name: "T-login",
  data() {
    return {
      state: {
        iconStatus: true
      },
      form: this.$form.createForm(this),
      ws: handleWebStorage(),
    };
  },
  methods: {
    handleLoginSuccess() {
      this.ws.setItem({ user: 'user-123' })
      this.$store.dispatch({
        type: 'getUserInfo',
        payload: {}
      }).then(response => {
        //console.log('...........')
        //console.log(response)

      })
      //this.$router.push({ name: '/home' })
      
    },

    login(values, response) {
      const { encryInfo, randomId } = response.data;
      const { userAcc, userPwd } = encryptAES({ ...values }, encryInfo);
      this.$store
        .dispatch({
          type: "login",
          payload: {
            randomId,
            userAcc,
            userPwd,
            platform: "pc"
          }
        })
        .then(response => {
          if (!checkErrorCode(response)) {
            return false;
          }
           this.$message.success('登录成功');
          this.handleLoginSuccess();
        });
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!!err) {
          return false;
        }
        this.$store
          .dispatch({
            type: "getEncryInfo",
            payload: {}
          })
          .then(response => {
            if (!checkErrorCode(response)) {
              return false;
            }
            this.login(values, response);
          });
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


