import { createStore } from 'vuex'
import app from './module/app'
import editor from './module/editor'
import user from './module/user'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { app, editor, user }
})
