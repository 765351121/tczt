<template>
  <div>
    <div class="warp">
      <p class="title">银行存管</p>
      <div class="content">
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>什么是资金存管？</span>
          </p>
          <p
            class="answer"
          >根据《网络借贷信息中介机构业务活动管理暂行办法》第二十八条“网络借贷信息中介机构应当实行自身资金与出借人和借款人资金的隔离管理，并选择符合条件的银行业金融机构作为出借人与借款人的资金存管机构。”和第三十五条“资金存管机构对出借人与借款人开立和使用资金账户进行管理和监督，并根据合同约定，对出借人与借款人的资金进行存管、划付、核算和监督。”“资金存管”即网络借贷信息中介平台在银行业金融机构单独设立独立账户，将客户资金存入该等独立账户，并由银行业金融机构根据出借人、借款人发出的指令和合同约定，对该等资金的使用、划付进行管理和监督。</p>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>实现资金存管对用户有哪些好处及平台的变化是什么？</span>
          </p>
          <p
            class="answer"
          >首先，资金存管实现了网络借贷信息中介平台自有资金和用户资金的分离，避免网络借贷信息中介平台自有资金与用户资金发生混同，当网络借贷信息中介平台自身发生负债、破产时，用户资金不会受到网络借贷信息中介平台债权人的追索。其次，资金存管是由银行业金融机构根据出借人、借款人的指令和合同约定对用户资金的使用、划付进行管理、监督，且由银行对客户资金交易进行记录，能够尽可能地避免网络借贷信息中介平台非法动用出借人、借款人的资金，保障出借人、借款人的资金安全。</p>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>XX银行如何保障XX智投用户的资金与交易安全？</span>
          </p>
          <p
            class="answer"
          >您的信息和资金由XX银行存管，平台不直接经手您的资金，也无权动用您在银行存管系统的资金。你通过银行存管账户出借成功后，资金将直接进入借款人账户。XX银行会对全交易流程进行核查，使借贷双方的债权关系清晰明确，保障您的资金安全。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-support-deposite"
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

