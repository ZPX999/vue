<template>
  <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
        
        <el-breadcrumb-item>账号列表</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="page_content">
        <div class="flex">
          <div class="input_box">
            <el-input placeholder="请输入关键字" v-model="searchParams.query">
              <template #append>
                <el-button  @click="serchList">搜索</el-button>
              </template>
            </el-input>
          </div>
          <el-button type="primary" @click="addUser">新增用户</el-button>
        </div>
      </div>
      <el-table
      :data="userList"
      style="width: 100%">
        <el-table-column
          prop="username"
          label="用户名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="180">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="role_name"
          label="角色">
        </el-table-column>
        <el-table-column
          prop="mg_state"
          label="状态">
        </el-table-column>
      </el-table>
      <el-dialog v-model="dialogFormVisible" title="新建用户">
            <!-- 
                表单
                | username | 用户名称 | 不能为空 |
                | password | 用户密码 | 不能为空 |
                | email    | 邮箱     | 可以为空 |
                | mobile   | 手机号   | 可以为空 |
             -->
           <el-form 
            ref="userForm"
            :model="formData"
            :rules="rules"
           >
               <el-form-item label="用户名称" prop="username">
                   <el-input v-model="formData.username" placeholder="请输入用户名称" />
               </el-form-item>
               <el-form-item label="用户密码" prop="password">
                   <el-input type="password" v-model="formData.password" placeholder="请输入密码" />
               </el-form-item>
               <el-form-item label="邮箱" prop="email">
                   <el-input v-model="formData.email" placeholder="请输入用户邮箱" />
               </el-form-item>
               <el-form-item label="手机号" prop="mobile">
                   <el-input v-model="formData.mobile" placeholder="请输入用户手机号" />
               </el-form-item>
           </el-form>
           <template #footer>
               <div class="flex">
                   <el-button>取消</el-button>
                   <el-button type="primary" @click="submitForm(userForm)" >确定</el-button>
               </div>
           </template>
        </el-dialog>
  </div>
</template>

<script>
import { reactive, toRefs, ref} from 'vue'
import {userListApi,userAddApi} from '@/until/request1'
export default {
    name:'UserList',
    setup() {
      const data=reactive({
        searchParams:{
          query:"",
          pagesize:5,
          pagenum:1
        },
        userList:[],
        total:0,
        dialogFormVisible:false,
        dialogFormEVisible:false,
        formData:{
          username:"",
          password:"",
          email:"",
          mobile:"",
        },
        rules:{
                username:[
                    {required:true,message:"此项为必填",trigger:"blur"}
                ],
                
                password:[
                    {required:true,message:"此项为必填",trigger:"blur"}
                ],
                email:[
                    {required:false,
                    pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                    message:"请填写正确邮箱",trigger:"blur"}
                ], 
                mobile:[
                    {required:false,
                    pattern:/^[1][3,4,5,7,8][0-9]{9}$/,
                    message:"请填写正确手机号",trigger:"blur"}
                ]
            },
      })
      const serchList=()=> {
        userListApi(data.searchParams).then(res=>{
          if(res.data) {
            console.log("用户数据",res);
            data.userList=res.data.users
            data.total=res.data.total
          }
        })
      }
      const addUser=()=> {
        
            data.dialogFormVisible=true
        
      }
      const submitForm=(formEl)=>{
           
            formEl.validate(res=>{
                if(!res){
                    return
                }
                
                userAddApi(data.formData).then(res=>{
                    if(res.data){ 
                        
                        data.dialogFormVisible=false
                        
                        data.formData={
                            username:"",
                            password:"",
                            email:"",
                            mobile:"",
                        }
                        
                        serchList()
                    }
                })
            })
        }
        const userForm=ref()
      return {
        ... toRefs(data),
        serchList,
        addUser,
        submitForm,
        userForm
      }
    }

}
</script>

<style>
  .input_box {
    width: 200px;
    margin-right: 15px;
  }
  
</style>