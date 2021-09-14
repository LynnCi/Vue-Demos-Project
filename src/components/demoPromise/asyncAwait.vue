<template>
    <div>async await 面试题</div>
</template>

<script>

export default{
    name:'asyncAwait',
    created(){
        this.testAsyncAwait2()
    },
    methods:{
        //promise async await区别
        //await 返回的是 promise
        //async 执行完毕返回的也是 promise
        basic(){
           async function async1(){
               await async2()          //async2执行完毕后，返回promise
               console.log('async1')   //微任务，await返回成功后执行
           }
           async function async2(){    //无await，即普通函数
               console.log('async2')   //同步
           }
           async1();
           console.log(10)      //同步
           //async2 10 async1
        },
        basic2(){
            async function async1(){
                try{
                    await async2()          //async2执行完毕后，返回promise
                    console.log('async1')   //微任务，await返回成功后执行
                }catch(err){
                    console.log('err')
                }
            }
            async function async2(){    //无await，即普通函数
               console.log('async2')   //同步
               return Promise.reject()
            }
            async1();
            console.log(10)      //同步
            //async2  10  err
        },
        basic3(){
            async function async1(){
               await async2()          //async2执行完毕后，返回promise
               console.log('async1')   //微任务，await返回成功后执行
               await async3()
               console.log('async3')
            }
            async function async2(){    //无await，即普通函数
               console.log('async2')    //同步
            }
            async function async3(){
                setTimeout(() => {      //宏
                    console.log('async3 end')
                })
            }
            async1();
            console.log(10)      //同步
            //async2  10  async1 async3 async3 end
        },
        testAsyncAwait1(){
            console.log('start')  //1
            async function async1(){
               await async2()
               console.log('async1') //微任务 5
            }
            async function async2(){
               console.log('async2')  //2
            }
            async1()
            setTimeout(() => {         //宏任务
               console.log('time')      //8
            })
            new Promise(resolve => {
               console.log('promise')  //3
               resolve()
            })
            .then(() => {
               console.log('promise1')  //微 6
            })
            .then(() => {
               console.log('promise2')  //微 7
            })
            console.log('script end')     //同步 4
            //start async2 promise scriptend async1 promise1 promise2 time
        },
        testAsyncAwait2(){
            let a;
            const b = new Promise((resolve,reject) => { //微
                console.log('promise1')
                resolve() //promise
            }).then(() => {
                console.log('promise2') 
            }).then(() => {
                console.log('promise3')
            }).then(() => {
                console.log('promise4')
            })
            a = new Promise(async(resolve,reject) => {
                console.log(a)
                await b    //promise 微
                console.log(a)
                console.log('after1')
                await a
                resolve(true)
                consol.log('after2')
            })
            console.log('end')
            //promise1 promise2 a end promise2 promise3 promise4 a after1 after2
        }

    }

}
</script>
