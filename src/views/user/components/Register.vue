<template>
  <div>
    <a-form :form="form" @submit="handleSubmit">
      <div class="wrap">
        <div class="title">免费注册</div>
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

          <div class="imgvc-wrap">
            <a-form-item>
              <a-input
                maxlength="4"
                placeholder="请输入图形验证码"
                v-decorator="['captcha', {
                  rules: [{
                    required: true,
                    message: '图形验证码不能为空',
                    //whitespace: true,
                  },{
                    validator: validateCaptcha,
                  }],
                }]"
              />
            </a-form-item>
            <span class="imgvc" @click="getImgvc">
              <img :src="require(`@/assets/images/imgvc/${state.imgvc}.jpg`)" alt>
            </span>
          </div>

          <div class="sms-code-wrap">
            <a-form-item>
              <a-input
                maxlength="6"
                placeholder="请输入短信验证码"
                v-decorator="['vericode', {
                  rules: [{
                    required: true,
                    message: '短信验证码不能为空',
                  },{
                    validator: validateVericode,
                  }],
                }]"
              />
            </a-form-item>
            <span class="sms-code-btn">
              <a-button
                block
                @click="handleSmsCode"
                :disabled="!!state.count"
                v-text="!state.count && state.tips || (`${state.count}s后可重发`)"
              ></a-button>
            </span>
          </div>

          <a-form-item>
            <a-input
              maxlength="16"
              placeholder="6-16位，数字、字母、下划线至少两种元素组成"
              v-decorator="['userPwd', {
                rules: [{
                  required: true,
                  message: '密码不能为空',
                },{
                  pattern: $utils.default.regexp.pwdPatter,
                  validator: validateUserPwd,
                }],
              }]"
            />
          </a-form-item>
        </div>

        <div class="btn-wrap">
          <a-button
            type="primary"
            size="large"
            block
            :disabled="!state.checked"
            html-type="submit"
          >立即注册</a-button>
        </div>

        <div class="checkbox">
          <a-checkbox :checked="state.checked" @change="handleCheckbox">
            我已阅读并同意
            <a href="http://www.baidu.com" target="_blank">《天辰智投平台用户注册及服务协议》</a>
          </a-checkbox>
        </div>

        <div class="login-wrap">
          已有账号？
          <router-link to="/user/login">马上登录</router-link>
        </div>
      </div>
    </a-form>

    <a-modal width="480px" :visible="state.visible" :centered="true" :footer="null">
      <div class="modal-content-wrap">
        <div class="img-wrap">
          <img src="@/assets/images/status/success.png" alt>
        </div>
        <div class="des-wrap">
          <span>恭喜您，注册成功！</span>
          <span>请前往开户认证，认证成功即可出借</span>
        </div>
        <div class="btn-wrap">
          <a-button type="primary" size="large" block>立即开户</a-button>
        </div>
        <div class="tips-wrap">
          先不开户，
          <router-link to="/">随便逛逛</router-link>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import { checkErrorCode, encryptAES } from "@/utils/utils";

export default {
  name: "T-register",
  data() {
    return {
      form: this.$form.createForm(this),
      state: {
        imgvc: 1,
        imgArr: new Array(7).join(),
        count: 0,
        tips: "获取验证码",
        checked: true,
        visible: true
      }
    };
  },
  methods: {
    // 注册
    regist(values, response) {
      const { encryInfo, randomId } = response.data;
      const { userAcc, userPwd } = encryptAES({ ...values }, encryInfo);
      this.$store
        .dispatch({
          type: "regist",
          payload: {
            ...values,
            randomId,
            userAcc,
            userPwd,
            channelid: "pc",
            platform: "pc",
            source: "p2p"
          }
        })
        .then(response => {
          console.log("注册", response);
          if (!checkErrorCode(response)) {
            return false;
          }
          this.$message.success("注册成功");
        });
    },
    // 提交
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!!err) {
          return false;
        }
        //this.loading = true
        // /finance/usercenter/client/regist
        this.$store
          .dispatch({
            type: "getEncryInfo",
            payload: {}
          })
          .then(response => {
            if (!checkErrorCode(response)) {
              return false;
            }
            this.regist(values, response);
          });
      });
    },
    // 注册协议勾选框
    handleCheckbox(e) {
      this.state.checked = e.target.checked;
    },
    // 校验用户密码
    validateUserPwd(rule, value, callback) {
      if (!!value && !rule.pattern.test(value)) {
        return callback(
          <span>
            <a-icon
              type="exclamation-circle"
              theme="twoTone"
              twoToneColor="#f5222d"
            />
            &nbsp;6-16位，数字、字母、下划线至少有两种元素组成
          </span>
        );
      }
      return callback();
    },
    // 校验短信验证码
    validateVericode(rule, value, callback) {
      if (!!value && (value.length < 6 || value.indexOf(" ") > -1)) {
        return callback("请输入6位验证码");
      }
      return callback();
    },
    // 校验图形验证码
    validateCaptcha(rule, value, callback) {
      if (!!value && (value.length < 4 || value.indexOf(" ") > -1)) {
        return callback("请输入4位图形验证码");
      }
      return callback();
    },
    // 校验用户手机号
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
    // 刷新图形验证码
    getImgvc() {
      // mock for getImgvc
      let rand = Math.floor(Math.random() * this.state.imgArr.length) + 1;
      const { imgvc } = this.state;
      if (rand == imgvc) {
        return this.getImgvc();
      }
      return (this.state.imgvc = rand);
    },
    // 短信验证码倒计时
    smsCountDown() {
      let count = 60;
      this.state.count = count;
      this.interval = setInterval(() => {
        count -= 1;
        this.state.count = count;
        if (count === 0) {
          this.state.tips = "重新发送";
          clearInterval(this.interval);
        }
      }, 1000);
    },
    // 获取短信验证码
    handleSmsCode() {
      this.form.validateFields(
        ["userAcc", "captcha"],
        { force: true },
        (err, values) => {
          if (!!err) {
            return false;
          }
          this.smsCountDown();
          // /finance/usercenter/client/sms/pc

          this.$store
            .dispatch({
              type: "sendsms",
              payload: {
                ...values,
                smsType: "regist"
              }
            })
            .then(response => {
              if (!checkErrorCode(response)) {
                return false;
              }
              this.$message.success("验证码已发送");
            });
        }
      );
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
      background-color: transparent !important;
    }
    /deep/ [ant-click-animating-without-extra-node]:after,
    .ant-click-animating-node {
      display: none;
    }
  }
}
.modal-content-wrap {
  margin-top: 30px;
  padding: 0 20px;
  .img-wrap {
    text-align: center;
    img {
      display: inline-block;
      width: 62px;
      height: 62px;
    }
  }
  .des-wrap {
    margin-top: 20px;
    & > span {
      display: block;
      text-align: center;
      margin: 10px 0;
      &:first-child {
        font-size: 16px;
        color: #333333;
      }
      &:last-child {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
      }
    }
  }
  .btn-wrap {
    margin-top: 30px;
  }
  .tips-wrap {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    text-align: center;
    margin-top: 30px;
  }
}
</style>


