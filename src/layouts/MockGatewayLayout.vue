<template>
  <div class="root">
    <div class="header-bar-wrap">
      <div class="header-bar-content">
        <span>XX银行</span>
        <span>资金存管系统</span>
      </div>
    </div>
    <div class="nav-wrap">
      <div class="nav-content">
        <span>开户</span>
        <span>平台名称：暴风金融1</span>
        <span>平台公司名称：暴风金融1</span>
      </div>
    </div>
    <div class="content-wrap"><router-view/></div>
    <div class="footer-wrap"></div>
  </div>
</template>

<script>
export default {
  name: "T-mock-gateway-layout"
};
</script>

<style lang="less" scoped>
.root {
  background-color: #fff;
  min-height: 100vh;
}
.header-bar-wrap {
  height: 80px;
  .header-bar-content {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > span {
      &:first-child {
        font-size: 30px;
        font-weight: bolder;
        padding-left: 100px;
      }
      &:last-child {
        font-size: 16px;
        color: #406dbf;
        font-weight: bolder;
        padding-top: 15px;
        padding-left: 15px;
      }
    }
  }
}

.nav-wrap {
  background-color: #406dbf;
  margin-bottom: 20px;
  border-bottom: 4px solid #2953a0;
  .nav-content {
    width: 1200px;
    height: 54px;
    line-height: 54px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    & > span {
      flex: 1;
      font-size: 16px;
      color: #fff;
      &:first-child {
        font-size: 24px;
        padding-left: 35px;
      }
    }
  }
}

.content-wrap {
  border: 1px solid #0ff;
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
}

.footer-wrap {
  height: 80px;
  line-height: 80px;
  background-color: #484848;
  margin-top: 40px;
}
</style>

