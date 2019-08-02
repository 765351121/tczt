<template>
  <div class="root">
    <div class="header-wrap">
      <div class="header-content">
        <img src="@/assets/logo/logo_blue.png" alt>
        <span>|</span>
        <img src="@/assets/logo/logo_xw.png" alt>
      </div>
    </div>
    <div class="content-wrap">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-result-gateway-layout"
};
</script>

<style lang="less" scoped>
.header-wrap {
  background-color: #fff;
}
.header-content {
  width: 1200px;
  height: 100px;
  line-height: 100px;
  margin: 0 auto;
  background-color: #fff;
  & > span {
    display: inline-block;
    padding: 0 10px;
    color: rgba(0, 0, 0, 0.45);
  }
}
.content-wrap {
  width: 1200px;
  height: 640px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 30px;
}
</style>

