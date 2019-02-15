<template>
  <div class="salelist">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>销售列表</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item"></div>
      <el-date-picker
        v-model="value7"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
      ></el-date-picker>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="65px"
        class="demo-ruleForm"
        size="mini"
      >
        <el-form-item label="关键字" prop='keyword'>
          <el-input v-model="ruleForm.keyword"></el-input>
          <span>商品名称，订单号，客户名字，会员卡号</span>
          <el-button type="success" @click="submitForm('ruleForm')">查询</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="订单号" width="170">
          <template slot-scope="scope">
            <span>{{ scope.row.orderNumber }}</span>
          </template>
        </el-table-column>
        <el-table-column label="名称" width="170">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column label="数量" width="170">
          <template slot-scope="scope">
            <span>{{ scope.row.num }}</span>
          </template>
        </el-table-column>

        <el-table-column label="实际售价" width="170">
          <template slot-scope="scope">
            <span>{{ scope.row.price }}</span>
          </template>
        </el-table-column>

        <el-table-column label="优惠（促销/会员）" width="170">
          <template slot-scope="scope">
            <span>{{ scope.row.discounts }}</span>
          </template>
        </el-table-column>

        <el-table-column label="退款" width="170">
          <template slot-scope="scope">
            <span>{{ scope.row.refund }}</span>
          </template>
        </el-table-column>

        <el-table-column label="销售时间" width="170">
          <template slot-scope="scope">
            <span>{{ scope.row.Time }}</span>
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
      tableData: [
        {
          orderNumber: "121513153",
          name: "优乐美",
          num: "152",
          price: "5.00",
          discounts: `4.5元/无`,
          refund: "无退款",
          Time: "2019-02-10"
        },
        {
          orderNumber: "121513153",
          name: "海飞丝",
          num: "46",
          price: "15.00",
          discounts: `14.5元/无`,
          refund: "无退款",
          Time: "2019-02-6"
        },
        {
          orderNumber: "121513153",
          name: "香飘飘",
          num: "206",
          price: "5.00",
          discounts: `4.5元/无`,
          refund: "无退款",
          Time: "2019-02-8"
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value6: "",
      value7: "",
      ruleForm: {
        keyword: ""
      },
      rules: {
          keyword:[{required:true,message:'请输入关键字',trigger:'blur'}]
      }
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if(valid) {
          alert("查询成功")
          let params = {
              keyword:this.ruleForm.keyword
          }
        }else{
            return false;
        }
      });
    }
  }
};
</script>

<style lang="less">
.salelist {
  .el-card {
    font-size: 20px;
    .el-card__header{
          background-color: #ccc;
      }
    .el-form-item {
      span {
        font-size: 12px;
      }
      .el-form-item__label {
        text-align: left;
      }
      .el-button {
        width: 60px;
        margin-left: 10px;
        span {
          padding-right: 20px;
        }
      }
      margin-top: 20px;
      .el-input {
        width: 200px;
      }
    }
    .el-pagination{
        margin-top: 20px;
    }
  }
}
</style>
