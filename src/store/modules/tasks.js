import axios from 'axios'
import { Status } from '@/utils/config'

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
    },
    UPDATE_TASK(state, payload) {
      const index = state.tasks.indexOf(payload.task.value)
      state.tasks[index].status = payload.status
    }
  },
  actions: {
    getTasks({ commit }) {
      try {
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
      } catch (e) {
        throw new Error(e.message)
      }
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
    },
    updateTask({ commit }, params) {
      try {
        const urlId = params.task.value.id
        axios.put(`/tasks/${urlId}.json`, {
          title: params.task.value.title,
          status: params.status,
          date: params.task.value.date,
          description: params.task.value.description
        })
          .then((response) => {
            if (response.status === 200) {
              commit('UPDATE_TASK', params)
            }
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
    activeTasks: state => state.tasks.filter(t => t.status === Status.ACTIVE).length,
    getTaskById: state => id => state.tasks.find(t => t.id === id)
  }
}
