<template>
  <el-container >
  <!-- <el-aside width="200px" style="background-color: yellow"> -->
  <el-aside width="200px">
    <Tab />
  </el-aside>
  
  <el-container>
    <el-header class="contain-style">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>设置</span>
    </el-header>
    
    <el-main>
      <router-view :key="new Date().getTime()"/>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import Tab from "@/components/Tab.vue";
  export default {
    components :{Tab},
    data(){
     return{
      
     }
    }
  };
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  .contain-style{
    font-size: 12px;
    text-align: right;
    background: url("~@/assets/icon/pageicon.jpeg") left no-repeat;
    background-size: contain;
    background-color:#B3C0D1;
  }
</style>