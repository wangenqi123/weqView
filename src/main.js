import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from '@/utils/axios'
import LeaderLine from 'leader-line-vue'

Vue.use(Axios)
Vue.use(LeaderLine)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
