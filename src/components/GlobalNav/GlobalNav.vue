<template>
  <div class="wrap">
    <div class="content">
      <div>
        <img src="@/assets/logo/logo_solid.png" alt>
      </div>
      <div>
        <div class="menu_wrap">
          <a-menu mode="horizontal">
            <a-menu-item key="home">
              <router-link to="/home">首页</router-link>
            </a-menu-item>

            <a-menu-item key="project">
              <router-link to="/product/list">项目</router-link>
              </a-menu-item>

            <a-menu-item key="info">信息披露</a-menu-item>

            <a-menu-item key="account">我的账户</a-menu-item>
          </a-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "globalNav"
};
</script>


<style lang="less" scoped>
.wrap {
  overflow-x: visible;
  min-width: 1200px;
  background-color: #ffffff;
  .content {
    width: 1200px;
    height: 100px;
    line-height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      flex: 1;
      &:first-child {
        text-align: left;
      }
    }
  }
}

.menu_wrap {
  :global {
    .ant-menu {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.65);
    }
    .ant-menu-horizontal {
      text-align: right;
      margin-right: 20px;
      border: none;
    }
  }
}
</style>


