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
              <a-progress :percent="50" size="small" status="active"/>
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
              <a-checkbox @change="onChange">
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
      <a-tabs defaultActiveKey="1" @change="callback">
        <a-tab-pane tab="项目详情" key="1">
          111
        </a-tab-pane>
        <a-tab-pane tab="借款方信息" key="2">
          222
        </a-tab-pane>
        <a-tab-pane tab="出借记录" key="3">
          333
        </a-tab-pane>
      </a-tabs>

    </div>

  </div>
</template>

<script>
export default {
  name: "order"
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
  :global {
    .ant-btn {
      height: 30px;
    }
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
  

  :global {
    .ant-tabs-nav-container {
      color: #666;
      font-size: 20px;
      font-family: "Microsoft YaHei";
    }
  }


}


</style>


