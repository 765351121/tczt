<template>
  <div>
    <div class="wrap">
      <div class="content">
        <p>您的测评结果：{{ parmsBody.riskLevel }}</p>
        <p v-text="getRiskDes()"></p>
        <div class="btn-wrap">
          <a-button type="primary" @click="handleClick">完成</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { goBack } from "@/utils/utils";

export default {
  name: "T-evaluate-result",
  data() {
    return {
      parmsBody: {},
      riskTips: {
        bs:
          "您已通过测评。您的风险承受能力较低，属于保守型出借人。如对测评结果不满意，可重新测评。",
        wj:
          "您已通过测评。您的风险承受能力有限，属于稳健型出借人。如对测评结果不满意，可重新测评。",
        up:
          "您已通过测评。您的风险承受能力较高，属于积极型出借人。如对测评结果不满意，可重新测评。",
        tc:
          "很抱歉您未通过本次测评，您的风险承受能力极低，属于退出型出借人，本平台无适合您的出借产品。如对测评结果不满意，可重新测评。	"
      }
    };
  },
  methods: {
    getRiskDes() {
      const { score: grade } = this.parmsBody;
      const { bs, wj, up, tc } = this.riskTips;
      if (grade > 11 && grade <= 23) {
        return bs;
      }
      if (grade > 23 && grade <= 48) {
        return wj;
      }
      if (grade > 48) {
        return up;
      }
      if (grade <= 11) {
        return tc;
      }
    },
    handleClick() {
      if (!!goBack()) {
        return this.$router.push(goBack());
      }
    }
  },
  mounted() {
    let {
      params: { data }
    } = this.$route;
    this.parmsBody = JSON.parse(decodeURIComponent(data));
  }
};
</script>

<style lang="less" scoped>
.wrap {
  background-color: #fff;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  & > p {
    font-size: 14px;
    color: #666;
    text-align: center;
    &:first-child {
      font-size: 20px;
      color: #333;
      text-align: center;
      margin-bottom: 40px;
    }
  }
}
.btn-wrap {
  margin-top: 80px;
  text-align: center;
  & > button {
    width: 200px;
    margin: 0 20px;
  }
}
</style>

