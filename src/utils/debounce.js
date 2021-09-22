//防抖 
//fn中的this指向return返回函数中的this

function debounce(fn,delay = 2000){
    let timer = null
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this,args)
            timer = null
        },delay)
    }
}