import { post,get,put,del } from "./service";
export const loginApi=data=>{ 
    return post({
        url:"/login",
        data
    })
}

// 获取用户列表
export const userListApi=data=>{ 
    return get({
        url:"/users",
        data
    })
} 

// 新增用户列表
export const userAddApi=data=>{ 
    return post({
        url:"/users",
        data
    })
} 

