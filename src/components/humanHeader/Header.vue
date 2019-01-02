<template>
  <div class="iap-header">
    <el-menu
      :default-active="activeIndex"
      class="iap-el-menu"
      mode="horizontal"
      background-color="#041941"
      text-color="#fff"
      active-text-color="#66b1ff"
      router=router>
      <div style="float: left">
        <el-menu-item index="/home">
          <img
            src="./u6.png"
            alt=""
            class="iap-header-logo">
          <span class="iap-submenu-title">人事平台</span>
        </el-menu-item>
      </div>
      <el-submenu
        index="2">
        <template slot="title">人事档案</template>
        <el-row>
          <el-col :span="8">
            <p class="iap-submenu-header">合同信息</p>
            <el-menu-item index="/human-info">
              员工信息
            </el-menu-item>
            <el-menu-item index="/page404">
              员工合同
            </el-menu-item>
            <br>
            <p class="iap-submenu-header">员工设置</p>
            <el-menu-item index="/middleWare/redis">员工分组</el-menu-item>
            <el-menu-item index="/middleWare/zookeeper">员工标签</el-menu-item>
            <el-menu-item index="/middleWare/springCloud">共享记录</el-menu-item>
            <br>
          </el-col>
        </el-row>
      </el-submenu>
      <el-menu-item
        index="/results_app">服务报案</el-menu-item>
      <el-menu-item
        index="/activity_project">
        活动专题
      </el-menu-item>
      <el-menu-item
        index="/e/doc_center">文档中心</el-menu-item>
      <HeaderControl/>
    </el-menu>
  </div>
</template>

<script>
import HeaderControl from '@/components/humanHeader/HeaderControl'

export default {
  name: 'Header',
  components: {
    HeaderControl
  },
  data () {
    return {
      activeIndex: '0',
      router: true
    }
  },
  watch: {
    $route (to, from) {
      if (this.activeIndex !== to.path) {
        this.activeIndex = to.path
      }
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  a {
    text-decoration: none;
    color: #fff;
  }

  .iap-header {
    background-color: #191f27;
    height: 60px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    .iap-header-logo {
      width: 28px;
      height: 28px;
      margin: 0 15px;
    }
    .iap-submenu-title {
      padding-right: 50px;
      font-size: 18px;
    }
  }

  .iap-submenu-header {
    display: block;
    width: 175px;
    margin: 0px 20px 0px 20px;
    padding: 10px 0;
    color: #fff;
    border-bottom: 1px solid #555;
  }

  .el-menu--popup-bottom-start {
    .el-menu-item {
      width: 175px;
      padding-left: 20px !important;
      color: #999 !important;
    }
  }

  #app .el-menu--horizontal,
  body > .el-menu--horizontal {
    border: none !important;
  }

  .el-menu--horizontal {
    border: none !important;
  }

  #app .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
    background-color: #041941 !important;
    color: #66b1ff !important;
  }

  .el-menu--horizontal
  .el-menu--popup-bottom-start
  .el-menu-item:not(.is-disabled):hover {
    color: #66b1ff !important;
  }

  .el-menu--horizontal .el-submenu .el-submenu__title:hover {
    background-color: #041941 !important;
    color: #66b1ff !important;
  }

  .el-menu--popup-bottom-start {
    background-color: #11151c !important;
    .el-row {
      background-color: #11151c !important;
      .el-menu-item {
        background-color: #11151c !important;
      }
    }
  }
  .el-menu--horizontal .el-menu .el-menu-item,
  .el-menu--horizontal .el-menu .el-submenu__title {
    font-size: 12px;
  }
</style>
