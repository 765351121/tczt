<template>
  <div class="root-wrap">
    <GlobalHeader 
      :userInfo="$store.state.global.userInfo"
      :logout="logout"
    />
    <GlobalNav/>
    <Banner v-if="name == '/home'"/>
    <div class="content">
      <router-view/>
    </div>
    <GlobalFooter/>
  </div>
</template>


<script>
import GlobalHeader from "@/components/GlobalHeader";
import GlobalNav from "@/components/GlobalNav";
import Banner from "@/components/Banner";
import GlobalFooter from "@/components/GlobalFooter";
import { handleWebStorage, checkErrorCode } from "@/utils/utils";
import { updateAccountStatus, accountTemplate, resetAccountStatus } from "@/utils/common";

export default {
  name: "basiclayout",
  components: {
    GlobalHeader,
    GlobalNav,
    Banner,
    GlobalFooter
  },
  data() {
    return {
      name: "",
      ws: handleWebStorage()
    };
  },
  methods: {
    resetMockAccount() {
      resetAccountStatus()
    },
    logout () {
      this.$store.dispatch({
        type: 'logout'
      })
      .then(response => {
        if (!checkErrorCode(response)) {
          return false
        }
        this.resetMockAccount()
        this.getUserInfo()
      })
    },
    setBasic() {
      this.name = this.$route.name;
    },
    watchRoute() {
      this.setBasic();
    },
    mockAccount() {
      updateAccountStatus({
        ...accountTemplate,
        ...(this.ws.getItem("account") || {})
      });
    },
    getUserInfo() {
      this.$store
        .dispatch({
          type: "getUserInfo"
        })
        // .then(response => {
        //   console.log(response);
        // });
    }
  },
  beforeUpdate() {
    // console.log('...........')
    // console.log(this.$store.state.global)
  },
  mounted() {
    this.setBasic();
    this.mockAccount();
    this.getUserInfo();
  },
  watch: {
    $route: "watchRoute"
  }
};
</script>


<style lang="less" scoped>
.root-wrap {
  background-color: #303438;
  height: 40px;
  //line-height: 40px;
  overflow: visible;
}
.content {
  width: 1200px;
  margin: 20px auto;
  min-height: 30vh;
}
</style>



