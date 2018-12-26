<template>
    <div class="scroll-content">
        <Header></Header>
        <Swiper :swiperSlides="sliders" ></Swiper>
        <div class="new-home-content">
            <ul class="rights-box">
                <li><i class="new-home-icon"></i>新人首单赠小切块</li>
                <li><i class="new-home-icon"></i>满100包邮</li>
                <li><i class="new-home-icon"></i>全程冷链配送</li>
            </ul>
            <ul class="home-menu-box" id="home-menu">
                <li><a style="width: 25%;">
                    <router-link to="/cake">
                        <img src="../../public/img/b24fa9c0d277b79493fead122afe8e73.png" alt="蛋糕"> 蛋糕
                    </router-link>
                     </a></li>
                <li><a style="width: 25%;">
                    <img src="../../public/img/8ab874d0a3b69d359f5783357eca8cbb.png" alt="周套餐"> 周套餐 </a></li>
                <li><router-link to="/iceCream" style="width: 25%;">
                    <img src="../../public/img/929c4fc42766b55fac7ba5092b5b9cb9.png" alt="冰淇淋"> 冰淇淋 </router-link></li>
                <li><a style="width: 25%;"> <img src="../../public/img/6d777e1d3aa1681d58ea1640f53e2920.png" alt="企业专区">
                    企业专区 </a></li>
            </ul>
            <div class="mould-goods">
                <div class="mould-goods-content">
                    <h3 class="title-goods"><span>新品</span><a>
                    更多<i class="new-home-more"></i></a></h3>
                    <ul>
                        <li v-for="item in list1">
                            <router-link :to="{name:'detail',params:{cid:item.id}}">
                            <img :src="item.imageUrl">
                        </router-link>
                            <div class="bottom-price-cart">
                                <a>
                                    <h4><span class="title">{{item.name}}</span>
                                <span class="price">{{item.price}}</span>
                                        <span>元/{{item.spec}}</span></h4>
                                <p>{{item.description}}</p></a>
                                <button name="add-to-cart_12823" data-productid="12823"><i class="new-home-icon" @click="add(item.id)" ></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="mould-goods-content"><h3 class="title-goods"><span>人气</span><a>
                    更多<i class="new-home-more"></i></a></h3>
                    <ul>
                        <li v-for="item2 in list2">
                            <a >
                                <img :src="item2.imageUrl"> </a>
                            <div class="bottom-price-cart">
                                <a >
                                    <h4>
                                        <span class="title">{{item2.name}}</span>
                                <span class="price">{{item2.price}}</span>
                                        <span>元/{{item2.spec}}</span>
                                    </h4>
                                <p>{{item2.description}}</p></a>
                                <button name="add-to-cart_377" data-productid="377"><i class="new-home-icon"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="mould-goods-content"><h3 class="title-goods"><span>生日</span><a> 更多<i class="new-home-more"></i></a></h3>
                    <ul>
                        <li v-for="item3 in list3">
                            <a >
                                <img :src="item3.imageUrl"> </a>
                            <div class="bottom-price-cart">
                                <a >
                                    <h4>
                                        <span class="title">{{item3.name}}</span>
                                        <span class="price">{{item3.price}}</span>
                                        <span>元/{{item3.spec}}</span>
                                    </h4>
                                    <p>{{item3.description}}</p></a>
                                <button name="add-to-cart_377" data-productid="377"><i class="new-home-icon"></i>
                                </button>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import 'swiper/dist/css/swiper.css'
    import {getSliderImgs,getlistcy,cake} from "../api/list.js";
    import Swiper from '../base/Swiper'
    import Header from '../base/Header'
    import Footer from '../base/Footer'
    export default {
        name: "Home",
        data() {
            return {
                sliders: [],
                list:[],
                list1:[],
                list2:[],
                list3:[],
            }
        },
        created() {
            this.getSliders();
            this.getlistcyh()
        },
        methods: {
            async getSliders() {
                this.sliders = await getSliderImgs()
            },
            async getlistcyh() {
                this.list = await getlistcy();
                this.list1=this.list[0].contents;
                this.list2=this.list[1].contents;
                this.list3=this.list[2].contents;
            },
            async add(id){
                await cake(id)
            }
        },
        components: {
            Swiper,
            Header,
            Footer
        },
        watch: {},
        computed: {},


    }
</script>

<style scoped lang="less">
    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
        margin: 0;
        padding: 0;
        font-size: 12*0.02rem;
        color: #442818;
        list-style: none;
    }

    .new-home-content {
        margin: 0 20*0.02rem;
    }

    .rights-box {
        overflow: hidden;
        text-align: center;
        margin: 9*0.02rem 0;
        height: 18*0.02rem;
        li {
            line-height: 18*0.02rem;
            color: #C69C6D;
            display: inline-block;
            vertical-align: middle;
            /*width: 33%;*/
            i.new-home-icon {

                height: 14*0.02rem;
                width: 14*0.02rem;
                margin-top: -2*0.02rem;
            }
        }

    }

    .rights-box li:first-child {
        float: left;
        margin-top: 1*0.02rem;
    }

    .rights-box li:last-child {
        float: right;
        margin-top: 1*0.02rem;
    }

    .new-home-icon {
        display: inline-block;
        vertical-align: middle;
        background: url(../../public/img/new-home-icon.png) no-repeat;
        background-size: 90*0.02rem auto;
        background-position: 0 -15*0.02rem;
    }

    .home-menu-box {
        overflow: hidden;
        li {
            float: left;
            width: 21%;
            line-height: 16*0.02rem;
            text-align: center;
            margin-right: 4%;
            img {
                width: 70%;
                display: block;
                min-height: 40*0.02rem;
                margin: 0 auto;
            }
            a:visited, a:link, a:hover, a:active, a {
                text-decoration: none;
                cursor: pointer;
                color: #442818;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }
        }
    }
    .mould-goods {
        min-height: 300*0.02rem;
        padding-top: 10*0.02rem;
        a{
            text-decoration: none;
        }
        .mould-goods-content {
            border-top: 1*0.02rem solid #E5E5E5;
            .title-goods {
                padding-top: 10*0.02rem;
                span {
                    color: #322418;
                    display: inline-block;
                    height: 20*0.02rem;
                    font-size: 13*0.02rem;
                    background: #F4EBE2;
                    border-radius: 100*0.02rem;
                    padding: 0 10*0.02rem;
                    line-height: 20*0.02rem;
                }
                a {
                    float: right;
                    color: #808080;
                }
            }
            h1, h2, h3, h4, h5, h6 {
                font-size: 100%;
                font-weight: normal;
            }
             ul {
                 margin-top: 10*0.02rem;
                 li {
                     background: #FFF;
                     border: 1*0.02rem solid #F2EAE4;
                     box-shadow: 0 4*0.02rem 12*0.02rem 0 rgba(0, 0, 0, 0.06);
                     border-radius: 5*0.02rem;
                     overflow: hidden;
                     margin-bottom: 20*0.02rem;
                     a:visited, a:link, a:hover, a:active, a {
                         text-decoration: none;
                         cursor: pointer;
                         color: #442818;
                         -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                         -webkit-tap-highlight-color: transparent;
                     }
                     img {
                         width: 100%;
                     }
                     .bottom-price-cart {
                         position: relative;
                         padding-bottom: 14*0.02rem;
                         button {
                             position: absolute;
                             bottom: 10*0.02rem;
                             right: 10*0.02rem;
                             background: none;
                             border: none;
                             i {
                                 height: 45*0.02rem;
                                 width: 45*0.02rem;
                                 background: url(https://m.21cake.com/themes/wap/img/new-home-icon.png) no-repeat;
                                 background-size: 100%;
                                 background-position: -35*0.02rem 3*0.02rem;
                                 background-size: 80*0.02rem auto;
                             }
                         }
                         p {
                             width: 70%;
                             line-height: 17*0.02rem;
                             margin-top: 7*0.02rem;
                             overflow: hidden;
                             text-overflow: ellipsis;
                             white-space: nowrap;
                             margin-left: 10*0.02rem;
                         }
                         h4 {
                             color: #A6A6A6;
                             margin: 10*0.02rem 10*0.02rem 0 10*0.02rem;
                             .title {
                                 font-weight: bold;
                                 font-size: 15*0.02rem;
                                 color: #322418;
                                 display: inline-block;
                                 margin-right: 8*0.02rem;
                                 max-width: 50%;
                                 overflow: hidden;
                                 text-overflow: ellipsis;
                                 white-space: nowrap;
                             }
                             .price {
                                 font-size: 15*0.02rem;
                                 color: #C69C6D;
                                 display: inline-block;
                                 vertical-align: middle;
                                 margin-top: -4*0.02rem;
                             }
                             span {
                                 display: inline-block;
                                 vertical-align: middle;
                             }
                         }
                     }
                 }
             }
        }
    }
</style>