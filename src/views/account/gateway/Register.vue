<template>
  <div>
    <div class="wrap">
      <p class="title">开户</p>
      <p class="des">XX智投正式接入XX银行存管系统</p>
      <p class="tips">为保障您的资金安全，需先开通存管账户</p>
      <div class="form-wrap">
        <a-form :form="form" @submit="handleSubmit">
          <a-form-item label="真实姓名" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <a-input
              maxlength="20"
              placeholder="请输入真实姓名"
              v-decorator="['realName', {
                rules: [{
                  pattern: $utils.default.regexp.nameZN,
                  validator: validateRealName,
                }],
                validateTrigger: 'onSubmit'
              }]"
            />
          </a-form-item>

          <a-form-item label="身份证号" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <a-input
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 12 }"
              maxlength="18"
              placeholder="请输入身份证号"
              v-decorator="['idNum', {
                rules: [{
                  pattern: $utils.default.regexp.idCard,
                  validator: validateIdNum,
                }],
                validateTrigger: 'onSubmit'
              }]"
            />
          </a-form-item>
          <div class="btn-wrap">
            <a-button
              type="primary"
              block
              :loading="loading"
              :disabled="!(form.getFieldValue('realName') && form.getFieldValue('idNum'))"
              html-type="submit"
            >下一步</a-button>
          </div>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import { stringify } from 'qs';
import {
  checkErrorCode,
  encryptAES,
  handleWebStorage,
  tmPhone,
  goBack
} from "@/utils/utils";

export default {
  name: "T-account-gateway-register",
  data() {
    return {
      form: this.$form.createForm(this),
      loading: false,
      disabled: false
    };
  },
  methods: {
    toOpenAccount(response) {
      const { requestParam, requestUrl } = response.data;
      let urlParm = stringify(JSON.parse(requestParam || "{}"));
      let targetUrl = `${requestUrl}?${urlParm}`;
      window.location.href = targetUrl
    },
    getGatewayInfo(values, response) {
      const { encryInfo, randomId } = response.data;
      //const { realName, idNum } = encryptAES({ ...values }, encryInfo);
      const { realName, idNum } = values
      this.$store
        .dispatch({
          type: "gateway/getOpenAccountInfo",
          payload: {
            randomId,
            realName,
            idNum,
            platform: "pc"
          }
        })
        .then(response => {
          if (!checkErrorCode(response)) {
            return false;
          }
          this.loading = false
          this.toOpenAccount(response);
        });
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!!err) {
          return false;
        }
        this.loading = true
        this.$store
          .dispatch({
            type: "getEncryInfo",
            payload: {}
          })
          .then(response => {
            if (!checkErrorCode(response)) {
              return false;
            }
            this.getGatewayInfo(values, response);
          });
      });
    },
    validateIdNum(rule, value, callback) {
      if (!rule.pattern.test(value)) {
        return callback(
          <span>
            <a-icon
              type="exclamation-circle"
              theme="twoTone"
              twoToneColor="#f5222d"
            />
            &nbsp;请输入正确的身份证号
          </span>
        );
      }
      return callback();
    },
    validateRealName(rule, value, callback) {
      if (!rule.pattern.test(value)) {
        return callback(
          <span>
            <a-icon
              type="exclamation-circle"
              theme="twoTone"
              twoToneColor="#f5222d"
            />
            &nbsp;请输入正确的姓名
          </span>
        );
      }
      return callback();
    }
  },
};
</script>

<style lang="less" scoped>
.wrap {
  background-color: #fff;
  min-height: 60vh;
  margin: 30px 0;
  padding: 78px;
  & > p {
    margin-bottom: 0;
    text-align: center;
  }
  .title {
    font-weight: normal;
    font-size: 20px;
    margin-bottom: 42px;
  }
  .des {
    font-size: 22px;
    color: #333;
    margin-bottom: 24px;
  }
  .tips {
    font-size: 14px;
    color: #999;
  }
}
.form-wrap {
  width: 380px;
  margin: 50px auto 0;
  /deep/ .ant-input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    //font-size: 16px;
    &:focus {
      border-color: #d9d9d9;
      box-shadow: none;
    }
    &:hover {
      border-color: #d9d9d9;
    }
  }
  /deep/ .ant-form-item-label label {
    font-size: 14px;
    color: #666;
    &::after {
      //display: none;
      content: "";
    }
  }
}
.btn-wrap {
  margin-top: 64px;
  margin-bottom: 100px;
}
</style>

