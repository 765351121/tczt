<template>
  <div>
    <div class="wrap">
      <div class="content">
        <div class="img-wrap">
          <img src="@/assets/images/user/login.png" alt>
        </div>
        <div class="form-wrap">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-user-index"
};
</script>

<style lang="less" scoped>
.wrap {
  padding: 110px 0;
  .content {
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    //align-items: center;
  }
}
.form-wrap {
  background-color: #fff;
  width: 525px;
  min-height: 426px;
  padding: 50px 50px;
  border-radius: 5px;
}
</style>


