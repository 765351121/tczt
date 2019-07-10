<template>
  <div class="wrap">
    <div class="scat-img">
      <img src="@/assets/images/home/scat.png" alt="">
    </div>
    <div class="scat-list">
      <p>散标专区</p>
      <div>
        <Scat 
          v-for="(i, ii) in list" 
          :key="ii" 
          :class="(ii + 1) % 2 == 0? 'even' : ''" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import Scat from './components/Scat'
import { getHomeScatList } from '@/services/home'

export default {
  name: 'home',
  components: {
    Scat,
  },
  data() {
    return {
      list: [
        {
          name: 1
        },
        {
          name: 2
        },
        {
          name: 3
        },
        {
          name: 4
        },
      ]
    }
  },
  mounted() {
    // console.log('...........')
    // console.log(this.$store.state)
    this.$store.dispatch({
      type: 'getHomeScatList',
      payload: { a: 1 },
    }).then(response => {
      console.log(response)
    })
  }
}
</script>
<style lang="less" scoped>
.wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.scat-img {
  img {
    display: inline-block;
    width: 300px;
    height: 390px;
  }
}
.scat-list {
  width: 100%;
  height: 390px;
  margin-left: 15px;
  p {
    font-size: 20px;
    color: rgba(0,0,0,.85);
    margin-bottom: 0;
  }
  &>div {
    margin-top: 22px;
    display: flex;
    flex-flow: wrap;
    &>div {
      &:nth-child(3) {
        margin-top: 15px;
      }
      &:nth-child(4) {
        margin-top: 15px;
      }
    }
  }
}
.even {
  margin-left: 15px;
}
</style>

