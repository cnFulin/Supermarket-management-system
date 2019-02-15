<template>
  <div class="vipmange">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">会员管理</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item"></div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="65px"
        class="demo-ruleForm"
        size="mini"
      >
        <el-form-item label="搜索" prop="search">
          <el-input v-model="ruleForm.search"></el-input>
          <span>会员卡,会员名,电话,手机</span>
          <el-button type="success" @click="submitForm('ruleForm')">查询</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="会员卡卡号" width="160">
          <template slot-scope="scope">
            <span>{{ scope.row.vipid }}</span>
          </template>
        </el-table-column>
        <el-table-column label="会员姓名" width="160">
          <template slot-scope="scope">
            <span>{{ scope.row.vipname }}</span>
          </template>
        </el-table-column>

        <el-table-column label="会员等级" width="160">
          <template slot-scope="scope">
            <span>{{ scope.row.viplevel }}</span>
          </template>
        </el-table-column>

        <el-table-column label="会员积分" width="160">
          <template slot-scope="scope">
            <span>{{ scope.row.vipintegral }}</span>
          </template>
        </el-table-column>

        <el-table-column label="折扣" width="160">
          <template slot-scope="scope">
            <span>{{ scope.row.sale }}</span>
          </template>
        </el-table-column>

        <el-table-column label="手机号" width="160">
          <template slot-scope="scope">
            <span>{{ scope.row.tel }}</span>
          </template>
        </el-table-column>

        <el-table-column label="座机号" width="160">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>

        <el-table-column label="管理">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              class="text"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="10"></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {},
      rules: {},
      tableData: [
        {
          vipid: "11111111",
          vipname: "张三",
          viplevel: "黑铁会员",
          vipintegral: "123",
          sale: "90%",
          tel: "18282741111",
          phone: "18282742222"
        },
        {
          vipid: "22222222",
          vipname: "李四",
          viplevel: "普通会员",
          vipintegral: "0",
          sale: "99%",
          tel: "18282743333",
          phone: "18282744444"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.vipmange {
  .el-card {
    .title {
      font-size: 20px;
    }
    .el-input {
      width: 200px;
    }
    .el-form {
      .el-form-item {
        span {
          font-size: 15px;
        }
        .el-button {
          margin-left: 10px;
          width: 60px;
          height: 30px;
          .text {
            font-size: 15px;
          }
        }
      }
    }
    .el-table {
      .el-button {
        width: 60px;
        height: 30px;
        span {
          font-size: 12px;
        }
      }
    }
    .el-pagination{
        margin-top: 20px;
    }
  }
}
</style>
