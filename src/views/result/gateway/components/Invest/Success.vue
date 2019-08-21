<template>
  <div>
    <div class="wrap">
      <div class="img-wrap">
        <img src="@/assets/images/result/success.png" alt>
      </div>
      <p class="status-des">出借成功！</p>
      <div class="btn-wrap">
        <a-button type="primary" size="large" @click="showLendList">查看出借记录</a-button>
        <a-button type="primary" size="large" @click="showMore">浏览更多产品</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-result-invest-success",
  data() {
    return {};
  },
  methods: {
    showMore() {
      this.$router.push({
        name: "/product/list"
      });
    },
    showLendList() {
      this.$router.push({
        name: "/account/lend-record"
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

