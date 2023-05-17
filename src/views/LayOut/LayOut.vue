<template>
   <el-container>
    <el-header class="flex-flaot">
      <div class="flex">
        <img class="logo" src="../../assets/logo.png" alt="">
        <h1 class="title">商铺管理系统</h1>
      </div>
      <el-button type="danger" @click="loginOut">退出</el-button>
    </el-header>
    <el-container>
        <el-aside width="200px">
          <el-menu
            background-color="none"
            text-color="#fff"
            :router="true">
            <el-sub-menu index="1">
              <template #title>
                <i class="el-icon-user"></i>
                <span>账号管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/user">
                  账号列表
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <i class="el-icon-document"></i>
                <span>角色管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/role">
                  角色列表
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main>
            <RouterView></RouterView>
        </el-main>
    </el-container>
    </el-container>
    
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    name:'LayOut',
    setup() {
      const store=useStore()
      const router=useRouter()
      const loginOut=()=> {
        localStorage.removeItem("loginData")
        store.commit(" setUserInfo",{})
        router.push({
          path:"/login",
        })
      }
      return {
        loginOut
      }
    }
}
</script>

<style>
  .title {
    color: #fff;
   
}
  .logo {
    width: 80px;
  }
  .el-header {
    display: flex;
    
  }
  .el-container {
    height: 100vh;
    overflow: hidden;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>