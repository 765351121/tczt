<template>
  <div>
    <div class="wrap">
      <p class="title-wrap">资金明细</p>
      <div class="filter-wrap">
        <div class="filter loan-time-wrap">
          <div class="title">时间范围</div>
          <div class="action-wrap">
            <a-range-picker @change="handleTimeChange"/>
          </div>
        </div>
        <div class="filter product-status-wrap">
          <div class="title">交易类型</div>
          <div class="action-wrap">
            <BrushSlot :radios="filters.tradeTypeRadios" :onChange="tradeTypeChange"/>
          </div>
        </div>
      </div>
      <div class="table-wrap">
        <a-table
          :columns="table.columns"
          :dataSource="table.data"
          :rowKey="rowKey"
          :rowClassName="rowClassName"
          :pagination="false"
          :loading="table.loading"
        ></a-table>
      </div>
      <div class="pagination-wrap">
        <a-pagination
          :total="pagination.total"
          :pageSize="pagination.pageSize"
          :current="pagination.current"
          :itemRender="itemRender"
          @change="handlePaginationChange"
        />
      </div>
    </div>
  </div>
</template>


<script>
import moment from "moment";
import BrushSlot from "@/components/BrushSlot";
import {
  checkErrorCode,
  formatCurrency,
  Fadd,
  Fsub,
  Fmul,
  Fdiv,
  handleWebStorage
} from "@/utils/utils";

const pageSize = 10;

const columns = [
  {
    title: "交易时间",
    dataIndex: "orderTime",
    key: "orderTime",
    align: "center",
    customRender: (text, record) => moment(text).format("YYYY-MM-DD HH:mm:ss")
  },
  {
    title: "交易金额(元)",
    dataIndex: "orderAmount",
    key: "orderAmount",
    align: "center",
    customRender: (text, record) => `${formatCurrency(text)}`
  },
  {
    title: "交易类型",
    dataIndex: "orderStatus",
    key: "orderStatus",
    align: "center",
    customRender: (status, record) => {
      const { orderType: type } = record;
      let typeTxt = "";
      switch (type) {
        case "recharge":
          typeTxt = "充值";
          break;
        case "withdraw":
          typeTxt = "提现";
          break;
        case "invest":
          typeTxt = "出借";
          break;
        case "repayClearing":
          typeTxt = "回款";
          break;
        case "failBids":
          typeTxt = "流标回退";
          break;
        case "coupon":
          typeTxt = "返现";
        default:
          break;
      }
      let statusTxt = "";
      switch (status) {
        case 0:
          statusTxt = "失败";
          break;
        case 1:
          statusTxt = "成功";
          break;
        case 2:
          statusTxt = "处理中";
          break;
        default:
          break;
      }
      return `${typeTxt}${statusTxt}`;
    }
  },
  {
    title: "流水号",
    dataIndex: "orderCode",
    key: "orderCode",
    align: "center"
  }
];

// 交易类型
const tradeTypeRadios = [
  { name: "全部", value: "all" },
  { name: "充值", value: "recharge" },
  { name: "提现", value: "withdraw" },
  { name: "出借", value: "invest" },
  { name: "回款", value: "repayClearing" },
  { name: "流标", value: "failBids" },
  { name: "返现红包", value: "coupon" }
];

export default {
  name: "T-account-funds-detail",
  components: {
    BrushSlot
  },
  data() {
    return {
      queryParms: {
        page: 1,
        size: pageSize,
        createTimeStart: undefined,
        createTimeEnd: undefined,
        orderType: "all"
      },
      filters: {
        tradeTypeRadios
      },
      table: {
        columns,
        data: [],
        loading: false
      },
      pagination: {
        total: 0,
        pageSize: pageSize,
        current: 1
      }
    };
  },
  methods: {
    changeQueryParm(parms) {
      const queryParms = { ...this.queryParms };
      this.queryParms = Object.assign(queryParms, parms);
    },
    updataTableData(response) {
      const {
        data: { rows, total, page, size }
      } = response;
      this.table.data = rows;
      this.pagination.total = total;
      this.pagination.current = page;
    },
    getCashFlow(parms) {
      this.table.loading = true;
      this.$store
        .dispatch({
          type: "account/getCashFlow",
          payload: { ...parms }
        })
        .then(response => {
          this.table.loading = false;
          if (!checkErrorCode(response)) {
            return false;
          }
          this.updataTableData(response);
        });
    },
    handleTimeChange(m, s) {
      let [createTimeStart, createTimeEnd] = s;
      createTimeStart = !!createTimeStart ? createTimeStart : undefined;
      createTimeEnd = !!createTimeEnd ? createTimeEnd : undefined;
      this.changeQueryParm({ createTimeStart, createTimeEnd });
      this.getCashFlow({ ...this.queryParms });
    },
    tradeTypeChange(value) {
      this.changeQueryParm({ orderType: value });
      this.getCashFlow({ ...this.queryParms });
    },
    handlePaginationChange(page, pageSize) {
      this.pagination.current = page;
      this.changeQueryParm({ page, size: pageSize });
      this.getCashFlow({ ...this.queryParms });
    },
    itemRender(current, type, originalElement) {
      if (type === "prev") {
        return <a>上一页</a>;
      } else if (type === "next") {
        return <a>下一页</a>;
      }
      return originalElement;
    },
    rowClassName(record, index) {
      return index % 2 == 0 ? "evenRow" : "oddRow";
    },
    rowKey(record, index) {
      return index;
    }
  },
  mounted() {
    this.getCashFlow({ ...this.queryParms });
  }
};
</script>


<style lang="less" scoped>
.title-wrap {
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}
.filter-wrap {
  .filter {
    display: flex;
    justify-content: flex-start;
    height: 55px;
    line-height: 55px;
    .title {
      background-color: #f0f0f0;
      width: 114px;
      text-align: center;
      font-size: 14px;
      font-family: "Microsoft YaHei";
      color: #333;
    }
    .action-wrap {
      flex: 1;
      overflow: hidden;
      background-color: #fff;
      padding-left: 30px;
      /deep/ .radio-button-wrap {
        height: 55px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      /deep/ .radio-span {
        width: 150px;
        font-size: 14px;
        text-align: left;
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
  /deep/ .ant-progress-bg {
    height: 6px !important;
  }
  /deep/ .ant-progress-text {
    color: #333333;
  }
  /deep/ .oddRow {
    background: #fafafa;
  }
  /deep/ .evenRow {
    background: #ffffff;
  }
}
.pagination-wrap {
  text-align: center;
  margin-top: 35px;
  margin-bottom: 100px;
}
</style>
