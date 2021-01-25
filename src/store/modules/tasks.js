import axios from 'axios'

export const tasksModule = {
  namespaced: true,
  state: {
    tasks: []
  },
  mutations: {
    GET_TASKS(state, payload) {
      console.log(payload)
      state.tasks = payload
    },
    CREATE_TASK(state, payload) {
      state.tasks.push(payload)
    }
  },
  actions: {
    getTasks({ commit }) {
      axios.get('/tasks.json')
        .then((response) => {
          if (response.status === 200) {
            const tasks = Object.entries(response.data).map(([key, value]) => {
              value.id = key
              return value
            })
            commit('GET_TASKS', tasks)
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    createTask({ commit }, params) {
      try {
        axios.post('/tasks.json', params)
          .then((response) => {
            params.id = response.data.name
            commit('CREATE_TASK', params)
          })
          .catch((e) => {
            console.log(e)
          })
      } catch (e) {
        throw new Error(e.message)
      }
    }
  },
  getters: {
    activeTasks: state => state.tasks.filter(t => t.status === 'active').length
  }
}
