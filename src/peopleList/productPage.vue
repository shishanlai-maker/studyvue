<template>
  <div style="margin-right: 40%; margin-left: 30%">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="需求名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="需求版本">
        <el-select v-model="form.version" placeholder="请选择版本">
          <el-option label="版本1.0" value="one"></el-option>
          <el-option label="版本2.0" value="two"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="需求排期" size="large">
        <el-col :span="11">
          <el-date-picker
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="开始时间"
            v-model="form.startTime"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="center" :span="2">至</el-col>
        <el-col :span="11">
          <el-date-picker
            type="datetime"
            value-format="yyyy-MM-dd HH:mm:ss"
            placeholder="结束时间"
            v-model="form.endTime"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="需求类型">
        <el-radio-group v-model="form.needType">
          <el-radio label="服务端需求"></el-radio>
          <el-radio label="客户端需求"></el-radio>
          <el-radio label="H5需求"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from '@/utils/request';
export default {
  data() {
    return {
      form: {
        name: "",
        version: "",
        startTime: "",
        endTime: "",
        needType: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://localhost:9802", {
          funcation: "productNeed",
          params: this.form,
        })
        .then((res) => {
        if (res.data.code == 200){
          this.$message({
            message:res.data.msg,
            type:'success'
          })
          this.$router.push({path:'/workList/parPage'})
        }else if (res.data.code == 204){
          this.$message({
            message:res.data.msg,
            type:'error'
          })
        }
        })
        .catch((err) => {
          console.log("error=", err);
        });
    },
  },
};
</script>

<style></style>
