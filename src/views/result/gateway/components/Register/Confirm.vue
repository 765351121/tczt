<template>
  <div>
    <div class="wrap">
      <div class="img-wrap">
        <img src="@/assets/images/result/confirm.png" alt>
      </div>
      <p class="status-des">银行开户中,请耐心等待</p>
      <div class="btn-wrap">
        <a-button type="primary" size="large">返回首页</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'T-result-register-confirm',

}
</script>

<style lang="less" scoped>
.img-wrap {
  text-align: center;
  padding-top: 150px;
}
.status-des {
  color: #333;
  font-size: 26px;
  text-align: center;
  margin: 40px;
}

.btn-wrap {
  text-align: center;
  margin-top: 100px;
  & > button {
    display: inline-block;
    width: 180px;
    margin: 0 20px;
  }
}
</style>

