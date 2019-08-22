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
            <p>银行卡号：********{{ formatCarNum }}</p>
            <p>开户银行：{{ userInfo.bankName }}</p>
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
              <span>{{ $utils.formatCurrency(userInfo.canWithdrawAmount) }}</span>元
            </p>
          </div>
          <div class="form-wrap">
            <a-form :form="form" @submit="handleSubmit">
              <a-form-item label="充值余额" :label-col="{ span: 2 }" :wrapper-col="{ span: 10 }">
                <a-input
                  :suffix="'元'"
                  @change="handleAmountChange"
                  v-decorator="['orderAmount', {
                      rules: [{
                        validator: validateOrderAmount,
                      }],
                      validateTrigger: 'onSubmit'
                    }]"
                />
              </a-form-item>
              <a-form-item
                label=" "
                :colon="false"
                :label-col="{ span: 2 }"
                :wrapper-col="{ span: 10 }"
              >
                <a-button type="primary" html-type="submit" :disabled="!btnActive">确认充值</a-button>
              </a-form-item>
            </a-form>
          </div>

          <div class="tips-wrap">
            <p>温馨提示：</p>
            <p>1. 请注意您的银行卡支付限额，以免造成不便</p>
            <p>2. 不可以使用信用卡进行充值操作</p>
            <p>3. 如有任何问题，请联系客服400-085-6566，XX智投将竭诚为您服务</p>
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
import { mapState } from "vuex";
import { stringify } from "qs";
import { checkErrorCode, formatCurrency, Fadd, goBack } from "@/utils/utils";

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
      tab: "quick",
      btnActive: false
    };
  },
  methods: {
    toRecharge(response) {
      const { requestParam, requestUrl } = response.data;
      let urlParm = stringify(JSON.parse(requestParam || "{}"));
      let targetUrl = `${requestUrl}?${urlParm}`;
      window.location.href = targetUrl;
    },
    
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!!err) {
          console.log("error");
          return false;
        }
        console.log("succ");
        // /finance/usercenter/account/recharge
        //this.loading = true
        this.$store
          .dispatch({
            type: "gateway/getRechargeInfo",
            payload: {
              ...values,
              bankCode: "BKCH",
              platform: "pc",
              rechargeWay: "SWIFT"
            }
          })
          .then(response => {
            if (!checkErrorCode(response)) {
              return false;
            }
            console.log(response)
            this.toRecharge(response);
          });
      });
    },
    validateOrderAmount(rule, value, callback) {
      if (!/^(([1-9]\d*)|0)(\.\d{0,2})?$/g.test(value)) {
        return callback(`请输入正确的金额`);
      }
      if (value < 100) {
        return callback(`充值金额不能小于${formatCurrency(100)}`);
      }
      if (value > 10000) {
        return callback(`您的开卡行单笔最高充值${formatCurrency(10000)}`);
      }
      return callback();
    },
    handleAmountChange(e) {
      if (!!e.target.value) {
        this.btnActive = true;
      } else {
        this.btnActive = false;
      }
    },
    handleTabClick(key) {
      this.tabKey = key;
      if (key == 0) {
        this.tab = "quick";
      } else {
        this.tab = "ebanck";
      }
    }
  },
  computed: {
    formatCarNum() {
      let { bankCardNo } = this.userInfo;
      bankCardNo = bankCardNo || "";
      return bankCardNo.substring(bankCardNo.length - 4);
    },
    ...mapState({
      userInfo: state => state.global.userInfo
    })
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
