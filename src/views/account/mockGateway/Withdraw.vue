<template>
  <div>
    <div class="wrap">
      <div class="info-wrap">
        <div class="row-wrap">
          <span>金额: 100元</span>
          <span>可用余额： 10500.00元</span>
        </div>
        <div class="row-wrap">
          <span>订单编号：RC1908201410280861991633925</span>
          <span>客户名称：哈哈</span>
        </div>
        <div class="row-wrap">
          <span>到账金额：100元</span>
        </div>
      </div>

      <div class="form-wrap">
        <a-form :form="form">
          <a-form-item label="银行卡" :label-col="labelCol" :wrapper-col="wrapperCol">
            <div class="bank-card-wrap">
              <img src="@/assets/images/account/gateway/BKCH.jpg" alt>
              <span>尾号 9325</span>
            </div>
          </a-form-item>

          <a-form-item label="预留手机号" :label-col="labelCol" :wrapper-col="wrapperCol">
            <div class="phone-wrap">141****0010</div>
          </a-form-item>
          <a-form-item label="验证码" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-input
              maxlength="6"
              placeholder="请输入短信验证码"
              v-decorator="['smscode', {
              rules: [{
                required: true, 
                message: '短信验证码不能为空'
              }],
            }]"
            />
          </a-form-item>
          <a-form-item label="交易密码" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-input
              maxlength="20"
              placeholder="请输入交易密码"
              v-decorator="['phoneNumber', {
              rules: [{
                required: true, 
                message: '交易密码不能为空'
              }],
            }]"
            />
          </a-form-item>
          <div class="btn-wrap">
            <a-button type="primary" ghost>确 定</a-button>
          </div>
        </a-form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "T-mock-gateway-withdraw",
  data() {
    return {
      form: this.$form.createForm(this),
      labelCol: { span: 4 },
      wrapperCol: { span: 10 }
    };
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
      display: flex;
      justify-content: flex-start;
      & > span {
        display: inline-block;
        flex: 1;
        &:nth-child(2) {
          font-size: 14px;
        }
      }
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
</style>
