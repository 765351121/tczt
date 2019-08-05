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
import { checkErrorCode } from "@/utils/utils";
import { updateAccountStatus } from "@/utils/common";

export default {
  name: "T-result-gateway-loading",
  data() {
    return {
      count: 10
    };
  },
  methods: {
    getRoute(prefix, type, orderStatus) {
      if (!type  || !orderStatus) {
        this.$message.info('type orderStatus错误')
        return "/home"
      }
      let path = new String()
      switch (orderStatus) {
        case 1:
          path = '/success';
          break;
        case 2:
          path = '/fail';
          break;
        case 0:
          path = '/confirm';
          break;

        default:
        transform = '/fail';
          break;
      }
      let map = new Map([
        [type, () => { 
          return new Map([
            [1, `${prefix}${path}`],
            [2, `${prefix}${path}`],
            [0, `${prefix}${path}`],
          ])
        }],
      ])
      return map.get(type)().get(orderStatus)
    },
    mockAccount(response) {
      const { orderStatus }  = response
      let isOpenAccount = false
      if (orderStatus === 1) {
        isOpenAccount = true
      }
      updateAccountStatus({ isOpenAccount })
    },
    checkResult(response) {
      // mock update account field isOpenAccount
      this.mockAccount(response)
      const { query: { type } }  = this.$route
      let { orderStatus, failReason } = response
      const parms = {
        name: this.getRoute('/result', type, orderStatus),
        params: { 
          type, 
          data: encodeURIComponent(JSON.stringify({ ...response }))
        }
      };
      return this.$router.replace(parms);
    },
    checkTimeOut(response) {
      let { timeout } = response;
      if (timeout) {
        return {
          orderStatus: 0,
          failReason: ""
        };
      }
      return response;
    },
    timer(t) {
      return new Promise(resolve =>
        setTimeout(function() {
          let err = { timeout: true };
          resolve(err);
        }, t)
      );
    },
    checkIsCallContinue(response) {
      /**
       * @orderStatus number
       *  1: 成功  2：失败  0：等待中
       */
      const {
        data: { orderStatus }
      } = response;
      if (orderStatus == 1 || orderStatus == 2) {
        return false;
      }

      return true;
    },
    callIsDone(resolve) {
      const {
        query: { type, requestNo }
      } = this.$route;
      this.$store
        .dispatch({
          type: "gateway/isOrderDone",
          payload: {
            type,
            orderCode: requestNo
          }
        })
        .then(response => {
          if (!checkErrorCode(response)) {
            clearInterval(this.isDoneInterval);
            return false;
          }
          if (!this.checkIsCallContinue(response)) {
            // clearInterval(this.interval);
            // clearInterval(this.isDoneInterval);
            // resolve(response.data);
            // mock async delay
            setTimeout(() => {
              clearInterval(this.interval);
              clearInterval(this.isDoneInterval);
              resolve(response.data);
            }, 1000);
          }
          return false;
        });
    },
    isDone() {
      return new Promise(resolve => {
        this.isDoneInterval = setInterval(() => {
          this.callIsDone(resolve);
        }, 1000);
      });
    },
    createPom() {
      Promise.race([this.isDone(), this.timer(10000)])
        .then(this.checkTimeOut)
        .then(this.checkResult);
    },
    initCountDown() {
      let count = 10;
      this.interval = setInterval(() => {
        count -= 1;
        this.count = count;
        if (count === 0) {
          clearInterval(this.interval);
          clearInterval(this.isDoneInterval);
        }
      }, 1000);
    }
  },
  mounted() {
    this.initCountDown();
    this.createPom();
  }
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

