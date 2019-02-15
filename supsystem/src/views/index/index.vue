<template>
  <div class="index">
    <el-container>
      <!-- 左侧导航栏 -->
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
            <el-menu-item index="/">系统信息</el-menu-item>
            <el-menu-item index="/sysconfig">系统配置</el-menu-item>
            <el-menu-item index="/addgroup">添加管理组</el-menu-item>
          </el-submenu>

          <!-- 第二 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-mobile-phone"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item index="/acountmange">账号管理</el-menu-item>
            <el-menu-item index="/addacount">添加账号</el-menu-item>
            <el-menu-item index="/passwordedit">密码修改</el-menu-item>
          </el-submenu>
          <!-- 第三 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="/addproducts">添加商品</el-menu-item>
            <el-menu-item index="/productsmange">商品管理</el-menu-item>
          </el-submenu>
          <!-- 第四 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-printer"></i>
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
            <el-menu-item index="/salesstatistics">销售统计</el-menu-item>
            <el-menu-item index="/stocktatistics">进货统计</el-menu-item>
          </el-submenu>
          <!-- 第七 -->
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-service"></i>
              <span>会员管理</span>
            </template>
            <el-menu-item index="/addvip">添加账号</el-menu-item>
            <el-menu-item index="/vipmange">账号管理</el-menu-item>
          </el-submenu>
          <!-- 第八 -->
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-rank"></i>
              <span>分类管理</span>
            </template>
            <el-menu-item index="/classifymange">分类管理</el-menu-item>
            <el-menu-item index="/addclassify">添加分类</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <!-- 右侧头部 -->
        <el-header>
          <el-row>
            <el-col :span="12">
              <span class="text" style="font-size:25px">华联超市管理系统欢迎您！</span>
            </el-col>

            <el-col :span="12" class="menu">
              <el-row>
                <el-col :span="18">
                  <el-dropdown trigger="click" placement="top">
                    <span class="el-dropdown-link">
                      {{username}}
                      <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>个人中心</el-dropdown-item>
                      <el-dropdown-item>修改密码</el-dropdown-item>
                      <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
                <el-col :span="6">
                  <div class="avator">
                    <img class="img" :src="avatorUrl" alt>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-header>
        <!-- 右侧中间内容 -->
        <el-main>
          <!-- 路由出口 -->
          <router-view/>
        </el-main>

        <!-- 右侧尾部 -->
        <el-footer>&copy;copyright 2019 华联超市管理系统</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "admin",
      avatorUrl: "http://127.0.0.1:8080/qz.jpg"
    };
  }
};
</script>


<style lang='less'>
.index {
  height: 100%;
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
    .el-header,
    .el-footer {
      height: 60px;
      line-height: 60px;
      background-color: #fff;
    }

    .el-header {
      border-bottom: 1px solid black;
      .text {
        font-weight: 50;
        color: #2d3a4b;
      }
      .el-col {
        .avator {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          text-indent: 20px;

          .img {
            width: 58px;
            height: 58px;
            border-radius: 50%;
          }
        }
      }
      .menu {
        text-align: right;
        .el-dropdown-link {
          color: #2d3a4b;
        }
      }
    }
    .el-footer {
      border-top: 1px solid black;
    }
  }
}
</style>

