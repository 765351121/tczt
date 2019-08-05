<template>
  <div>
    <div class="wrap">
      <RegisterFail />
    </div>
  </div>
</template>

<script>
import {
  Fail as RegisterFail
} from "./components/Register";

export default {
  name: "T-result-fail",
  components: {
    RegisterFail,
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

