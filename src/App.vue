<template>
  <div id="app" style="height: 100%;">
    <div v-if="isLogin">
      <header-wrapper></header-wrapper>
      <div class="main-content">
          <side-nav></side-nav>
          <div class="main-view">
            <option-tab></option-tab>

            <router-view></router-view>
          </div>
      </div>
    </div>
    <login v-else></login>
  </div>
</template>

<script>
import Login from '@/views/Login'
import HeaderWrapper from '@/components/HeaderWrapper'
import SideNav from '@/components/SideNav'
import OptionTab from '@/components/OptionTab'

import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    HeaderWrapper, SideNav, OptionTab, Login
  },
  computed: mapState([
    'isLogin'
  ]),
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.main-content {
  padding-top: 70px;
}
.main-view {
  padding: 10px 10px 10px 250px;
}


#fyTable .cell {
  padding-left: 5px;
  padding-right: 5px;
}

#fyTable th {
  height: 30px;
  text-align: center;
}

#SPTSCourtTable th {
  text-align: center;
}
</style>
