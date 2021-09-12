//整合userState 和 vip
export default{
    memberInfo(state){
        switch(state.userStatuw){
            case 0:
                return '普通会员'
                break;
            case 1:
                return 'vip会员'
                break;
            case 2:
                return '高级vip会员'
                break;
            default:
                return '普通会员'
                break;
        }
    }
}