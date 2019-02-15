<template>
  <div class="outgoods">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品出库</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item"></div>
      <el-form
        :model="shopForm"
        status-icon
        :rules="rules"
        ref="shopForm"
        label-width="110px"
        class="demo-ruleForm"
        size="mini"
      >
        <el-form-item label="商品条形码：" prop="name">
          <el-input v-model="shopForm.name"></el-input>
        </el-form-item>

        <el-form-item label="商品数量：" prop="num">
          <el-input v-model="shopForm.num"></el-input>
          <span class="text">计量商品单位为千克</span>
        </el-form-item>

        <el-form-item>
          <el-button size="mini" type="success" @click="Addorder('shopForm')">加入订单</el-button>
          <el-button size="mini" type="success" plain @click="outbound('shopForm')">重新出库</el-button>
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

        <el-table-column label="单价（元）" width="170">
          <template slot-scope="scope">
            <span>{{ scope.row.price }}</span>
          </template>
        </el-table-column>

        <el-table-column label="总价（元）" width="170">
          <template slot-scope="scope">
            <span>{{ scope.row.discounts }}</span>
          </template>
        </el-table-column>

        <el-table-column label="优惠总价（元）" width="170">
          <template slot-scope="scope">
            <span>{{ scope.row.refund }}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="price">
        <span>总价：0元</span>,
        <span>优惠: 元</span> ,
        <span class="mini">小计:0元</span>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="110px"
        class="demo-ruleForm"
        size="mini"
      >
        <el-form-item label="会员卡号：" class="vip" prop='vipcard'>
          <el-input v-model="ruleForm.vipcard"></el-input>
          <br>
          <span>填写会员卡号</span>
        </el-form-item>

        <el-form-item>
          <el-button size="mini" type="success" @click="submitOrder('ruleForm')">提交订单</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
          orderNumber:'',
          name:'',
          num:'',
          price:'',
          discounts:'',
          refund:''
      }],
      shopForm: {
        name: "",
        num: ""
      },
      rules: {
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        num: [{ required: true, message: "请输入商品数量", trigger: "blur" }],
          
              vipcard:[{required:true,message:'请输入会员卡号',trigger:'blur'}]
          
      },
      ruleForm: {
          vipcard:''
      },
    };
  },
  methods: {
    Addorder(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          alert("查询成功");
        }else{
            return false;
        }
      });
    },
    outbound(form){
        this.$refs[form].resetFields()
    },
    submitOrder(form){
        this.$refs[form].validate(valid =>{
            if(valid){
                alert('成功')
            }else{
                alert('失败')
            }
        })
    }
  }
};
</script>


<style lang="less">
.outgoods {
  .el-card {
    .vip {
      margin-top: 20px;
    }
    .el-card__header {
      background-color: #ccc;
    }
    span {
      font-size: 20px;
    }
    .el-input {
      width: 200px;
    }
    .el-form {
      .el-form-item {
        .el-form-item__label {
          text-align: left;
        }
        span {
          font-size: 12px;
        }
        .text {
          color: #ccc;
        }
      }
    }
    .el-table {
      border-top: 2px solid #c6c6c6;
    }
    .price {
      span {
        font-size: 12px;
      }
      .mini {
        color: red;
      }
    }
  }
}
</style>
