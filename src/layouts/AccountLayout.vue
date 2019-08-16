<template>
  <div
    :style="typeof (userInfo.isOpenAccount) != 'undefined' && !userInfo.isOpenAccount? 'margin-top: -20px' : ''"
  >
    <div
      class="no-account"
      v-if="typeof (userInfo.isOpenAccount) != 'undefined' && !userInfo.isOpenAccount"
    >
      您还未开通银行存管账户,出借前请先开通银行存管账户
      <a @click="handleAccount">立即开户</a>
    </div>
    <div class="wrap">
      <div class="nav-wrap">
        <div class="menu-item-layout">
          <div v-for="(item, index) in computedRoute" :key="index" class="menu-item-wrap">
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
  </div>
</template>

<script>
import {
  accountMenu as menus,
  supportCenterMenu as supportMenus
} from "@/utils/common";

export default {
  name: "T-account-layout",
  data() {
    return {
      menus: [],
      userInfo: {},
      prefix: ""
    };
  },
  methods: {
    handleAccount() {
      this.$router.push({
        name: "/account/gateway/register"
      });
    },
    getUserInfo() {
      this.$store
        .dispatch({
          type: "getUserInfo"
        })
        .then(response => {
          this.userInfo = response.data;
        });
    }
  },
  computed: {
    computedRoute() {
      let { name: path } = this.$route;
      let prefix = path.replace(/^\//, "").split("/")[0];
      this.prefix = prefix;
      if (prefix == "support") {
        this.menus = supportMenus;
      } else {
        this.menus = menus;
      }
      return this.menus;
    }
  },
  mounted() {
    this.getUserInfo();
  }
};
</script>

<style lang="less" scoped>
.layout-wrap {
  margin-top: -20px;
}
.no-account {
  height: 30px;
  line-height: 30px;
  border: 1px solid #ffdf9a;
  text-align: center;
  top: 0;
  background-color: #fff7e7;
  font-size: 14px;
  color: #ec2121;
  & > a {
    display: inline-block;
    padding-left: 15px;
  }
}
.wrap {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 150px;
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
    color: #1890ff !important;
  }
}
.content-wrap {
  flex: 1;
  margin-left: 20px;
  min-height: 40vh;
  overflow-x: hidden;
}
</style>

