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
    //width: 1200px;
    //border: 1px solid #0ff;
    //margin: 0 auto;
    //min-height: 100vh;
  }
</style>



