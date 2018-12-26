<template>
    <div>
        <Header></Header>
        <Nav></Nav>
    <div class="slogn">
        <h3>礼物</h3>
        <span>设计师礼品专区</span>
    </div>
        <div class="content">
            <ul>
                <li v-for="(gift,index) in gifts" :key="index">
                    <div>
                        <div class="list-pro-content">
                            <router-link :to="{name:'detail',params:{cid:gift.id}}">
                                <div class="list-pro-img" style="height: 176px;">
                                    <img class="lazy" :src="gift.img_url" style="opacity: 1;">
                                </div>
                                <h3>
                                    {{gift.en_name}}
                                    <span>{{gift.name}}</span>
                                </h3>
                                <span class="price">¥{{gift.price}}/{{gift.spec}}</span>
                                <div class="label">
                                    <img :src="gift.icon"></div>
                            </router-link>
                            <router-link class="cart-add" :to="{name:'car',params:{cid:gift.id}}">
                                <img src="https://m.21cake.com//themes/wap/img/list-cart.png">
                            </router-link>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div style = 'clear:both'></div>
        <Footer></Footer>
    </div>
</template>

<script>
    import {getGift} from "../api/list.js"
    import Nav from "../base/Nav.vue";
    import Header from '../base/Header'
    import Footer from '../base/Footer'
    export default {
        data() {
            return {
                gifts: []
            }
        },
        created() {
            this.getData()
        },
        methods: {
            async getData() {
                this.gifts = await getGift();
            }
        },
        computed: {},
        components: {
            Nav,
            Header,
            Footer
        }
    }

</script>

<style scoped lang="less">
    .slogn {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: center;
        background: #fbf8f6;
        height: .48*2rem;
        h3 {
            color: #482615;
            font-size: .15*2rem;
        }
        span {
            color: #dec9bc;
            font-size: .1*2rem;
        }
    }

    .content {
        ul {
            width: 100%;
            height: 100%;
            li {
                float: left;
                position: relative;
                width: 47%;
                padding-left: .1*2rem;
                img {
                    height: 100%;
                }
                h3 {
                    font-size: .13*2rem;
                    line-height: 1.2em;
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    span{
                        color: #BB9772;
                        display: block;
                        margin-top: .05*2rem;
                    }
                }
                .price {
                    font-size: .13*2rem;
                    color: #BB9772;
                    display: block;
                    margin-top: .05*2rem;
                }
                .label{
                    position: absolute;
                    top: -0.7*2rem;
                    left: 0;
                    img{
                        width: .4*2rem;
                    }
                }
                .cart-add{
                    display: block;
                    width: 14%;
                    padding: 5%;
                    position: absolute;
                    padding-top: .2*2rem;
                    right: 0;
                    bottom: -3%;
                    img{
                        width: .18*2rem;
                    }
                }
            }
        }
    }
</style>