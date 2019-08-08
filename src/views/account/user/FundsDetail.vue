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
import BrushSlot from "@/components/BrushSlot";

const pageSize = 10;

const columns = [
  {
    title: "交易时间",
    dataIndex: "orderTime",
    key: "orderTime",
    align: "center"
  },
  {
    title: "交易金额(元)",
    dataIndex: "orderAmount",
    key: "orderAmount",
    align: "center"
  },
  {
    title: "交易类型",
    dataIndex: "orderStatus",
    key: "orderStatus",
    align: "center"
  },
  {
    title: "流水号",
    dataIndex: "orderCode",
    key: "orderCode",
    align: "center"
  }
];

const data = [
  {
    orderTime: "2019-08-07 10:03:33",
    orderAmount: "+1,000.00",
    orderStatus: "充值成功",
    orderCode: "TZZ****887582"
  },
  {
    orderTime: "2019-08-07 10:03:33",
    orderAmount: "+1,000.00",
    orderStatus: "充值成功",
    orderCode: "TZZ****887582"
  },
  {
    orderTime: "2019-08-07 10:03:33",
    orderAmount: "+1,000.00",
    orderStatus: "充值成功",
    orderCode: "TZZ****887582"
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
      filters: {
        tradeTypeRadios
      },
      table: {
        columns,
        data,
        loading: false
      },
      pagination: {
        total: 500,
        pageSize: pageSize,
        current: 1
      }
    };
  },
  methods: {
    handleTimeChange(date, dateString) {
      console.log(date, dateString);
    },
    tradeTypeChange() {},
    handlePaginationChange(page, pageSize) {
      this.pagination.current = page;
      // this.changeQueryParm({ page, size: pageSize });
      // this.getScatterList({ ...this.queryParms });
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
