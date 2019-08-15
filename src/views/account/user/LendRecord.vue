<template>
  <div>
    <div class="wrap">
      <div class="panel-wrap">
        <ul>
          <li
            v-for="(item, index) in panel"
            :key="index"
            @click="handleTabClick(index)"
            :class="index == tabKey? 'tab-active' : ''"
          >
            <a>{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="table-wrap">
        <a-table
          :columns="table.columns"
          :dataSource="table.data"
          :rowKey="rowKey"
          :pagination="false"
          :loading="table.loading"
        ></a-table>

        <div class="pagination-wrap">
          <a-pagination
            :total="pagination.total"
            :pageSize="pagination.pageSize"
            :current="pagination.current"
            :itemRender="itemRender"
            @change="handlePaginationChange"
            :hideOnSinglePage="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    title: "散标名称",
    dataIndex: "productName",
    key: "productName",
    align: "center"
  },
  {
    title: "出借本金(元)",
    dataIndex: "orderAmount",
    key: "orderAmount",
    align: "center",
    customRender: (text, record) => `${formatCurrency(text)}`
  },
  {
    title: "约定年化利率",
    dataIndex: "annualYield",
    key: "annualYield",
    align: "center",
    customRender: (text, record) => `${text}%`
  },
  {
    title: "出借期限",
    dataIndex: "period",
    key: "period",
    align: "center",
    customRender: (text, record) => `${text}${record.periodType}`
  },
  {
    title: "出借时间",
    dataIndex: "orderTime",
    key: "orderTime",
    align: "center"
  }
];

const panel = [
  {
    name: "出借中"
  },
  {
    name: "计息中"
  },
  {
    name: "结清处理中"
  },
  {
    name: "已结清"
  },
  {
    name: "已流标"
  }
];

export default {
  name: "T-account-lend-record",
  data() {
    return {
      queryParms: {
        page: 1,
        size: pageSize,
        productStatus: 1
      },
      panel,
      tabKey: 0,
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
    getInvestOrderList(parms) {
      this.table.loading = true;
      this.$store
        .dispatch({
          type: "account/getInvestOrderList",
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
    handleTabClick(key) {
      this.tabKey = key;
      this.changeQueryParm({ productStatus: ++key });
      this.getInvestOrderList({ ...this.queryParms });
    },
    handlePaginationChange(page, pageSize) {
      this.pagination.current = page;
      this.changeQueryParm({ page, size: pageSize });
      this.getInvestOrderList({ ...this.queryParms });
    },
    itemRender(current, type, originalElement) {
      if (type === "prev") {
        return <a>上一页</a>;
      } else if (type === "next") {
        return <a>下一页</a>;
      }
      return originalElement;
    },
    rowKey(record, index) {
      return index;
    }
  },
  mounted() {
    this.getInvestOrderList({ ...this.queryParms });
  }
};
</script>


<style lang="less" scoped>
.panel-wrap {
  & > ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0;
    & > li {
      padding: 22px 47px;
      background-color: #f4f5f6;
      color: #666;
      cursor: pointer;
      &:not(:last-child) {
        border-right: 1px solid rgb(237, 237, 237);
      }
      &:hover {
        & > a {
          color: #0182ff;
        }
      }
      & > a {
        font-size: 18px;
        color: #666;
        &:hover {
          color: #0182ff;
        }
      }
    }
    .tab-active {
      background-color: #fff;
      & > a {
        color: #0182ff;
      }
    }
  }
}

.table-wrap {
  background-color: #fff;
  min-height: 40vh;
  padding: 20px 30px;
  /deep/ .ant-table-placeholder {
    border-bottom: none;
  }
}
.pagination-wrap {
  text-align: center;
  margin-top: 35px;
  margin-bottom: 100px;
}
</style>
