'use strict'

module.exports = (app) => {
  const { router, controller } = app
  router.get('/', controller.index.index)
  // 保存模版
  router.post('/template/save', controller.index.save)
}
