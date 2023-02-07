//导入axios
import axios from '@/utils/request.js'

//按需导出api方法
//get方法
this.$axios.get(url,{params:{a:1,b:2}})
.then(function (response) {
   console.log('返回值')
})
.catch(function (error) {
  //  this.$message.error(error);
});

//post请求
that.$axios.post(url,{a:1,b:2})
.then(function (res) {
   console.log("返回值")
})
.catch(function (error) {
  console.log(error);
});