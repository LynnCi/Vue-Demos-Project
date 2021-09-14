<template>
    <div>promise 加载图片呢</div>
</template>

<script>

export default {
    name:'imgPromise',
    data(){
        return{}
    },
    created(){
        const url = '99'
        const url2  = 'imgsrc2222'
        this.loadImg(url).then(img => {
            console.log(img)
            return loadImg(url2)
        }).then(img2 => {
            console.log('img2',img2)
        }).catch((err) => {
            console.log(`加载错误${err}`)
        })

    },
    methods:{
        loadImg(src){
            const promise = new Promise((resolve,reject) => {
                const img = document.createElement('img')
                img.onload = function(){
                    resolve(img)
                }
                img.onerror = function(){
                    reject(new Error(`img 加载失败，图片地址为：${src}`))
                }
                img.src = src
            });
            return promise;
        }
   

    }
}
</script>
