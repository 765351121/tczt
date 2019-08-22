<template>
  <div>
    <div class="wrap">
      <div class="content">
        <div>
          <div><img src="@/assets/logo/logo_trans.png" alt=""></div>
          <p>客服热线:</p>
          <p>400-000-0000</p>
          <p>工作日    9:00-18:00</p>
        </div>
        <div>
          <div>
            <img src="@/assets/qrcode/1.png" alt="">
            <span>关注官方微博</span>
          </div>
          <div>
            <img src="@/assets/qrcode/2.png" alt="">
            <span>关注微信订阅号</span>
          </div>
          <div>
            <img src="@/assets/qrcode/3.png" alt="">
            <span>关注微信服务号</span>
          </div>
        </div>
        <div>
          <div>
            <div>
              <span>关于我们</span>
              <span>安全保障</span>
              <span>帮助中心</span>
            </div>
            <div>
              <span>公司简介</span>
              <span>资金存管</span>
              <span>出借问题</span>
            </div>
            <div>
              <span>组织信息</span>
              <span>风险控制</span>
              <span>充值提现</span>
            </div>
            <div>
              <span>法律声明</span>
              <span>合规报告</span>
              <span>账户管理</span>
            </div>
          </div>
        </div>
      </div>  
    </div>
    <div class="records">
      <div>
        <img src="@/assets/icons/beian.png" alt="" width="20px" height="20px">
        <span>浙公网安备 0000000000000号</span>
      </div>
      <div>
        <img src="@/assets/icons/copyrigh.png" alt="" width="20px" height="20px">
        <span>浙ICP备00000000号-1</span>
      </div>
      <div>浙ICP证B2-000000000</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalFooter"
};
</script>

<style lang="less" scoped>
.wrap {
  min-width: 1200px;
  overflow-x: visible;
  background-color: #303438;
}
.content {
  width: 1200px;
  height: 226px;
  margin: 0 auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    flex: 1;
    p {
      margin-bottom: 0;
    }
    &:nth-child(1) {
      p {
        margin-top: 2px;
        &:nth-of-type(1) {
          margin-top: 30px;
          font-size: 16px;
          color: #dee7ee;
        }
        &:nth-of-type(2) {
          font-size: 24px;
          color: #dee7ee;
        }
        &:nth-of-type(3) {
          font-size: 14px;
          color: #b3babf;
        }
      }
    }
    &:nth-child(2) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      & > div {
        flex: 1;
        text-align: center;
        span {
          display: block;
          font-size: 14px;
          color: #fff;
          text-align: center;
          padding-top: 10px;
        }
      }
    }
    &:nth-child(3) {
      display: flex;
      justify-content: flex-end;
      & > div {
        width: 280px;
        & > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          span {
            flex: 1;
            font-size: 14px;
            color: #b2b9be;
            text-align: center;
          }
          &:first-child {
            span {
              font-size: 16px;
              color: #fff;
            }
          }
          &:not(:first-child) {
            padding-top: 10px;
            span {
              cursor: pointer;
            }
          }
          &:nth-child(2) {
            padding-top: 30px;
          }
        }
      }
    }
  }
}

.records {
  min-width: 1200px;
  overflow-x: visible;
  background-color: #000;
  height: 50px;
  font-size: 14px;
  color: #939393;
  display: flex;
  justify-content: center;
  align-items: center;
  &>div {
    padding-left: 20px;
    span {
      display: inline-block;
      padding-left: 5px;
    }
    &:not(:last-child) {
      cursor: pointer;
    }
  }
}

</style>

