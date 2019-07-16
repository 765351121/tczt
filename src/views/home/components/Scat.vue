<template>
  <div class="root-scat">
    <div class="wrap" @click="handleItemClick">
      <div>
        <div class="title-wrap">
          <span>{{ productName }}</span>
          <span>{{ formatProductState() }}</span>
        </div>
        <div class="center_wrap">
          <span>{{ annualYield }}%</span>
          <span>出借期限{{ loanTimeLimit }}天</span>
        </div>
        <div class="bottom_wrap">
          <span>约定年化利率</span>
          <span>剩余可投{{ $utils.formatCurrency(maxSaleVolume) }}元</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatCurrency } from '@/utils/utils'

export default {
  name: 'scat',
  props: {
    productName: {  //产品名称
      type: String,
      required: false,
      default: '',
    },
    annualYield: {  //约定年化利率
      type: Number,
      required: false,
      default: 0,
    },
    productState: { //产品状态
      type: Number,
      required: false,
      default: 0,
    },
    loanTimeLimit: {  //出借期限
      type: Number,
      required: false,
      default: 0,
    },
    maxSaleVolume: {  //剩余可投
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
     
    }
  },
  methods: {
    formatProductState() {
      let txt = '' 
      let { productState: code } = this
      /**
       * @code Number
       *  10 发售中
       *  20已满标
       *  30 还款中
       *  40 已结清
       *  50 已流标 
       *  51 已撤标
       */
      switch (code) {
        case 10:
          txt = '发售中';
          break;
        case 20:
          txt = '已满标';
          break;
        case 30:
          txt = '还款中';
          break;
        case 40:
          txt = '已结清';
          break;
        case 50:
          txt = '已流标';
          break;
        case 51:
          txt = '已撤标';
          break;
        default:
          txt = '发售中';
      }
      return txt
    },
    handleItemClick () {
      this.$router.push({
        name: '/product/order',
      })
    },
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
.wrap {
  width: 425px;
  height: 160px;
  background-color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 2px 10px 10px rgba(102,102,102,0.06);
  transition: all 0.6s;
  &:hover{
    margin-top: -5px;
  }
  &>div {
    flex: 1;
  }
}

.title-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: inline-block;
    font-size: 16px;
    color: #333333;
    &:last-child {
      width: 50px;
      height: 20px;
      background-color: #1890ff;
      font-size: 14px;
      color: #fff;
      text-align: center;
      line-height: 20px;
      border-radius: 2px;
    }
  }
}

.center_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  span {
    flex: 1;
    display: inline-block;
    &:first-child {
      font-size: 40px;
      color: #ec2121;
    }
    &:last-child {
      align-self: flex-end;
    }
  }
}

.bottom_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    flex: 1;
    display: inline-block;
    font-size: 14px;
    &:last-child {
      align-self: flex-end;
      color: rgba(0,0,0,.65);
    }
  }
}


</style>


