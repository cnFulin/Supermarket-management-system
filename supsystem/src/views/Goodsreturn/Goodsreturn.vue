<template>
  <div class="goodsreturn">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品退货</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item"></div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="110px"
        class="demo-ruleForm"
        size="mini"
      >
        <el-form-item label="订单号" prop="orderId">
          <el-input v-model="ruleForm.orderId"></el-input>
          <el-button size="mini" type="success" @click="Addorder('ruleForm')">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        orderId: ""
      },
      rules: {
        orderId:[{required:true,message:'请输入订单号',trigger:'blur'}]
      }
    };
  },
  methods: {
    Addorder(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          
        }
      });
    }
  }
};
</script>

<style lang="less">
.goodsreturn {
  .el-card {
    span {
      font-size: 20px;
    }
    .el-input {
      width: 200px;
    }
    .el-button{
        margin-left: 10px;
        width: 60px;
        height: 30px;
        span{
            font-size: 15px;
        }
    }
  }
}
</style>
