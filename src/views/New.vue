<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" v-model="title" id="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" v-model="date" id="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>
<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { Status } from '@/utils/config'
export default {
  name: 'New',
  setup() {
    const title = ref('')
    const date = ref('')
    const description = ref('')
    const store = useStore()

    const isValid = computed(() =>
      title.value.length !== 0 && date.value.length !== 0 && description.value.length !== 0)

    const createTask = () => {
      store.dispatch('tasksModule/createTask',  {
        title: title.value,
        date: date.value,
        description: description.value,
        status: Status.PENDING
      })
      title.value = ''
      date.value = ''
      description.value = ''
    }

    return {
      title,
      date,
      description,
      isValid,
      createTask
    }
  },
}
</script>
<style lang="scss">
.form-control label {
  display: flex;
  justify-content: flex-start;
}
</style>
