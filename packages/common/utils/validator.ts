export default {
  // 手机号码
  isMobile(val: string) {
    return /^[1][0-9]{10}$/.test(val)
  }
}
