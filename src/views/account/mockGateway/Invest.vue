<template>
  <div>
    <div class="wrap">
      <div class="content-wrap">
        <div class="info-item-wrap">
          <p class="amount">金额: {{ $utils.formatCurrency(reqData.amount) }}元</p>
          <p class="ava-amount">可用余额： {{ $utils.formatCurrency(reqData.canWithdrawAmount) }}元</p>
        </div>
        <div class="info-item-wrap">
          <p>订单编号：UPT{{ reqData.projectNo }}</p>
          <p>客户姓名： {{ reqData.realName }}</p>
        </div>
        <div class="info-item-wrap">
          <p>标的名称：ENTERPRISE{{ reqData.timestamp }}</p>
        </div>
      </div>
      <div class="form-wrap">
        <a-form :form="form">
          <a-form-item label="交易密码" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-input
              maxlength="20"
              placeholder="请输入交易密码"
              v-decorator="['password', {
              rules: [{
                required: true, 
                message: '交易密码不能为空'
              },{
                validator: validateTradPwd,
              }],
              validateTrigger: 'onSubmit'
            }]"
            />
          </a-form-item>
        </a-form>
        <div class="btn-wrap">
            <a-button type="primary" @click="handleSubmit">确 定</a-button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  handleWebStorage,
  Fsub,
} from '@/utils/utils'
import { updateAccountStatus } from "@/utils/common";

const ws = handleWebStorage()

export default {
  name: "T-mock-gateway-invest",
  data() {
    return {
      form: this.$form.createForm(this),
      labelCol: { span: 4 },
      wrapperCol: { span: 10 },
      reqData: {},
    };
  },
  methods: {
    validateTradPwd(rule, value, callback) {
      const { tradPwd }  = ws.getItem('account')
      if (!!value && value !== tradPwd) {
        return callback('您输入的密码错误，连续错误5次将被锁定，请确认后重新输入。')
      }
      return callback()
    },
    mockAccount() {
      let { amount, canWithdrawAmount }  = this.reqData
      canWithdrawAmount = Fsub(Number(canWithdrawAmount), Number(amount))
      updateAccountStatus({ canWithdrawAmount })
    },
    handleInvestSuccess() {
      console.log('123132')
      this.mockAccount()
      const { requestNo } = this.reqData
      window.location.href = `${this.reqData.redirectUrl}?type=tender&requestNo=${requestNo}`
    },
    handleSubmit(e) {
      e = window.event;
      e.preventDefault();
      this.form.validateFields({ force: true }, (err, values) => {
        if (!!err) {
          return false;
        }
        console.log("succ");
        this.handleInvestSuccess()
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
.content-wrap {
  line-height: 28px;
  border: 1px solid #406dbf;
  width: 978px;
  padding: 20px 40px 20px 40px;
  font-size: 14px;
  color: #666;
  overflow: hidden;
}

.info-item-wrap {
  display: flex;
  justify-content: flex-start;
  & > p {
    flex: 1;
    margin-bottom: 10px;
  }
  .amount {
    font-size: 18px;
    color: #406dbf;
  }
  .ava-amount {
    color: #406dbf;
  }
}

.form-wrap {
  margin-top: 40px;
}
.btn-wrap {
  margin-top: 40px;
  button {
    width: 41.5%;
    margin-left: 16.5%;
  }
}
</style>

