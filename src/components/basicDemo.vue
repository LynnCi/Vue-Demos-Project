<template>
    <div>
        <h1>基础 vuex</h1>
        <!--
            1、通过state.count获取count；
            2、通过vuex的computed方法
        -->
        <h6>count:{{this.$store.state.count}}</h6>
        <h6>{{count}}</h6>
        <button @click="addNumber">click me</button>
    </div>
</template>
<script>


export default {
    name:'basicDemo',
    computed:{
        count(){
        return this.$store.state.count;
        }
    },
    methods:{
        addNumber(){
        const v = 100
        this.$store.commit('countIncrease',v) //函数名，值
        }
    }
}
</script>
