<template>
  <div>
    <div class="wrap">
      <RegisterSuccess v-if="this.type === 'register'"/>
      <InvestSuccess v-if="this.type === 'tender'"/>
      <RechargeSuccess v-if="this.type === 'recharge'"/>
    </div>
  </div>
</template>

<script>
import { Success as RegisterSuccess } from "./components/Register";
import { Success as InvestSuccess } from "./components/Invest";
import { Success as RechargeSuccess } from "./components/Recharge";

export default {
  name: "T-result-success",
  components: {
    RegisterSuccess,
    InvestSuccess,
    RechargeSuccess
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

