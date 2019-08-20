<template>
  <div>
    <div class="wrap">
      <div class="content-wrap">
        <p class="title">提现流程</p>
        <div class="progress-wrap">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="tips-wrap">
          <div class="tips-apply">
            <span>提现</span>
            <span>到账</span>
          </div>
          <div class="tips-account">
            <span>用户申请</span>
            <span>1-2个工作日</span>
          </div>
        </div>
        <div class="account-info-wrap">
          <p>银行卡号：********9325</p>
          <p>开户银行：中国银行</p>
          <p>可用余额：11,100.00元</p>
        </div>

        <div class="form-wrap">
          <a-form :form="form">
            <div class="form-input-wrap">
              <a-form-item label="提现余额" :label-col="{ span: 2 }" :wrapper-col="{ span: 10 }">
                <a-input :suffix="'元'"/>
              </a-form-item>
            </div>

            <a-form-item
              label=" "
              :colon="false"
              :label-col="{ span: 2 }"
              :wrapper-col="{ span: 10 }"
            >
              <div class="form-amount-wrap">
                <span>实际到账余额0.00元</span>
                <span>手续费0.00元</span>
              </div>
            </a-form-item>

            <a-form-item
              label=" "
              :colon="false"
              :label-col="{ span: 2 }"
              :wrapper-col="{ span: 10 }"
            >
              <a-button type="primary" html-type="submit">确认提现</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
      <div class="tips-content-wrap">
        <p>温馨提示：</p>
        <p>1.当日提现，T+1到账。周六日及节假日申请的提现将统一顺延到工作日处理，请提前安排您的资金</p>
        <p>2.如有任何问题，请联系客服400-400-4000，天辰智投将竭诚为您服务</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-account-withdraw",
  data() {
    return {
      form: this.$form.createForm(this)
    };
  }
};
</script>

<style lang="less" scoped>
.content-wrap {
  background-color: #fff;
  min-height: 30vh;
  padding: 30px;
}
.title {
  font-size: 18px;
  color: #333;
}
.progress-wrap {
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
  & > span {
    display: inline-block;
    &:nth-child(1) {
      width: 12px;
      height: 12px;
      background-color: #0182ff;
      border-radius: 50%;
    }
    &:nth-child(2) {
      width: 242px;
      height: 4px;
      background-color: #0182ff;
    }
    &:nth-child(3) {
      width: 242px;
      height: 4px;
      background-color: #e6e6e6;
    }
    &:nth-child(4) {
      width: 12px;
      height: 12px;
      background-color: #e6e6e6;
      border-radius: 50%;
    }
  }
}
.tips-wrap {
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 20px;
}
.tips-apply {
  margin-top: 10px;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    display: inline-block;
    font-size: 14px;
    color: #333;
    &:nth-child(1) {
      padding-left: 10px;
    }
    &:nth-child(2) {
      padding-right: 60px;
    }
  }
}
.tips-account {
  margin-top: 5px;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    display: inline-block;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.65);
    &:nth-child(1) {
      padding-left: 0;
    }
    &:nth-child(2) {
      padding-right: 35px;
    }
  }
}
.account-info-wrap {
  margin-top: 20px;
  font-size: 14px;
  color: #333;
}
.form-wrap {
  .form-input-wrap {
    /deep/ .ant-form-item {
      margin-bottom: 0;
    }
  }
}
.form-amount-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    display: inline-block;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
  }
}
.tips-content-wrap {
  background: #f0f0f0;
  padding: 20px 30px 20px;
  & > p {
    color: #999;
    font-size: 14px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>



