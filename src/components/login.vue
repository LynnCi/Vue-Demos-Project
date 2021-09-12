<template>
    <div>
        <p>登录信息</p>
        <button @click="loginOn">login in</button>
    </div>
</template>
<script>
import store from '../store'
export default {
    name:'login',
    data(){
        return{
            form:{
                name:'olivia',
                password:'123'
            }
        }
    },
    methods:{
        loginOn(){
            if(!this.form.name && !this.form.password){
                return false;
                alert('输入账号信息')
            }
            let that = this
            setTimeout(() => {
                store.commit('login',{
                    account:that.form.name,
                    password:that.form.password
                })
                store.commit('setMemberInfo',{
                    userStatus:1,
                    vipLevel:0
                })
                this.$router.push('/index')

            },3000)

        }
    }
}
</script>
