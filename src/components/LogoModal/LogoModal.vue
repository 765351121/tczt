<template>
  <div>
    <div class="wrap">
      <a-modal
        :width="width"
        :visible="cvisible"
        :destroyOnClose="true"
        :maskClosable="false"
        :footer="null"
        wrapClassName="logo-modal-wrap"
        @cancel="handleCancel"
        :afterClose="afterClose"
      >
        <div class="content">
          <div class="logo-wrap">
            <img src="@/assets/logo/logo_blue.png" alt>
            <span></span>
            <img src="@/assets/logo/logo_xw.png" alt>
          </div>
          <div class="slot-wrap">
            <slot></slot>
          </div>
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-logo-modal",
  props: {
    width: {
      type: Number,
      required: false,
      default: 600
    },
    visible: {
      type: Boolean,
      required: true,
      default: false
    },
    onCancel: {
      type: Function,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      cvisible: this.visible
    };
  },
  methods: {
    afterClose() {
      if (typeof this.onCancel == "function") {
        return this.onCancel();
      }
    },
    handleCancel() {
      this.cvisible = false;
    }
  },
  watch: {
    visible() {
      this.cvisible = this.visible;
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  .logo-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
      display: inline-block;
      &:nth-of-type(1) {
        width: 98px;
        height: 26px;
      }
      &:nth-of-type(2) {
        display: inline-block;

        width: 144px;
        height: 21px;
      }
    }
    & > span {
      display: inline-block;
      margin-left: 20px;
      margin-right: 20px;
      padding: 10px 1px 15px 0;
      height: 30px;
      background: #ededed;
    }
  }
}
.slot-wrap {
  margin-top: 30px;
  min-height: 100px;
}
</style>

