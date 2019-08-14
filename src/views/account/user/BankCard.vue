<template>
  <div>
    <div class="wrap">
      <div class="bank-card-wrap">
        <p class="title">银行卡</p>
        <div class="bank-card-bg" v-if="userInfo.isOpenAccount">
          <div class="bank-logo">
            <img src="@/assets/images/account/user/bankcard/zhongguo.png" alt>
          </div>
          <div class="bank-num">
            <span>****</span>
            <span>****</span>
            <span>****</span>
            <span>{{ formatCarNum }}</span>
          </div>
          <div class="btn-wrap">
            <span>更换银行卡</span>
            <span>|</span>
            <span>更换预留手机号</span>
          </div>
        </div>
        <div class="add-bank-card-wrap" v-if="!userInfo.isOpenAccount" @click="bindCard">
          <div>
            <img src="@/assets/images/account/user/bankcard/add.png" alt>
            <span>绑定银行卡</span>
          </div>
        </div>
      </div>
      <div class="tips-wrap">
        <p>温馨提示：</p>
        <p>1.为了您的资金账户安全，每个用户只能绑定一张银行卡用于充值、提现</p>
        <p>2.如有疑问请拨打客服电话400-085-6566</p>
      </div>
    </div>
    <LogoModal :width="510" :visible="visible" :onCancel="onCancel">
      <template>
        <div class="logo-modal-content-wrap">
          <p>为了保护您的权益，您的资金即将由存管银行监管，请先开通存管账户</p>
          <a-button type="primary" block size="large" @click="accountRegister">立即开通</a-button>
        </div>
      </template>
    </LogoModal>
  </div>
</template>


<script>
import { mapState } from "vuex";
import LogoModal from "@/components/LogoModal";

export default {
  name: "T-account-bank-card",
  components: {
    LogoModal
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    accountRegister() {
      this.$router.push({
        name: "/account/gateway/register"
      });
    },
    onCancel() {
      this.visible = !this.visible;
    },
    bindCard() {
      this.visible = !this.visible;
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
.bank-card-wrap {
  background-color: #fff;
  min-height: 250px;
  padding: 30px 30px 20px 30px;
}
.title {
  font-size: 18px;
  color: #333;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}

.bank-card-bg {
  position: relative;
  width: 379px;
  height: 202px;
  background: url("../../../assets/images/account/user/bankcard/bg.png")
    no-repeat;
  background-position: center;
  background-size: convert;
  padding: 30px;
}

.bank-num {
  margin: 30px 0 0 0;
  & > span {
    color: #333;
    font-size: 26px;
    margin-right: 10px;
  }
}
.btn-wrap {
  position: absolute;
  bottom: 20px;
  & > span {
    display: inline-block;
    line-height: 13px;
    font-size: 13px;
    color: #333;
    margin-right: 10px;
    cursor: pointer;
  }
}
.tips-wrap {
  padding: 20px 30px;
  background: #f2f2f2;
  & > p {
    color: #8d8d8d;
    font-size: 14px;
  }
}

.add-bank-card-wrap {
  width: 379px;
  height: 202px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: translateY(-4px) scale(1);
  transition: all 0.4s ease-in-out !important;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  div {
    text-align: center;
  }
  span {
    display: block;
    font-size: 16px;
    color: #666;
    margin-top: 20px;
  }
}

.logo-modal-content-wrap {
  padding: 0 30px 10px;
  & > p {
    font-size: 16px;
    color: #333;
    text-align: center;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
  }
}
</style>

