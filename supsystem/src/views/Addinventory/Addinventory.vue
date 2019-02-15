<template>
  <div class="inventory">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加库存</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item"></div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
        size="mini"
      >
        <el-form-item label="商品条形码：" prop='code'>
          <el-input v-model="ruleForm.code"></el-input>
        </el-form-item>

        <el-form-item label="数量："  prop='num'>
          <el-input v-model="ruleForm.num"></el-input>
          <br>
          <span>商品计量单位为千克</span>
        </el-form-item>

        <el-form-item label="进价："  prop='price'>
          <el-input v-model="ruleForm.price"></el-input>元
        </el-form-item>

        <el-form-item>
          <el-button type="success" @click="submitForm('ruleForm')">入库</el-button>
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
        code: "",
        num: "",
        price: ""
      },
      rules: {
        code: [{ required: true, message: "请输入条形码", trigger: "blur" }],
        num:[{required:true,message:'请输入数量',trigger:'blur'}],
        price:[{required:true,message:'请输入价格',trigger:'blur'}]
      }
    };
  },
  methods:{
    submitForm(form){
      this.$refs[form].validate(valid =>{
        if(valid){
          alert('入库成功')
          let params = {
            code:this.ruleForm.code,
            num:this.ruleForm.num,
            price:this.ruleForm.price,
          };
          this.$router.push('stockcontrol')
        }else{
          alert('入库失败')
        }
      })
    }
  }
};
</script>

<style lang="less">
.inventory {
  .el-card {
    font-size: 20px;
    .el-card__header{
          background-color: #ccc;
      }
    .el-form-item {
      span {
        font-size: 12px;
      }
    }
    .el-form-item__content {
      .el-input {
        width: 200px;
      }
    }
  }
}
</style>
