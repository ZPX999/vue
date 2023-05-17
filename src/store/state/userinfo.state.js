export default {
    namespace:true,
    state: {
        userInfo:(localStorage.getItem("loginData")&&JSON.parse(localStorage.getItem("loginData")))||{} ,

    },
    mutations: {
        setUserInfo(state,uInfo) {
            state.userInfo=uInfo 
        }
    }
}
