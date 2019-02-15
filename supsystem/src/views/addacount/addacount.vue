<template>
  <div class="sysconfig">
    <!-- 系统配置 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加账号</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item">
      </div>
        <el-form
          :model="addForm"
          status-icon
          :rules="rules"
          ref="addForm"
          label-width="110px"
          class="demo-addForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="addForm.username" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="addForm.password" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="addForm.checkPass"></el-input>
          </el-form-item>

          <el-form-item label="请选择用户组" prop="usergroup">
            <el-select v-model="addForm.usergroup" placeholder="请选择用户组">
              <el-option label="普通用户" value="普通用户"></el-option>
              <el-option label="超级管理员" value="超级管理员"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('addForm')">提交</el-button>
            <el-button @click="resetForm('addForm')">重置</el-button>
          </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    const pass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 3 || value.length > 6) {
        callback(new Error("密码长度在3-6位"));
      } else {
        //存在问题***
        if (this.addForm.checkPass !== "") {
          this.$refs.addForm.validateField("checkPass");
        }
        callback();
      }
    };
    const checkpwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.addForm.password) {
        callback(new Error("两次输入密码不一致"));
      }
      callback();
    };
    const regions = () => {};
    return {
      addForm: {
        username: "",
        password: "",
        checkPass: "",
        usergroup: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在3-5位", trigger: "blur" }
        ],
        password: [{ required: true, validator: pass, trigger: "blur" }],
        checkPass: [{ required: true, validator: checkpwd, trigger: "blur" }],
        usergroup:[{required:true,message:'请选择用户组',trigger:'change'}]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("添加成功");

          let params = {
            username: this.addForm.username,
            password: this.addForm.password,
            usergroup: this.addForm.usergroup
          };
          this.$router.push("acountmange");
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      // this.$refs.loginForm.resetFields() 获取整个表单组件 调用重置方法
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang='less'>
.sysconfig {
  .el-card {
    .el-card__header{
          background-color: #ccc;
      }
    .clearfix {
      font-size: 20px;
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
