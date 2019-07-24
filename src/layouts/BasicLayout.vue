<template>
  <div class="root-wrap">
    <GlobalHeader />
    <GlobalNav />
    <Banner v-if="name == 'home'" />
    <div class="content"><router-view /></div>
    <GlobalFooter />
  </div>
</template>


<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalNav from '@/components/GlobalNav'
import Banner from '@/components/Banner'
import GlobalFooter from '@/components/GlobalFooter'
import { handleWebStorage } from "@/utils/utils";
import { updateAccountStatus, accountTemplate } from "@/utils/common";

export default {
  name: 'basiclayout',
  components: {
    GlobalHeader,
    GlobalNav,
    Banner,
    GlobalFooter,
  },
  data() {
    return {
      name: '',
      ws: handleWebStorage(),
    }
  },
  methods: {
    setBasic() {
      this.name = this.$route.name
    },
    watchRoute(){
      this.setBasic()
    }
  },
  mounted() {
    this.setBasic()
    updateAccountStatus({
      ...accountTemplate,
      ...(this.ws.getItem('account') || {})
    })
  },
  watch: {
    '$route':'watchRoute'
  },
}
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



