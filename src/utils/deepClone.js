//深拷贝

function deepClone(obj){
    if(typeof obj !== 'object' || obj == null){
        return obj
    }
    let result
    if(obj instanceof Array){
        result = []
    }else{
        result = {}
    }
    for(let k in obj){
        if(obj.hasOwnProperty(key)){ //返回boolean，根据自身属性查找是否有key属性
            result[k] = deepClone(obj[k])
        }
    }
    return result
}