<template>
  <div class="root-wrap">
    <GlobalHeader />
    <GlobalNav />
    <Banner />
    <div class="content"><router-view /></div>
    


  </div>
</template>


<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalNav from '@/components/GlobalNav'
import Banner from '@/components/Banner'

export default {
  name: 'basiclayout',
  components: {
    GlobalHeader,
    GlobalNav,
    Banner,
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
    margin:15px auto;
    min-height: 30vh;
  }
</style>



