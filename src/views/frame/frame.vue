<template class="ComponentConfig">
  <frameView
    :name="name"
    :src="src"
  />
</template>

<script>
import frameView from '@/components/iFrame/FrameView.vue'

export default {
  components: { frameView },
  data () {
    return {
      name: 'dm',
      src: window.g.dmUrl
    }
  },
  created: function () {
  },
  methods: {
  }
}
</script>

<style>
</style>
