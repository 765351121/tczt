<template>
  <div>
    <div class="wrap">
      <a-modal
        title
        width="350px"
        :closable="false"
        :visible="visible"
        :centered="true"
        :footer="null"
      >
        <div class="content-wrap">
          <p class="title">为了保护您的权益，您的资金即将由存管银行监管，请先开通存管账户</p>
          <div class="btn-wrap">
            <a-button type="default" size="large" @click="handleCancel">暂不开通</a-button>
            <a-button type="primary" size="large" @click="handleOk">立即开户</a-button>
          </div>
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-M-open-account",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    handleOk() {
      this.visible = false;
      this.$router.push({
        name: "/account/gateway/register"
      });
    },
    handleCancel() {
      this.visible = false;
    }
  }
};
</script>

<style lang="less" scoped>
.content-wrap {
  padding: 10px 10px;
  .title {
    font-size: 16px;
    color: #333;
    font-family: "Microsoft YaHei";
    text-align: center;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
  }
  .btn-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

