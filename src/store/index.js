import { createStore } from 'vuex'
import taskStore from './modules/book-store'
import userStore from './modules/user-store'
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    taskStore,
    userStore,
  },
})

export default store
