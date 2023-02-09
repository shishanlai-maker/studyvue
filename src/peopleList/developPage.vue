<template>
  <div>
    <el-form
      ref="goodManForm"
      :inline="true"
      class="goodManForm"
      :model="goodManForm"
    >
      <el-form-item label="姓名" size="large">
        <el-input
          placeholder="请输入姓名"
          v-model="goodManForm.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="BUG总量" size="large">
        <el-input v-model="goodManForm.bugNum"></el-input>
      </el-form-item>
      <el-form-item label="需求总数" size="large">
        <el-input v-model="goodManForm.workNum"></el-input>
      </el-form-item>
      <el-form-item class="operateSearch">
        <el-button type="primary" @click="search()" size="large"
          >搜索</el-button
        >
      </el-form-item>
    </el-form>

    <!-- 增加添加功能 -->
    <div>
      <el-button
        type="success"
        @click="dialogFormVisible = true"
        ><i class="el-icon-plus" style="font-size:15px"></i>新增开发</el-button
      ><br><br>

      <el-dialog title="收货地址" :visible.sync="dialogFormVisible" style="width:80em;position:absolute;top:10%;left:25%">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" style="width:20em"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off" style="width:20em"></el-input>
          </el-form-item>
          <el-form-item label="工作年限" :label-width="formLabelWidth">
            <el-select v-model="form.worktimeLong" placeholder="请选择工作年限">
              <el-option label="3年" value="3"></el-option>
              <el-option label="5年" value="5"></el-option>
              <el-option label="10年" value="10"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="BUG总数" :label-width="formLabelWidth">
            <el-input v-model="form.bugNum" autocomplete="off" style="width:20em"></el-input>
          </el-form-item>
          <el-form-item label="需求总数" :label-width="formLabelWidth">
            <el-input v-model="form.workNum" autocomplete="off" style="width:20em"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="insertData()"
            >确 定</el-button
          >
        </div>
      </el-dialog>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column
        v-for="(item, index) in goodManageTab"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        align="center"
      >
        <!-- <template slot-scope="scope"> -->
        <!-- <el-image v-if="scope.column.property == 'fmt'" style="width: 60px; height: 120px" :src="scope.row.fmt" @error.once="srcerr(scope.row.fmt)" fit="contain"></el-image>
            <div v-else-if="scope.column.property == 'zspt'">
              {{ scope.row[scope.column.property] == 1 ? "客户端" : "小程序" }}
            </div>
            <div v-else-if="scope.column.property == 'status'">
              {{ scope.row[scope.column.property] == 1 ? "上架" : "下架" }}
            </div>
            <div v-else-if="scope.column.property == 'fbpt'">
              {{ getPt(scope.row.fbpt) }}
            </div>
            <div v-else-if="scope.column.property == 'act_type'">
              {{ scope.row[scope.column.property] == 1 ? "秒杀" : "无" }}
            </div>
            <div v-else>{{ scope.row[scope.column.property] }}</div> -->
        <!-- </template> -->
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row.id,scope.row.name, scope.row.age, scope.row.worktimeLong, scope.row.bugNum, scope.row.workNum)" type="text" size="small"
            >修改</el-button
          >
          <el-button @click="changeClick(scope.row.id)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="收货地址" :visible.sync="updatadialogFormVisible" style="width:80em;position:absolute;top:10%;left:25%">
        <el-form :model="form2">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form2.name" autocomplete="off" style="width:20em"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="form2.age" autocomplete="off" style="width:20em"></el-input>
          </el-form-item>
          <el-form-item label="工作年限" :label-width="formLabelWidth">
            <el-input v-model="form2.worktimeLong" autocomplete="off" style="width:20em"></el-input>
          </el-form-item>
          <el-form-item label="BUG总数" :label-width="formLabelWidth">
            <el-input v-model="form2.bugNum" autocomplete="off" style="width:20em"></el-input>
          </el-form-item>
          <el-form-item label="需求总数" :label-width="formLabelWidth">
            <el-input v-model="form2.workNum" autocomplete="off" style="width:20em"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="updataData()"
            >确 定</el-button
          >
        </div>
      </el-dialog>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[2, 5, 10, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="+tableTotal"
      style="float: right"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "@/utils/request";
export default {
  data() {
    return {
      goodManageTab: [
        {
          prop: "id",
          label: "ID",
        },
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "worktimeLong",
          label: "工作年限",
        },
        {
          prop: "bugNum",
          label: "BUG总数",
        },
        {
          prop: "workNum",
          label: "需求总数",
        },
      ], //表头
      goodManForm: {
        name: "",
        bugNum: "",
        workNum: "",
        funcation: "developeSearch",
      }, //提交的数据
      tableData: [
        {
          id: "",
          name: "",
          age: "",
          worktimeLong: "",
          bugNum: "",
          workNum: "",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      updatadialogFormVisible:false,
      form: {
        name: "",
        age: "",
        worktimeLong:"",
        bugNum:"",
        workNum:"",
      },
      form2: {
        id:"",
        name: "",
        age: "",
        worktimeLong:"",
        bugNum:"",
        workNum:"",
      },
      formLabelWidth: "120px",
      pageNo: 1, //第几页
      pageSize: 5, //一页几条
      currentPage: 0, //前往当前页
      tableTotal: 0, //共多少条
    };
  },

  created() {
    this.search();
  },

  methods: {
    search() {
      //搜索方法
      let obj = {
        pageSize:this.pageSize,
        pageNo:this.pageNo
      }
      Object.assign(this.goodManForm,obj)
      axios
        .get("http://localhost:9802", { params: this.goodManForm })
        .then((res) => {
          this.tableData = res.data.data;
          this.tableTotal = res.data.totalNum;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleClick(id,name, age, worktimeLong, bugNum, workNum) {
      this.updatadialogFormVisible = true
      this.form2.id = id
      this.form2.name = name
      this.form2.age = age
      this.form2.worktimeLong = worktimeLong.toString()
      this.form2.bugNum = bugNum.toString()
      this.form2.workNum = workNum.toString()
    },
    updataData(){
      const updataFormData = {id:parseInt(this.form2.id),name:this.form2.name,age:parseInt(this.form2.age),worktimeLong:parseInt(this.form2.worktimeLong),bugNum:parseInt(this.form2.bugNum),workNum:parseInt(this.form2.workNum)}
      axios.post("http://localhost:9802", { funcation:"updataDeveloper", params: updataFormData }).then((res)=>{
        if (res.data.code == 200){
            this.$message({
              message:res.data.msg,
              type:'success'
            })
          }else if (res.data.code == 204){
            this.$message({
              message:res.data.msg,
              type:'error'
            })
          }
      }).catch((error)=>{
        console.log(error);
      })
      this.updatadialogFormVisible = false
      this.search()
    },
    insertData(){
      this.dialogFormVisible = false
      const insertForm = {name:this.form.name,age:parseInt(this.form.age),worktimeLong:parseInt(this.form.worktimeLong),bugNum:parseInt(this.form.bugNum),workNum:parseInt(this.form.workNum)}
      axios.post("http://localhost:9802", { funcation:"insertDeveloper", params: insertForm }).then((res)=>{
        if (res.data.code == 200){
            this.$message({
              message:res.data.msg,
              type:'success'
            })
          }else if (res.data.code == 204){
            this.$message({
              message:res.data.msg,
              type:'error'
            })
          }
      }).catch((error)=>{
        console.log(error);
      })
      this.search()
      this.form = {}
    },
    changeClick(id) {
      //删除逻辑的处理
      axios.post("http://localhost:9802", { funcation:"developerDelete", params: {"id":id} }).then((res)=>{
        if (res.data.code == 200){
            this.$message({
              message:res.data.msg,
              type:'success'
            })
          }
      }).catch((error)=>{
        console.log(error);
      })
      this.search()
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.search();
    },
    handleCurrentChange(val) {
      this.pageNo = val;
      this.search();
    },
  },
};
</script>

<style scoped>

</style>