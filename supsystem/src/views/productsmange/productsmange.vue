<template>
  <div class="productmange">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品管理</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item"></div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        size="mini"
      >
        <el-row>
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-form-item prop="region">
                <el-select v-model="ruleForm.region" placeholder="----选择分类----">
                  <el-option label="日用品" value="daily"></el-option>
                  <el-option label="食品" value="food"></el-option>
                  <el-option label="烟酒" value="cigaretteswine"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple-light">
              <el-form-item label="关键字" prop="keyword">
                <el-input type="text" v-model="ruleForm.keyword" autocomplete="off"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple-light btn">(商品名称，条形码)
              <el-button type="success" @click="inquire('ruleForm')" size="mini">查询</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="商品条形码" width="110">
          <template slot-scope="scope">
            <span>{{ scope.row.code }}</span>
          </template>
        </el-table-column>
        <el-table-column label="商品名称" width="110">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>

        <el-table-column label="所属分类" width="110">
          <template slot-scope="scope">
            <span>{{ scope.row.classify }}</span>
          </template>
        </el-table-column>

        <el-table-column label="售价(元)" width="110">
          <template slot-scope="scope">
            <span>{{ scope.row.price }}</span>
          </template>
        </el-table-column>

        <el-table-column label="促销价(元)" width="110">
          <template slot-scope="scope">
            <span>{{ scope.row.promotionPrice }}</span>
          </template>
        </el-table-column>

        <el-table-column label="市场价" width="110">
          <template slot-scope="scope">
            <span>{{ scope.row.markttPrice }}</span>
          </template>
        </el-table-column>

        <el-table-column label="库存" width="110">
          <template slot-scope="scope">
            <span>{{ scope.row.inventory }}</span>
          </template>
        </el-table-column>

        <el-table-column label="库存总额(元)" width="110">
          <template slot-scope="scope">
            <span>{{ scope.row.inventoryPrice }}</span>
          </template>
        </el-table-column>

        <el-table-column label="销售总额(元)" width="110">
          <template slot-scope="scope">
            <span>{{ scope.row.salesAllPrice }}</span>
          </template>
        </el-table-column>

        <el-table-column label="管理">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i>编辑</el-button>
            <el-button  size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"> <i class="el-icon-delete"></i>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        pager-count="5"
        page-size="5"
        :total="10"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          code: "123",
          name: "优乐美",
          classify: "食品",
          price: "5",
          promotionPrice: "4.5",
          markttPrice: "3",
          inventory: "125",
          inventoryPrice: 625,
          salesAllPrice: 1580
        },
        {
          code: "123",
          name: "优乐美",
          classify: "食品",
          price: "5",
          promotionPrice: "4.5",
          markttPrice: "3",
          inventory: "125",
          inventoryPrice: 625,
          salesAllPrice: 1580
        },
        {
          code: "123",
          name: "优乐美",
          classify: "食品",
          price: "5",
          promotionPrice: "4.5",
          markttPrice: "3",
          inventory: "125",
          inventoryPrice: 625,
          salesAllPrice: 1580
        },
        {
          code: "123",
          name: "优乐美",
          classify: "食品",
          price: "5",
          promotionPrice: "4.5",
          markttPrice: "3",
          inventory: "125",
          inventoryPrice: 625,
          salesAllPrice: 1580
        },
        {
          code: "123",
          name: "优乐美",
          classify: "食品",
          price: "5",
          promotionPrice: "4.5",
          markttPrice: "3",
          inventory: "125",
          inventoryPrice: 625,
          salesAllPrice: 1580
        },
        {
          code: "123",
          name: "优乐美",
          classify: "食品",
          price: "5",
          promotionPrice: "4.5",
          markttPrice: "3",
          inventory: "125",
          inventoryPrice: 625,
          salesAllPrice: 1580
        },
        {
          code: "123",
          name: "优乐美",
          classify: "食品",
          price: "5",
          promotionPrice: "4.5",
          markttPrice: "3",
          inventory: "125",
          inventoryPrice: 625,
          salesAllPrice: 1580
        },
        {
          code: "123",
          name: "优乐美",
          classify: "食品",
          price: "5",
          promotionPrice: "4.5",
          markttPrice: "3",
          inventory: "125",
          inventoryPrice: 625,
          salesAllPrice: 1580
        },
        {
          code: "123",
          name: "优乐美",
          classify: "食品",
          price: "5",
          promotionPrice: "4.5",
          markttPrice: "3",
          inventory: "125",
          inventoryPrice: 625,
          salesAllPrice: 1580
        },
        {
          code: "123",
          name: "优乐美",
          classify: "食品",
          price: "5",
          promotionPrice: "4.5",
          markttPrice: "3",
          inventory: "125",
          inventoryPrice: 625,
          salesAllPrice: 1580
        },
        {
          code: "123",
          name: "优乐美",
          classify: "食品",
          price: "5",
          promotionPrice: "4.5",
          markttPrice: "3",
          inventory: "125",
          inventoryPrice: 625,
          salesAllPrice: 1580
        }
      ],
      ruleForm: {
        region: "",
        keyword: ""
      },
      rules: {
        region: [{ required: true, message: "请选择分类", trigger: "change" }],
        keyword: [{ required: true, message: "请输入关键字", trigger: "blur" }]
      }
    };
  },
  methods:{
     inquire(form){
       this.$refs[form].validate(valid=>{
         if(valid){
           alert('查询成功')
           let params={
             region:this.ruleForm.region,
             keyword:this.ruleForm.keyword
           }
         }else{
           alert('查询失败，请检查输入内容')
         }
       })
     }
  }
};
</script>


<style lang="less">
.productmange {
  .el-card {
    .el-card__header{
          background-color: #ccc;
      }
    font-size: 20px;
    .el-form {
      .el-form-item__label {
        text-indent: 10px;
      }
      .el-input {
        text-align: left;
        .el-input__inner {
          width: 150px;
        }
      }
      .btn {
        margin-left: 50px;
        font-size: 15px;
        .el-button {
          width: 60px;
        }
      }
    }
  }
}
</style>
