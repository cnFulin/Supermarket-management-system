<template>
    <el-aside width="200px" class="left">
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="rgb(64, 158, 255)"
          unique-opened
          :default-active="this.$route.path"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item index="/sysmessage">系统信息</el-menu-item>
            <el-menu-item index="/sysconfig">系统配置</el-menu-item>
            <el-menu-item index="/addgroup">添加管理组</el-menu-item>
          </el-submenu>

          <!-- 第二 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-mobile-phone"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item index="/addacount">添加账号</el-menu-item>
            <el-menu-item index="passwordedit">密码修改</el-menu-item>
          </el-submenu>
          <!-- 第三 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="/addgoods">添加商品</el-menu-item>
          </el-submenu>
          <!-- 第四 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-success"></i>
              <span>进货管理</span>
            </template>
            <el-menu-item index="/stockcontrol">库存管理</el-menu-item>
            <el-menu-item index="/Addinventory">添加库存</el-menu-item>
          </el-submenu>
          <!-- 第五 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-sold-out"></i>
              <span>出货管理</span>
            </template>
            <el-menu-item index="/salelist">销售列表</el-menu-item>
            <el-menu-item index="/Outboundgoods">商品出库</el-menu-item>
            <el-menu-item index="/Goodsreturn">商品退货</el-menu-item>
          </el-submenu>
          <!-- 第六 -->
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>统计管理</span>
            </template>
            <el-menu-item index="salesstatistics">销售统计</el-menu-item>
            <el-menu-item index="/stocktatistics">进货统计</el-menu-item>
          </el-submenu>
          <!-- 第七 -->
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-service"></i>
              <span>会员管理</span>
            </template>
            <el-menu-item index="/addvip">添加账号</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
</template>


<script>
export default {
    
}
</script>


<style lang='less'>
 .el-container {
    height: 100%;
    .left {
      width: 220px;
      height: 100%;
      background-color: #545c64;
      .el-menu {
        border: none;
      }
    }
 }
</style>
