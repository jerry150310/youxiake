<template>
    <div class="dingdan">
        我是订单
    </div>
</template>
<script>
export default {
     beforeRouteEnter(to,from,next){
        if(localStorage.token){
            next();
        }else{
            alert("您还没有登录，先去登录吧！");
            next("/login")
        }
    },
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .dingdan{
        width: 100%;
        height: 100%;
        background: lightgreen;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>