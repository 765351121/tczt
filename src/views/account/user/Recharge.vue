<template>
  <div>
    <div class="wrap">
      <div class="panel-wrap">
        <ul>
          <li
            v-for="(item, index) in panel"
            :key="index"
            @click="handleTabClick(index)"
            :class="index == tabKey? 'tab-active' : ''"
          >
            <a>{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="content quick-recharge-wrap" v-if="tab == 'quick'">111</div>
      <div class="content ebanck-recharge-wrap" v-if="tab == 'ebanck'">222</div>
    </div>
  </div>
</template>

<script>
const panel = [
  {
    name: "快捷充值"
  },
  {
    name: "网银充值"
  }
];

export default {
  name: "T-account-lend-record",
  data() {
    return {
      panel,
      tabKey: 0,
      tab: "quick"
    };
  },
  methods: {
    handleTabClick(key) {
      this.tabKey = key;
      if (key == 0) {
        this.tab = "quick";
      } else {
        this.tab = "ebanck";
      }
    }
  }
};
</script>


<style lang="less" scoped>
.panel-wrap {
  & > ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0;
    & > li {
      padding: 22px 47px;
      background-color: #f4f5f6;
      color: #666;
      cursor: pointer;
      &:not(:last-child) {
        border-right: 1px solid rgb(237, 237, 237);
      }
      & > a {
        font-size: 18px;
        color: #666;
        &:hover {
          color: #0182ff;
        }
      }
    }
    .tab-active {
      background-color: #fff;
      & > a {
        color: #0182ff;
      }
    }
  }
}

.content {
  background-color: #fff;
  min-height: 100px;
}
</style>
