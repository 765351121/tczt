<template>
  <div>
    <div class="wrap">
      <ScatTitle/>
      <div class="item-list">项目列表</div>
      <div class="filter-wrap">
        <div class="filter loan-time-wrap">
          <div class="title">出借期限</div>
          <div class="action-wrap">111</div>
        </div>

        <div class="filter product-status-wrap">
          <div class="title">项目状态</div>
          <div class="action-wrap">222</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScatTitle from "./components/List/ScatTitle";

export default {
  name: "T-product-list",
  components: {
    ScatTitle
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.wrap {
  //  border: 1px solid #0ff;
}
.item-list {
  color: #333;
  font-size: 20px;
  font-family: "Microsoft YaHei";
  margin: 20px 0;
}

.filter-wrap {
  border: 1px solid #f0f;
  .filter {
    display: flex;
    justify-content: flex-start;
    height: 55px;
    line-height: 55px;
    .title {
      background-color: #f4f5f6;
      width: 200px;
      text-align: center;
      font-size: 14px;
      font-family: "Microsoft YaHei";
      color: #333;
    }
    .action-wrap {
      border: 1px solid #0ff;
      flex: 1;
      background-color: #fff;
    }
  }
}

.loan-time-wrap {
}
</style>


