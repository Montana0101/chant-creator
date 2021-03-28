const userAgent = navigator.userAgent.toLowerCase()

export default {
  // 是否为ios
  isIOS() {
    return /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  },
  // 是否为iphonex
  isIphoneX() {
    if (this.isIOS()) {
      return screen.height == 812 && screen.width == 375
    }
  },
  // 是否为android
  isAndroid() {
    return userAgent.includes('android')
  },
  // 是否为微信
  isWechat() {
    return userAgent.includes('micromessenger')
  }
}
