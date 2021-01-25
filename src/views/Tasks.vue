<template>
  <h1 v-if="tasks.length === 0" class="text-white center">Задач пока нет</h1>
  <div v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasks }}</h3>
    <div v-if="tasks.length !== 0">
      <div class="card"
        v-for="task in tasks"
        :key="task.id"
      >
        <h2 class="card-title">
          {{task.title}}
          <AppStatus :type="task.status" />
        </h2>
        <p>
          <strong>
            <small>
              {{task.date}}
            </small>
          </strong>
        </p>
        <button class="btn primary" @click="$router.push({path: `/:${task.id}`})">Посмотреть</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {computed, onBeforeMount, onBeforeUpdate, toRefs} from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Tasks',
  components: { AppStatus },
  setup() {
    const store = useStore()

    const activeTasks = computed(() => store.getters['tasksModule/activeTasks'])
    const tasks = computed(() => store.state.tasksModule.tasks)

    return {
      activeTasks,
      tasks
    }
  }
}
</script>
