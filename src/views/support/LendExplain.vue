<template>
  <div>
    <div class="warp">
      <p class="title">出借说明</p>
      <div class="content">
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>如何进行出借</span>
          </p>
          <p class="answer">选择适合您的项目，并认真阅读其详细信息（包括项目期限，出借金额、年化利率等）以及协议范本，了解其中相关事宜。</p>
        </div>

        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>出借成功后是否可以取消？</span>
          </p>
          <p class="answer">成功出借的项目不能撤回。</p>
        </div>

        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>平台权限管理和隐私安全如何？</span>
          </p>
          <p
            class="answer"
          >我们严格遵守国家相关的法律法规，对用户的隐私信息进行保护。未经您的同意， 不会向任何第三方公司、组织和个人披露您的个人信息、账户信息以及交易信息（法律法规另有规定的除外）。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-support-lend-explain"
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

