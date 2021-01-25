import { createStore, createLogger } from 'vuex';
import axios from 'axios'
import { tasksModule } from './modules/tasks'

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    tasksModule
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
