<template>
  <div>
    <div class="wrap">
      <ul v-for="(item, index) in menus" :key="index">
        <li
          @click="handleMenuClick(item, index + preIndex)"
          :class="{ 
          'menu-hover': !!item.type, 
          'sub-menu': (item.type == 'sub'),
          'menu-active': $route.path == item.path
        }"
        >{{ item.name }}</li>
        <T-nav-menus
          :menus="item.children"
          :preIndex="Number(`${index}0`)"
          :activeIndex="activeIndex"
          :onChange="onChange"
        />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-nav-menus",
  props: {
    menus: {
      type: Array
    },
    preIndex: {
      type: Number,
      default: 0
    },
    activeIndex: {
      type: Number,
      default: 0
    },
    onChange: {
      type: Function,
      default: () => false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleMenuClick(item, index) {
      if (!item.type) {
        return false;
      }
      this.onChange(index);
      this.$router.push({
        name: item.path
      });
      document.body.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  },
  created() {}
};
</script>


<style lang="less" scoped>
.wrap {
  & > ul {
    margin-bottom: 0;
    & > li {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      color: #333;
      font-family: Microsoft YaHei;
      padding-left: 80px;
    }
  }
  .menu-hover {
    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  }
  .menu-active {
    background-color: #2f98fb;
    cursor: pointer;
    color: #fff;
    &:hover {
      background-color: #2f98fb !important;
    }
  }
  .sub-menu {
    padding-left: 124px;
    font-size: 14px;
    &:hover {
      background-color: #eee;
      cursor: pointer;
    }
  }
}
</style>

