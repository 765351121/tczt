<template>
  <div>
    <div class="wrap">
      <div class="des-wrap">
        <span>散标</span>
        <span>散标是天辰智投向借款人（或企业）和出借人推出的网络借贷中介服务，全程由新网银行提供资金存管。</span>
      </div>
      <div class="rate-wrap">
        <div>
          <span>散标</span>
          <span>6.0-12.0%</span>
          <span>约定年化利率</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wrap {
  display: flex;
  justify-content: space-between;
  height: 240px;
}

.des-wrap {
  width: 71%;
  padding: 30px;
  border-top: 4px solid #349bff;
  background-color: #fff;
  & > span {
    display: block;
    &:first-child {
      font-size: 30px;
      font-family: "Microsoft YaHei";
      color: #333;
      margin-bottom: 20px;
    }
    &:last-child {
      color: #666;
      font-size: 14px;
      font-family: "Microsoft YaHei";
    }
  }
}

.rate-wrap {
  margin-left: 15px;
  flex: 1;
  background: url("../../../../../assets/images/product/list.png") no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    & > span {
      display: block;
      color: #fff;
      text-align: center;
      &:nth-child(1) {
        font-size: 30px;
      }
      &:nth-child(2) {
        font-size: 50px;
        margin: 10px 0;
      }
      &:nth-child(3) {
        font-size: 16px;
      }
    }
  }
}
</style>


