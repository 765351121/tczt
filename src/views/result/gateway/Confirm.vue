<template>
  <div>
    <div class="wrap">
      <RegisterConfirm v-if="this.type === 'register'"/>
      <WithdrawConfirm v-if="this.type === 'withdraw'"/>
    </div>
  </div>
</template>

<script>
import { Confirm as RegisterConfirm } from "./components/Register";
import { Confirm as WithdrawConfirm } from "./components/Withdraw";

export default {
  name: "T-result-confirm",
  components: {
    RegisterConfirm,
    WithdrawConfirm
  },
  data() {
    return {
      type: "",
      body: {}
    };
  },
  mounted() {
    let {
      params: { type, data }
    } = this.$route;
    this.type = type;
    this.body = JSON.parse(decodeURIComponent(data));
  }
};
</script>

<style lang="less" scoped>
.wrap {
  min-height: 630px;
  background-color: #fff;
  margin: 40px 0 60px 0;
}
</style>

