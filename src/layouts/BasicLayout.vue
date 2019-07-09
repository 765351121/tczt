<template>
  <div class="root-wrap">
    <GlobalHeader />
    <GlobalNav />
    <Banner />
    <div class="content">
      111
    </div>
    


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
    line-height: 40px;
    overflow: visible;
  }
  .content {
    border: 1px solid #0ff;
    width: 1200px;
    margin: 0 auto;
  }
</style>



