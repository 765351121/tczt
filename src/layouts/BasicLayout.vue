<template>
  <div class="root-wrap">
    <GlobalHeader />
    <GlobalNav />
    


  </div>
</template>


<script>
import GlobalHeader from '@/components/GlobalHeader'
import GlobalNav from '@/components/GlobalNav'

export default {
  name: 'basiclayout',
  components: {
    GlobalHeader,
    GlobalNav,
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
</style>



