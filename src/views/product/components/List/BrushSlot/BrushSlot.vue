<template>
  <div>
    <div class="wrap">
      <a-radio-group v-model="value" @change="handleChange" buttonStyle="solid">
        <div class="radio-button-wrap" :style="bodyStyle">
          <span class="radio-span" v-for="(item, index) in radios" :key="index">
            <a-radio-button :value="item.value">{{item.name}}</a-radio-button>
          </span>
        </div>
      </a-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "T-BrushSlot",
  props: {
    radios: {
      type: Array,
      required: true,
      default: () => []
    },
    bodyStyle: {
      type: Object,
      required: false,
      default: () => {}
    },
    onChange: {
      type: Function,
      required: false,
      default: () => new Function
    }
  },
  data() {
    return {
      value: this.radios[0].value
    };
  },
  methods: {
    handleChange(e) {
      this.value = e.target.value
      this.onChange(e.target.value)
    }
  },
};
</script>

<style lang="less" scoped>
.wrap {
  /deep/ .ant-radio-group {
    display: block;
    line-height: 0;
  }
  /deep/ .ant-radio-button-wrapper {
    border: none;
  }
  /deep/ .ant-radio-button-wrapper {
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
  }
}

.radio-button-wrap {
  .radio-span {
    display: inline-block;
    width: 100px;
    text-align: center;
  }
}
</style>

