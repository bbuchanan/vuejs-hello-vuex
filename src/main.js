// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      {
        task: 'Task 1',
        completed: true
      },
      {
        task: 'Task 2',
        completed: false
      }
    ]
  },
  getters: {
    todos: state => state.todos
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store: store,
  computed: {
    todos: function() {
      return this.$store.todos
    }
  }
})
