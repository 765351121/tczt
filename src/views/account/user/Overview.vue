<template>
  <div>
    <div class="wrap">
      <div class="tips-wrap">
        <div class="img">
          <img src="@/assets/images/account/user/overview/user.png" alt>
        </div>
        <div class="tips">
          <div class="phone">上午好, 141****0010</div>
          <div class="popover">
            <a-popover placement="bottom">
              <template slot="content">
                <span class="popover-txt" v-if="userInfo.isOpenAccount">您已开通新网银行存管账户。</span>
                <span class="popover-txt" v-if="!userInfo.isOpenAccount">
                  您尚未开通新网银行存管账户。
                  <router-link to="/account/gateway/register">去开通</router-link>
                </span>
              </template>
              <img
                v-if="userInfo.isOpenAccount"
                src="@/assets/images/account/user/overview/bank_card_active.png"
                alt
              >
              <img
                v-if="!userInfo.isOpenAccount"
                src="@/assets/images/account/user/overview/bank_card_default.png"
                alt
              >
            </a-popover>

            <a-popover placement="bottom">
              <template slot="content">
                <span class="popover-txt" v-if="userInfo.bankCode">您已开通新网银行存管账户。</span>
                <span class="popover-txt" v-if="!userInfo.bankCode">
                  您还未绑定银行卡。
                  <router-link to="/account/gateway/register">去绑卡</router-link>
                </span>
              </template>
              <img
                v-if="userInfo.bankCode"
                src="@/assets/images/account/user/overview/icon_active.png"
                alt
              >
              <img
                v-if="!userInfo.bankCode"
                src="@/assets/images/account/user/overview/icon_default.png"
                alt
              >
            </a-popover>

            <a-popover placement="bottom">
              <template slot="content">
                <span v-if="userInfo.isRiskAccess" class="popover-txt">您已开通新网银行存管账户。</span>
                <span v-if="!userInfo.isRiskAccess" class="popover-txt">
                  您还未进行风险测评。
                  <!-- <router-link to="/evaluate/risk">去测评</router-link> -->
                  <a @click="handleEvalRisk">去测评</a>
                </span>
              </template>
              <img
                v-if="userInfo.isRiskAccess"
                src="@/assets/images/account/user/overview/risk_active.png"
                alt
              >
              <img
                v-if="!userInfo.isRiskAccess"
                src="@/assets/images/account/user/overview/risk_default.png"
                alt
              >
            </a-popover>
          </div>
        </div>
      </div>
      <div class="account-wrap">
        <div class="total-wrap">
          <p>
            {{ $utils.formatCurrency(
            $utils.Fadd(userInfo.canWithdrawAmount || 0, userInfo.lendingAmount || 0)
            )}}
          </p>
          <p>总资产(元)</p>
        </div>
        <div class="amount-wrap">
          <p>
            <span>可用余额</span>
            <span>{{ $utils.formatCurrency(userInfo.canWithdrawAmount) }}</span>
          </p>
          <p>
            <span>出借余额</span>
            <span>{{ $utils.formatCurrency(userInfo.lendingAmount) }}</span>
          </p>
        </div>
        <div class="btn-wrap">
          <a-button type="primary" size="large">
            <router-link to="/account/recharge">充值</router-link>
          </a-button>
          <a-button size="large">提现</a-button>
        </div>
      </div>
      <div class="summary-wrap">
        <div class="title">散标</div>
        <div class="total-amount-wrap">
          <span>{{ $utils.formatCurrency(userInfo.lendingAmount) }}</span>
          <span>累计出借金额(元)</span>
        </div>
        <div class="total-income-wrap">
          <span>{{ $utils.formatCurrency(userInfo.totalIncome) }}</span>
          <span>累计回报(元)</span>
        </div>
        <div class="sact-num-wrap">
          <span>{{ userInfo.totalLendingQuantity }}</span>
          <span>出借笔数</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { checkErrorCode, formatCurrency, Fadd, goBack } from "@/utils/utils";

export default {
  name: "T-account-overview",
  data() {
    return {};
  },
  methods: {
    handleEvalRisk() {
      goBack.bind(this, "set")();
      this.$router.push({
        name: "/evaluate/risk"
      });
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.global.userInfo
    })
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.tips-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .tips {
    padding: 15px 20px;
    .phone {
      font-size: 22px;
      color: #333;
      margin-bottom: 10px;
    }
    .popover {
      & > img {
        display: inline-block;
        cursor: pointer;
        &:nth-child(2) {
          margin: 0 15px;
        }
      }
    }
  }
}
.popover-txt {
  color: rgba(0, 0, 0, 0.65);
  font-size: 12px;
}
.account-wrap {
  margin-top: 30px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  & > div {
    flex: 1;
  }
  .total-wrap {
    padding: 40px 0;
    text-align: center;
    & > p {
      text-align: center;
      margin-bottom: 0;
      &:first-child {
        color: #ec2121;
        font-size: 40px;
        margin-bottom: 20px;
      }
      &:last-child {
        font-size: 18px;
        color: #666;
      }
    }
  }
  .amount-wrap {
    padding: 40px 0;
    & > p {
      & > span {
        display: inline-block;
        font-size: 14px;
        &:first-child {
          vertical-align: super;
        }
        &:last-child {
          color: #333;
          font-size: 36px;
          margin-left: 15px;
        }
      }
    }
  }
  .btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    & > button {
      display: inline-block;
      margin: 0 10px;
    }
  }
}
.summary-wrap {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > div {
    &:not(:first-child) {
      flex: 1;
      & > span {
        display: block;
        padding-left: 60px;
        font-size: 14px;
        color: #333;
      }
    }
  }
  .title {
    width: 100px;
    height: 40px;
    line-height: 40px !important;
    border-right: 1px solid #ededed;
    text-align: center;
    color: #333;
    font-size: 18px;
  }
}
</style>

