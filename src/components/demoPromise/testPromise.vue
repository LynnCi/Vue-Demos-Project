<template>
    <div>promise 面试题</div>
</template>

<script>
export default{
   name:'testPromise',
   created(){
       this.basicPromise()
   },
   methods:{
       basicPromise(){
           Promise.resolve() //成功的promise
            .then(() => {
                return 'abc'
            })
            .then((res) => { //res = abc
                console.log('then',res)
            })
            .catch((err) => {
                console.log('catch:',err)
            })
            //then abc

       },
       //promise 状态发生变化后，不会再变化
       statePromise(){
           const promise = new Promise((resolve,reject) => {
               resolve('success1')
               reject('err')
               resolve('success2')
           })

           promise
            .then((res) => {
                console.log('then',res)
            })
            .catch((err) => {
                console.log('catch',err)
            })

       },
       //同步异步 微任务宏任务
       threePromise(){
           const promise = new Promise((resolve,reject) => { //{}同步代码
               console.log(1)
               resolve()       //把promise状态变为成功，不会终止代码执行
               console.log(2)
           })
           promise.then(() => { //微任务
               console.log(3)
           })
           console.log(4)  //同步
           //1,2,4,3

       },
       //返回的是普通值。普通值通过 promise.resolve(42) 包装
       fourPromise(){
           let p1 = new Promise((resolve,reject) => {
               reject(41) //失败状态的 promise
           })
           p1.catch((value) => {  //失败执行 catch
               console.log(value) //41
               return value + 1   //返回的是普通值。普通值通过 promise.resolve(42) 包装
           }).then((value) => {
               console.log(value)  //42 resolve成功执行then
           })
       },
       //返回的是promise。p2是失败状态，应执行catch
       fivePromise(){
           let p1 = new Promise((resolve,reject) => {
               resolve(11)
           })
           let p2 = new Promise((resolve,reject) => {
               reject(new Error('错误err'))
           })
           p1.then((val) => {
               console.log(val) //11
               return p2        //返回的是promise。p2是失败状态，应执行catch
           }).then((val) => {
               console.log(val)
           }).catch(err => {
               console.log(err)
           }) //uncatch 未捕获的错误
       },
       //微任务 > 宏任务    宏任务：先注册先执行
       sixPromise(){
           setTimeout(() => {  //宏任务
               console.log('time1')          //step2:time1
               Promise.resolve().then(() => {   // 89行，promise微任务。96行，setTimeout宏任务
                   console.log('promise1')   //step3:promise1
               })
           })

           Promise.resolve().then(() => {  //微任务
               console.log('promise2')     //step1:promise2
               setTimeout(() => {          //宏任务
                   console.log('time2')    //step4:time2
               })
           })

       },
       sevenPromise(){
           Promise.resolve()
            .then(() => {
                Promise.resolve().then(() => {
                    console.log(1)
                }).then(() => {
                    console.log(2)
                })//无return,会返回undefined(普通值)，返回promise.resolve(undefined)
            })
            .then(() => {
                console.log(3)
            })  //1,3,2

       },
       


   }
}
</script>
