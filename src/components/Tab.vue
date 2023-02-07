<template>
  <div class="mainLeft">
    <!-- <el-menu :default-openeds="['1', '3']"> 默认打开1和3 -->
    <el-menu router>
    <el-menu-item index="/home/first"><i class="el-icon-s-home"></i>&nbsp;<span>首&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;页</span></el-menu-item>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-user"></i>人员列表</template>
        <el-menu-item-group>
          <el-submenu index="1-1">
            <template slot="title">产研人员</template>
            <el-menu-item index="/peopleList/productPage">产品</el-menu-item>
            <el-menu-item index="/peopleList/developPage">开发</el-menu-item>
            <el-menu-item index="/peopleList/testpage">测试</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-submenu index="2-2">
            <template slot="title">运营人员</template>
            <el-menu-item index="/peopleList/testpage">产品运营</el-menu-item>
            <el-menu-item index="/peopleList/testpage">内容运营</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"
          ><i class="el-icon-s-operation"></i>需求内容</template
        >
        <el-menu-item-group>
          <el-menu-item index="/workList/parPage">产研</el-menu-item>
          <el-menu-item index="/workList/businessPage">运营</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"
          ><i class="el-icon-setting"></i>其他操作</template
        >
        <el-menu-item-group>
          <el-menu-item index="/peopleList/testpage">其他一</el-menu-item>
          <el-menu-item index="/peopleList/testpage">其他二</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
</script>
<style></style>
