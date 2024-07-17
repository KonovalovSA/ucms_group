import { createStore } from 'vuex'

const api = 'https://pokeapi.co/api/v2/pokemon/'

export default createStore({
  state: {
    itemList: '',
    item: '',
    error: '',
    loader: false
  },
  getters: {
    getItem (state) {
      return state.item
    },
    getItemList (state) {
      return state.itemList
    },
    getLoader (state) {
      return state.loader
    },
    getError (state) {
      return state.error
    }
  },
  mutations: {
    setItem (state, item) {
      state.item = item
    },
    setItems (state, items) {
      state.itemList = items
    },
    setLoader (state, boolean) {
      state.loader = boolean
    },
    setError (state, str) {
      state.error = str
    }
  },
  actions: {
    async takeItemOrItems (context, param) {
      console.log(param)
      context.commit('setLoader', true)
      if (param) {
        const response = await fetch(api + param)
        if (response.ok) {
          const json = await response.json()
          context.commit('setItem', json)
          context.commit('setLoader', false)
        } else {
          context.commit('setError', 'Параметры запроса неверные, либо ошибка сервера')
          context.commit('setLoader', false)
        }
      } else if (!context.state.itemList) {
        const response = await fetch(api + '?limit=100000')
        if (response.ok) {
          const json = await response.json()
          context.commit('setItems', json.results)
          context.commit('setLoader', false)
        } else {
          context.commit('setError', 'Параметры запроса неверные, либо ошибка сервера')
          context.commit('setLoader', false)
        }
      }
    }
  },
  modules: {
  }
})
