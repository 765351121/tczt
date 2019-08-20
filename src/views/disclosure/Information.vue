<template>
  <div>
    <div class="wrap">
      <div class="nav-menus">
        <NavMenus :menus="menus" :activeIndex="activeIndex" :onChange="onChange"/>
      </div>
      <div class="content-wrap">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { disclosureMenu as menus } from "@/utils/common";
import NavMenus from "./NavMenus";

export default {
  name: "T-information-disclosure",
  components: {
    NavMenus
  },
  data() {
    return {
      menus: [],
      activeIndex: 0
    };
  },
  methods: {
    onChange(currentIndex) {
      this.activeIndex = currentIndex;
    }
  },
  created() {
    this.menus = menus;
  }
};
</script>

<style lang="less" scoped>
.wrap {
  display: flex;
  justify-content: flex-start;
  background-color: #fff;
  min-height: 160vh;
}
.nav-menus {
  width: 300px;
}
.content-wrap {
  flex: 1;
  border-left: 1px solid #f0f0f0;
  padding: 40px;
  font-size: 20px;
  color: #333;
}
</style>

