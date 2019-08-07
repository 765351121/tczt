<template>
  <div class="wrap">
    <div class="nav-wrap">
      <div class="menu-item-layout">
        <div v-for="(item, index) in menus" :key="index" class="menu-item-wrap">
          <div class="menu menu-primary">
            <img :src="item.icon" alt>
            {{ item.name }}
          </div>
          <ul class="menu menu-sub">
            <li
              v-for="(item, index) in item.children"
              :key="index"
              :class="$route.path == item.path? 'menu-active' : ''"
            >
              <router-link :to="item.path">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content-wrap">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import { accountMenu as menus } from "@/utils/common";

export default {
  name: "T-account-layout",
  data() {
    return {
      menus
    };
  },
  mounted() {
    console.log("..............");
    console.log(this.$route.path);
  }
};
</script>



<style lang="less" scoped>
.wrap {
  display: flex;
  justify-content: flex-start;
}
.nav-wrap {
  background-color: #fff;
  width: 195px;
  padding: 30px 10px;
  min-height: 40vh;
}
.menu-item-layout {
  padding: 0 0 0 24px;
}
.menu-item-wrap {
  border-bottom: 1px solid rgb(237, 237, 237);
  margin-bottom: 30px;
  &:last-child {
    border: none;
  }
}
.menu {
  //border: 1px solid #ff0;
}
.menu-primary {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  & > img {
    display: inline-block;
    padding-right: 10px;
  }
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
}
.menu-sub {
  padding: 0 0 0 40px;
  & > li {
    margin-bottom: 20px;
    & > a {
      display: inline-block;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      text-decoration: none;
      width: 100%;
      &:hover {
        color: #1890ff;
      }
    }
  }
}
.menu-active {
  & > a {
    color: #1890ff!important;
  }
}
.content-wrap {
  border: 1px solid #0ff;
  flex: 1;
  margin-left: 20px;
  min-height: 40vh;
}
</style>

