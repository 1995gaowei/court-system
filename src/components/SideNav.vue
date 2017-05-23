<template>
    <el-menu :router="true" default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
            <template slot="title"><i class="el-icon-menu"></i>1</template>
            <el-menu-item-group>
                <el-menu-item index="1-1"><i class="el-icon-d-arrow-right"></i>1-1</el-menu-item>
                <el-menu-item index="1-2"><i class="el-icon-d-arrow-right"></i>1-2</el-menu-item>
                <el-menu-item index="1-3"><i class="el-icon-d-arrow-right"></i>1-3</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>2</template>
            <el-menu-item-group>
                <el-menu-item index="2-1"><i class="el-icon-d-arrow-right"></i>2-1</el-menu-item>
                <el-menu-item index="2-2"><i class="el-icon-d-arrow-right"></i>2-2</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.el-menu {
    width: 300px;
    position: fixed;
    top:60px;
    bottom: 0;
    overflow-y: auto;
}
</style>