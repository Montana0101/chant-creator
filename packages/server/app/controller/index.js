'use strict'

const Controller = require('egg').Controller

class IndexController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }
  // 保存模版
  async save() {}
}

module.exports = IndexController
