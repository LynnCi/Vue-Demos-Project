<template>
    <div>数组扁平化flatten</div>
</template>

<script>
export default {
    name:'index',
    created(){
        const arr = [1,2,[3,4,[5,6],7]]
        this.demo1(arr,res=[])
        this.demo2(arr)
    },
    methods:{
        demo1(arr,res){
            for(let i=0;i<arr.length;i++){
                if(arr[i] instanceof Array){
                    demo1(arr[i],res)
                }else{
                    res.push(arr[i])
                }
            }
        },
        demo2(arr){ //推荐
            let res = []
            for(let i = 0;i < arr.length;i++){
                if(Array.isArray(arr[i])){
                    res = res.concat(demo2(arr[i])) //push直接在原数据上添加，contact复制旧数组到新数组，然后在新数组上操作
                }else{
                    res.push(arr[i])
                }
            }
            return res
        },
        demo3(arr){ //推荐
            while(arr.some(item => Array.isArray(item))){
                arr = [].concat(...arr)
            }
            return arr
        }

    }
}
</script>
