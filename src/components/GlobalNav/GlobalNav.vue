<template>
  <div class="wrap">
    <div class="content">
      <div>
        <img src="@/assets/logo/logo_solid.png" alt>
      </div>
      <div>
        <div class="menu_wrap">
          <a-menu mode="horizontal" :selectedKeys="selectedKeys()">
            <a-menu-item key="/home">
              <router-link to="/home">首页</router-link>
            </a-menu-item>
            <a-menu-item key="/product">
              <router-link to="/product/list">项目</router-link>
            </a-menu-item>
            <a-menu-item key="/info">
              <router-link to="/information/disclosure">信息披露</router-link>
            </a-menu-item>
            <a-menu-item key="/account">
              <router-link to="/account/overview">我的账户</router-link>
            </a-menu-item>
          </a-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "globalNav",
  methods: {
    selectedKeys(url) {
      url = this.$route.path;
      const urllist = url.split("/").filter(i => i);
      return urllist.map((urlItem, index) => {
        return `/${urllist.slice(0, index + 1).join("/")}`;
      });
    }
  }
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


