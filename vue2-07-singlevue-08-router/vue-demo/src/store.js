import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION} from '@/type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //  自定义的共享状态
    isTabbarshow: true,
    comingList: []
  },
  getters: {
    commingListGetter (state) {
      return state.comingList.filter((item, index) => index < 3)
    }
  },
  mutations: {
    HideMaizuoTabbar (state, data) {
      console.log('Hide Maizuo Tabbar')
      console.log(state)
      state.isTabbarshow = data
    },
    ShowMaizuoTabbar (state, data) {
      console.log('Show Maizuo Tabbar')
      console.log(state)
      state.isTabbarshow = data
    },
    comingListMutation (state, data) {
      state.comingList = data
    },
    [HIDE_TABBAR_MUTATION] (state, data) {
      state.isTabbarshow = data
    },
    [SHOW_TABBAR_MUTATION] (state, data) {
      state.isTabbarshow = data
    }
  },
  actions: {
    //  异步处理在这里
    getComingListAction (store) {
      axios({
        url: '/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=6672414',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16677412194794789820104705"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        store.commit('comingListMutation', res.data.data.films)
      })
    }
  }
})
