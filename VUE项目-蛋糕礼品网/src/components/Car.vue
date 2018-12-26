<template>
    <div class="shopping">
        <Header></Header>
        <div class="car" v-show="flag">
            <img src="https://m.21cake.com/themes/wap/img/cart-empty.png" alt="">
            <p>您的购物车里还没有商品</p>
            <router-link to="/list">去购物>></router-link>
            <!--<router-link :to="{name:'list',params:{id:1}}">去购物>></router-link>-->
        </div>
        <div class="content" v-if="!flag">
            <p class="cart-top-tip">· 满100元免配送服务费 ·</p>
            <ul class="carBox">
                <li v-for="(cake,index) in cakes" :key="index">
                    <div class="cart-pro-box">
                        <router-link :to="{name:'detail',params:{id:2}}">
                            <img :src="cake.img_url" alt="">
                        </router-link>
                        <div class="detail">
                            <h2>
                                {{cake.name}}
                    <span>{{cake.en_name}}</span>
                            </h2>
                            <span>规格：{{cake.spec}}</span>
                            <span class="last">￥{{cake.price * cake.number}}</span>
                        </div>
                        <div class="option">
                            <a href="##" v-show="cake.number==1" @click="remove(cake.id)"></a>
                            <a href="##" v-show="cake.number>1" @click="reduce(cake.id,1)">-</a>
                            <span>{{cake.number}}</span>
                            <a href="##" @click="add(cake.id,2)">+</a>
                        </div>
                    </div>
                    <p class="laid-count">每份含免费餐具10套</p>
                </li>
                <li>
                    <router-link to="/card" class="birthday-brand">{{str}}</router-link>
                </li>
                <li class="candle-laid-list">
                    <p class="cart-top-tip">· 搭配商品 ·</p>
                    <dl class="adjuncts-list">
                        <dt>
                        <div>
                            <img src="https://m.21cake.com/public/images/2c/6c/6d/3942d4bcfd0d09f48714a9f5b5997290.jpg?1511400718#h"
                                 alt="方形蜡烛">
                        </div>
                        </dt>
                        <dd>
                            <h4>方形蜡烛</h4>
                            <span>￥5.00</span>
                        </dd>
                        <dd class="cart-button-candle action-add-to-cart" data-product_id="1977">
                            <a class="js-click-track" href="javascript:void(0);" name="action-add-to-cart_33"
                               @click="parts(13)">
                                <img src="https://m.21cake.com/themes/wap/img/candle-cart.png">
                            </a>
                        </dd>
                        <dd class="corner-cart-dd"><span class="corner-cart">配件</span></dd>
                    </dl>
                    <dl class="adjuncts-list">
                        <dt>
                        <div>
                            <img src="https://m.21cake.com/public/images/63/6a/71/84ea7dbb64e18846e0bcdf22172671ae.jpg?1463108691#h"
                                 alt="餐具套餐">
                        </div>
                        </dt>
                        <dd>
                            <h4>餐具套餐</h4>
                            <span>￥0.50</span>
                        </dd>
                        <dd class="cart-button-candle action-add-to-cart" data-product_id="1965">
                            <a class="js-click-track" href="javascript:void(0);" name="action-add-to-cart_59"
                               @click="parts(14)">
                                <img src="https://m.21cake.com/themes/wap/img/candle-cart.png">
                            </a>
                        </dd>
                        <dd class="corner-cart-dd"><span class="corner-cart">配件</span></dd>
                    </dl>
                    <dl>
                        <dt>
                        <div>
                            <img src="https://m.21cake.com/upload/images/eb6066c7d9c25ca55e338ee611c897da.jpg">
                        </div>
                        </dt>
                        <dd>
                            <h4>拷贝蜡烛-爱尔兰咖啡</h4>
                            <span>￥8.00/个</span></dd>
                        <dd class="cart-button-candle action-add-to-cart" data-product_id="10846">
                            <a class="js-click-track" href="javascript:void(0);" name="action-add-to-cart_10846"
                               @click="parts(15)">
                                <img src="https://m.21cake.com/themes/wap/img/candle-cart.png">
                            </a>
                        </dd>
                    </dl>
                </li>
            </ul>
            <div class="place-order-bottom">
                <a href="#" class="order-delete-but" id="action-clear-cart-btn" @click="allRemove()"><i></i></a>
                <a href="javascript:void(0);" class="place-order-but" name="place-order-but" id="submit-form">去结算</a>
                <div class="pay-money" id="cart-total-amount">
                    <div>¥<span>{{pic}}</span><span>商品</span></div>
                    <div class="pay-money-plus">+</div>
                    <div>¥<span>0</span><span>配送费</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {cake, removeCake,res} from "../api/list.js";
    import {EventBus,EveCar} from "./EventBus"
    import Header from "../base/Header.vue"
    export default {
        data(){
            return {
                cakes: [],
                flag: true,
                reveal: true,
                str: "+添加生日牌",
                cid: null,
                ary:[]
            }
        },
        created(){
            this.getCake();
            EveCar.$on("change",(val)=>{
                this.str=val;
                console.log(this.str);
            });
        },
        methods: {
            async getCake (){
                this.cakes = await cake(this.cid);
                if (this.cakes && this.cakes.length > 0) {
                    this.flag = false
                }
            },
            async parts (id){
                this.ary = await cake(id);
                this.cakes.push(this.ary)
            },
            async remove (cake){
                await removeCake(cake);
                this.cakes = this.cakes.filter(item=>{
                    return item.id!=cake
                })
            },
            async allRemove(){
                await removeCake();
                this.cakes=[]
            },
            /*add(id){
                /!*this.cakes.map(item => {
                    if (item.id == id) {
                        return item.number++
                    }
                });*!/
                this.getCake();

            },*/
            async add (cake,num){
                await res(cake,num);
                this.cakes.map(item => {
                    if (item.id == cake) {
                        return item.number++
                    }
                })
            },
            /*reduce(id){
                this.cakes.map(item => {
                    console.log(1);
                    if (item.id == id) {
                        console.log(2);
                        if (Number(item.number)==2) {
                            console.log(3);
                            this.reveal = true;
                        }
                        console.log(item.number);
                        item.number-=1
                        console.log(2,item.number);
                    }
                })
            },*/
            async reduce (cake,num){
                await res(cake,num);
                this.cakes.map(item => {
                    if (item.id == cake) {
                        item.number-=1;
                    }
                })
            },
        },
        computed: {
            /*cid(){
             return this.$route.params.cid
             },*/
            pic(){
                return this.cakes.reduce((prve, item) => {
                    return prve += item.price * item.number
                }, 0)
            }
        },
        components: {
            Header
        },
        watch: {
            cakes: {
                handler(){
                    if (this.cakes.length == 0) {
                        this.flag = true
                    }
                    this.getCake();
                },
                deep: true
            },

        }
    }
</script>

<style scoped lang="less">
    .shopping {
        width: 100%;
        height: 100%;
        .car {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-top: 1.8*2rem;
            background: #fff;
            img {
                width: 1.5*2rem;
                height: 1.5*2rem;
                margin: 0 auto;
            }
            p {
                font-size: 0.14*2rem;
                color: #D5BFA7;
                margin: 0.15rem 0;
            }
            a {
                font-size: 0.12*2rem;
                color: #442818;
            }
        }
        .content {
            background: #f8f8f8;
            p {
                height: 0.38*2rem;
                line-height: 0.38*2rem;
                text-align: center;
                font-size: 0.12*2rem;
                color: #442818;
                /*margin-top: 0.48*2rem;*/
            }
            .carBox {
                background: #fff;
                li {
                    position: relative;
                    padding: 0 0.2rem 0.15*2rem;
                    margin-bottom: 0.15*2rem;
                    .cart-pro-box {
                        display: flex;
                        height: 1.2*2rem;
                        img {
                            height: 1.20*2rem;
                            width: 1.09*2rem;
                            flex: 1;
                            display: inline-block;
                        }
                        .detail {
                            flex: 2;
                            display: inline-block;
                            height: 0.92*2rem;
                            margin-left: 0.19*2rem;
                            h2 {
                                line-height: 0.15*2rem;
                                padding-top: 0.2*2rem;
                                font-weight: normal;
                                font-size: 0.11*2rem;
                                color: #442818;
                                display: block;
                                span {
                                    font-size: 0.11*2rem;
                                    color: #442818;
                                    display: block;
                                }
                            }
                            span {
                                font-size: 0.11*2rem;
                                color: #969696;
                                display: block;
                            }
                            .last {
                                margin-top: 0.12*2rem;
                            }
                        }
                        .option {
                            font-size: 0;
                            display: inline-flex;
                            position: absolute;
                            top: 0.75*2rem;
                            right: 0.2*2rem;
                            height: 0.26*2rem;
                            width: 0.78*2rem;
                            color: #969696;
                            a {
                                display: block;
                                width: 0.26*2rem;
                                height: 0.26*2rem;
                                &:nth-child(1) {
                                    /*width: 0.08*2rem;
                                    height: 0.1*2rem;*/
                                    background: #F0F0F0 url("https://m.21cake.com/themes/wap/img/cart-order-delete.png") no-repeat center;
                                    background-size: 0.08rem 0.1*2rem;
                                }
                                &:nth-child(2) {
                                    font-size: 0.26*2rem;
                                    background: #F0F0F0;
                                    text-align: center;
                                    line-height: 0.26*2rem;
                                }
                                &:nth-child(4) {
                                    font-size: 0.26*2rem;
                                    background: #F0F0F0;
                                    text-align: center;
                                    line-height: 0.26*2rem;
                                    color: #442818;
                                }
                            }
                            span {
                                width: 0.26*2rem;
                                height: 0.26*2rem;
                                text-align: center;
                                line-height: 0.26*2rem;
                                background: #F7F7F7;
                                font-size: 0.12*2rem;
                            }
                        }
                    }
                    .laid-count {
                        display: block;
                        height: 0.46*2rem;
                        line-height: 0.46*2rem;
                        font-size: 0.12*2rem;
                        background: url("https://m.21cake.com/public/images/63/6a/71/84ea7dbb64e18846e0bcdf22172671ae.jpg?1463108691") no-repeat left;
                        background-size: 0.46rem 0.46*2rem;
                        padding-left: 0.55*2rem;
                        color: #442818;
                        margin-top: 0;
                        text-align: left;
                    }
                    .birthday-brand {
                        display: block;
                        font-size: 0.12*2rem;
                        line-height: 0.3*2rem;
                        height: 0.3*2rem;
                        background: url("https://m.21cake.com/themes/wap/img/cart-birthday.jpg") no-repeat left, url("https://m.21cake.com/themes/wap/img/go-right.png") right center no-repeat;
                        background-size: 66px 30px, 8px 12px;
                        color: #707070;
                        text-align: center;
                    }
                }
                .candle-laid-list {
                    transform-origin: 0 0 0;
                    opacity: 1;
                    transform: scale(1, 1);
                    margin-bottom: 15px;
                    position: relative;
                    font-size: 12px;
                    color: #442818;
                    overflow: hidden;
                    dl {
                        width: 48.2%;
                        /*background: #fff;*/
                        margin-left: 1.2%;
                        margin-bottom: 1.2%;
                        float: left;
                        position: relative;
                        padding-bottom: 18px;
                        font-size: 12px;
                        color: #442818;
                        -webkit-margin-before: 1em;
                        -webkit-margin-after: 1em;
                        dt {
                            width: 100%;
                            font-size: 12px;
                            color: #442818;
                            display: block;
                            div {
                                width: 110px;
                                height: 121px;
                                margin: 0 auto;
                                font-size: 12px;
                                color: #442818;
                                img {
                                    display: block;
                                    max-width: 110px;
                                    max-height: 121px;
                                }
                            }
                        }
                        dd {
                            margin-left: 11px;
                            line-height: 15px;
                            font-size: 12px;
                            color: #442818;
                            h4 {
                                font-size: 100%;
                                font-weight: normal;
                                color: #442818;
                                line-height: 15px;
                                span {
                                    font-size: 11px;
                                    color: #969696;
                                    display: block;
                                    margin-top: 4px;
                                    height: 14px;
                                    line-height: 15px;
                                }
                            }
                        }
                        .cart-button-candle {
                            position: absolute;
                            right: 18px;
                            bottom: 18px;
                            font-size: 12px;
                            color: #442818;
                            a {
                                text-decoration: none;
                                cursor: pointer;
                                color: #442818;
                            }
                            img {
                                width: 18px;
                                height: 18px;
                                cursor: pointer;
                                color: #442818;
                            }
                        }
                        .corner-cart-dd {
                            span {
                                height: 30px;
                                color: #d9b27f;
                                margin-top: 0;
                                display: block;
                                position: absolute;
                                padding-top: 2px;
                                width: 18px;
                                border: 1px solid #c79350;
                                margin-left: 20px;
                                text-align: center;
                                line-height: 14px;
                                top: 0;
                                left: -2.25%;
                            }
                        }
                    }
                }

            }
            .place-order-bottom {
                height: 44px;
                overflow: hidden;
                background: #fff;
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                z-index: 1000000;
                box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.10);
                margin: 0;
                padding: 0;
                font-size: 12px;
                color: #442818;
                a {
                    text-decoration: none;
                    cursor: pointer;
                    color: #442818;
                    -webkit-tap-highlight-color: transparent;
                }
                .order-delete-but {
                    display: block;
                    float: left;
                    height: 44px;
                    width: 44px;
                    background: url("https://m.21cake.com/themes/wap/img/cart-order-delete.png") no-repeat center center;
                    background-size: 14px auto;
                }
                .place-order-but {
                    display: block;
                    float: right;
                    height: 44px;
                    width: 96px;
                    line-height: 44px;
                    text-align: center;
                    color: #fff;
                    background: #442818;
                }
                .pay-money {
                    float: right;
                    margin-right: 12px;
                    div {
                        float: left;
                        height: 44px;
                        text-align: right;
                        span {
                            &:first-child {
                                margin-top: 5px;
                                display: inline-block;
                                font-size: 16px;
                                font-weight: bold;
                                line-height: 16px;
                            }
                            &:last-child {
                                display: block;
                                color: #707070;
                                font-size: 10px;
                                line-height: 16px;
                            }
                        }
                    }
                    .pay-money-plus {
                        line-height: 24px;
                        margin: 0 8px;
                        font-size: 16px;
                    }

                }
            }
        }
    }
</style>