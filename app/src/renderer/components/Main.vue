<template>
  <div>
    <header class="header">
      <el-row>
        <el-col :span="4">
          <h1>Clinic</h1>
        </el-col>
        <el-col :span="20">
          <el-menu theme="dark" class="nav-menu" mode="horizontal" router>
            <el-menu-item class="nav-item" index="/"><span>Quản Lý</span></el-menu-item>
            <el-menu-item class="nav-item" index="/"><span>Thanh Toán</span></el-menu-item>
            <el-menu-item class="nav-item" index="/"><span>Thẩm Mỹ</span></el-menu-item>
            <el-menu-item class="nav-item" index="/main/consultation"><span>Khám Bệnh</span></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <div class="main-cnt">
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
  .header {
    height: 80px;
  }
  .el-row {
    height: 80px;
  }
  .nav-menu {
    height: 80px;
  }
  .nav-item {
    height: 80px;
    font-size: 20px;
    float: right;
  }
  .nav-item span {
    vertical-align:-10px;
  }
  .main-cnt {
    min-height: 100%;
  }
  .footer {
    height: 40px;
    padding: 10px;
  }
</style>
