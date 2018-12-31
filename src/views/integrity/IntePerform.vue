<template>
  <h2>ddddd</h2>
</template>

<script>
// import api from '@/api'

export default {
  data () {
    return {
    }
  },
  computed: {},
  components: {
  },
  methods: {
    successMsg (msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'success'
      })
    },
    errorMsg (msg) {
      this.$message({
        showClose: true,
        message: msg,
        type: 'error'
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
</style>
