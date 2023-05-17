<template>
  <div>
    <h1>学生：{{ name }}</h1>
    <h2 :class="{'red':isRed}">{{ age }}</h2>
    <div id="dom">{{ name }}</div>
    <button @click="handleClick">点击</button>
    <input type="text" v-model.lazy="inputT">
    <h3>inpuut:{{ inputT }}</h3>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
export default {
    name: 'Test',
    setup() {
        const data=reactive({
            name:"张三",
            age:18,
            isRed:false,
            list:[
                {
                    name:'张三',
                    age:18,
                },
                {
                    name:'张三',
                    age:18,
                }
            ],
            inputT:"",
        })
        const handleClick=function () {
            data.isRed=true;
        }
        return {
            ...toRefs(data), 
            handleClick,
        }
    },

}
</script>

<style>
    .red {
        background: red;
    }
</style>