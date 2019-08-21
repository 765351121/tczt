<template>
  <div>
    <div class="wrap">
      <div class="img-wrap">
        <img src="@/assets/images/result/success.png" alt>
      </div>
      <p class="status-des">提现成功 ！</p>
      <div class="btn-wrap">
        <a-button type="primary" size="large" @click="showWithdraw">查看提现记录</a-button>
        <!-- <a-button type="primary" size="large" @click="toInvest">立即出借</a-button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-result-recharge-success",
  data() {
    return {};
  },
  methods: {
    toInvest() {
      this.$router.push({
        name: "/product/list"
      });
    },
    showWithdraw() {
      this.$router.push({
        name: "/account/funds-detail"
      });
    }
  }
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
</style>

