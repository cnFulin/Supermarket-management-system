<template>
  <div class="login">
    <div class="loginwrpper">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <p class="text">华联超市管理系统</p>
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //验证密码
    const pass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 3 || value.length > 6) {
        callback(new Error("密码长度在3-6位"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    //验证再次输入密码
    const checkpwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("密码不匹配"));
      }
      callback();
    };
    return {
      //返回数据
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      //制定规则
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "账号长度为3-5位", trigger: "blur" }
        ],
        password: [{ required: true, validator: pass, trigger: "blur" }],
        checkPass: [{ required: true, validator: checkpwd, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          alert("登陆成功");
          //获取数据
          let params = {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          };
          //   进行跳转
          this.$router.push("sysmessage");
        } else {
          alert("登录失败");
          return false;
        }
      });
    },
    resetForm(from) {
      this.$refs[from].resetFields();
    }
  }
};
</script>


<style lang='less'>
* {
  margin: 0;
  padding: 0;
}

.login {
  height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  .loginwrpper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 500px;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    .demo-ruleForm {
      margin: 20px 60px 0 0;
      color: #fff;
      .text {
        margin-bottom: 15px;
        text-indent: 20px;
        font-size: 20px;
        color: #fff;
      }
      .el-form-item {
        .el-form-item__label {
          color: #fff;
        }
      }
    }
  }
}
</style>
