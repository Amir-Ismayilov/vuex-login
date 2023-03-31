import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    modules: {
      user: user,
    },
  })
}

export default createStore
