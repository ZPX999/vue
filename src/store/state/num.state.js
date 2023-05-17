export default {
    state: {
        count:1,
    },
    getters: {
        countState(state) {
            return state.count>=1
        }
    },
    mutations: {
        setCount(state,num) {
            state.count=num
        }
    },
    actions: {
        setCountPromise(context,num) {
            return new Promise((resolve,reject)=> {
                if(num>100) {
                    reject("值不能大于100")
                }else {
                    context.commit("setCount",num)
                    resolve()
                }
            })
        }
    },
}