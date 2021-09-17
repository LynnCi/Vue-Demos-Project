<template>
    <div>es6</div>
</template>

<script>
// import { jiegou } from './index'
export default{
    name:'index',
    created(){
        this.set()
    },
    methods:{
        //对象和数组解构
        demo1(){
            const object = {
                name:'Joe',
                age:9,
                sex:'male'
            }
            let { name,age,sex } = object
            console.log('age is' ,age)

            let [a,,c] = [1,2,3]
            console.log(`a is ${a}`)
        },
        //for of 遍历数组 & for in遍历对象中的属性
        demo2(){
            let array = ['aaa','bbb','cc']
            for(let i of array){
                console.log('i',i)
            }
            for(let k in array){
                console.log('k',k,'item',array[k])
            }
        },
        //...扩展运算符 + 默认参数 
        demo3(){
            let arr = [10,11,12]
            let newArr = [30,...arr,20]
            console.log('newArr',newArr)

            let object = {
                sex:'female',
                age:'9'
            }
            let newObject = {...object,name:'susie'}
            console.log('newObject',newObject)
        },
        //模版字符串
        demo4(){
            let name = 'olivia',age = 8
            console.log(`my name is ${name}, and i'm ${age} years old`)
        },
        //set不会添加重复的值
        set(){
            const s = new Set();
            [3,1,2,1,3,4,2,3].forEach(x => s.add(x))
            for(let i of s){
                console.log('i',i)
            }
            //数组祛重[...new Set(array)]
            const set1 = new Set([1,2,3,3])
            let newSet = [...set1]
            console.log('newSet',newSet) //1,2,3

            const set2 = new Set([1,2,3,3,4,5,5,5])
            console.log('set2',set2.size) //5

        },
    }
}
</script>