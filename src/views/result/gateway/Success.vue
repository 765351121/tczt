<template>
  <div>
    succ
  </div>
</template>

<script>
export default {
  name: 'T-result-success',
  mounted () {
    console.log('................')
    console.log(this.$route)
    let { data }  = this.$route.params
    let a = decodeURIComponent(data)
    let b = JSON.parse(a)
    console.log(a)
    console.log(b)
    
  },
}
</script>
