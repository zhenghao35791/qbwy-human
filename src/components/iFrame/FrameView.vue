<template>
  <div class="frameView">
    <iframe
      v-show="iframeState"
      class="iframeView"
      id="show-iframe"
      :name=name
      :src=src
      :height=iframeHeight
      :width=iframeWidth
      scrolling=auto
      frameborder=0 />
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    name: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      iframeState: true
    }
  },
  computed: {
    iframeWidth: function () {
      const deviceWidth = document.documentElement.clientWidth
      return deviceWidth + 'px'
    },
    iframeHeight: function () {
      const deviceHeight = document.documentElement.offsetHeight
      return deviceHeight + 'px'
    }
  },
  methods: {
  }
}
</script>
<style lang="scss">

</style>
