<template>
  <div>
    <div class="warp">
      <p class="title">登录注册</p>
      <div class="content">
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>注册XX智投有哪些条件？</span>
          </p>
          <p
            class="answer"
          >出借用户需年满18周岁，持有“中华人民共和国居民二代身份证”（不包括中国香港、澳门及台湾地区以及护照等），符合中华人民共和国法律规定的具有完全民事权利和民事行为能力，能够独立承担民事责任的自然人。</p>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>怎样获取XX智投的用户名?</span>
          </p>
          <p class="answer">目前仅支持手机号注册，用户完成注册之后，登录时的用户名为注册手机号。</p>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>手机收不到验证码怎么办?</span>
          </p>
          <span class="answer answer-item">请您核对以下几点，这些可能是导致您收不到验证码的原因：</span>
          <span class="answer answer-item">①请查看手机号码填写是否有误；</span>
          <span class="answer answer-item">②请查看动态验证码是否被手机软件拦截；</span>
          <span class="answer answer-item">③请确认手机信号是否良好，接收短信是否正常；</span>
          <span class="answer answer-item">④短信收发过程中可能会有延时，请耐心等候，建议不要频繁操作；</span>
          <span class="answer answer-item">收到的验证码时效性3分钟，建议尽快使用，过时重新获取。更多问题请拨打XX智投客服电话400-400-4000。</span>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>登录失败的原因?</span>
          </p>
          <span class="answer answer-item">请您核对以下几点，这些可能是导致您登录失败的原因：</span>
          <span class="answer answer-item">①请您确认输入的用户名是否正确；</span>
          <span class="answer answer-item">②请您确认输入的密码是否正确；</span>
          <span class="answer answer-item">③网络问题也会造成登录失败，如果提示网页有错误，建议您稍后尝试。</span>
          <span class="answer answer-item">更多问题请拨打XX智投客服电话400-400-4000。</span>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>在平台注册后，可以不开立银行存管户就进行出借吗？</span>
          </p>
          <p class="answer">不可以。存管子账户用于分账管理用户的交易与资金信息，如不开立，无法进行后续的操作。</p>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>忘记注册手机号怎么办？</span>
          </p>
          <p
            class="answer"
          >您可以联系客服人员，提供身份证号为您进行查询。如未查询到，则表示该身份证号码未在平台上实名。请您用目前的手机号码进行注册，如提示已注册，请直接登录或点击忘记密码找回密码后登录。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-support-login-regist"
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
  .answer-item {
    display: block;
    padding-top: 5px;
  }
}
</style>

