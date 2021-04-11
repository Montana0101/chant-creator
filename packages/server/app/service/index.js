const Service = require('egg').Service

class IndexService extends Service {
  // 保存模版
  async save(body) {
    const result = {
      code: 1,
      data: body,
      msg: 'success'
    }

    return result
  }
}

module.exports = IndexService
