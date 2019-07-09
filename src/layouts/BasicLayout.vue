<template>
  <div class="root-wrap">
    <GlobalHeader />
    


  </div>
</template>


<script>
import GlobalHeader from '@/components/GlobalHeader'

export default {
  name: 'basiclayout',
  components: {
    GlobalHeader,
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



