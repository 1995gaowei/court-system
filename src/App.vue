<template>
  <div id="app">
    <header-wrapper></header-wrapper>
    <div class="main-content">
        <side-nav></side-nav>
        <div class="content">
          <el-card class="main-view">
            <router-view></router-view>
          </el-card>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderWrapper from '@/components/HeaderWrapper'
import SideNav from '@/components/SideNav'

export default {
  name: 'app',
  components: {
    HeaderWrapper, SideNav
  }
}
</script>

<style>
.content {
  margin:75px 20px 20px 320px;
}
.main-view {
  margin-top: 15px;
  min-height:500px;
}
</style>
