<template>
    <div>
        <Header></Header>
        <div class="msgContainer" style="min-height: 12.38rem;">
            <div class="message-tab">
                <a class="notice" data-list="noticeListApi"><img
                        src="../../public/img/message_notice.png"><br><span>通知</span><span
                        class="remind"><!--1--></span></a>
                <a class="delivery" data-list="delveryListApi"><img
                        src="../../public/img/message_logistics.png"><br><span>物流</span></a>
                <a class="cs-message"><img
                        src="../../public/img/message_kefu.png"><br><span>客服</span></a>
                <a id="cs-message"></a>
            </div>

            <div class="loading-box"
                 style="transform-origin: 0*0.02rem 0*0.02rem 0*0.02rem; opacity: 1; transform: scale(1, 1); display: none;">
                正在加载...
            </div>
            <div class="message-list">
                <div data-href="/member/date.html" data-id="1590178" class="list-mess date-icon">
                    <div><h4>您还未开启过纪念日提醒</h4>
                        <p>去开启吧&gt;&gt;</p></div>
                    <span class="date"><!--今天 09:53--></span> <i class="icon-dot"></i></div>
            </div>
            <div class="message-empty" style="display: none;">
                <img src="/themes/wap/img/message_empty.png">
                <p>还没有通知～</p>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../base/Header"
    import Footer from "../base/Footer"
    import usersList from "../../service/users"
    import {setCookie,getCookie} from '../../src/assets/cookie.js'
    export default {
        data() {
            return {}
        },
        mounted() {
            if (getCookie('username')) {
                this.$router.push('/message-center')
            }
        },
        methods: {},
        components: {
            Header,
            Footer
        },
        computed: {}
    }
</script>

<style scoped lang="less">

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    .msgContainer {
        background: #F6F6F6;
        max-width: 420*0.02rem;
        margin: 0.1rem auto 0;
        font-size: 12*0.02rem;
        color: #442818;

        .message-tab {
            width: 100%;
            height: 95*0.02rem;
            background: #fff;
            font-size: 0;
            position: relative;

            /*.remind {
                position: absolute;
                height: 16*0.02rem;
                width: 16*0.02rem;
                background: #f40000;
                line-height: 16*0.02rem;
                top: 14*0.02rem;
                left: 63%;
                color: #fff;
                border-radius: 100*0.02rem;
            }*/

            a {
                font-size: 12*0.02rem;
                display: inline-block;
                width: 33%;
                text-align: center;
                padding-top: 12*0.02rem;
                position: relative;

                img {
                    width: 42%;
                    border: 0;

                }

            }
        }
        .message-list {
            margin-top: 10*0.02rem;
            background: #fff;
            color: #B4B4B4;

            .list-mess{
                background: url(../../public/img/message_center_ji.png) no-repeat 0.3rem 0.2rem;
                display: block;
                padding-left: 75*0.02rem;
                position: relative;
                background-size: 0.8rem 0.8rem;
            }
            div {
                height: 64*0.02rem;
                max-width: 100%;
                border-bottom: 1*0.02rem solid #f1f1f1;
            }



            h4, p {
                text-overflow: ellipsis;
                max-width: 95%;
                white-space: nowrap;
                overflow: hidden;
                padding-right: 85*0.02rem;
            }
            h4{
                font-size: 15*0.02rem;
                padding-top: 5*0.02rem;
                line-height: 30*0.02rem;
            }
            p{
                color: #B4B4B4;
            }
            .date{
                top: 15*0.02rem;
                position: absolute;
                right: 15*0.02rem;
            }

        }
    }
</style>