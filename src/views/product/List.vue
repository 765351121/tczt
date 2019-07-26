<template>
  <div>
    <div class="wrap">
      <ScatTitle/>
      <div class="item-list">项目列表</div>
      <div class="filter-wrap">
        <div class="filter loan-time-wrap">
          <div class="title">出借期限</div>
          <div class="action-wrap">
            <BrushSlot :radios="loanTimeRadios" />
          </div>
        </div>
        <div class="filter product-status-wrap">
          <div class="title">项目状态</div>
          <div class="action-wrap">
            <BrushSlot :radios="productStatusRadios" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScatTitle from "./components/List/ScatTitle";
import BrushSlot from "./components/List/BrushSlot";

export default {
  name: "T-product-list",
  components: {
    ScatTitle,
    BrushSlot
  },
  data() {
    return {
      loanTimeRadios: [
        { name: '全部', value: 0 },
        { name: '3个月以下', value: 1 },
        { name: '3-6个月', value: 2 },
        { name: '6个月以上', value: 3 },
      ],
      productStatusRadios: [
        { name: '全部', value: 0 },
        { name: '发售中', value: 10 },
        { name: '已满标', value: 20 },
        { name: '还款中', value: 30 },
        { name: '已结清', value: 40 },
      ]
    };
  }
};
</script>

<style lang="less" scoped>

.item-list {
  color: #333;
  font-size: 20px;
  font-family: "Microsoft YaHei";
  margin: 20px 0;
}

.filter-wrap {
  .filter {
    display: flex;
    justify-content: flex-start;
    height: 55px;
    line-height: 55px;
    .title {
      background-color: #f0f0f0;
      width: 200px;
      text-align: center;
      font-size: 14px;
      font-family: "Microsoft YaHei";
      color: #333;
    }
    .action-wrap {
      flex: 1;
      background-color: #fff;
      /deep/ .radio-button-wrap {
        height: 55px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 30px;
      }
      /deep/ .radio-span {
        width: 150px;
        font-size: 14px;
        color: #ff0;
      }
    }
  }
}

.product-status-wrap {
  border-top: 1px solid #e5e5e5;
}


</style>


