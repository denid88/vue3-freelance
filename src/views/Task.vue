<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div class="actions">
      <button class="btn" @click="setStatus(Status.ACTIVE)">Взять в работу</button>
      <button class="btn primary" @click="setStatus(Status.DONE)">Завершить</button>
      <button class="btn danger" @click="setStatus(Status.CANCELLED)">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>Tут АЙДИ</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useRoute  } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { Status } from '../utils/config'
export default {
  name: 'Task',
  components: { AppStatus },
  setup() {
    const route = useRoute()
    const store = useStore()
    const id = route.params.id.replace(':', '')

    const task = computed(() => store.getters['tasksModule/getTaskById'](id))

    const setStatus = (status) =>
      store.dispatch('tasksModule/updateTask', {task, status})

    return {
      task,
      Status,
      setStatus
    }
  }
}
</script>
