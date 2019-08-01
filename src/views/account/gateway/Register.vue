<template>
  <div>
    <div class="wrap">
      <p class="title">开户</p>
      <p class="des">天辰智投正式接入新网银行存管系统</p>
      <p class="tips">为保障您的资金安全，需先开通存管账户</p>
      <div class="form-wrap">
        <a-form :form="form">
          <a-form-item label="真实姓名" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <a-input maxlength="11" placeholder="请输入真实姓名"/>
          </a-form-item>

          <a-form-item label="身份证号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <a-input
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 12 }"
              maxlength="11"
              placeholder="请输入身份证号"
            />
          </a-form-item>
          <div class="btn-wrap">
            <a-button 
              type="primary" 
              block 
              :loading="loading" 
              :disabled="disabled"
              html-type="submit"
            >
              下一步
            </a-button>
          </div>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-account-gateway-register",
  data() {
    return {
      form: this.$form.createForm(this),
      loading: false,
      disabled: false,
    };
  }
};
</script>

<style lang="less" scoped>
.wrap {
  background-color: #fff;
  min-height: 60vh;
  margin: 30px 0;
  padding: 78px;
  & > p {
    margin-bottom: 0;
    text-align: center;
  }
  .title {
    font-weight: normal;
    font-size: 20px;
    margin-bottom: 42px;
  }
  .des {
    font-size: 22px;
    color: #333;
    margin-bottom: 24px;
  }
  .tips {
    font-size: 14px;
    color: #999;
  }
}
.form-wrap {
  width: 380px;
  margin: 50px auto 0;
  /deep/ .ant-input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    //font-size: 16px;
    &:focus {
      border-color: #d9d9d9;
      box-shadow: none;
    }
    &:hover {
      border-color: #d9d9d9;
    }
  }
  /deep/ .ant-form-item-label label {
    font-size: 14px;
    color: #666;
    &::after {
      //display: none;
      content: "";
    }
  }
}
.btn-wrap {
  margin-top: 64px;
  margin-bottom: 100px;
}
</style>

