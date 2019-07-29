<template>
  <div>
    <div class="wrap">
      <ScatTitle/>
      <div class="item-list">项目列表</div>
      <div class="filter-wrap">
        <div class="filter loan-time-wrap">
          <div class="title">出借期限</div>
          <div class="action-wrap">
            <BrushSlot :radios="loanTimeRadios"/>
          </div>
        </div>
        <div class="filter product-status-wrap">
          <div class="title">项目状态</div>
          <div class="action-wrap">
            <BrushSlot :radios="productStatusRadios"/>
          </div>
        </div>
      </div>

      <div class="table-wrap">
        <a-table :columns="columns" :dataSource="data" :rowKey="rowKey">
          <template slot="annualYield" slot-scope="text, record">
            <span @click="cval(text, record)" style="color: #ec2121">{{text}}%</span>
          </template>

          <template slot="productState" slot-scope="text, record">
            <span
              @click="cval(text, record)"
              v-text="transformProductState(text)"
              :style="(text == 20 || text == 40)? 'color: #0b87ff' : null"
            ></span>
          </template>

          <template slot="progress" slot-scope="text, record">
            <a-progress :percent="progressPercent(text, record)" />
          </template>

          
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
import ScatTitle from "./components/List/ScatTitle";
import BrushSlot from "./components/List/BrushSlot";
import { formatCurrency, Fadd, Fsub, Fmul, Fdiv } from "@/utils/utils";

const columns = [
  {
    title: "约定年化利率",
    dataIndex: "annualYield",
    key: "annualYield",
    width: 150,
    align: "center",
    scopedSlots: { customRender: "annualYield" }
  },
  {
    title: "项目名称",
    dataIndex: "productName",
    key: "productName",
    width: 260,
    align: "center",
  },
  {
    title: "出借期限",
    dataIndex: "loanTimeLimit",
    key: "loanTimeLimit",
    width: 130,
    align: "center",
    customRender: (text, record) => {
      const { loanTimeLimitType: key } = record;
      let transform;
      switch (key) {
        case "day":
          transform = "天";
          break;
        case "month":
          transform = "月";
          break;
        default:
          transform = "年";
          break;
      }
      return `${text}${transform}`;
    }
  },
  {
    title: "剩余可投",
    dataIndex: "maxSaleVolume",
    key: "maxSaleVolume",
    width: 230,
    align: "center",
    customRender: (text, record) => `${formatCurrency(text)}元`
  },
  {
    title: "募集进度",
    dataIndex: "progress",
    key: "progress",
    align: "center",
    scopedSlots: { customRender: 'progress' }
  },
  {
    title: "项目状态",
    dataIndex: "productState",
    key: "productState",
    width: 150,
    align: "center",
    scopedSlots: { customRender: "productState" }
  }
];

const data = [
  {
    id: 195,
    productCode: "20190724134101bdxx3338",
    productName: "YDY--新产品",
    loanTimeLimitType: "day",
    loanTimeLimitTypeDesc: "天",
    loanTimeLimit: 20,
    loanAmount: 10000.0,
    annualYield: 8.0,
    minInvestmentAmount: 100.0,
    increaseAmount: 100.0,
    productState: 10,
    repaymentMode: "5",
    maxSaleVolume: 7000.0,
    dataType: 0,
    showType: 0,
    useCoupon: false,
    show: false,
    hasDepository: false,
    protectFlag: true
  },
  {
    id: 193,
    productCode: "20190724110854bdxx2660",
    productName: "YDY--测试产品3期",
    loanTimeLimitType: "day",
    loanTimeLimitTypeDesc: "天",
    loanTimeLimit: 30,
    loanAmount: 25000.0,
    annualYield: 8.0,
    minInvestmentAmount: 100.0,
    increaseAmount: 100.0,
    productState: 10,
    repaymentMode: "5",
    maxSaleVolume: 24800.0,
    dataType: 0,
    showType: 0,
    useCoupon: false,
    show: false,
    hasDepository: false,
    protectFlag: true
  }
];

export default {
  name: "T-product-list",
  components: {
    ScatTitle,
    BrushSlot
  },
  data() {
    return {
      columns,
      data,
      loanTimeRadios: [
        { name: "全部", value: 0 },
        { name: "3个月以下", value: 1 },
        { name: "3-6个月", value: 2 },
        { name: "6个月以上", value: 3 }
      ],
      productStatusRadios: [
        { name: "全部", value: 0 },
        { name: "发售中", value: 10 },
        { name: "已满标", value: 20 },
        { name: "还款中", value: 30 },
        { name: "已结清", value: 40 }
      ]
    };
  },
  methods: {
    progressPercent(text, record) {
      const { loanAmount, maxSaleVolume }  = record
      return (Fmul(Fdiv(Fsub(loanAmount, maxSaleVolume), loanAmount), 100))
    },
    transformProductState(text) {
      let transform;
      switch (text) {
        case 10:
          transform = "发售中";
          break;
        case 20:
          transform = "已满标";
          break;
        case 30:
          transform = "还款中";
          break;
        case 40:
          transform = "已结清";
          break;
        case 51:
          transform = "已撤标";
          break;
        case 50:
          transform = "已流标";
          break;
        default:
          break;
      }
      return transform;
    },
    cval(a, b) {},
    rowKey(record, index) {
      return index;
    }
  },


};
</script>

<style lang="less" scoped>
.item-list {
  color: #333;
  font-size: 20px;
  font-family: "Microsoft YaHei";
  margin: 20px 0;
}

.filter-wrap {
  .filter {
    display: flex;
    justify-content: flex-start;
    height: 55px;
    line-height: 55px;
    .title {
      background-color: #f0f0f0;
      width: 200px;
      text-align: center;
      font-size: 14px;
      font-family: "Microsoft YaHei";
      color: #333;
    }
    .action-wrap {
      flex: 1;
      background-color: #fff;
      /deep/ .radio-button-wrap {
        height: 55px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 30px;
      }
      /deep/ .radio-span {
        width: 150px;
        font-size: 14px;
        color: #ff0;
      }
    }
  }
}

.product-status-wrap {
  border-top: 1px solid #e5e5e5;
}

.table-wrap {
  margin-top: 20px;
  background-color: #fff;
}
</style>


