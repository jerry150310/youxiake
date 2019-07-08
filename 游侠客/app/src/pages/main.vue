<template>
    <div class="main-box">
        <header class="header">
            <span>北京<i class="iconfont icon-xiangxia"></i></span>
            <input type="text" value="毕业旅游推荐">
            <i class="iconfont icon-gengduo-2" @click="show=!show"></i>
        </header>
        <div class="banner">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide><img src="../../static/images/1.jpg"></swiper-slide>
                <swiper-slide><img src="../../static/images/2.jpg"></swiper-slide>
                <swiper-slide><img src="../../static/images/3.jpg"></swiper-slide>
                <swiper-slide><img src="../../static/images/4.jpg"></swiper-slide>
                <swiper-slide><img src="../../static/images/5.jpg"></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
        <div class="nav">
            <div>
                <img src="../../static/images/n1.png" alt="">
                <p>国内游</p>
            </div>
             <div>
                <img src="../../static/images/n2.png" alt="">
                <p>出境游</p>
            </div>
             <div>
                <img src="../../static/images/n3.png" alt="">
                <p>周边游</p>
            </div>
             <div>
                <img src="../../static/images/n4.png" alt="">
                <p>当地玩乐</p>
            </div>
             <div>
                <img src="../../static/images/n5.png" alt="">
                <p>活动赛事</p>
            </div>
             <div>
                <img src="../../static/images/n6.png" alt="">
                <p>摄影游</p>
            </div>
             <div>
                <img src="../../static/images/n7.png" alt="">
                <p>亲子游</p>
            </div>
             <div>
                <img src="../../static/images/n8.png" alt="">
                <p>户外游</p>
            </div>
             <div>
                <img src="../../static/images/n9.png" alt="">
                <p>主题游</p>
            </div>
             <div>
                <img src="../../static/images/n10.png" alt="">
                <p>定制游</p>
            </div>
       
        </div>
        <div class="nav-swiper">
             <swiper>
                <swiper-slide>
                    <div>
                       <img src="../../static/images/b1.png" alt="">
                        <p>游轮</p>
                    </div>
                     <div>
                       <img src="../../static/images/b2.png" alt="">
                        <p>签证</p>
                    </div>
                     <div>
                       <img src="../../static/images/b3.png" alt="">
                        <p>自由行</p>
                    </div>
                     <div>
                        <img src="../../static/images/b4.png" alt="">
                        <p>房车游</p>
                    </div>
                     <div>
                        <img src="../../static/images/b5.png" alt="">
                        <p>分享好友</p>
                    </div>
                </swiper-slide>
                  <swiper-slide>
                    <div>
                       <img src="../../static/images/b1.png" alt="">
                        <p>游轮</p>
                    </div>
                     <div>
                       <img src="../../static/images/b2.png" alt="">
                        <p>签证</p>
                    </div>
                     <div>
                       <img src="../../static/images/b3.png" alt="">
                        <p>自由行</p>
                    </div>
                     <div>
                        <img src="../../static/images/b4.png" alt="">
                        <p>房车游</p>
                    </div>
                     <div>
                        <img src="../../static/images/b5.png" alt="">
                        <p>分享好友</p>
                    </div>
                </swiper-slide>
                  <swiper-slide>
                    <div>
                       <img src="../../static/images/b1.png" alt="">
                        <p>游轮</p>
                    </div>
                     <div>
                       <img src="../../static/images/b2.png" alt="">
                        <p>签证</p>
                    </div>
                     <div>
                       <img src="../../static/images/b3.png" alt="">
                        <p>自由行</p>
                    </div>
                     <div>
                        <img src="../../static/images/b4.png" alt="">
                        <p>房车游</p>
                    </div>
                     <div>
                        <img src="../../static/images/b5.png" alt="">
                        <p>分享好友</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="content">
            <div class="title">
                <h3>亲子与研学</h3>
                <span>更多<i class="iconfont icon-angle-right"></i></span>
            </div>
            <div class="banner-big">
                <img src="../../static/images/big.png" alt="">
            </div>
            <div class="content-bigBox">
                <div class="content-box" v-for="(item,index) in list" :key="index" @click="jumpDetail(item,index)">
                    <img :src="item.img" alt="">
                    <p>{{item.nm}}</p>
                    <span>￥{{item.price}}起</span>
                </div>
            </div>
        </div>
        <transition
            enter-active-class="animated slideInLeft"
            leave-active-class="animated slideOutLeft"
        >
             <div class="mask" v-if="show">
                 <div class="login">
                     <h3>注册/登录</h3>
                 </div>
                 <ul>
                     <li>首页</li>
                     <li>游侠攻略</li>
                     <li>视频</li>
                     <li>游记</li>
                     <li>目的地</li>
                     <li>问答</li>
                     <li>圈子</li>
                     <li>集市</li>
                     <li>民宿营地</li>
                     <li>APP</li>
                 </ul>
            </div>
        </transition>
   </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:{

    },
    components:{
        swiper,
    swiperSlide
    },
    data(){
        return {
             swiperOption: {
                 loop:true,
                 autoplay:true,
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            list:[],
            show:false
        }
    },
    computed:{

    },
    methods:{
        jumpDetail(item,index){//跳转详情页
            this.$router.push({path:`/detail:${index}`,query:{
                img:item.img,
                nm:item.nm,
                price:item.price
            }})
        }
    },
    created(){

    },
    mounted(){
        this.axios.get("/list").then((res)=>{
            this.list = res.data;
        })
    }
}
</script>
<style scoped lang="scss">
    .main-box{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        .header{
            width: 100%;
            height: 60px;
            background: #FFD720;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding:  0 10px;
            input{
                flex: 1;
                margin: 0 10px;
                height: 35px;
                border-radius: 10px;
                outline: 0;
                border: 0;
                color: #7D7D7D;
            }
        }
        .banner{
            width: 100%;
            height: 150px;
            .swiper-container,.swiper-wrapper,.swiper-slide{
                width: 100%;
                height: 100%;
                img{
                width: 100%;
                height: 100%;
                }
            }
        }
        .nav{
            width: 100%;
            height: 150px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            div{
                width: 20%;
                text-align: center;
                font-size: 14px;
            }
        }
        .nav-swiper{
            width: 100%;
            height: 70px;
            border-top: 1px solid #ccc;
            .swiper-container,.swiper-wrapper{
                width: 100%;
                height: 100%;
                .swiper-slide{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    div{
                        flex: 1;
                        text-align: center;
                        font-size: 14px;
                        img{
                            width: 30px;
                            height: 30px;
                        }
                    }
                }
            }
        }
        .content{
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            .title{
                width: 100%;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 10px;
            }
            .banner-big{
                width: 100%;
                height: 160px;
                display: flex;
                align-items:center;
                justify-content: center;
                img{
                    width: 90%;
                    height: 90%;
                }
            }
            .content-bigBox{
                width: 100%;
                height: 150px;
                display: flex;
                .content-box{
                    flex:1;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img{
                        width: 85%;
                        height: 70%;
                    }
                    p{
                        color: #333333;
                        font-size: 14px;
                    }
                    span{
                        color: #FD9745;
                    }
                }
            }
        }
        .mask{
            width:60%;
            height: 100%;
            background:#2D2D2D;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 999;
            color: #fff;
            .login{
                width: 100%;
                height: 70px;
                border-bottom: 1px solid #000;
                display: flex;
                align-items: center;
                position: relative;
                h3{
                    position: absolute;
                    right: 5px;
                }
            }
            ul{
                li{
                    width: 100%;
                    height: 50px;
                    border-bottom: 1px solid #000;
                    display: flex;
                    align-items: center;
                    padding-left: 10px;
                }
            }
        }
    }
</style>