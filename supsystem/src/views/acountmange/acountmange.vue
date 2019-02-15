<template>
  <div class="acountmange">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>账号管理</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="用户名称" width="520">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="用户组" width="480">
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <span>{{ scope.row.userGroup }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
          userGroup: "超级管理员"
        }
      ]
    };
  },
  methods:{
      handleEdit(){
          this.$router.push('passwordedit')
      }
  }
};
</script>

<style lang='less'>
.acountmange {
  .el-card {
    font-size: 20px;
    .el-card__header{
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
