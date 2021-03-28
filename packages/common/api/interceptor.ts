import shiki from './shiki'

// 请求拦截器
shiki.interceptors.request.use((config: RequestInit) => {
  return config
})
// 响应拦截器
shiki.interceptors.response.use((response: any) => {
  return response
})
