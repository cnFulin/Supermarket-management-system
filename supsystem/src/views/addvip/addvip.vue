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
        <el-form-item label="真实姓名:" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="会员卡卡号:" prop="vipcard">
          <el-input type="password" v-model="ruleForm.vipcard" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="用户组:" prop="usergroup">
          <el-select v-model="ruleForm.usergroup" placeholder="请选择会员等级">
            <el-option label="普通会员-99%" value="普通会员-99%"></el-option>
            <el-option label="黑铁会员-90%" value="黑铁会员-90%"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="身份证号码:" prop="idcard">
          <el-input type="password" v-model="ruleForm.idcard"></el-input>
        </el-form-item>

        <el-form-item label="用户状态:" prop="userstatus">
          <el-radio-group v-model="ruleForm.userstatus">
            <el-radio label="启用"></el-radio>
            <el-radio label="禁用"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="手机号码:" prop="tel">
          <el-input type="text" v-model="ruleForm.tel" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="座机号码:" prop="phone">
          <el-input type="text" v-model="ruleForm.phone" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="邮箱地址:" prop="email">
          <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="地区选择">
          <el-select v-model="province" placeholder="---请选择省份---" class="select">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
          <el-select v-model="city" placeholder="---请选择城市---" class="select">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="详细地址:" prop="detailedAddress">
          <el-input type="text" v-model="ruleForm.detailedAddress" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="邮政编码::" prop="postalcode">
          <el-input type="text" v-model="ruleForm.postalcode" autocomplete="off"></el-input>
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
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请正确填写邮箱"));
      } else {
        if (value !== "") {
          var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if (!reg.test(value)) {
            callback(new Error("请输入有效的邮箱"));
          }
        }
        callback();
      }
    };

    return {
      ruleForm: {
        username: "",
        vipcard: "",
        usergroup: "",
        idcard: "",
        userstatus: "",
        tel: "",
        phone: "",
        email: "",
        AreaSelection: "",
        detailedAddress: "",
        postalcode: "",
        province: "",
        city: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在3-5位", trigger: "blur" }
        ],
        vipcard: [
          { required: true, message: "请输入会员卡号", trigger: "blur" }
        ],
        usergroup: [
          { required: true, message: "请选择用户组", trigger: "change" }
        ],
        idcard: [
          {
            required: true,
            min: 18,
            max: 18,
            message: "长度在18位",
            trigger: "blur"
          }
        ],
        tel: [
          {
            required: true,
            min: 11,
            max: 11,
            message: "长度在11位",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            min: 11,
            max: 11,
            message: "长度在11位",
            trigger: "blur"
          }
        ],
        email: [{ validator: validateEmail, trigger: "blur" }],
        detailedAddress: [
          { required: true, message: "请输入地址", trigger: "blur" }
        ],
        postalcode: [
          { required: true, message: "请输入邮编", trigger: "blur" }
        ],
        province: [
          { required: true, message: "请选择省份", trigger: "change" }
        ],
        city: [{ require: true, message: "选择城市", trigger: "change" }]
      },
      options1: [
        {
          value: "四川",
          lable: "选项一"
        },
        {
          value: "湖北",
          lable: "选项二"
        },
        {
          value: "湖南",
          lable: "选项三"
        }
      ],
      options2: [
        {
          value: "成都",
          lable: "选项一"
        },
        {
          value: "南充",
          lable: "选项二"
        },
        {
          value: "绵阳",
          lable: "选项三"
        }
      ],
      province:[],
      city:[]
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          alert("添加成功");
        }
      });
    }
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

    .select {
      width: 10px;
      margin-right: 200px;
    }
  }
}
</style>
