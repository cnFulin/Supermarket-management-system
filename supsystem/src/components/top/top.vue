<template></template>


<script>
export default {};
</script>


<style lang='less'>
.el-header {
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
</style>
