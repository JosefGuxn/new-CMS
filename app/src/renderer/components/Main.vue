<template>
  <div class="main-cnt">
    <header class="header">
      <el-menu theme="dark" class="nav-menu" mode="horizontal" router>
        <el-menu-item class="nav-item" index="/main/consultation"><span>Khám Bệnh</span></el-menu-item>
        <el-menu-item class="nav-item" index="/"><span>Thẩm Mỹ</span></el-menu-item>
        <el-menu-item class="nav-item" index="/"><span>Thanh Toán</span></el-menu-item>
        <el-menu-item class="nav-item" index="/"><span>Quản Lý</span></el-menu-item>
      </el-menu>
    </header>
    <div class="workspace">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div>Something here.</div>
    </footer>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .main-cnt {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header {
    height: 70px;
  }
  .nav-menu {
    display: flex;
    justify-content: center;
  }
  .nav-item {
    height: 100%;
    font-size: 20px;
  }
  .nav-item span {
    vertical-align:-5px;
  }
  .workspace {   
    flex: 1;
  }
  .footer {
    height: 25px;
  }
</style>
