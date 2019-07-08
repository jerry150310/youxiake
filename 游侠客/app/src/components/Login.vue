<template>
    <div class="login">
        <div class="header">
            <h1>YOUXIAKE游侠客</h1>
        </div>
        <div class="inp">
            <div class="tab">
                <span>账号登录</span>
                <span>短信快捷登录</span>
            </div>
            <div class="inps">
                <input type="text" value="手机号/邮箱">
                <input type="text" value="请输入密码">
            </div>
            <button class="btn" @click="btnFn">登录</button>
            <button class="zhuce">手机快速注册</button>
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
        btnFn(){
            localStorage.token="账号+密码";
            alert("登录成功，跳转页面");
            this.$router.push("/home/my")
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .login{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: 200px;
            background: #FED101;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .inp{
            width: 100%;
            display: flex;
            flex-direction: column;
            height: auto;
            .tab{
                width: 100%;
                height: 60px;
                display: flex;
                align-items: center;
                margin: 0 auto;
                background: #f5f5f5;
                span{
                    flex: 1;
                    text-align: center;
                }
            }
            .inps{
                width: 90%;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                input{
                    width: 100%;
                    height: 40px;
                    border: 1px solid #ccc;
                    margin:  5px auto;
                }
            }
            button{
                width: 90%;
                height: 40px;
                margin:  10px auto;
            }
            .btn{
                background: #FED101;
                outline: 0;
                border:0;
            }
            .zhuce{
                background: 0;
                outline: 0;
                border: 1px solid #ccc;
            }
        }
    }
</style>