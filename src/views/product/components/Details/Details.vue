<template>
  <div>
    <div class="wrap">
      <div v-for="(i, ii) in details" :key="ii" v-html="i.title + i.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-details",
  props: {
    details: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {

    }
  },
};
</script>

<style lang="less" scoped>
.wrap {
  & > div {
    height: 63px;
    line-height: 63px;
    padding: 0 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /deep/ h3 {
      text-align: right;
      font-family: "Microsoft YaHei";
      color: #999;
      font-size: 14px;
      margin-bottom: 0;
    }
    /deep/ p {
      font-family: "Microsoft YaHei";
      color: #333;
      font-size: 14px;
      margin-bottom: 0;
      padding-left: 25px;
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


