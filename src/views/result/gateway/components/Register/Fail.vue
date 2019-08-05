<template>
  <div>
    <div class="wrap">
      <div class="img-wrap">
        <img src="@/assets/images/result/fail.png" alt>
      </div>
      <p class="status-des">银行开户失败！</p>
      <div class="reason-wrap">
        <div class="code">
          错误码：
          <span></span>
        </div>
        <div class="tips">
          错误原因：
          <span></span>
        </div>
      </div>
      <div class="btn-wrap">
        <a-button type="primary" size="large">返回重试</a-button>
        <!-- <a-button type="primary" size="large">立即出借</a-button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-result-register-success"
};
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
.reason-wrap {
  & > div {
    width: 340px;
    margin: 0 auto;
    font-size: 14px;
    color: #999;
  }
}
</style>

