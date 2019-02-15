<template>
  <div class="addproducts">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加商品</span>
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
        <el-form-item label="所属分类:" prop="region">
          <el-select v-model="ruleForm.region" placeholder="----选择分类----">
            <el-option label="日用品" value="daily"></el-option>
            <el-option label="食品" value="food"></el-option>
            <el-option label="烟酒" value="cigaretteswine"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商品条形码" prop="code">
          <el-input type="text" v-model="ruleForm.code" autocomplete="off"></el-input>&nbsp;
          <el-button type="success">生成条形码</el-button>
        </el-form-item>

        <el-form-item label="商品名称：" prop="productName">
          <el-input type="text" v-model="ruleForm.productName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="商品售价：" prop="productPrice">
          <el-input type="text" v-model="ruleForm.productPrice" autocomplete="off"></el-input>元
        </el-form-item>

        <el-form-item label="市场价：" prop="departrate">
          <el-input type="text" v-model="ruleForm.departrate" autocomplete="off"></el-input>元
          <br>
          <span>默认市场价为进价的1.2倍</span>
        </el-form-item>

        <el-form-item label="商品进价：" prop="departonrate">
          <el-input type="text" v-model="ruleForm.departonrate" autocomplete="off"></el-input>元
        </el-form-item>

        <el-form-item label="入库数量：" prop="num">
          <el-input type="text" v-model="ruleForm.num" autocomplete="off"></el-input>
          <br>
          <span>计重商品单位为千克</span>
        </el-form-item>

        <el-form-item label="商品重量：" prop="weight">
          <el-input type="text" v-model="ruleForm.weight" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="商品单位：" prop="unit">
          <el-input type="text" v-model="ruleForm.unit" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="会员优惠:" prop="discounts">
          <el-radio-group v-model="ruleForm.discounts">
            <el-radio label="享受"></el-radio>
            <el-radio label="不享受"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="是否促销:" prop="promotion">
          <el-radio-group v-model="ruleForm.promotion">
            <el-radio label="启用"></el-radio>
            <el-radio label="禁用"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="商品简介：" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
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
        region: "",
        code: "",
        productName: "",
        productPrice: "",
        departrate: "",
        departonrate: "",
        num: "",
        weight: "",
        unit: "",
        discounts: "",
        promotion: "",
        desc: ""
      },
      rules: {
        region: [{ required: true, message: "请选择分类", trigger: "change" }],
        code: [{ required: true, message: "请生成条形码", trigger: "blur" }],
        productName: [
          { required: true, message: "请输入商品名称", trigger: "blur" }
        ],
        productPrice: [
          { required: true, message: "请输入商品价格", trigger: "blur" }
        ]
      }
    };
  },
  methods:{
    submitForm(form){
      this.$refs[form].validate(valid =>{
        if(valid){
          alert('添加成功')
          let params = {
              region: this.ruleForm.region,
              code: this.ruleForm.code,
              productName:this.ruleForm.productName,
              productPrice:this.ruleForm.productPrice,
              departrate: this.ruleForm.departrate,
              departonrate:this.ruleForm.departonrate,
              num: this.ruleForm.num,
              weight: this.ruleForm.weight,
              unit: this.ruleForm.unit,
              discounts:this.ruleForm.discounts,
              promotion: this.ruleForm.promotion,
              desc: this.ruleForm.desc,
          }
        }else{
          alert('添加失败')
        }
      })
    }
  }
};
</script>


<style lang="less">
.addproducts {
  .el-card {
    font-size: 20px;
    .el-card__header{
          background-color: #ccc;
      }
    .el-input {
      width: 200px;
    }
    .el-form-item {
      span {
        font-size: 10px;
      }
    }
  }
}
</style>
