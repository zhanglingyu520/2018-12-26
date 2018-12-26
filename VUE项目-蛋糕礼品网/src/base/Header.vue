<template>
    <div>
    <div class="header-box" style="height: 0.48rem;">
        <div class="top-header">
            <div class="open-app" hidden="">
                <i></i>

                <img src="../../public/img/app-icon.png" alt="21cake">
                <!-- <img src="/themes/wap/img/app-icon.png" alt=""> -->
                <span>21cake<br>更流畅的购物体验</span>
                <a href="javascript:void(0);">打开app</a>
            </div>
            <!-- 全站公告 -->
            <div class="station-notice">
                <i></i>
                <p><span></span></p>
            </div>
            <!-- 全站公告结束 -->
            <div class="title-box">
                <a href="javascript:void(0);" class="left-icon" :class="{menuHide:flagMenu}" @click="menuClick"><i
                        class="icon-title"></i></a>
                <a href="javascript:void(0);" class="city" @click="cityClick"><i></i>{{cur.city}}</a>
                <a href="/" class="header-center">

                    <img src="../../public/img/logo.png" class="title-logo" alt="21cake logo">
                    <!-- <img src="/themes/wap/img/logo.png" class="title-logo"> -->
                </a>
                <div class="right-cart-city">
                    <!--<a href="/message/center.html" class="top-message"></a>-->
                    <router-link to="/login" class="top-message"></router-link>
                    <router-link :to="{name:'car',params:{id:1}}" class="top-cart cart-count-icon"><i><em v-show="number!=0">{{number}}</em></i></router-link>
                    <!--<a  class="top-cart cart-count-icon"><i></i></a>-->
                </div>
                <div class="top-header-menu" :class="{hideIt:flagMenu==false}">
                    <div>
                        <a href="/" title="" class="menu-home"><i></i><span>首页</span></a>
                        <!--<router-link to="/cake"><a  title="" class="menu-class"><i></i><span>分类</span></a></router-link>-->
                        <router-link to="/cake" class="menu-class"><i></i><span>分类</span></router-link>
                        <a  title="" class="menu-per"><i class="person"></i><span>个人</span></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bomb-box" :class="{cityDisplay:flagCity}" id="select-city"
             style="transform-origin: 0*0.02rem 0*0.02rem 0*0.02rem;opacity: 1;transform: scale(1, 1);"><i></i>
            <div class="bomb-box-content">
                <div class="bomb-box-content-text">
                    <div class="home-select-city"><p class="home-select-title">选择城市</p>
                        <ul>
                            <li v-for="(citys,index) in cityList"  :class="{active:sel==index}" @click="selectCity(citys,index)" :key="index">
                                <a href="javascript:void(0);" class="city-id-1"
                                   data-json="{&quot;id&quot;:&quot;1&quot;,&quot;name&quot;:&quot;上海&quot;,&quot;region_id&quot;:&quot;22&quot;}">
                                    {{citys.city}}
                                </a>
                            </li>
                        </ul>
                        <a href="javascript:void(0);" class="city-select-button"  @click="cityClickSure">确定</a>
                        <!--<p class="select-text">*切换城市将清空购物车</p>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="head" style="height: 0.48rem;"></div>
    </div>
</template>

<script>
    import {cake} from "../api/list.js";
    export default {
        name: "Header",
        data() {
            return {
                flagMenu: false,
                cityList: [
                    {isSelect:false,city:'上海'},
                    {isSelect:false,city:'北京'},
                    {isSelect:false,city:'天津'},
                    {isSelect:false,city:'杭州'},
                    {isSelect:false,city:'无锡'},
                    {isSelect:false,city:'苏州'},
                    {isSelect:false,city:'广州'},
                    {isSelect:false,city:'深圳'},
                ],
                flagCity:false,
                cur:{isSelect:false,city:'北京'},
                sel:1,
                cakes:[],
                number:null
            }
        },
        created(){
            this.getCake()
        },
        methods: {
            cityClick(){
                this.flagCity=true;
            },
            menuClick() {
                this.flagMenu = !this.flagMenu
            },
            cityClickSure(){
                this.flagCity=false;
            },
            selectCity(citys,index){
                this.cur=citys;
                this.sel=index;
            },
            async getCake(){
                this.cakes=await cake();
                this.number=this.cakes.reduce((prev,item)=>{
                    return prev+=Number(item.number)
                },0)
            }
        },
        components: {},
        watch: {
            cakes:{
                handler(){
                    this.getCake()
                },
                deep:true
            }
        },
        computed: {},
    }
</script>

<style scoped lang="less">
    .top-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10000;

    }
    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
        margin: 0;
        padding: 0;
        font-size: 12*0.02rem;
        color: #442818;
    }
    .title-box {
        font-size: 0.12*2rem;
        background: #fff;
        height: 0.48*2rem;
        line-height: 0.48*2rem;
        position: relative;
        box-shadow: 0 0.02*2rem 0.04*2rem 0 rgba(0, 0, 0, 0.10);
    }

    .title-box .left-icon {
        float: left;
        margin-left: 0.15*2rem;
        width: 0.18*2rem;
    }

    .title-box .left-icon i.icon-title {
        height: 0.14*2rem;
        width: 0.18*2rem;
        background: url(../../public/img/top-icon.png) no-repeat;
        background-size: cover;
        display: inline-block;
        vertical-align: middle;
    }

    .title-box .city {
        margin-left: 0.14*2rem;
        float: left;
        font-size: 0.12*2rem;
    }

    .title-box .title-logo {
        width: 0.30*2rem;
        display: inline-block;
        vertical-align: middle;
    }

    .title-box .right-cart-city {
        float: right;
    }

    .title-box .top-message {
        background: url(../../public/img/header_message.png) center no-repeat;
        display: inline-block;
        background-size: 0.19*2rem 0.19*2rem;
        height: 0.48*2rem;
        width: 0.20*2rem;
        vertical-align: middle;
        margin-top: -0.04*2rem;
        text-align: right;
        padding-left: 0.08*2rem;
    }

    .right-cart-city .top-cart i {
        display: inline-block;
        height: 0.19*2rem;
        width: 0.19*2rem;
        background: url(../../public/img/cart.png) no-repeat;
        background-size: cover;
        vertical-align: middle;
        margin-left: 0.04*2rem;
        margin-right: 0.15*2rem;
        position: relative;
        font-size: 0;
    }
    .right-cart-city .top-cart i em{
        font-style:normal;
        background: rgb(186,153,120);
        position: absolute;
        left: 10px;
        top: -5px;
        display: inline-block;
        width: 12px;
        height: 12px;
        font-size: 10px;
        text-align: center;
        line-height: 11px;
        color: #fff;
    }
    .title-box .city i {
        background: url(../../public/img/address.png);
        display: inline-block;
        height: 0.15*2rem;
        width: 0.12*2rem;
        background-size: cover;
        vertical-align: middle;
        margin-right: 0.04*2rem;
        margin-top: -0.03*2rem;
    }

    a:visited, a:link, a:hover, a:active, a {
        text-decoration: none;
        cursor: pointer;
        color: #442818;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
    }

    .title-box .header-center {
        position: absolute;
        left: 50%;
        top: 0;
        display: inline-block;
        width: 1.20*2rem;
        margin-left: -0.60*2rem;
        height: 0.30*2rem;
        text-align: center;
        font-size: 0.15*2rem;
    }

    .top-header-menu {
        position: absolute;
        left: 0;
        top: 0.48*2rem;
        width: 100%;
        height: 0.52*2rem;
        background: #fff;
        overflow: hidden;
        /*display: none;*/
        box-shadow: 0*2rem 0.07*2rem 0.10*2rem 0*2rem rgba(145, 145, 145, 0.50);
        z-index: 10000;
    }

    .top-header-menu div {
        padding: 0 0.27*2rem;
    }

    .top-header-menu a {
        display: block;
        width: 33%;
        padding-top: 0.05*2rem;
        float: left;
        text-align: center;
        line-height: 0;
    }

    .top-header-menu a.menu-home i {
        background: url(../../public/img/menu-home.png) no-repeat center top;
        background-size: 0.25*2rem 0.25*2rem;
    }

    .top-header-menu a i {
        display: inline-block;
        height: 0.25*2rem;
        width: 0.25*2rem;
    }

    .top-header-menu a span {
        display: block;
        line-height: 0.20*2rem;
    }

    .top-header-menu a.menu-class i {
        background: url(../../public/img/menu-icon-class.png) no-repeat center top;
        background-size: 0.25*2rem 0.25*2rem;
    }

    .top-header-menu a.menu-per i.person {
        background: url(../../public/img/menu-icon-per.png) no-repeat center top;
        background-size: 0.25*2rem 0.25*2rem;
    }

    .title-box .menuHide i.icon-title {
        background: url(../../public/img/menu-hide.png) no-repeat;
        background-size: cover;
        width: 0.16*2rem;
        height: 0.15*2rem;
    }

    .hideIt {
        display: none;
    }

    .bomb-box {
         display: none;
        position: fixed;
        font-size: 12*0.02rem;
        z-index: 100000;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        i {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, .5);
            z-index: 100000;
        }
        .bomb-box-content {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            z-index: 100001;
            margin-top: -124*0.02rem;
            .bomb-box-content-text {
                margin: 0 14*0.02rem;
                background: #fff;
                min-height: 248*0.02rem;
                .home-select-city {
                    border-top: 3*0.02rem solid #442818;
                    overflow: hidden;
                    p.home-select-title {
                        line-height: 25*0.02rem;
                        font-size: 18*0.02rem;
                        padding-top: 25*0.02rem;
                        padding-left: 14*0.02rem;
                    }
                    ul {
                        overflow: hidden;
                        margin-top: 30*0.02rem;
                        list-style: none;
                        li.active a {
                            border: 1*0.02rem #442818 solid;
                            box-sizing: border-box;
                            -moz-box-sizing: border-box;
                            -webkit-box-sizing: border-box;
                            background: #fff url(../../public/img/icon_selected.png) no-repeat top left;
                            background-size: 12*0.02rem 12*0.02rem;
                        }
                        li {
                            float: left;
                            width: 22%;
                            margin: 1.5%;

                            a {
                                display: block;
                                text-align: center;
                                height: 32*0.02rem;
                                background: #F7F7F7;
                                line-height: 32*0.02rem;
                            }
                        }
                    }
                    a.city-select-button {
                        background: #442818;
                        height: 35*0.02rem;
                        line-height: 35*0.02rem;
                        text-align: center;
                        color: #fff;
                        font-size: 15*0.02rem;
                        width: 128*0.02rem;
                        margin: 35*0.02rem auto 12*0.02rem;
                        display: block;
                    }
                    p.select-text {
                        line-height: 18*0.02rem;
                        color: #D5BFA7;
                        text-align: center;
                        padding-bottom: 35*0.02rem;
                    }
                }
            }
        }
    }
    .cityDisplay{
        display: block;
    }
</style>