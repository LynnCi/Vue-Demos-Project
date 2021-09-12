<template>
    <div>
        userCenter-用户中心
        <p>账号：{{userInfo.account}}</p>
        <p>身份：{{memberInfo}}</p>
    </div>
</template>
<script>
import { mapGetters,mapState } from 'vuex'
export default {
    name:'userCenter',
    computed:{
        //[]里的每项是getters的方法名
        ...mapGetters(['memberInfo']),
        ...mapState(['userInfo'])
    }
}
</script>


