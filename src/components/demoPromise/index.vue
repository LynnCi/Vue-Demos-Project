<template>
    <div>
        <h2>promise</h2>
        <ol>
            <li>
                <p>promise 有几种状态？</p>
                <textarea>
                    3种：pending resolve reject
                </textarea>
            </li>
            <li>promise 状态是否可变？</li>
            <li>promise 如何解决地狱回调？</li>
            <li>promise 有哪些方法？应用场景？（all/race）</li>
            <li>如何让 promise 顺序执行？（async/await）</li>
        </ol>
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return{}
    },
    created(){
        this.basicTimeout()
    },
    methods:{
        basicTimeout(){
            console.log('1')
            setTimeout(() => {
                console.log('2')
            },0)
            console.log('3') //1,3,2
        },
        basicPromise(){
            console.log('here we go')
            new Promise(resolve => {
                setTimeout(() => {
                    resolve('olivia')
                },3000)

            })
                .then(val => {
                    console.log('name is ' + val)
                }) //here, name is olivia
        }
    }
}
</script>
