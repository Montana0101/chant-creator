export default {
  // 唯一id
  uid() {
    const luck = Math.random() * 100
    const random = luck.toFixed(0)
    const time = new Date().getTime()
    return random + time
  }
}
