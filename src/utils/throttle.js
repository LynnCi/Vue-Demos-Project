//节流

function throttle(fn,delay = 2000){
    let timer = null
    return function(){
        if(timer)return
        timer = setTimeout(() => {
            fn.apply(this,args) //改变this指向
            timer = null
        },delay)
    }
}