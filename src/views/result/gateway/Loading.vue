<template>
  <div class="wrap">
    <div class="content-wrap">
      <div class="loading-wrap">
        <svg class="svg">
          <circle cx="65" cy="65" r="60" class="fixed_circle"></circle>
          <circle cx="-65" cy="65" r="60" class="ani_circle"></circle>
        </svg>
        <span class="count-donw">{{ count }}s</span>
      </div>
      <div class="tis-wrap">
        <p>处理中，等待银行返回结果</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-result-gateway-loading",
  data() {
    return {
      count: 10,
    };
  },
  methods: {
    initCountDown() {
      let count = 10;
      this.interval = setInterval(() => {
        count -= 1;
        this.count = count;
        if (count === 0) {
          clearInterval(this.interval);
          //clearInterval(this.isDoneInterval);
        }
      }, 1000);
    }
  },
  mounted () {
    this.initCountDown()
  },
};
</script>

<style lang="less" scoped>
.wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-wrap {
  text-align: center;
  .loading-wrap {
    position: relative;
    .count-donw {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      font-size: 24px;
      color: #333;
    }
  }
  .tis-wrap {
    margin-top: 40px;
    & > p {
      font-size: 20px;
      margin-bottom: 0px;
    }
  }
}
.svg {
  width: 130px;
  height: 130px;
  .fixed_circle {
    fill: #ffffff;
    stroke: #508df8;
    stroke-width: 3px;
  }
  @-webkit-keyframes wind_Frames {
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes wind_Frames {
    to {
      stroke-dashoffset: 0;
    }
  }
  .ani_circle {
    stroke: #eceef0;
    stroke-width: 4px;
    fill: transparent;
    stroke-dasharray: 380;
    stroke-dashoffset: 380;
    -webkit-animation: wind_Frames 10s forwards linear;
    animation: wind_Frames 10s forwards linear;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg);
  }
}
</style>

