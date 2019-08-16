<template>
  <div>
    <div class="warp">
      <p class="title">账户密码</p>
      <div class="content">
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>登录密码如何设置?</span>
          </p>
          <p class="answer">密码建议至少6位字符，不超过16位字符。数字、字母（区分大小写）、下划线至少有两种元素组成。</p>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>交易密码如何设置?</span>
          </p>
          <p
            class="answer"
          >在您开通XX银行存管账户时，您需要设置XX银行存管账户交易密码，此密码将做为用户充值、提现、出借P2P类资产时的交易密码。需要6-18位数字、字母、特殊字符的一种或者组合，不支持空格。若您需要修改或找回XX银行存管账户交易密码，需要进入XX银行存管账户管理页面进行操作。</p>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>登录密码与交易密码有什么区别?</span>
          </p>
          <p class="answer">登录密码是用户登录账户时使用的密码；交易密码是用户进行支付、提现等涉及资金操作时使用的密码。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-support-account-password"
};
</script>

<style lang="less" scoped>
.warp {
  .title {
    font-family: MicrosoftYaHei;
    font-size: 18px;
    color: #333;
    line-height: 21px;
    margin-bottom: 30px;
  }
}
.question-wrap {
  &:not(:first-child) {
    margin-top: 30px;
  }
  .question {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > span {
      display: inline-block;
      padding-left: 10px;
      font-family: MicrosoftYaHei;
      font-size: 14px;
      color: #333;
    }
  }
  .answer {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #666;
    padding-left: 23px;
  }
}
</style>

