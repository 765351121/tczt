<template>
  <div>
    <div class="warp">
      <p class="title">提现</p>
      <div class="content">
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>提现到账时间?</span>
          </p>
          <p class="answer">①当日提现，T+1到账。周六日及节假日申请的提现将统一顺延到工作日处理，请提前安排您的资金；</p>
          <p class="answer">②如有任何问题请联系客服400-400-4000</p>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>我申请提现未到账，可以撤销吗？</span>
          </p>
          <p class="answer">由于提现申请是交给银行处理的，您成功提交提现申请后，暂不支持撤销提现申请的。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-support-withdraw"
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

