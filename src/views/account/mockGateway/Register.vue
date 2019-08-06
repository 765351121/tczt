<template>
  <div>
    <div class="wrap">
      <a-form :form="form" @submit="handleSubmit">
        <p class="title">用户信息：</p>
        <a-form-item label="客户姓名" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-input
            maxlength="11"
            placeholder="请输入客户姓名"
            disabled
            v-decorator="['realName', {
              rules: [{
                required: true, 
                message: '客户姓名不能为空'
              }],
              initialValue: reqData.realName
            }]"
          />
        </a-form-item>

        <a-form-item label="证件类型" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-input
            maxlength="11"
            placeholder="请输入证件类型"
            disabled
            v-decorator="['cardType', {
              rules: [{
                required: true, 
                message: '证件类型不能为空'
              }],
              initialValue: '中华人民共和国身份证'
            }]"
          />
        </a-form-item>

        <a-form-item label="证件号" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-input
            maxlength="11"
            placeholder="请输入证件号"
            disabled
            v-decorator="['idNum', {
              rules: [{
                required: true, 
                message: '证件号不能为空'
              }],
              initialValue: $utils.tmIdCardNo(reqData.idCardNo)
            }]"
          />
        </a-form-item>

        <a-form-item label="银行卡" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-input
            maxlength="11"
            placeholder="请输入银行卡"
            v-decorator="['bankCardNo', {
              rules: [{
                required: true, 
                message: '银行卡号不能为空'
              }],
            }]"
          />
        </a-form-item>

        <a-form-item label="预留手机号" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-input
            maxlength="11"
            placeholder="请输入预留手机号"
            v-decorator="['phoneNumber', {
              rules: [{
                required: true, 
                message: '预留手机号不能为空'
              }],
            }]"
          />
        </a-form-item>

        <div class="sms-code-wrap">
          <div class="sms-code-form">
            <a-form-item label="验证码" :label-col="labelCol" :wrapper-col="{ span: 7 }">
              <a-input
                maxlength="6"
                placeholder="请输入短信验证码"
                v-decorator="['smsCode', {
                  rules: [{
                    required: true, 
                    message: '短信验证码不能为空'
                  }],
                }]"
              />
            </a-form-item>
          </div>
          <span class="sms-code-btn">
            <a-button
              @click="handleSmsCode"
              :disabled="!!state.count"
              v-text="!state.count && state.tips || (`${state.count}s后可重发`)"
            >点击获取</a-button>
          </span>
        </div>

        <a-form-item label="开通授权业务" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-input
            maxlength="11"
            placeholder="请输入开通授权业务"
            disabled
            v-decorator="['cc', {
              rules: [{
                required: true, 
                message: '授权业务不能为空'
              }],
              initialValue: '授权投标'
            }]"
          />
        </a-form-item>

        <a-form-item label="授权期限" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-input
            maxlength="11"
            placeholder="请输入授权期限"
            disabled
            v-decorator="['ccc', {
              rules: [{
                required: true, 
                message: '授权期限不能为空'
              }],
              initialValue: '2021年07月31日'
            }]"
          />
        </a-form-item>

        <a-form-item label="授权金额(元)" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-input
            maxlength="11"
            placeholder="请输入授权金额"
            disabled
            v-decorator="['cccc', {
              rules: [{
                required: true, 
                message: '授权金额不能为空'
              }],
              initialValue: '400000.00'
            }]"
          />
        </a-form-item>

        <p class="title">设置交易密码：</p>

        <a-form-item label="创建密码" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-input
            maxlength="11"
            placeholder="请输入创建密码"
            v-decorator="['tradPwd', {
              rules: [{
                required: true, 
                message: '密码不能为空'
              }],
            }]"
          />
        </a-form-item>

        <a-form-item label="确认密码" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-input
            maxlength="11"
            placeholder="请输入确认密码"
            v-decorator="['tradPwdConform', {
              rules: [{
                required: true, 
                message: '确认密码不能为空'
              }],
            }]"
          />
        </a-form-item>

        <div class="btn-wrap">
          <a-button type="primary" block html-type="submit">同意协议确定注册</a-button>
        </div>

        <div class="protocol-wrap">
          <div>
            <a href="http://www.baidu.com" target="_blank">《用户开户协议》</a>
          </div>
          <div>
            <a href="http://www.baidu.com" target="_blank">《免密授权书》</a>
          </div>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
import {
  checkErrorCode,
  encryptAES,
  handleWebStorage,
  tmPhone,
  goBack
} from "@/utils/utils";
import { updateAccountStatus } from "@/utils/common";

export default {
  name: "T-mock-gateway-register",
  data() {
    return {
      form: this.$form.createForm(this),
      labelCol: { span: 4 },
      wrapperCol: { span: 10 },
      reqData: {},
      state: {
        count: 0,
        tips: "获取验证码"
      }
    };
  },
  methods: {
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
    handleSmsCode() {
      this.form.validateFields(
        ["phoneNumber"],
        { force: true },
        (err, values) => {
          if (!!err) {
            return false;
          }
          this.smsCountDown();
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
    },
    mockAccount() {
      let values = this.form.getFieldsValue(['realName', 'idNum', 'bankCardNo', 'tradPwd'])
      updateAccountStatus({
        ...values,
        isOpenAccount: true,
      });
    },
    handleRegisterSuccess() {
      this.mockAccount()
      const { requestNo } = this.reqData
      window.location.href = `${this.reqData.redirectUrl}?type=register&requestNo=${requestNo}`
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!!err) {
          return false;
        }
        this.$store
          .dispatch({
            type: "gateway/register",
            payload: {
              ...values
            }
          })
          .then(response => {
            if (!checkErrorCode(response)) {
              return false;
            }
            this.handleRegisterSuccess();
          });
      });
    }
  },
  mounted() {
    let reqData = JSON.parse(this.$route.query.reqData);
    this.reqData = reqData;
  }
};
</script>

<style lang="less" scoped>
.wrap {
  .title {
    font-size: 18px;
    padding-top: 15px;
    color: #406dbf;
  }
}
.sms-code-wrap {
  position: relative;

  .sms-code-btn {
    position: absolute;
    top: 4px;
    left: 49.5%;
    button {
      color: #406dbf;
    }
  }
}

.btn-wrap {
  width: 416px;
  margin-left: 16.5%;
  margin-top: 40px;
}

.protocol-wrap {
  width: 416px;
  margin-left: 16.5%;
  text-align: center;
  margin-top: 20px;
  & > div {
    margin-bottom: 5px;
  }
}
</style>

