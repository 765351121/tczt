<template>
  <div>
    <div class="wrap">
      <div class="content">
        <p>模拟风险测评</p>
        <p>退出型: 11分以下</p>
        <p>保守型: 11分至23分</p>
        <p>稳健型: 23分至48分</p>
        <p>积极型: 48分以上</p>
        <div class="btn-wrap">
          <a-button type="primary" @click="handleClick(1)">退出型</a-button>
          <a-button type="primary" @click="handleClick(2)">保守型</a-button>
          <a-button type="primary" @click="handleClick(3)">稳健型</a-button>
          <a-button type="primary" @click="handleClick(4)">积极型</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { goBack } from "@/utils/utils";
import { updateAccountStatus } from "@/utils/common";

export default {
  name: "T-evaluate-risk",
  data() {
    return {};
  },
  methods: {
    mockAccount(score, riskLevel) {
      updateAccountStatus({
        score,
        riskLevel,
        isRiskAccess: true
      });
    },
    gradeMark(type) {
      let score
      let riskLevel
      switch (type) {
        case 1:
          score = 10;
          riskLevel = '退出型';
          break;
        case 2:
          score = 20;
          riskLevel = '保守型';
          break;
        case 3:
          score = 30;
          riskLevel = '稳健型';
          break;
        case 4:
          score = 50;
          riskLevel = '积极型';
          break;

        default:
          score = 10;
          riskLevel = '退出型';
          break;
      }
      return {
        score,
        riskLevel
      }
    },
    handleClick(type) {
      let { score, riskLevel } = this.gradeMark(type)
      this.mockAccount(score, riskLevel)
      this.$router.push({
        name: '/evaluate/result',
        params: {
          data: encodeURIComponent(JSON.stringify({ score, riskLevel }))
        }
      });
    }
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
  margin-top: 40px;
  & > button {
    width: 150px;
    margin: 0 20px;
  }
}
</style>

