<template>
  <div
    id="app"
    v-loading="isLoading">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
#app {
  height: inherit;
}
</style>
