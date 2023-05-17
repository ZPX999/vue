import axios from "axios";
import { ElLoading } from "element-plus";
import {ElMessage} from "element-plus"

let loadingObj=null;
const Service=axios.create({
    timeout:8000,
    baseURL:"http://127.0.0.1:8888/api/private/v1/",
    headers: {
        "Content-type":"application/json;charset=utf-8"
    }
})
//请求拦截
Service.interceptors.request.use(config=>{
    loadingObj=ElLoading.service({
        lock: true,
        text: 'Loading',
        
        background: 'rgba(0, 0, 0, 0.7)'
    })
    return config
})
//响应拦截
Service.interceptors.response.use(response=>{
    loadingObj.close()
    const data = response.data
    if(!data.data) {
        ElMessage.error(data.meta.msg||"服务器出错")
        return data

    }
    return data
},error=>{
    loadingObj.close()
    ElMessage({
        message:"服务器错误",
        type:"error",
        duration:2000,
    })
    console.log(error);
})
export const post=config=>{
    return Service({
        ...config,
        method:"post",
        data:config.data
    })
}
export const get=config=>{
    return Service({
        ...config,
        method:"get",
        params:config.data
    })
}

export const put=config=>{
    return Service({
        ...config,
        method:"put",
        data:config.data
    })
}// delete请求
export const del=config=>{
    return Service({
        ...config,
        method:"delete" 
    })
}