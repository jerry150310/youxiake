<template>
    <div class="detail">
        <header class="header">
            <i class="iconfont icon-xiangzuo" @click="back"></i>
            <h3>活动详情</h3>
            <i class="iconfont icon-wode"></i>
        </header>
        <div class="banner">
            <img :src="this.$route.query.img" alt="">
        </div>
        <div class="txt">
            <p>{{this.$route.query.nm}}</p>
            <span>{{this.$route.query.price}}元起</span>
        </div>
    </div>
</template>
<script>
export default {
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
        back(){
            this.$router.back(-1)
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
     .detail{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 10px;
            background: #F7F7F7;
        }
        .banner{
            width: 100%;
            height: 150px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .txt{
            p{
                font-size: 18px;
            }
            span{
                color: #FF7100;
                font-weight: 600;
            }
        }
    }
</style>