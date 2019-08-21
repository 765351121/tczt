<template>
  <div>
    <div class="wrap">
      <div class="info-wrap">
        <div class="row-wrap">
          <span>金额: {{ $utils.formatCurrency(reqData.amount) }}元</span>
        </div>
        <div class="row-wrap">
          <span>订单编号：RC1908211045450531587452966</span>
          <span>客户名称：{{ userInfo.realName }}</span>
        </div>
        <div class="row-wrap">
          <span>到账金额：{{ $utils.formatCurrency(reqData.amount) }}元</span>
        </div>
      </div>
      <div class="form-wrap">
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item label="银行卡" :label-col="labelCol" :wrapper-col="wrapperCol">
            <div class="bank-card-wrap">
              <img src="@/assets/images/account/gateway/BKCH.jpg" alt>
              <span>尾号 {{ formatCarNum }}</span>
            </div>
          </a-form-item>
          <a-form-item label="预留手机号" :label-col="labelCol" :wrapper-col="wrapperCol">
            <div class="phone-wrap">{{ userInfo.userAcc }}</div>
          </a-form-item>
          <a-form-item label="验证码" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-input
              size="large"
              maxlength="6"
              placeholder="请输入短信验证码（000000）"
              v-decorator="['smscode', {
              rules: [{
                required: true, 
                message: '短信验证码不能为空'
              }, {
                validator: validateSmscode,
              }],
              validateTrigger: 'onSubmit'
            }]"
            />
          </a-form-item>
          <a-form-item label="交易密码" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-input
              size="large"
              maxlength="20"
              placeholder="请输入交易密码"
              type="password"
              v-decorator="['tradePwd', {
              rules: [{
                required: true, 
                message: '交易密码不能为空'
              }, {
                validator: validateTradePwd,
              }],
              validateTrigger: 'onSubmit'
            }]"
            />
          </a-form-item>
          <div class="btn-wrap">
            <a-button type="primary" ghost size="large" html-type="submit">同意协议并支付</a-button>
          </div>
        </a-form>
        <div class="protocol">
          <a href="http://www.baidu.com" target="_blank">《快捷充值协议》</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { handleWebStorage, Fadd } from "@/utils/utils";
import { updateAccountStatus } from "@/utils/common";

const ws = handleWebStorage();

export default {
  name: "T-mock-gateway-recharge",
  data() {
    return {
      form: this.$form.createForm(this),
      labelCol: { span: 4 },
      wrapperCol: { span: 10 },
      userInfo: ws.getItem("account"),
      reqData: {}
    };
  },
  methods: {
    mockAccount() {
      let { canWithdrawAmount } = this.userInfo;
      let { amount } = this.reqData;
      canWithdrawAmount = Fadd(Number(canWithdrawAmount), Number(amount));
      console.log(canWithdrawAmount);
      updateAccountStatus({ canWithdrawAmount });
    },
    handleRechargeSuccess() {
      this.mockAccount();
      const { requestNo } = this.reqData;
      window.location.href = `${
        this.reqData.redirectUrl
      }?type=recharge&requestNo=${requestNo}`;
    },
    validateTradePwd(rule, value, callback) {
      const { tradPwd } = ws.getItem("account");
      if (!!value && value !== tradPwd) {
        return callback(
          "您输入的密码错误，连续错误5次将被锁定，请确认后重新输入。"
        );
      }
      return callback();
    },
    validateSmscode(rule, value, callback) {
      if (!!value && value !== "000000") {
        return callback("验证码不正确（000000）");
      }
      return callback();
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!!err) {
          return false;
        }
        this.handleRechargeSuccess();
      });
    },
    smsCodeModal() {
      this.$info({
        title: "提示",
        content: `验证码已发送到${this.userInfo.userAcc}手机，请您查收。`,
        centered: true,
        okText: "我知道了",
        onOk() {}
      });
    }
  },
  computed: {
    formatCarNum() {
      let { bankCardNo } = this.userInfo;
      bankCardNo = bankCardNo || "";
      return bankCardNo.substring(bankCardNo.length - 4);
    }
  },
  mounted() {
    let reqData = JSON.parse(this.$route.query.reqData);
    this.reqData = reqData;
    this.smsCodeModal();
  }
};
</script>

<style lang="less" scoped>
.info-wrap {
  border: 1px solid #406dbf;
  padding: 10px 0 10px 20px;
  .row-wrap {
    padding: 3px 60px 3px;
    font-size: 14px;
    color: #666;
    &:nth-child(1) {
      font-size: 18px;
      color: #406dbf;
    }
    &:nth-child(2) {
      display: flex;
      justify-content: flex-start;
      & > span {
        display: inline-block;
        flex: 1;
      }
    }
  }
}
.form-wrap {
  margin-top: 40px;
  .bank-card-wrap {
    font-size: 16px;
    color: #666;
    border: 1px solid rgb(204, 204, 204);
  }
}
.phone-wrap {
  font-size: 16px;
  color: #333;
}
.btn-wrap {
  margin-top: 40px;
  button {
    width: 41.5%;
    margin-left: 16.5%;
  }
}
.protocol {
  width: 41.5%;
  margin-left: 16.5%;
  text-align: center;
  color: #406dbf;
  margin-top: 10px;
  cursor: pointer;
}
</style>
