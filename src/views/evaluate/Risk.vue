<template>
  <div>
    <div class="wrap">
      <div class="content">
        <p>模拟风险测评</p>
        <p>退出型: 11分以下</p>
        <p>保守型: 11分至23分</p>
        <p>稳健型: 23分至48分</p>
        <p>积极型: 48分以上</p>
        <div class="btn-wrap">
          <a-button type="primary">退出型</a-button>
          <a-button type="primary">保守型</a-button>
          <a-button type="primary">稳健型</a-button>
          <a-button type="primary">积极型</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-evaluate-risk"
};
</script>

<style lang="less" scoped>
.wrap {
  background-color: #fff;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  & > p {
    font-size: 14px;
    color: #666;
    text-align: center;
    &:first-child {
      font-size: 20px;
      color: #333;
      text-align: center;
      margin-bottom: 40px;
    }
  }
}
.btn-wrap {
  margin-top: 40px;
  & > button {
    width: 150px;
    margin: 0 20px;
  }
}
</style>

