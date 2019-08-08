<template>
  <div>
    <div class="wrap">
      <p class="title">意见反馈</p>
      <div class="form-wrap">
        <a-textarea maxlength="500" placeholder="请输入不少于10个字的描述…………" :rows="10"/>
      </div>
    </div>
    <div class="btn-wrap">
      <a-button type="primary">提交</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-account-feedback"
};
</script>

<style lang="less" scoped>
.title {
  font-size: 18px;
  color: #333;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}
.btn-wrap {
  margin-top: 30px;
}
</style>
