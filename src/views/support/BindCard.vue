<template>
  <div>
    <div class="warp">
      <p class="title">开户绑卡</p>
      <div class="content">
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>为什么要进行开户？</span>
          </p>
          <p
            class="answer"
          >为保障用户的切身利益，XX智投严格按照网贷新规则的要求，成功完成银行存管的对接工作。为了保障用户资金的安全性与合同的有效性，银行方面要求出借用户必须进行开户，所有出借人及借款人必须通过身份证绑定、手机绑定以及交易密码的设置。开户的过程简单便捷，XX智投及存管银行对所有个人资料均作严格保密，建议您开户/激活使用的。</p>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>开户成功后，是否可以更改信息？</span>
          </p>
          <p class="answer">抱歉，平台暂不支持更改。</p>
        </div>

        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>开户失败的原因?</span>
          </p>
          <span
            class="answer answer-item"
          >开户过程中，由于银行存管与公安系统联网，将需要您提供实名身份信息，如实名身份信息不一致会导致无法通过。可能的原因有：</span>
          <span class="answer answer-item">①曾经改过名字或名字中带有繁体字；</span>
          <span class="answer answer-item">②做过户籍变动；</span>
          <span class="answer answer-item">③军人转业、复员换的身份证；</span>
          <span class="answer answer-item">④18周岁以下用户；</span>
          <span class="answer answer-item">⑤银行卡非支持银行、输入卡号错误、被其他账户绑定；</span>
          <span class="answer answer-item">⑥银行卡非您账户同名同证件的卡片；</span>
          <span class="answer answer-item">⑦姓名、身份证、银行卡卡号、预留手机号任一不匹配。</span>
          <span class="answer answer-item">如非以上原因，可联系人工客服，我们将为您核实。XX智投客服电话400-400-4000。</span>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>如何开立银行存管账户？</span>
          </p>
          <p
            class="answer"
          >用户注册账户成功后，前往银行页面开通存管账户，存管账户开通需用户提供真实姓名、身份证号，以及本人持有的银行储蓄卡，并设置XX银行存管账户交易密码。开通成功后会自动跳转回XX智投页面。</p>
        </div>

        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>银行卡绑定规则?</span>
          </p>
          <p class="answer">银行卡必须是XX智投网站通过了身份实名认证的用户本人名下的借记卡，借记卡需为活期账户；绑定的银行卡可用于支付与提现。</p>
        </div>

        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>最多可以绑定多少张卡呢?</span>
          </p>
          <p class="answer">为了保障您的账户安全，在XX智投平台，目前您只能绑定一张银行卡。</p>
        </div>

        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>是否可以绑定信用卡？</span>
          </p>
          <p class="answer">不支持，只能使用银行借记卡。</p>
        </div>

        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>如何完成绑卡操作？</span>
          </p>
          <p class="answer">
            用户在开立存管账户的同时需要完成绑卡，可在XX银行支持的银行卡范围内进行充值绑卡，绑卡后该卡可用于充值和提现。提现时无需再次绑定该银行卡。
            绑卡流程：
            绑卡时，需校验该银行卡的信息，用户需填写真实姓名、身份证号、银行卡号、银行预留手机号、交易密码。填写完成后，等待XX银行反馈绑卡处理结果。
          </p>
        </div>

        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>注册绑定的手机号码与银行预留手机号码不一样有关系吗？会影响提现吗？</span>
          </p>
          <p class="answer">请您放心，不会影响的。银行预留手机号码只要能正常接收验证码，您提现时输入正确的验证码，交易密码即可提交申请的。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-support-bind-card"
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

