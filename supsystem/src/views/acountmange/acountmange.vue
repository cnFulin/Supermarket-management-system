<template>
  <div class="acountmange">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>账号管理</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <!-- 单选框 -->
          <el-table-column type="selection" width="55"></el-table-column>

          <!-- 账号 -->
          <el-table-column prop="name" label="账号"></el-table-column>

          <!-- 用户组 -->
          <el-table-column prop="userGroup" label="用户组"></el-table-column>

          <!-- 日期 -->
          <el-table-column label="创建日期">
            <template slot-scope="scope">{{ scope.row.ctime }}</template>
          </el-table-column>

          <!-- 操作 -->
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">
                <i class="el-icon-edit"></i> 编辑
              </el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
                <i class="el-icon-delete"></i> 删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "张三",
          userGroup: "超级管理员",
          ctime: "2012-12-18"
        }
      ]
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit() {
      this.$router.push("passwordedit");
    }
  }
};
</script>

<style lang='less'>
.acountmange {
  .el-card {
    font-size: 20px;
    .el-card__header {
      background-color: #ccc;
    }
    .el-table {
      .name-wrapper {
        margin-left: 0;
      }
    }
  }
}
</style>
