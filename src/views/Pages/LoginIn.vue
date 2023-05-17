<template>
    <div class="login_wrap">
        <div class="form_wrap">
            <el-form
            :model="loginData" 
            
            >
                <el-form-item
                    prop="username"
                    label="用户名"
                    :rules="[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    ]"
                >
                    <el-input v-model="loginData.username"></el-input>
                </el-form-item>
                <el-form-item
                    prop="password"
                    label="密码"
                    :rules="[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { required: true, message: '此项为必填项', trigger: 'blur' }
                    ]"
                >
                    <el-input type="password" v-model="loginData.password"></el-input>
                </el-form-item>
                <el-button type="primary" class="login_btn" @click="handleLogin">登录</el-button>
            </el-form>
            
        </div>
    </div>
    
</template>

<script>
import { reactive,toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { loginApi } from '@/until/request1'
export default {
    name:'LoginIn',
    setup() {
        const store=useStore()
        const router=useRouter()
        const data=reactive({
            loginData: {
                username:'',
                password:'',
            },
            
        })
        
        const handleLogin=()=> {
            loginApi(data.loginData).then(res=>{
                if(res.data) {
                    store.commit('setUserInfo', res.data);
                    localStorage.setItem("loginData",JSON.stringify(res.data))
                    console.log(store.state.uInfo);
                    router.push({
                        path:"/index"
                    })
                }
            })
            
        }
        return {  
            ...toRefs(data),
            handleLogin,
        }
    }
}

</script>

<style scoped>
    .login_wrap {
        width: 100%;
        height: 100vh;
        background-color: rgb(56, 86, 139);
        position: relative;
    }
    .form_wrap {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #fff;
    }
    .login_btn {
        display: block;
        margin: 10px auto;
    }
</style>