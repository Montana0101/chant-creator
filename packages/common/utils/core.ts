import apiCode from '../api/code'
import { Result } from '../api/shiki'

export default {
  // 对象数组去重
  distinct(arr: [], field = 'id') {
    const res = new Map()
    return arr.filter(
      (item) => !res.has(item[field]) && res.set(item[field], 1)
    )
  },
  // 简单数组去重
  sole(arr: []) {
    return Array.from(new Set(arr))
  },
  clone(row: object) {
    return JSON.parse(JSON.stringify(row))
  },
  // 防抖
  debounce(fn: Function, time = 200) {
    let timer: any
    return () => {
      timer !== null && clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this)
      }, time)
    }
  },
  // 节流
  throttle(fn: Function, time = 200) {
    let timer: any
    return () => {
      if (!timer) {
        timer = setTimeout(() => {
          fn.apply(this)
          timer = 0
        }, time)
      }
    }
  },
  // 是否处于浏览器中
  isBrowser() {
    return typeof window !== 'undefined'
  },
  // 是否为空
  isEmpty(data: any) {
    if (data === 0) {
      return false
    }
    if (!data) {
      return true
    }
    const keys = Object.keys(data)
    if (!keys.length) {
      return true
    }
    if (Array.isArray(data) && !data.length) {
      return true
    }
  },
  // 判断接口是否成功
  isSuccess(ret: Result | any): boolean {
    if (ret) {
      return [ret.code, ret].includes(apiCode.success)
    }
    return false
  },
  // 是否为生产环境
  isProd() {
    const stage = import.meta.env.STAGE
    if (stage === 'prod') {
      return true
    }
  }
}
