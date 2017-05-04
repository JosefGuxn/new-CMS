<template>
  <div class="clinic-cnt">     
    <el-menu class="sidebar" theme="dark" router>
      <el-menu-item index="/main/clinic/consultation"><i class="el-icon-menu"></i></el-menu-item>
      <el-menu-item index="/"><i class="el-icon-setting"></i></el-menu-item>
    </el-menu>
    <router-view class="router-view"></router-view> 
  </div>
</template>

<script>
</script>

<style>
  .clinic-cnt {
    height: 100%;
    width: 100%;
    display: flex;
  }
  .sidebar {
    width: 60px;
  }
  .router-view {  
    flex: 1 100%;
  }
</style>
