<template>
  <div>
    <div class="wrap">
      <div class="fix-Wrap">
        <div class="info-wrap">
          <div>{{ scatProduct.productName }}</div>
          <div>
            <div class="product-info">
              <div>
                <span>约定年化利率</span>
                <span>{{ scatProduct.annualYield }}%</span>
              </div>
              <div>
                <span>出借期限</span>
                <span>
                  {{ scatProduct.loanTimeLimit }}
                  <i v-text="transformLoanTime()"></i>
                </span>
              </div>
              <div>
                <span>起投金额</span>
                <span>
                  {{ $utils.formatCurrency(scatProduct.minInvestmentAmount) }}
                  <i>元</i>
                </span>
              </div>
              <div>
                <span>发售金额</span>
                <span>
                  {{ $utils.formatCurrency(scatProduct.loanAmount) }}
                  <i>元</i>
                </span>
              </div>
            </div>
            <div class="progress">
              <a-progress :percent="progressPercent()" status="active" size="small"/>
            </div>
            <div class="payment">
              <img src="@/assets/images/product/payment.png" alt>
              还款方式：一次性还本付息
            </div>
          </div>
        </div>
        <div class="action-wrap">
          <div class="amount-wrap">
            <div>
              剩余可投金额：
              <span>{{ $utils.formatCurrency(scatProduct.maxSaleVolume) }} 元</span>
            </div>
            <div>
              您的账户余额：
              <a-button
                type="primary"
                size="small"
                v-if="!($store.state.global.userInfo.isLogin)"
                @click="handleLogin"
              >登录后可以查看</a-button>
              <span v-if="$store.state.global.userInfo.isLogin">
                <span
                  class="amount"
                >{{ $utils.formatCurrency($store.state.global.userInfo.canWithdrawAmount) }} 元</span>
                <a-button type="primary" size="small" @click="handleRecharge">充值</a-button>
              </span>
            </div>
          </div>
          <div class="invest-wrap">
            <div style="margin-bottom: 10px">买入金额</div>
            <div>
              <a-form :form="form">
                <a-form-item>
                  <a-input-search
                    :placeholder="(`${$utils.formatCurrency(scatProduct.minInvestmentAmount)}元起投，${$utils.formatCurrency(scatProduct.increaseAmount)}元递增`)"
                    enterButton="立即加入"
                    size="large"
                    :disabled="!checked"
                    @search="handleBuy"
                    @change="handleInvestAmountChange"
                    v-decorator="['investAmount', {
                      rules: [{
                        validator: validateInvestAmount,
                      }],
                      validateTrigger: 'onSubmit'
                    }]"
                  />
                </a-form-item>
              </a-form>
            </div>
            <div style="margin-top: 10px">
              预计出借回报：
              <span style="color: #ec2121">{{ $utils.formatCurrency(incomeAmount) }}</span> 元
            </div>
            <div style="margin-top: 20px" class="checkbox">
              <a-checkbox :checked="checked" @change="handleCheckbox">
                我已阅读并同意
                <a href="http://www.baidu.com" target="_blank">《借款合同》</a>
              </a-checkbox>
              <div style="padding-left: 22px">
                <a href="http://www.baidu.com" target="_blank">《网络借贷风险和禁止性行为提示及资金来源合法承诺》</a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-wrap">
      <a-tabs defaultActiveKey="1">
        <a-tab-pane tab="项目详情" key="1">
          <Details :details="scatProduct.productDetails"/>
        </a-tab-pane>
        <a-tab-pane tab="借款方信息" key="2">
          <BorrowInfo :userInfo="merchantUserInfo"/>
        </a-tab-pane>
        <a-tab-pane tab="出借记录" key="3">
          <InvestOrder :investOrder="investOrder"/>
        </a-tab-pane>
      </a-tabs>
    </div>
    <div class="modal-wrap">
      <MOpenAccount ref="mopacc"/>
    </div>
  </div>
</template>

<script>
import Details from "./components/Details";
import BorrowInfo from "./components/BorrowInfo";
import InvestOrder from "./components/InvestOrder";
import MOpenAccount from "./components/MOpenAccount";
import { stringify } from "qs";
import {
  checkErrorCode,
  formatCurrency,
  Fadd,
  Fsub,
  Fmul,
  Fdiv,
  goBack
} from "@/utils/utils";

export default {
  name: "order",
  components: {
    Details,
    BorrowInfo,
    InvestOrder,
    MOpenAccount
  },
  data() {
    return {
      form: this.$form.createForm(this),
      checked: true,
      scatProduct: {
        annualYield: 0,
        loanTimeLimit: 0,
        loanAmount: 0,
        maxSaleVolume: 0
      },
      merchantUserInfo: {},
      investOrder: {},
      incomeAmount: 0
    };
  },
  methods: {
    toInvest(response) {
      const { requestParam, requestUrl } = response.data;
      let urlParm = stringify(JSON.parse(requestParam || "{}"));
      let targetUrl = `${requestUrl}?${urlParm}`;
      window.location.href = targetUrl;
    },
    gatewayInvestInfo(response) {
      const { productCode } = this.$route.query;
      const { token } = response.data;
      let investAmount = this.form.getFieldValue("investAmount") || 0;
      this.$store
        .dispatch({
          type: "product/investOrder",
          payload: {
            investAmount: Number(investAmount),
            productCode,
            token,
            platform: "pc"
          }
        })
        .then(response => {
          if (!checkErrorCode(response)) {
            return false;
          }
          this.toInvest(response);
        });
    },
    handleInvest() {
      this.$store
        .dispatch({
          type: "product/getToken"
        })
        .then(response => {
          console.log(response);
          if (!checkErrorCode(response)) {
            return false;
          }
          this.gatewayInvestInfo(response);
        });
    },
    // 计算预计投资收益
    handleInvestAmountChange(e) {
      let { annualYield, loanTimeLimit, loanTimeLimitType } = this.scatProduct;
      switch (loanTimeLimitType) {
        case "year":
          loanTimeLimit = Fmul(loanTimeLimit, 365);
          break;
        case "month":
          loanTimeLimit = Fmul(loanTimeLimit, 30);
          break;
        case "day":
          loanTimeLimit = loanTimeLimit;
          break;
      }
      this.incomeAmount = Fdiv(
        Fmul(Fmul(e.target.value, Fdiv(annualYield, 100)), loanTimeLimit),
        365
      );
    },
    // 投资表单校验
    validateInvestAmount(rule, value, callback) {
      if (parseFloat(value).toString() == "NaN") {
        return callback("请输入出借金额");
      }
      const {
        global: { userInfo }
      } = this.$store.state;
      const { canWithdrawAmount } = userInfo;
      let {
        maxSaleVolume,
        minInvestmentAmount,
        increaseAmount
      } = this.scatProduct;
      // maxSaleVolume = 100
      // minInvestmentAmount = 10
      // 判断扫尾
      if (maxSaleVolume < minInvestmentAmount) {
        if (value != maxSaleVolume) {
          return callback("该产品剩余可投金额小于起投金额，请全部购买");
        } else {
          // 扫尾投资
          console.log("扫尾投资");
        }
        return callback();
      }
      // 投资金额不低于起投金额
      if (value < minInvestmentAmount) {
        return callback(`买入金额不能低于${minInvestmentAmount}元`);
      }
      // 投资金额为递增金额的整倍数
      if (value % increaseAmount != 0) {
        return callback(`买入金额应为${increaseAmount}的整数倍`);
      }
      // 投资金额不能大于剩余可投金额
      if (value > maxSaleVolume) {
        return callback(`买入金额大于剩余可投金额，请重新输入`);
      }
      // 投资金额不能大于可用余额
      if (value > canWithdrawAmount) {
        return callback(`余额不足请先充值`);
      }
      return callback();
    },
    // 校验投资必要条件(登录 / 开户 / 风险测评)
    checkRequirement() {
      const { userInfo } = this.$store.state.global || {};
      const { isLogin, isOpenAccount, isRiskAccess, score } = userInfo || {};
      if (!isLogin) {
        this.handleLogin();
        return false;
      }
      if (!isOpenAccount) {
        this.$refs.mopacc.visible = true;
        return false;
      }
      // 为测评-去测评
      if (!isRiskAccess) {
        this.showToRiskModal();
        return false;
      }
      // 已测评-重新测评
      if (isRiskAccess && score < 16) {
        this.showReRiskModal();
        return false;
      }
      return true;
    },
    // 立即加入
    handleBuy(e) {
      e = window.event;
      e.preventDefault();
      if (!this.checkRequirement()) {
        return false;
      }
      this.form.validateFields({ force: true }, (err, values) => {
        if (!!err) {
          return false;
        }
        console.log("succ");
        const { investAmount } = values;
        const { minInvestmentAmount } = this.scatProduct;
        if (!investAmount) {
          this.form.setFieldsValue({
            investAmount: minInvestmentAmount
          });
        }
        this.handleInvest();
      });
    },
    // 重新风险测评弹窗
    showReRiskModal() {
      let that = this;
      const { userInfo } = this.$store.state.global || {};
      const { riskLevel } = userInfo || {};
      this.$confirm({
        title: "提示",
        content: `您属于${riskLevel}出借人,风险承受能力极低,不满足出借条件,建议您重新测评`,
        iconType: "exclamation-circle",
        centered: true,
        cancelText: "暂不测评",
        okText: "重新测评",
        onOk() {
          goBack.bind(that, "set")();
          that.$router.push({
            name: "/evaluate/risk"
          });
        },
        onCancel() {}
      });
    },
    // 去风险测评弹窗
    showToRiskModal() {
      let that = this;
      this.$confirm({
        title: "提示",
        content:
          "为保护出借人权益,天辰智投为每个用户进行风险承受能力测评,建议您尽快完成测评",
        iconType: "exclamation-circle",
        centered: true,
        cancelText: "暂不测评",
        okText: "立即测评",
        onOk() {
          goBack.bind(that, "set")();
          that.$router.push({
            name: "/evaluate/risk"
          });
        },
        onCancel() {}
      });
    },
    // 充值
    handleRecharge() {
      const { userInfo } = this.$store.state.global || {};
      const { isLogin, isOpenAccount } = userInfo || {};
      if (!isLogin) {
        return this.handleLogin();
      }
      if (!isOpenAccount) {
        return (this.$refs.mopacc.visible = true);
      }
      return this.$router.push({
        name: '/account/recharge'
      })
    },
    // 登录
    handleLogin() {
      goBack.bind(this, "set")();
      this.$router.push({
        name: "/user/login"
      });
    },
    progressPercent() {
      const { loanAmount, maxSaleVolume } = this.scatProduct;
      return Number(
        Fmul(Fdiv(Fsub(loanAmount, maxSaleVolume), loanAmount), 100).toFixed(2)
      );
    },
    // 出借时间显示转换
    transformLoanTime() {
      let key = this.scatProduct.loanTimeLimitType;
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
      return transform;
    },
    // checkbox
    handleCheckbox(e) {
      this.checked = e.target.checked
    },
    // 获取散标产品信息
    getScatterProduct() {
      this.$store
        .dispatch({
          type: "getScatterProduct",
          payload: {
            productCode: "20190702134228bdxx1599"
          }
        })
        .then(response => {
          //console.log(response)
          if (!checkErrorCode(response)) {
            return false;
          }
          this.scatProduct = response.data;
        });
    },
    // 获取用户信息
    getMerchantUserInfo() {
      this.$store
        .dispatch({
          type: "getMerchantUserInfo",
          payload: {
            targetStatus: "10",
            platformUserNo: "PN1901311428427961381116319"
          }
        })
        .then(response => {
          if (!checkErrorCode(response)) {
            return false;
          }
          this.merchantUserInfo = response.data;
        });
    },
    // 获取出借记录信息
    getInvestOrder() {
      this.$store
        .dispatch({
          type: "getInvestOrder",
          payload: {
            productId: "20190329185836bdxx9354"
          }
        })
        .then(response => {
          //console.log(response)
          if (!checkErrorCode(response)) {
            return false;
          }
          this.investOrder = response.data;
        });
    },
    // 获取用户信息
    getUserInfo() {
      this.$store.dispatch({
        type: "getUserInfo",
        payload: {}
      });
    }
  },
  mounted() {
    //console.log('...........');
    //console.log(this.$store.state.global.userInfo.canWithdrawAmount);
    //console.log(this.$route)

    this.getUserInfo();

    // 散标信息
    // /finance/usercenter/product/scatterProduct
    this.getScatterProduct();

    // 借款方信息
    // /assetMerchant/userInfo/merchantUserInfo?targetStatus=10&platformUserNo=PN1901311428427961381116319
    this.getMerchantUserInfo();

    // 出借记录
    // /finance/usercenter/order/getInvestOrder?productId=20190329185836bdxx9354
    this.getInvestOrder();
  }
};
</script>

<style lang="less" scoped>
.fix-Wrap {
  //border: 1px solid #0ff;
  display: flex;
  justify-content: flex-start;
}

.info-wrap {
  width: 60%;
  margin-right: 20px;
  & > div:first-child {
    font-size: 24px;
    height: 63px;
    line-height: 63px;
    color: #333333;
    background-color: #f0f0f0;
    padding: 0 32px;
  }
  & > div:last-child {
    height: 261px;
    //line-height: 261px;
    background-color: #fff;
    padding: 30px 32px;
    .product-info {
      display: flex;
      justify-content: flex-start;
      & > div {
        //flex: 1;
        &:nth-child(1) {
          width: 18%;
          & > span:last-child {
            color: #ec2121;
          }
        }
        &:nth-child(2) {
          width: 15%;
        }
        &:nth-child(3) {
          width: 33%;
        }
        &:nth-child(4) {
          width: 34%;
        }
        & > span {
          display: block;
          &:first-child {
            font-size: 14px;
            font-family: "Microsoft YaHei";
            color: #333;
          }
          &:last-child {
            padding-top: 15px;
            font-size: 28px;
            font-family: "Microsoft YaHei";
            color: #333;
            i {
              font-size: 14px;
              font-style: normal;
            }
          }
        }
      }
    }
    .progress {
      margin: 25px 0 10px 0;
    }
    .payment {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-family: "Microsoft YaHei";
      font-size: 12px;
      color: #666;
      img {
        display: inline-block;
        padding-right: 5px;
      }
    }
  }
}

.action-wrap {
  width: 40%;
}

.amount-wrap {
  background-color: #fff;
  font-size: 14px;
  font-family: "Microsoft YaHei";
  color: #666;
  padding: 10px 20px;
  & > div:first-child {
    span {
      font-size: 14px;
      font-family: "Microsoft YaHei";
      font-weight: bolder;
      color: #333;
    }
  }
  & > div:last-child {
    margin-top: 15px;
  }
  button {
    font-size: 13px;
    color: #fff;
  }
  .amount {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: bolder;
    color: #333;
    display: inline-block;
    padding: 0 15px 0 0;
  }
  /deep/ .ant-btn {
    height: 30px;
  }
}

.invest-wrap {
  background-color: #fff;
  margin-top: 15px;
  padding: 10px 20px;
  padding-bottom: 48px;
  .checkbox {
    a {
      font-size: 12px;
    }
  }
}

.tab-wrap {
  background-color: #fff;
  margin-top: 20px;
  min-height: 580px;
  padding: 30px;

  /deep/ .ant-tabs-nav-container {
    color: #666;
    font-size: 20px;
    font-family: "Microsoft YaHei";
  }
}
</style>


