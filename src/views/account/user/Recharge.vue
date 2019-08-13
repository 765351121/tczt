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
      <div class="content">
        <div class="quick-recharge-wrap" v-if="tab == 'quick'">
          <div class="title-wrap">
            <p>银行卡号：********9325</p>
            <p>开户银行：中国银行</p>
            <p>限额说明：</p>
          </div>

          <div class="limit-amount-wrap">
            <div>
              <span>卡类别</span>
              <span>单笔限额(元)</span>
              <span>单日限额(元)</span>
            </div>
            <div>
              <span>借记卡</span>
              <span>10,000.00</span>
              <span>10,000.00</span>
            </div>
            <p>
              可用余额：
              <span>10,500.00</span>元
            </p>
          </div>
          <div class="form-wrap">
            <a-form :form="form">
              <a-form-item label="充值余额" :label-col="{ span: 2 }" :wrapper-col="{ span: 10 }">
                <a-input :suffix="'元'"/>
              </a-form-item>
              <a-form-item
                label=" "
                :colon="false"
                :label-col="{ span: 2 }"
                :wrapper-col="{ span: 10 }"
              >
                <a-button type="primary" html-type="submit">确认充值</a-button>
              </a-form-item>
            </a-form>
          </div>

          <div class="tips-wrap">
            <p>温馨提示：</p>
            <p>1. 请注意您的银行卡支付限额，以免造成不便</p>
            <p>2. 不可以使用信用卡进行充值操作</p>
            <p>3. 如有任何问题，请联系客服400-085-6566，天辰智投将竭诚为您服务</p>
          </div>
        </div>
        <div class="ebanck-recharge-wrap" v-if="tab == 'ebanck'">
          <p>暂未开放，敬请期待...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const panel = [
  {
    name: "快捷充值"
  },
  {
    name: "网银充值"
  }
];

export default {
  name: "T-account-recharge",
  data() {
    return {
      form: this.$form.createForm(this),
      panel,
      tabKey: 0,
      tab: "quick"
    };
  },
  methods: {
    handleTabClick(key) {
      this.tabKey = key;
      if (key == 0) {
        this.tab = "quick";
      } else {
        this.tab = "ebanck";
      }
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
      background-color: #f0f0f0;
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

.content {
  background-color: #fff;
  min-height: 100px;
  //padding: 20px 30px 0 30px;
}
.quick-recharge-wrap {
  .title-wrap {
    padding: 20px 30px 0 30px;
  }
  .limit-amount-wrap {
    padding: 0 30px 0 30px;
    & > div {
      height: 50px;
      line-height: 50px;
      display: flex;
      &:nth-child(1) {
        background-color: #f4f5f6;
        & > span {
          color: #666;
        }
      }
      &:nth-child(2) {
        background-color: #fafafa;
        & > span {
          color: #333;
        }
      }
      & > span {
        flex: 1;
        text-align: center;
        font-size: 14px;
      }
    }
    & > p {
      margin-top: 20px;
      & > span {
        display: inline-block;
        padding-right: 5px;
        color: rgb(236, 33, 33);
      }
    }
  }
  .form-wrap {
    padding: 20px 30px 0 30px;
  }
  .recharge-btn-wrap {
    border: 1px solid #0ff;
  }
  .tips-wrap {
    background: #f0f0f0;
    padding: 20px 30px 20px;
    & > p {
      color: #999;
      font-size: 14px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
.ebanck-recharge-wrap {
  padding: 20px 30px;
  min-height: 460px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 16px;
    color: #666666;
    // text-align: center;
  }
}
</style>
