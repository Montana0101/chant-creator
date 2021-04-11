import qs from 'qs'
import { Toast } from 'vant'
import core from '../utils/core'
import apiUrl from './url'
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch'

// 返回类型枚举
enum ResponseType {
  Code,
  Data,
  All
}
// 请求方法
enum Method {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE'
}
// 返回结果
interface Result {
  code: number
  data: any
  msg: string
}
// 请求配置
interface RequestConfig {
  url?: string
  params?: object | boolean
  body?: object | string | boolean
  timeout?: number
  method?: Method
  headers?: HeadersInit
  responseType?: ResponseType
  tip?: boolean
}
// 消息提示配置
interface MessageConfig {
  requestConfig: RequestConfig
  response?: Response
  result?: Result
  error?: Error
}

class Shiki {
  // 基础请求url
  private baseurl = apiUrl.base
  // 请求拦截器
  private requestInterceptors: Function[] = []
  // 响应拦截器
  private responseInterceptors: Function[] = []
  // 拦截器
  interceptors = {
    request: {
      use: (callback: Function) => {
        this.requestInterceptors.push(callback)
      }
    },
    response: {
      use: (callback: Function) => {
        this.responseInterceptors.push(callback)
      }
    }
  }

  // get请求
  async get(url: string, config: RequestConfig): Promise<any> {
    config.url = url
    config.method = Method.Get
    // params不可能是boolean值,如果是则说明他代表tip
    if (typeof config.params === 'boolean') {
      config.tip = config.params
      delete config.params
    }
    // 参数拼接在url里面
    if (config.params) {
      const params = qs.stringify(config.params)
      config.url = `${config.url}?${params}`
    }
    // 发送http请求
    return await this.fetchRequest(config)
  }
  // get请求(返回code)
  async getCode(
    url: string,
    params?: object | boolean,
    tip = true
  ): Promise<any> {
    const config = {
      url,
      params,
      tip,
      responseType: ResponseType.Code
    }
    return await this.get(url, config)
  }
  // get请求(返回结果)
  async getData(
    url: string,
    params?: object | boolean,
    tip = true
  ): Promise<any> {
    const config = {
      url,
      params,
      tip,
      responseType: ResponseType.Data
    }
    return await this.get(url, config)
  }
  // post请求
  async post(url: string, config: RequestConfig): Promise<any> {
    config.url = url
    config.method = Method.Post
    // body不可能是boolean值,如果是则说明他代表tip
    if (typeof config.body === 'boolean') {
      config.tip = config.body
      delete config.body
    }
    if (!config.headers) {
      config.headers = {
        'content-type': 'application/json'
      }
    }
    // 发送http请求
    return await this.fetchRequest(config)
  }
  // post请求(返回code)
  async postCode(
    url: string,
    body?: object | boolean,
    tip = true
  ): Promise<any> {
    const config = {
      url,
      body,
      tip,
      responseType: ResponseType.Code
    }
    return await this.post(url, config)
  }
  // post请求(返回结果)
  async postData(url: string, body?: object, tip = true): Promise<any> {
    const config = {
      url,
      body,
      tip,
      responseType: ResponseType.Data
    }
    return await this.post(url, config)
  }
  // 上传文件
  async upFile(url: string, body: FormData, tip = true) {
    const config = {
      url,
      body,
      tip,
      responseType: ResponseType.All,
      headers: { 'content-type': 'multipart/form-data' }
    }
    return await this.post(url, config)
  }
  // fetch请求
  private async fetchRequest(config: RequestConfig) {
    const controller = new AbortController()
    const signal = controller.signal
    const timeout = config.timeout || 10000
    // fetch
    try {
      let response = await Promise.race([
        this.timeoutSetting(timeout, controller),
        this.fetchSend(config, signal)
      ])
      if (response.status !== 200) {
        // 消息提示
        this.message({ requestConfig: config, response })
        throw new Error(response.statusText)
      }
      response = await response.json()
      // 结果转化
      let result: Result = response as any
      // 消息提示
      this.message({ requestConfig: config, result })
      // 返回结果处理
      result = await this.responseProcess(result, config)
      return result
    } catch (error) {
      console.error(error)
      // 消息提示
      this.message({ requestConfig: config, error })
      // TODO: 上报错误日志
    }
  }
  // 超时设置
  private timeoutSetting(
    timeout: number,
    controller: AbortController
  ): Promise<Response> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new Response('timeout', { status: 504, statusText: 'timeout' }))
        controller.abort()
      }, timeout)
    })
  }
  // fetch实际发出请求
  private async fetchSend(
    config: RequestConfig,
    signal: AbortSignal
  ): Promise<Response> {
    // 请求配置
    let requestInit: RequestInit = {
      signal,
      mode: 'cors',
      method: config.method,
      headers: config.headers,
      body: JSON.stringify(config.body)
    }
    // 请求拦截器
    this.requestInterceptors.forEach((callback) => {
      requestInit = callback(requestInit)
    })
    // 请求地址拼接
    let url = config.url || ''
    if (url.indexOf('http') !== 0) {
      url = `${this.baseurl}${url}`
    }
    let response = await fetch(url, requestInit)
    // 响应拦截器
    this.responseInterceptors.forEach((callback) => {
      response = callback(response)
    })
    return response
  }
  // 消息提示
  private message(config: MessageConfig) {
    const { requestConfig, result, error, response } = config
    // tip为false不提示
    if (requestConfig.tip === false) {
      return
    }
    // 请求是否成功
    const isSuccess = core.isSuccess(result)
    // 请求成功不提示
    if (isSuccess) {
      return
    }
    // get请求成功默认不显示提示
    if (requestConfig.method === Method.Get && isSuccess) {
      return
    }
    let messageText = result?.msg
    if (error) {
      messageText = error.toString()
    }
    if (response) {
      messageText = response.statusText
    }
    // 生产环境提示文本
    if (core.isProd() && !result) {
      messageText = '系统繁忙,请稍后再试'
    }
    Toast({
      message: messageText,
      type: result ? 'text' : 'fail'
    })
  }
  // 返回结果处理
  private responseProcess(result: Result, config: RequestConfig): any {
    const responseType = config.responseType
    // 返回code
    if (responseType === ResponseType.Code) {
      return result.code
    }
    // 返回data
    if (responseType === ResponseType.Data) {
      return result.data
    }
    // 返回全部
    return result
  }
}

export { Result, Shiki }
export default new Shiki()
