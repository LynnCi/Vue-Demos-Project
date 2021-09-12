<template>
    <div>
        index-首页
        <p>用户：{{memberInfo}}</p>
        <p>status:{{userStatus}}</p>
    </div>
</template>
<script>
import { mapGetters,mapState } from 'vuex'
export default {
    name:'index',
    computed:{
        //[]里的每项是getters的方法名
        ...mapGetters(['memberInfo']),
        ...mapState(['userStatus'])
    }
}
</script>


