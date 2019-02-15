<template>
  <div class="addvip">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">添加编辑账号</span>
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
        <el-form-item label="真实姓名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="会员卡卡号" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="用户组" prop="usergroup">
          <el-select v-model="ruleForm.usergroup" placeholder="请选择会员等级">
            <el-option label="普通会员-99%" value="普通会员-99%"></el-option>
            <el-option label="黑铁会员-90%" value="黑铁会员-90%"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="身份证号码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass"></el-input>
        </el-form-item>

        <el-form-item label="用户状态:" prop="userstatus">
          <el-radio-group v-model="ruleForm.userstatus">
            <el-radio label="启用"></el-radio>
            <el-radio label="禁用"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="手机号码" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="座机号码" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="邮箱地址" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-select v-model="value5" multiple placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <el-select
    v-model="value11"
    multiple
    collapse-tags
    style="margin-left: 20px;"
    placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

        <el-form-item label="详细地址" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

         <el-form-item label="邮政编码" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
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
      ruleForm: {}
    };
  }
};
</script>

<style lang="less">
.addvip {
  .el-card {
    .title {
      font-size: 20px;
    }
    .el-input {
      width: 200px;
    }
  }
}
</style>
