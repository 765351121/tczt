<template>
  <div>
    <div class="wrap">
      <p class="title">安全中心</p>
      <div class="content-wrap">
        <div class="item-info-wrap">
          <div class="content-item">
            <span>绑定手机</span>
            <span>{{ userInfo.userAcc }}</span>
            <span>
              <span>
                <img src="@/assets/images/account/user/safety/tick_success.png" alt>
                已认证
              </span>
            </span>
          </div>
          <div class="content-item">
            <span>实名认证</span>
            <span>{{ userInfo.isOpenAccount? userInfo.realName : '实名认证成功后，才能进行充值、提现、出借操作' }}</span>
            <span>
              <span>
                <img
                  :src="
                    userInfo.isOpenAccount?
                    require('@/assets/images/account/user/safety/tick_success.png') :
                    require('@/assets/images/account/user/safety/tick_fail.png')
                  "
                  alt
                >
                {{ userInfo.isOpenAccount? '已认证' : '未认证' }}
              </span>
            </span>
            <span v-if="!userInfo.isOpenAccount">
              <a-button type="primary" @click="handleLogoModal">认证</a-button>
            </span>
          </div>
          <div class="content-item">
            <span>绑定银行卡</span>
            <span>{{ userInfo.isOpenAccount? `**** **** **** ${formatCarNum}` : '绑定银行卡成功后，才能进行提现操作' }}</span>
            <span>
              <span>
                <img
                  :src="
                    userInfo.isOpenAccount?
                    require('@/assets/images/account/user/safety/tick_success.png') :
                    require('@/assets/images/account/user/safety/tick_fail.png')
                  "
                  alt
                >
                {{ userInfo.isOpenAccount? '已绑定' : '未绑定' }}
              </span>
            </span>
            <span>
              <a-button type="primary" @click="handleBindCard">
                {{ userInfo.isOpenAccount? '查看' : '绑定' }}
              </a-button>
            </span>
          </div>
        </div>
        <div class="item-info-wrap">
          <div class="content-item">
            <span>登录密码</span>
            <span>用于登录天辰智投的密码</span>
            <span>已设置</span>
            <span>
              <a-button type="primary">修改</a-button>
            </span>
          </div>
          <div class="content-item">
            <span>交易密码</span>
            <span>交易密码在充值、提现、出借操作中使用</span>
            <span>已设置</span>
            <span>
              <a-button type="primary">修改</a-button>
            </span>
          </div>
        </div>
        <div class="item-info-wrap">
          <div class="content-item">
            <span>风险评测</span>
            <span>了解风险承受能力，合理安排出借</span>
            <span>稳健型</span>
            <span>
              <a-button type="primary">查看</a-button>
            </span>
          </div>
        </div>
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
  name: "T-account-safety",
  components: {
    LogoModal
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    handleBindCard() {
      const { isOpenAccount }  = this.userInfo
      if (isOpenAccount) {
        this.$router.push({
        name: "/account/bank-card"
      });
      } else {
        this.handleLogoModal()
      }
    },
    accountRegister() {
      this.$router.push({
        name: "/account/gateway/register"
      });
    },
    onCancel() {
      this.visible = !this.visible;
    },
    handleLogoModal() {
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
.title {
  font-size: 18px;
  color: #333;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
}
.content-wrap {
  background: #fff;
  min-height: 40vh;
  padding: 30px 40px 100px 40px;
}
.item-info-wrap {
  border-bottom: 1px solid rgb(232, 232, 232);
  margin-bottom: 20px;
}
.content-item {
  padding: 12px 0;
  margin-bottom: 10px;
  & > span {
    display: inline-block;
    flex: 1;
    &:nth-child(1) {
      width: 20%;
      color: #333;
      font-size: 14px;
    }
    &:nth-child(2) {
      width: 40%;
      color: rgb(128, 128, 128);
      font-size: 14px;
      padding-left: 30px;
    }
    &:nth-child(3) {
      width: 20%;
      font-size: 14px;
      color: rgb(51, 51, 51);
      padding-left: 40px;
      border: 1px solid #0ff;
      & > span {
        display: flex;
        align-items: center;
        & > img {
          display: inline-block;
          padding-right: 5px;
        }
      }
    }
    &:nth-child(4) {
      width: 20%;
      text-align: center;
    }
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

