<template>
  <div>
    <div class="warp">
      <p class="title">充值</p>
      <div class="content">
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>系统支持的充值渠道有哪些？</span>
          </p>
          <p class="answer">用户可通过充值的渠道有快捷充值、网银充值。</p>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>充值是否有限额？</span>
          </p>
          <p class="answer">充值限额请查看充值页面限额说明，具体根据银行情况而定。</p>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>充值操作后是否可以撤销?</span>
          </p>
          <p class="answer">所有操作成功后均不可以撤销。</p>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>为什么会充值失败？</span>
          </p>
          <span class="answer answer-item">充值失败情况以及对应的解决方法：</span>
          <span class="answer answer-item">①您输入的验证码或交易密码错误：请输入正确的验证码或交易密码；</span>
          <span class="answer answer-item">②银行卡余额不足：请您更换银行卡充值；</span>
          <span class="answer answer-item">③充值超出限额：请联系银行查询及更改支付额度；</span>
          <span class="answer answer-item">④您的银行卡未开通网上银行：请前往银行柜台或通过银行官网进行开通；</span>
          <span class="answer answer-item">⑤充值页面提示需要开通银联在线支付业务：请您开通银联在线支付业务后再尝试充值，开通链接：</span>
          <a
            class="answer answer-item"
            href="https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay"
            target="_blank"
            style="color: #1890ff;"
          >https://www.95516.com/static/union/pages/card/openFirst.html?entry=openPay</a>
          <span class="answer answer-item">⑥页面提示超时或网络不稳定：请您切网络或者稍后再重试；</span>
          <span class="answer answer-item">⑦验证码接收不到：请您检查手机短信屏蔽设置，或联系客服核实验证码发送情况；</span>
          <span class="answer answer-item">⑧银行数据传输异常，导致订单超时等情况：需要刷新页面重新操作；</span>
          <span class="answer answer-item">⑨银行卡已过期、作废、挂失：请更换银行卡或将绑定银行状态恢复正常；</span>
          <span class="answer answer-item">⑩没有跳转到充值页面：请您检查是否浏览器拦截了弹出的页面，或者更换浏览器尝试。</span>
          <span class="answer answer-item">《温馨提示》如您有遇到其他问题或以上方法未能解决问题，请联系人工客服。</span>
        </div>
        <div class="question-wrap">
          <p class="question">
            <img src="@/assets/images/support/question.png" alt>
            <span>充值多长时间到账？</span>
          </p>
          <p class="answer">充值为即时到账，如果银行提示扣款之后账户余额没有相应增加，系统延迟会在10-30分钟后到账，到账后不影响正常使用；如遇银行系统超时导致掉单：会在对账后7个工作日内操作退款。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-support-recharge"
};
</script>

<style lang="less" scoped>
.warp {
  .title {
    font-family: MicrosoftYaHei;
    font-size: 18px;
    color: #333;
    line-height: 21px;
    margin-bottom: 30px;
  }
}
.question-wrap {
  &:not(:first-child) {
    margin-top: 30px;
  }
  .question {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & > span {
      display: inline-block;
      padding-left: 10px;
      font-family: MicrosoftYaHei;
      font-size: 14px;
      color: #333;
    }
  }
  .answer {
    font-family: MicrosoftYaHei;
    font-size: 14px;
    color: #666;
    padding-left: 23px;
  }
  .answer-item {
    display: block;
    padding-top: 5px;
  }
}
</style>

