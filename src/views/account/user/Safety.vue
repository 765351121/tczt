<template>
  <div>
    <div class="wrap">
      <p class="title">安全中心</p>
      <div class="content-wrap">
        <div class="item-info-wrap">
          <div class="content-item">
            <span>绑定手机</span>
            <span>141****0010</span>
            <span>已认证</span>
          </div>
          <div class="content-item">
            <span>实名认证</span>
            <span>哈**</span>
            <span>已认证</span>
          </div>
          <div class="content-item">
            <span>绑定银行卡</span>
            <span>**** **** **** 9325</span>
            <span>已绑定</span>
            <span>
              <a-button type="primary">查看</a-button>
            </span>
          </div>
        </div>
        <div class="item-info-wrap">
          <div class="content-item">
            <span>登录密码</span>
            <span>用于登录天辰智投的密码</span>
            <span>已设置</span>
            <span>
              <a-button type="primary">修改</a-button>
            </span>
          </div>
          <div class="content-item">
            <span>交易密码</span>
            <span>交易密码在充值、提现、出借操作中使用</span>
            <span>已设置</span>
            <span>
              <a-button type="primary">修改</a-button>
            </span>
          </div>
        </div>
        <div class="item-info-wrap">
          <div class="content-item">
            <span>风险评测</span>
            <span>了解风险承受能力，合理安排出借</span>
            <span>稳健型</span>
            <span>
              <a-button type="primary">查看</a-button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "T-account-safety"
};
</script>


<style lang="less" scoped>
.title {
  font-size: 18px;
  color: #333;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}
.content-wrap {
  background: #fff;
  min-height: 40vh;
  padding: 30px 40px 100px 40px;
}
.item-info-wrap {
  border-bottom: 1px solid rgb(232, 232, 232);
  margin-bottom: 20px;
}
.content-item {
  padding: 12px 0;
  margin-bottom: 10px;
  & > span {
    display: inline-block;
    flex: 1;
    &:nth-child(1) {
      width: 20%;
      color: #333;
      font-size: 14px;
    }
    &:nth-child(2) {
      width: 40%;
      color: rgb(128, 128, 128);
      font-size: 14px;
      padding-left: 30px;
    }
    &:nth-child(3) {
      width: 20%;
      font-size: 14px;
      color: rgb(51, 51, 51);
      padding-left: 40px;
    }
    &:nth-child(4) {
      width: 20%;
      text-align: center;
    }
  }
}
</style>

