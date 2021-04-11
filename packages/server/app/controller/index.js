'use strict'

const Controller = require('egg').Controller

class IndexController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }
  // 保存模版
  async save() {
    const { ctx } = this
    const body = ctx.request.body
    const ret = await ctx.service.index.save(body)
    ctx.body = ret
  }
}

module.exports = IndexController
