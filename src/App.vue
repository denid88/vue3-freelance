<template>
  <AppNavBar />
  <div class="container with-nav">
    <router-view />
  </div>
</template>
<script>
import AppNavBar from '@/components/AppNavBar'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
export default {
  components: { AppNavBar },
  setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('tasksModule/getTasks')
    })
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
