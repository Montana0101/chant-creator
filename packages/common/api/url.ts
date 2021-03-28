type stageType = 'dev' | 'test' | 'prod' | 'local'
// dev,test,prod,local
const stage = import.meta.env.MODE as stageType

const devUrl = {
  base: 'https://dev.com/api/',
  order: 'https://dev.order.com/api/'
}

const testUrl = {
  base: 'https://test.com/api/',
  order: 'https://test.order.com/api/'
}

const prodUrl = {
  base: 'https://prod.com/api/',
  order: 'https://order.com/api/'
}

const localUrl = {
  base: 'http://money-online-api.test/api/',
  order: 'http://order.money-online-api.test/api/'
}

const stageMap = {
  dev: devUrl,
  test: testUrl,
  prod: prodUrl,
  local: localUrl
}
const apiUrl = stageMap[stage]

export default apiUrl
