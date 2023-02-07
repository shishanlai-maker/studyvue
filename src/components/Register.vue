<template>
  <div class="RegisterTest">
    <img
      src="~@/assets/login/AllLogin.jpg"
      style="width: 100%; height: 100%; display: block"
    />
    <div class="mylogin" align="center">
      <h4>注册</h4>
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-width="0px"
      >
      <el-form-item label="" prop="name" style="margin-top: 10px">
          <el-row>
            <el-col :span="2">
              <span class="el-icon-s-custom"></span>
            </el-col>
            <el-col :span="22">
              <el-input
                class="inps"
                placeholder="姓名"
                v-model="loginForm.name"
              >
              </el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="" prop="account" style="margin-top: 10px">
          <el-row>
            <el-col :span="2">
              <span class="el-icon-s-custom"></span>
            </el-col>
            <el-col :span="22">
              <el-input
                class="inps"
                placeholder="账号"
                v-model="loginForm.account"
              >
              </el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="" prop="passWord">
          <el-row>
            <el-col :span="2">
              <span class="el-icon-lock"></span>
            </el-col>
            <el-col :span="22">
              <el-input
                class="inps"
                type="password"
                placeholder="密码"
                v-model="loginForm.passWord"
              ></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="margin-top: 55px">
          <el-button type="primary" round class="submitBtn" @click="submitForm"
            >注册
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/request";
//导入登录接口模块
// import { loginAPI } from "@/api";
// import axios from '@/utils/request.js'
export default {
  name: "RegisterTest",
  data: function () {
    return {
      loginForm: {
        name:"",
        account: "",
        passWord: "",
      },
      funcation:"register",
      // ajaxData: {},
      loginRules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  // created() {
  //   axios.get('http://127.0.0.1:5500/src/data/test.json',{params:{}}).then((res) => {
  //     console.log(res)
  //     this.ajaxData = res.data;
  //   })
  // },
  methods: {
    submitForm() {
      const userName = this.loginForm.name;
      const userAccount = this.loginForm.account;
      const userPassword = this.loginForm.passWord;
      if (!userName) {
        return this.$message({
          type: "error",
          message: "姓名不能为空！",
        });
      }
      if (!userAccount) {
        return this.$message({
          type: "error",
          message: "账号不能为空！",
        });
      }
      if (!userPassword) {
        return this.$message({
          type: "error",
          message: "密码不能为空！",
        });
      }
      axios.post('http://localhost:9802',{funcation:"register",userName:userName,userAccount:parseInt(userAccount),userPassword:parseInt(userPassword)})
        .then((res) => {
          if (res.data.code == 200){
            this.$message({
              message:res.data.msg,
              type:'success'
            })
            this.$router.push({
              path:"/Login"
            })
          }else if (res.data.code == 201){
            this.$message({
              message:res.data.msg,
              type:'error'
            })
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 100vw;
  padding: 0;
  margin: 0;
  height: 100vh;
  font-size: 16px;
  background-position: left top;
  background-color: #242645;
  color: #fff;
  font-family: "Source Sans Pro";
  position: relative;
}

.mylogin {
  width: 240px;
  height: 280px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 50px 40px 60px 40px;
  box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  opacity: 1;
  background: url("~@/assets/login/loginGB.png") center no-repeat;
}

.inps input {
  border: none;
  color: #fff;
  background-color: transparent;
  font-size: 12px;
}

.submitBtn {
  background-color: transparent;
  color: #39f;
  width: 200px;
}
</style>
