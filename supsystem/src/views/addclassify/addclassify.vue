<template>
  <div class="addclassify">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加分类</span>
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
          <el-select v-model="ruleForm.region" placeholder="----顶级分类----">
            <el-option label="日用品" value="daily"></el-option>
            <el-option label="食品" value="food"></el-option>
            <el-option label="烟酒" value="cigaretteswine"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称:" prop="classify">
          <el-input type="text" v-model="ruleForm.classify" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态:" prop="status">
          <el-radio-group v-model="ruleForm.status">
            <el-radio label="启用"></el-radio>
            <el-radio label="禁用"></el-radio>
          </el-radio-group>
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
    const classifyset = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入分类名称"));
      } else {
        callback();
      }
    const region = (rule,value,callback) => {
      if(value === '') {
        callback(new Error('请选择分类'))
      }else{
        callback()
      }
    }
    };
    return {
      ruleForm:{ 
          classify:'',
          status:'',
          region:''
          },
      rules: {
        region: [{ required: true, message: "请选择分类", trigger: "change" }],
        classify: [{ required: true, validator: classifyset, trigger: "blur" }],
        status: [{ required: true, message: "请设置状态", trigger: "change" }]
      }
    };
  },
  methods: {
      submitForm(form){
          this.$refs[form].validate(valid =>{
              if(valid){
                  alert('添加成功')
                  let parmas = {
                      region:this.ruleForm.region,
                      classify:this.ruleForm.classify,
                      status:this.ruleForm.status
                  }
                  this.$router.push('classifymange')
              }
          })
      }
  }
};
</script>


<style lang="less">
.addclassify {
  .el-card {
    font-size: 20px;
     .el-card__header{
          background-color: #ccc;
      }
    .el-form {
      .el-form-item__content {
        .el-input {
          width: 300px !important;
        }
      }
    }
  }
}
</style>
