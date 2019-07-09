<template>
  <div class="wrap">
    <a-carousel autoplay>
      <div><img src="@/assets/banner/1.png" alt=""></div>
      <div><img src="@/assets/banner/2.png" alt=""></div>
      <div><img src="@/assets/banner/3.png" alt=""></div>
      <div><img src="@/assets/banner/4.png" alt=""></div>
    </a-carousel>


  </div>
</template>

<script>
export default {
  namer: "banner"
};
</script>

<style lang="less" scoped>
.wrap {
  min-width: 1200px;
  overflow-x: visible;

  :global {
    .ant-carousel .slick-slide img {
      width: 100%;
      height: auto;
      
    }
    // .ant-carousel >>> .slick-slide {
    //   text-align: center;
    //   height: 160px;
    //   line-height: 160px;
    //   background: #364d79;
    //   overflow: hidden;
    // }

    // .ant-carousel >>> .slick-slide h3 {
    //   color: #fff;
    // }
  }


}

</style>


