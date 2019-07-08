<template>
    <div class="wrap">
      <div>
        <div>
          l
          <a-button type="primary">Button</a-button>
        </div>
        <div>r</div>
      </div>

    </div>
</template>

<script>
export default {
  name: 'golobalHeader',
}
</script>


<style lang="less" scoped>
  .wrap {
    background-color: #303438;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    &>div {
      width: 1200px;
      border: 1px solid #0ff;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &>div {
        &:first-child {
          border: 1px solid #f0f;
          flex: 1;
          text-align: left;
        }
        &:last-child {
          border: 1px solid #0f0;
          flex: 1;
          text-align: right;
        }
      }
    }

  }
</style>


