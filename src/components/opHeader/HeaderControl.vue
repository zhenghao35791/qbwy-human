<template>
  <div class="iap-header-control">
    <el-menu-item
      class="iap-header-actions"
      index="">
      <div v-if="!isLogin">
        <div v-if="path">
          <span
            @click="Login"
            style="border-right: 1px solid #999;">登录</span>
          <span class="regist-link">
            <router-link to="/register/main">注册</router-link>
          </span>
        </div>
        <div v-else>
          <span
            @click="Login">已有账号？立即登录>></span>
        </div>
      </div>
      <div v-if="isLogin">
        <!--<span @click="jump('/shoppingCart')">-->
        <!--<img-->
        <!--class="cartImg"-->
        <!--src="../../assets/shoppingCart/cart.png">-->
        <!--<span class="cart-tag">new</span>-->
        <!--</span>-->
        <span>
          <a @click="jump('/e/order:personal')">我的订单</a>
        </span>
        <span v-if="!isConsole">
          <a @click="jumpToConsole">控制台</a>
        </span>
        <el-dropdown @command="jump">
          <span class="el-dropdown-link">
            {{ user.name }}
            <i class="el-icon-arrow-down el-icon--right"/>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :command="{name: 'personalCenter'}">个人中心</el-dropdown-item>
            <el-dropdown-item :command="{name: 'GroupManagement'}">
              项目组管理
            </el-dropdown-item>
            <!--增大点击区域-->
            <el-dropdown-item>
              <span
                @click="logout"
                style="padding: 5px;padding-left: 0;">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu-item>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
import api from '@/api'
export default {
  name: 'HeaderControl',
  props: {},
  data () {
    return {
      path: true,
      ueseId: 1
    }
  },
  watch: {
    $route (to, from) {
      if (to.path.indexOf('register') !== -1) {
        this.path = false
      } else {
        this.path = true
      }
    }
  },
  computed: {
    ...mapState({
      count: state => state.shopcart.count
    }),
    ...mapGetters({
      isLogin: 'system/isLogin',
      user: 'system/userInfo',
      isConsole: 'system/isConsole'
    })
  },
  methods: {
    ...mapActions({
      initNum: 'shopcart/initNum',
      gotoConsole: 'system/gotoConsole',
      leaveConsole: 'system/leaveConsole'
    }),
    ...mapMutations({
      clear: 'system/clear'
    }),
    Login () {
      api.user.getLoginUrl().then(data => {
        window.location.href = data
      })
    },
    logout () {
      this.$router.push('/logout')
    },
    jump (location) {
      this.leaveConsole()
      if (location) {
        this.$router.push(location)
      }
    },
    jumpToConsole () {
      this.gotoConsole()
      this.$router.push('/e/table_apply:personal')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.iap-header-control {
  overflow: hidden;
  .regist-link a {
    border-right: none !important;
    vertical-align: baseline;
  }
  .iap-header-actions {
    float: right !important;
    color: #fff !important;
    span {
      padding: 0px 10px;
      a {
        border-right: 1px solid #999;
        display: inline-block;
        min-height: 10px;
        line-height: 10px;
        padding-right: 10px;
      }
    }
    .cart-tag {
      background: red;
      color: #fff;
      border-radius: 10px;
      font-weight: 700;
      padding: 0 4px !important;
      font-size: 10px;
    }
    .cartImg {
      width: 18px;
      height: 18px;
    }
  }
}
.el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  display: none !important;
}
.el-dropdown {
  color: #fff !important;
}

.el-dropdown-menu {
  background-color: #191f27 !important;
  width: 120px;
  margin-top: 5px !important;
  border: none !important;
  .el-dropdown-menu__item {
    color: #fff;
  }
  .popper__arrow {
    display: none !important;
  }
}

.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #191f27 !important;
  color: #66b1ff;
}

.iap-header-actions span:hover,
.iap-header-actions a:hover {
  color: #66b1ff !important;
}

.el-menu--horizontal .iap-header-actions:hover {
  background-color: #041941 !important;
}
</style>
