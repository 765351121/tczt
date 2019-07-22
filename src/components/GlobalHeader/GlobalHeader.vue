<template>
    <div class="wrap">
      <div>
        <div>
          <img src="@/assets/icons/hot_line.png" alt="" width="14px" height="14px">
          <span style="margin-left: 5px">400-085-6566(工作日 9:00-18:00)</span>
        </div>
        <div>
          <span><router-link to="/user/login">登录</router-link></span>|
          <span><router-link to="/user/register">注册</router-link></span>|
          <span>帮助中心</span>
          <span>
            <i><img src="@/assets/icons/rmb.png" alt=""></i>
            我要借款
          </span>
        </div>
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
    overflow-x: visible;
    min-width: 1200px;
    background-color: #303438;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 14px;
    &>div {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &>div {
        &:first-child {
          flex: 1;
          text-align: left;
        }
        &:last-child {
          flex: 1;
          text-align: right;
          &>span {
            display: inline-block;
            padding: 0 8px;
            cursor: pointer;
            &:last-child {
              margin-left: 20px;
              i {
                display: inline-block;
                position: relative;
                width: 14px;
                height: 14px;
                img {
                  position: absolute;
                  top: 1px;
                  left: 0;
                }
              }
            }
            a {
              color: #fff;
              text-decoration: none;
            }
          }
        }
      }
    }

  }
</style>


