<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Sorry, the page you are looking for can't be found</p>
    <router-link to="/">Return to home</router-link>
  </div>
</template>
<script>
export default {
  name: 'NotFound.vue'
}
</script>
<style lang="scss" scoped>
.not-found {
  h1 {
    color: #3eaf7c;
    font-size: 72px;
    margin-bottom: 20px;
    line-height: 1;
  }
  p {
    color: #fff;
  }
  display: flex;
  min-height: calc(100vh - 80px);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
