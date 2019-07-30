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
              <a-progress :percent="progressPercent()" status="active" size="small" />
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
              <span>1,400.00 元</span>
            </div>
            <div>
              您的账户余额：
              <a-button type="primary">登录后可以查看</a-button>
            </div>
          </div>
          <div class="invest-wrap">
            <div style="margin-bottom: 10px">买入金额</div>
            <div>
              <a-input-search 
                placeholder="1000元起投，1元递增" 
                enterButton="立即加入" 
                size="large" 
              />
            </div>
            <div style="margin-top: 10px">预计出借回报：0.00 元</div>
            <div style="margin-top: 20px" class="checkbox">
              <a-checkbox>
                我已阅读并同意
                <a href="http://www.baidu.com" target="_blank">《借款合同》</a>
              </a-checkbox>
              <div style="padding-left: 22px"><a href="http://www.baidu.com" target="_blank">《网络借贷风险和禁止性行为提示及资金来源合法承诺》</a></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-wrap">
      <a-tabs defaultActiveKey="1">
        <a-tab-pane tab="项目详情" key="1">
          <Details :details="scatProduct.productDetails" />
        </a-tab-pane>
        <a-tab-pane tab="借款方信息" key="2">
          <BorrowInfo :userInfo="merchantUserInfo"  />
        </a-tab-pane>
        <a-tab-pane tab="出借记录" key="3">
          <InvestOrder :investOrder="investOrder" />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import Details from './components/Details'
import BorrowInfo from './components/BorrowInfo'
import InvestOrder from './components/InvestOrder'
import {
  checkErrorCode,
  formatCurrency,
  Fadd,
  Fsub,
  Fmul,
  Fdiv
} from "@/utils/utils";

export default {
  name: "order",
  components: {
    Details,
    BorrowInfo,
    InvestOrder,
  },
  data() {
    return {
      scatProduct: {
        loanAmount: 0,
        maxSaleVolume: 0,
      },
      merchantUserInfo: {},
      investOrder: {},
    }
  },
  methods: {
    progressPercent() {
      const { loanAmount, maxSaleVolume } = this.scatProduct;
      return Number(
        Fmul(Fdiv(Fsub(loanAmount, maxSaleVolume), loanAmount), 100).toFixed(2)
      );
    },
    transformLoanTime() {
      let key = this.scatProduct.loanTimeLimitType
      let transform
      switch (key) {
        case 'day':
          transform = '天'
          break;
        case 'month':
          transform = '月'
          break;
        default:
          transform = '年'
          break;
      }
      return transform
    },
    // 获取散标产品信息
    getScatterProduct() {
      this.$store.dispatch({
        type: 'getScatterProduct',
        payload: {
          productCode: '20190702134228bdxx1599'
        },
      }).then(response => {
        console.log(response)
        if (!checkErrorCode(response)) {
          return false;
        }
        this.scatProduct = response.data
      })
    },
    // 获取用户信息
    getMerchantUserInfo() {
      this.$store.dispatch({
        type: 'getMerchantUserInfo',
        payload: {
          targetStatus: '10',
          platformUserNo: 'PN1901311428427961381116319'
        },
      }).then(response => {
        if (!checkErrorCode(response)) {
          return false;
        }
        this.merchantUserInfo = response.data
      })
    },
    // 获取出借记录信息
    getInvestOrder() {
      this.$store.dispatch({
        type: 'getInvestOrder',
        payload: {
          productId: '20190329185836bdxx9354',
        },
      }).then(response => {
        //console.log(response)
        if (!checkErrorCode(response)) {
          return false;
        }
        this.investOrder = response.data
      })
    },
  },
  mounted() {
    // 散标信息
    // /finance/usercenter/product/scatterProduct
    this.getScatterProduct() 

    // 借款方信息
    // /assetMerchant/userInfo/merchantUserInfo?targetStatus=10&platformUserNo=PN1901311428427961381116319
    this.getMerchantUserInfo()
    
    // 出借记录
    // /finance/usercenter/order/getInvestOrder?productId=20190329185836bdxx9354
    this.getInvestOrder()
  
  },
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
  &>div:first-child {
    span {
      font-size: 14px;
      font-family: "Microsoft YaHei";
      font-weight: bolder;
      color: #333;
    }
  }
  &>div:last-child {
    margin-top: 15px;
  }
  button {
    font-size: 13px;
    color: #fff;
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


