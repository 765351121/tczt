<template>
  <div>
    <div class="warp">
      <p class="title">平台费用说明</p>
      <div class="content">
        <div class="row">
          <span>业务类型</span>
          <span>收费标准</span>
        </div>
        <div class="row">
          <span>开户注册</span>
          <span>免费</span>
        </div>
        <div class="row">
          <span>开通存管账户</span>
          <span>免费</span>
        </div>
        <div class="row">
          <span>回款到账</span>
          <span>免费</span>
        </div>
        <div class="row">
          <span>充值</span>
          <span>免费</span>
        </div>
        <div class="row">
          <span>提现</span>
          <span>免费</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-support-platform-cost"
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
.row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > span {
    flex: 1;
    display: inline-block;
    text-align: center;
    height: 50px;
    line-height: 50px;
    &:first-child {
      border-right: 1px solid #ebeced;
    }
  }
  &:nth-child(odd) {
    background-color: #fafafa;
  }
}
</style>
