<template>
  <div class="classify">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>分类管理</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item"></div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="分类名称" width="800">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="管理">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "日用品",
        },
         {
          name: "__舒肤佳",
        },
         {
          name: "__舒肤佳A",
        },
         {
          name: "_舒肤佳B",
        },
         {
          name: "食品",
        },
         {
          name: "_优乐美",
        },
         {
          name: "烟酒",
        },
         {
          name: "__龙凤呈祥",
        },
         {
          name: "__茅台",
        },
         
      ]
    };
  }
};
</script>

<style lang="less">
.classify {
  .el-card {
    font-size: 20px;
      .el-card__header{
          background-color: #ccc;
      }
  }
}
</style>
