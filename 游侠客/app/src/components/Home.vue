<template>
    <div class="box">
        <router-view class="main"></router-view>
        <footer class="footer">
            <router-link v-for="(item,index) in list" :key="index" :to="item.router" tag="div" class="div">
                <i :class="item.icon"></i>
                <p>{{item.txt}}</p>
            </router-link>
        </footer>
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
            list:[
                {"txt":"首页","icon":"iconfont icon-shouye","router":"/home/main"},
                {"txt":"订单","icon":"iconfont icon-feiji","router":"/home/dingdan"},
                {"txt":"个人中心","icon":"iconfont icon-wode","router":"/home/my"}
            ]
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
    .box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .main{
            flex:1;
        }
        .footer{
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            border-top: 1px solid #ccc;
            .div{
                flex: 1;
                text-align: center;  
                color: #707070;
            }
            .router-link-exact-active{
                color: #FFEF35;
                font-weight: 600;
            }
        }
    }
</style>