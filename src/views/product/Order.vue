<template>
  <div>
    <div class="wrap">
      <div class="fix-Wrap">
        <div class="info-wrap">
          <div>22222</div>
          <div>
            <div class="product-info">
              <div>
                <span>约定年化利率</span>
                <span>5.8%</span>
              </div>
              <div>
                <span>出借期限</span>
                <span>
                  30
                  <i>天</i>
                </span>
              </div>
              <div>
                <span>起投金额</span>
                <span>
                  1,0000.00
                  <i>元</i>
                </span>
              </div>
              <div>
                <span>发售金额</span>
                <span>
                  3,4000.00
                  <i>元</i>
                </span>
              </div>
            </div>
            <div class="progress">
              <a-progress :percent="50" size="small" status="active" />
            </div>
            <div class="payment">
              <img src="@/assets/images/product/payment.png" alt>
              还款方式：一次性还本付息
            </div>
          </div>
        </div>
        <div class="action-wrap">222</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
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
  border: 1px solid #f0f;
  width: 40%;
}
</style>


