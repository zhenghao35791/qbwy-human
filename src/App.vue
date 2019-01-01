<template>
  <div
    id="app"
    v-loading="isLoading">
    <opHeader />
    <div style="min-height:60px;"/>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import opHeader from '@/components/opHeader/Header.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('system')

export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route () {
      this.transitionName = 'slide-right'
    }
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  },
  components: {
    opHeader
  }
}
</script>

<style lang="scss">
  #app {
    height: inherit;
  }

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 300ms;
    position: absolute;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-fade-enter-active {
    transition: all 0.8s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
