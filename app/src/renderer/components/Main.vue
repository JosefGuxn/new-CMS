<template>
  <div>
    <header class="header">
      <el-row>
        <el-col :span="6">
          <h1>Clinic</h1>
        </el-col>
        <el-col :span="18">
          <el-menu mode="horizontal" router>
            <el-menu-item index="/main/consultation">Khám bệnh</el-menu-item>
            <el-menu-item index="/">Thẩm mỹ</el-menu-item>
            <el-menu-item index="/">Thanh toán</el-menu-item>
            <el-menu-item index="/">Quản lý</el-menu-item>
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
    height: 100%;
  }

  .main-cnt {
    min-height: 100%;
  }
  .footer {
    height: 40px;
    padding: 10px;
  }
</style>
