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
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    align: "center"
  },
  {
    title: "约定年化利率",
    dataIndex: "annualYield",
    key: "annualYield",
    align: "center"
  },
  {
    title: "出借期限",
    dataIndex: "period",
    key: "period",
    align: "center"
  },
  {
    title: "出借时间",
    dataIndex: "orderTime",
    key: "orderTime",
    align: "center"
  }
];

const data = [
  {
    productName: "YDY--新产品",
    orderAmount: "100.00",
    annualYield: "8%",
    period: "20天",
    orderTime: "2019-08-07"
  },
  {
    productName: "YDY--新产品",
    orderAmount: "100.00",
    annualYield: "8%",
    period: "20天",
    orderTime: "2019-08-07"
  },
  {
    productName: "YDY--新产品",
    orderAmount: "100.00",
    annualYield: "8%",
    period: "20天",
    orderTime: "2019-08-07"
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
      panel,
      tabKey: 0,
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
    handleTabClick(key) {
      this.tabKey = key;
    },
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
    rowKey(record, index) {
      return index;
    }
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
}
.pagination-wrap {
  text-align: center;
  margin-top: 35px;
  margin-bottom: 100px;
}
</style>
