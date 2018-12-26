<template>
    <div>
        <Header></Header>
        <div class="container">
            <Swiper :swiperSlides="sliders"></Swiper>
            <div class="details-box">
                <div class="pro-title">
                    <h3>{{cake.en_name}}</h3>
                    <span>{{cake.name}}</span>
                </div>
                <p class="price-label">
                    <span class="top-price">￥{{cake.price}}</span>
                </p>
                <span class="details-explain"></span>
                <div class="pro-details-label">
                    <a href="###">新品&nbsp;›</a>
                    <a href="###">人气&nbsp;›</a>
                    <a href="###">生日&nbsp;›</a>
                </div>
                <ul class="details-taste" style="padding-right: 4px">
                    <li>
                        <img src="https://m.21cake.com/themes/wap/img/goods/icon/micon-27.png" alt="绿茶">
                        绿茶
                    </li>
                    <li>
                        <img src="https://m.21cake.com/upload/images/20180424/a234879e876ee82791bf12eb50db0f99.png"
                             alt="玄米">
                        玄米
                    </li>
                    <li>
                        <img src="https://m.21cake.com/upload/images/20180424/20deacb7ec1c0cb43a88f27befdd53b7.png"
                             alt="梨">
                        梨
                    </li>
                </ul>
                <div class="select-card">
                    <ul class="select-specifications">
                        <li><a id="J-specifications">已选择：2.0磅<i></i></a></li>
                    </ul>
                    <div class="details-options-card">
                        <ul class="details-options">
                            <li class="details-options-size"><i></i>18x18cm</li>
                            <li class="details-options-laid"><i></i>含10套餐具</li>
                            <li class="details-options-unmber"><i></i>适合7-8人分享</li>
                            <li class="details-options-time"><i></i>最早明天 09:30配送</li>
                        </ul>
                    </div>
                    <ul class="store-info">
                        <li>
                            <img src="https://m.21cake.com/themes/wap/img/fresh.png" alt="保鲜条件">
                            <span>保鲜条件</span>
                            <div><p>0－4℃保藏10小时，5℃食用为佳</p></div>
                        </li>
                        <li data-sweet="2" id="sweetList">
                            <img src="https://m.21cake.com/themes/wap/img/sweet.png">
                            <span>参考甜度</span>
                            <div>
                                <p class="sweet-list">
                                    <i class="active"></i>
                                    <i class="active"></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="details-introduction">
                <div class="shiju">
                    /“浅草才能没马蹄”/<br>
                    /切着吃的雨前西湖龙井/<br>
                    /中国绿茶与爽脆果实，工笔勾勒一杯好茶/<br>
                    /复杂而纯粹的深浅绿意/<br>

                    *本款为季节性产品，夹心层由南水梨/马蹄更替。
                </div>
                <div class="details-img">
                    <img :src="cake.img1">
                    <img :src="cake.img2">
                    <img :src="cake.img3">
                    <img :src="cake.img4">
                    <img :src="cake.img5">
                    <img :src="cake.img6">
                    <img :src="cake.img7">
                </div>
            </div>
            <div class="recommend-list"
                 style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                <p class="cart-top-tip">· 推荐商品 ·</p>
                <ul>
                    <li><a href="##"><img src="https://m.21cake.com/upload/images/58c4227141bbcf6efe30b5940267a1a9.jpg"
                                                     alt="榴莲飘飘"><h4>榴莲飘飘</h4>
                        <p>￥298.00/2.0磅</p></a>
                        <div class="recommend-cart">
                            <button data-productid="263"><i></i></button>
                        </div>
                    </li>
                    <li><a href="##"><img src="https://m.21cake.com/upload/images/f5c184a98afac9e350304232c69b2bc5.jpg"
                                                       alt="芒果奶油蛋糕"><h4>芒果奶油蛋糕</h4>
                        <p>￥198.00/2.0磅</p></a>
                        <div class="recommend-cart">
                            <button data-productid="9178"><i></i></button>
                        </div>
                    </li>
                    <li><a href="##"><img src="https://m.21cake.com/goods/1459337079137.jpg" alt="百利甜情人"><h4>百利甜情人</h4>
                        <p>￥298.00/2.0磅</p></a>
                        <div class="recommend-cart">
                            <button data-productid="377"><i></i></button>
                        </div>
                    </li>
                    <li><a href="##"><img src="https://m.21cake.com/upload/images/d2b0e6d721d82eab4e21c9dea55483b4.jpg"
                                                       alt=" （撒粉款黑猫警长）黑白巧克力慕斯"><h4> （撒粉款黑猫警长）黑白巧克力慕斯</h4>
                        <p>￥398.00/2.0磅</p></a>
                        <div class="recommend-cart">
                            <button data-productid="8674"><i></i></button>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from "../base/Swiper1.vue";
    import {getInfo1, getInfo} from "../api/list.js";
    import Header from "../base/Header.vue"
    export default {
        data() {
            return {
                sliders: {},
                cake: {},
                str:null
            }
        },
        created() {
            this.getSliders();
            this.getDetail();
        },
        methods: {
            async getSliders() {
                this.sliders = await getInfo1(this.cid);
            },
            async getDetail() {
                this.cake = await getInfo(this.cid);
            }
        },
        computed: {
            cid() {
                return this.$route.params.cid
            }
        },
        components: {
            Swiper,
            Header
        }
    }

</script>

<style scoped lang="less">
    .container {
        position: relative;
        min-height: 619px;
        background: #f6f6f6;
        font-size: 0.12rem;
        .details-box {
            background: #fff;
            padding-bottom: 0.2rem;
            .pro-title {
                padding: 0 .24rem;
                color: #333;
                height: 0.57rem;
                font-size: 0.12rem;
                h3 {
                    font-size: .24rem;
                    color: #333;
                    line-height: .29rem;
                    padding-top: .1rem;
                    font-weight: normal;
                }
                span {
                    font-size: 0.14rem;
                    line-height: 0.18rem;
                }
            }
            .price-label {
                margin-top: 0.04rem;
                height: 0.3rem;
                font-size: 0.12rem;
                .top-price {
                    font-size: 0.22rem;
                    color: #C69C6D;
                    padding-left: 0.24rem;
                    height: 0.3rem;
                    line-height: 0.3rem;
                }
            }
            .details-explain {
                color: #969696;
                display: block;
                padding: 0 0.24rem;
                margin: 0.05rem 0;
            }
            .pro-details-label {
                padding: 0.05rem 0.24rem;
                font-size: 0.12rem;
                a {
                    font-size: 0.12rem;
                    display: inline-block;
                    line-height: 0.18rem;
                    color: #D5BFA7;
                    padding: 0 0.12rem;
                    border: 0.01rem solid #D5BFA7;
                    border-radius: 1rem;
                    margin-right: 0.06rem;
                }
            }
            .details-taste {
                padding: 0.1rem 0.24rem 0;
                overflow: hidden;
                li {
                    float: left;
                    height: 0.32rem;
                    font-size: 0.12rem;
                    line-height: 0.32rem;
                    margin-right: 0.2rem;
                    margin-bottom: 0.1rem;
                    color: #442818;
                    img {
                        width: 0.32rem;
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 0.08rem;
                    }
                }
            }
            .select-card {
                background: #FFF;
                box-shadow: 0 0.03rem 0.1rem 0 rgba(0, 0, 0, 0.10);
                border-radius: 0.04rem;
                margin: 0 0.2rem;
                overflow: hidden;
                font-size: 0.12rem;
                color: #442818;
                .select-specifications {
                    border-bottom: none;
                    background: rgba(199, 178, 153, 0.20);
                    margin: 0;
                    padding-left: 0.14rem;
                    li {
                        height: 0.45rem;
                        font-size: 0.13rem;
                        line-height: 0.45rem;
                        border-top: 0.01rem solid #eee;
                        a {
                            display: block;
                            text-decoration: none;
                            cursor: pointer;
                            color: #442818;
                            i {
                                display: inline-block;
                                height: 15px;
                                width: 10px;
                                background: url(https://m.21cake.com/themes/wap/img/Page-go.png);
                                float: right;
                                margin-top: 15px;
                                background-size: cover;
                                margin-right: 15px;
                            }
                        }
                    }
                }
                .details-options-card {
                    margin: 0.18rem 0.14rem 0.08rem;
                    border-bottom: 0.01rem solid #D2D2D2;
                    font-size: 0.12rem;
                    color: #442818;
                    .details-options {
                        overflow: hidden;
                        width: 100%;
                        li {
                            float: left;
                            width: 50%;
                            margin-bottom: 0.04rem;
                        }
                    }
                }
                .store-info {
                    background-color: #fff;
                    margin-bottom: 0.14rem;
                    li {
                        overflow: hidden;
                        margin-bottom: 8px;
                        img {
                            height: 0.15rem;
                            width: auto;
                            display: block;
                            vertical-align: top;
                            float: left;
                            margin-left: 0.17rem;
                        }
                        span {
                            display: block;
                            vertical-align: top;
                            width: 0.55rem;
                            text-align: center;
                            margin: 0 0.1rem;
                            float: left;
                        }
                        div {
                            width: 100%;
                            float: left;
                            margin-left: -1.29rem;
                            p {
                                padding-left: 1.29rem;
                                padding-right: 0.15rem;
                            }
                            .sweet-list {
                                .active {
                                    background-image: url(https://m.21cake.com/themes/wap/img/sweet-02.png);
                                }
                                i {
                                    display: inline-block;
                                    background: url(https://m.21cake.com/themes/wap/img/sweet-01.png) no-repeat center;
                                    height: 0.14rem;
                                    width: 0.14rem;
                                    background-size: 100%;
                                    margin-right: 0.1rem;
                                }
                            }
                        }
                    }
                }
            }

        }
        .details-introduction {
            margin-top: 0.12rem;
            font-size: 0.12rem;
            .shiju {
                padding: 0.15rem;
                background: #FFFFFF;
                margin-top: 0.12rem;
            }
            .details-img {
                margin-top: 0.12rem;
                width: 100%;
                overflow: hidden;
                margin-bottom: 0.5rem;
                img {
                    display: block;
                    width: 100%;
                    float: left;
                }
            }
        }
        .recommend-list{
            overflow: hidden;
            display: none;
            margin-bottom: 0.2rem;
            .cart-top-tip{
                height: 0.38rem;
                line-height: 0.38rem;
                text-align: center;
                width: 100%;
            }
            ul li{
                width: 48.2%;
                background: #fff;
                margin-left: 1.2%;
                margin-bottom: 1.2%;
                float: left;
                position: relative;
                padding-bottom: 0.18rem;
                list-style: none;
                a{
                    color: #442818;
                    img{
                        display: block;
                        max-width: 1.1rem;
                        max-height: 1.21rem;
                        margin: 0 auto;
                    }
                    h4,p{
                        margin: 0 0.1rem;
                        height: 0.2rem;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        word-break: break-all;
                    }
                }
                .recommend-cart{
                    button{
                        position: absolute;
                        right: 0.1rem;
                        bottom: 0.13rem;
                        background: url(https://m.21cake.com/themes/wap/img/candle-cart.png) no-repeat center;
                        background-size: 0.18rem 0.18rem;
                        height: 0.3rem;
                        width: 0.3rem;
                        border: none;
                    }

                }
            }
        }
    }

</style>