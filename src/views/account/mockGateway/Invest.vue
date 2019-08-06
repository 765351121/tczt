<template>
  <div>
    <div class="wrap">
      <div class="content-wrap">
        <div class="info-item-wrap">
          <p class="amount">金额: 100.00元</p>
          <p class="ava-amount">可用余额： 10700.00元</p>
        </div>
        <div class="info-item-wrap">
          <p>订单编号：UPT1908061535205371227444871</p>
          <p>客户姓名： 哈哈</p>
        </div>
        <div class="info-item-wrap">
          <p>标的名称：ENTERPRISE201907241108543</p>
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
              }],
              //initialValue: reqData.realName
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
export default {
  name: "T-mock-gateway-invest",
  data() {
    return {
      form: this.$form.createForm(this),
      labelCol: { span: 4 },
      wrapperCol: { span: 10 }
    };
  },
  methods: {
    handleSubmit() {
      console.log('1111')
    }
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

