<template>
  <div>
    <div class="wrap">
      <div>
        <h3>企业名称</h3>
        <p>{{ userInfo.merchantName }}</p>
      </div>
      <div>
        <h3>注册地址</h3>
        <p>{{ userInfo.location }}</p>
      </div>
      <div>
        <h3>成立时间</h3>
        <p>{{ userInfo.foundingTime }}</p>
      </div>
      <div>
        <h3>法定代表人</h3>
        <p>{{ userInfo.legalAscription }}</p>
      </div>
      <div>
        <h3>所属行业</h3>
        <p>{{ userInfo.industry }}</p>
      </div>
      <div>
        <h3>收入及负债情况</h3>
        <p>{{ userInfo.incomeAndLiabilities }}</p>
      </div>
      <div>
        <h3>平台历史还款次数</h3>
        <p>{{ userInfo.repayHistoryTimes }}</p>
      </div>
      <div>
        <h3>平台历史逾期次数</h3>
        <p>{{ userInfo.overdueHistoryTimes }}</p>
      </div>
      <div>
        <h3>平台历史逾期金额</h3>
        <p>{{ userInfo.overdueHistoryAmount }}</p>
      </div>
      <div>
        <h3>截止借款前6个月内借款人征信报告中的逾期情况</h3>
        <p>{{ userInfo.overdueSixMonths }}</p>
      </div>
      <div>
        <h3>其他平台借款情况</h3>
        <p>{{ userInfo.loansFromOtherPlatforms }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'T-BorrowInfo',
  props: {
    userInfo: {
      type: Object,
      required: true,
      default: () => {},
    }
  }
}
</script>

<style lang="less" scoped>
.wrap {
  & > div {
    height: 63px;
    //line-height: 63px;
    padding: 0 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h3 {
      text-align: right;
      font-family: "Microsoft YaHei";
      color: #999;
      font-size: 14px;
      margin-bottom: 0;
      width: 125px;
      //word-wrap: break-word;
    }
    p {
      font-family: "Microsoft YaHei";
      color: #333;
      font-size: 14px;
      margin-bottom: 0;
      padding-left: 35px;
      flex: 1;
      br {
        display: none;
      }
    }
    &:nth-child(odd) {
      background: #fff;
    }
    &:nth-child(even) {
      background-color: #fafafa;
      //border: 1px solid #ededed;
    }
  }
}


</style>


