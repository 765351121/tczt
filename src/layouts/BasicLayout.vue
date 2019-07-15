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
    }
  },
  mounted() {
    this.name = this.$route.name
  }
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



