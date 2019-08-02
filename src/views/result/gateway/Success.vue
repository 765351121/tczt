<template>
  <div>
    succ
  </div>
</template>

<script>
export default {
  name: 'T-result-success',
  data() {
    return {
      type: '',
      body: {},
    }
  },
  mounted () {
    let { params: { type, data } }  = this.$route
    this.type = type
    this.body = JSON.parse(decodeURIComponent(data))
  },
}
</script>
