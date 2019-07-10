<template>
  <div class="root-scat">
    <div class="wrap">
      <div>
        <div class="title-wrap">
          <span>标的111</span>
          <span>发售中</span>
        </div>
        <div class="center_wrap">
          <span>5.8%</span>
          <span>出借期限30天</span>
        </div>
        <div class="bottom_wrap">
          <span>约定年化利率</span>
          <span>剩余可投3500.00元</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scat',
}
</script>

<style lang="less" scoped>
.wrap {
  width: 425px;
  height: 160px;
  background-color: #fff;
  padding: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: 2px 10px 10px rgba(102,102,102,0.06);
  transition: all 0.6s;
  &:hover{
    margin-top: -5px;
  }
  &>div {
    flex: 1;
  }
}

.title-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: inline-block;
    font-size: 16px;
    color: #333333;
    &:last-child {
      width: 50px;
      height: 20px;
      background-color: #1890ff;
      font-size: 14px;
      color: #fff;
      text-align: center;
      line-height: 20px;
      border-radius: 2px;
    }
  }
}

.center_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  span {
    flex: 1;
    display: inline-block;
    &:first-child {
      font-size: 40px;
      color: #ec2121;
    }
    &:last-child {
      align-self: flex-end;
    }
  }
}

.bottom_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    flex: 1;
    display: inline-block;
    font-size: 14px;
    &:last-child {
      align-self: flex-end;
      color: rgba(0,0,0,.65);
    }
  }
}


</style>


