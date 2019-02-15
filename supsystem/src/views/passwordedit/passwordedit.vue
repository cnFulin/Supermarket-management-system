<template>
  <div class="passedit">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>修改账号密码</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item"></div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="原密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="checkpass">
          <el-input type="password" v-model="ruleForm.checkpass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="checkpwd">
          <el-input type="password" v-model="ruleForm.checkpwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
      const Pass =(rule,value,callback) =>{
          if(value === ''){
              callback(new Error('请输入原来的密码'))
          }else if(value.length < 3 || value.length > 6){
              callback(new Error('长度在3-6位'))
          }
          callback()
      }
      const checkPass =(rule,value,callback) =>{
        if(value === ''){
              callback(new Error('请输入新的密码'))
          }else if(value.length < 3 || value.length > 6){
              callback(new Error('长度在3-6位'))
          }else if(value === this.ruleForm.pass){
              callback(new Error('不能与原密码相同'))
          }
          callback()
      }
      const checkPwd =(rule,value,callback) =>{
          if(value === ''){
              callback(new Error('请输入新的密码'))
          }else if(value !== this.ruleForm.checkpass){
              callback(new Error('密码不一致'))
          }
          callback()
      }
    return {
      ruleForm: {
          pass: "",
          checkpass: "",
          checkpwd: ""
        },
        rules:{
            pass:[
                {required:true,validator:Pass,trigger:'blur'},
            ],
            checkpass:[
                {required:true,validator:checkPass,trigger:'blur'},
            ],
            checkpwd:[
                {required:true,validator:checkPwd,trigger:'blur'},
            ]
        }
    };
  },
  methods:{
      submitForm(name){
          this.$refs[name].validate(valid => {
              if(valid){
                  alert('修改成功')

                  let params = {
                      pass:this.ruleForm.pass,
                      checkpass:this.ruleForm.checkpass
                  };
                  this.$router.push('acountmange')
              }
          })
      },
      resetForm(name){
          this.$refs[name].resetFields()
      }
  }
};
</script>


<style lang="less">
.passedit {
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

