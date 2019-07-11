import message from 'ant-design-vue/es/message'

//检查请求结果的错误码
export function checkErrorCode(result) {
  if (result) {
    let { status, info } = result;
    let msg = '';
    if (status === 0) {
      return true
    } else {
      msg = info || "请求错误,请稍后重试";
      if (status === 100021) {
        message.info(msg);
      } else if(status === 500010){
        message.error(msg);
        setTimeout(()=>{
          window.history.back(-1);
        }, 500)
      } else {
        message.error(msg);
      }
      return false
    }
  }
}