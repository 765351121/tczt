<template>
  <div>
    <div class="wrap">
      <div>
        <span>出借人</span>
        <span>出借金额(元)</span>
        <span>出借时间</span>
      </div>
      <div v-for="(i, ii) in investOrder.rows" :key="ii">
        <span>{{ i.phone }}</span>
        <span>{{ $utils.formatCurrency(i.orderAmount) }}</span>
        <span>{{ i.orderTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-InvestOder",
  props: {
    investOrder: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  & > div {
    height: 63px;
    padding: 0 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:nth-child(even) {
      background: #fff;
    }
    &:nth-child(odd) {
      background-color: #fafafa;
      border: 1px solid #ededed;
      border-left: none;
      border-right: none;
    }

    & > span {
      display: inline-block;
      flex: 1;
      text-align: center;
      color: #333;
      font-size: 14px;
    }
  }
}
</style>


