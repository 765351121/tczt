<template>
  <div>
    <div class="wrap">
      <div class="bank-card-wrap">
        <p class="title">银行卡</p>
        <div class="bank-card-bg">
          <div class="bank-logo">
            <img src="@/assets/images/account/user/bankcard/zhongguo.png" alt>
          </div>
          <div class="bank-num">
            <span>****</span>
            <span>****</span>
            <span>****</span>
            <span>1234</span>
          </div>
          <div class="btn-wrap">
            <span>更换银行卡</span>
            <span>|</span>
            <span>更换预留手机号</span>
          </div>
        </div>
      </div>
      <div class="tips-wrap">
        <p>温馨提示：</p>
        <p>1.为了您的资金账户安全，每个用户只能绑定一张银行卡用于充值、提现</p>
        <p>2.如有疑问请拨打客服电话400-085-6566</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "T-account-bank-card"
};
</script>

<style lang="less" scoped>
.bank-card-wrap {
  background-color: #fff;
  min-height: 250px;
  padding: 30px 30px 20px 30px;
}
.title {
  font-size: 18px;
  color: #333;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}

.bank-card-bg {
  position: relative;
  width: 379px;
  height: 202px;
  background: url("../../../assets/images/account/user/bankcard/bg.png")
    no-repeat;
  background-position: center;
  background-size: convert;
  padding: 30px;
}

.bank-num {
  margin: 30px 0 0 0;
  & > span {
    color: #333;
    font-size: 26px;
    margin-right: 10px;
  }
}
.btn-wrap {
  position: absolute;
  bottom: 20px;
  & > span {
    display: inline-block;
    line-height: 13px;
    font-size: 13px;
    color: #333;
    margin-right: 10px;
    cursor: pointer;
  }
}
.tips-wrap {
  padding: 20px 30px;
  background: #f2f2f2;
  & > p {
    color: #8d8d8d;
    font-size: 14px;
  }
}
</style>

