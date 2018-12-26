<template>
    <div>
        <Header></Header>

        <div class="container" style="min-height: 12.38rem;">
            <div class="login-box">
                <ul class="login-title">
                    <li class="active" data-id="usernameLogin">帐号密码登录</li>
                </ul>
                <!--<script>var VERIFY_CODE_SALT = '1804b9aae6ce31da';</script>-->
                <div id="login-form-group">
                    <div style="transform-origin: 0rem 0rem 0rem; opacity: 1; transform: scale(1, 1);">
                        <form method="post" id="passport-login-form">
                            <input type="hidden" name="uEDBW9puhlVkMzgfiyaqg" value="NzNJ1Zr8mCFg7LNpQuAV9Q">
                            <input type="hidden" name="redirectUrl" value="L21lc3NhZ2UvY2VudGVyLmh0bWw=">
                            <ul class="input-list">
                                <li><input type="text" placeholder="用户名/手机号码" name="loginName" maxlength="60" id="phoneName" v-model="username"></li>
                                <li><input type="password" name="password" id="password" maxlength="32" placeholder="填写密码" v-model="password"></li>
                                <li class="err-text" v-show="showTishi">{{tishi}}</li>
                            </ul>
                            <!--<input type="submit" value="登录" class="button-submit" >-->
                            <!--<router-link to="/message-center"></router-link>-->
                        </form>
                    </div>
                    <input type="submit" value="登录" class="button-submit"  @click="login">
                </div>
            </div>
            <div class="remember-me">
                <input type="checkbox" name="rememberMe" checked="checked">记住账号
                <router-link to="/register">去注册</router-link>
                <router-link to="/passport-lost">忘记密码</router-link>
                <!--<a href="/passport-sign_up.do">去注册</a>-->
                <!--<a href="##">忘记密码</a>-->
            </div>
        </div>
        <!--<%}%>-->
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../base/Header.vue"
    import Footer from "../base/Footer.vue"
    import usersList from "../../service/users"
    import {setCookie,getCookie} from '../../src/assets/cookie.js'
    export default {
        name: "",
        data() {
            return {
                users:{},
                showLogin: true,
                showRegister: false,
                showTishi: false,
                tishi: '',
                username: '',
                password: '',
                newUsername: '',
                newPassword: ''
            }
        },
        mounted() {
            if (getCookie('username')) {
                this.$router.push('/message-center')
            }
        },
        methods: {
            login() {
                let data = {'username': this.username, 'password': this.password};
                if(data.username!==usersList[0].name){
                    this.showTishi=true;
                    this.tishi='账号或者密码错误';
                    this.$router.push('/login');
                }else{
                    this.showTishi=false;
                    this.$router.push('/message-center');
                    setCookie('username', this.username, 1000 * 60)
                }
            }
        },
        components: {
            Header,
            Footer
        },
        computed: {
        }
    }
</script>

<style scoped lang="less">
    ul,li{
        list-style: none;
    }
    a{
        text-decoration: none;
        cursor: pointer;
    }
    .container{
        padding: 0 28*0.02rem;
        max-width: 420*0.02rem;
        margin: 15*0.02rem auto 0;
        font-size: 12*0.02rem;
        color: #442818;
        .login-box{
            margin-top: 15*0.02rem;
            .login-title{
                overflow: hidden;
                width: 100%;
                border-bottom: 1*0.02rem solid #D5D5D5;
                li{
                    width: 100%;
                    float: left;
                    padding: 8*0.02rem 0;
                    line-height: 20*0.02rem;
                    text-align: left;
                    font-size: 14*0.02rem;
                    color: #333;
                    border-bottom: 1*0.02rem solid #442818;
                }
            }
            .input-list{
                height:3rem;
                margin-top: 25*0.02rem;
                font-size: 14*0.02rem;
                li{
                    width: 100%;
                    height: 47*0.02rem;
                    line-height: 46*0.02rem;
                    input{
                        width: 100%;
                        border: none;
                        border-bottom: 1*0.02rem solid #D5D5D5;
                        height: 26*0.02rem;
                        padding: 10*0.02rem 0;
                        line-height: 26*0.02rem;
                        outline: none;
                        font-size: 14*0.02rem;
                    }
                }
            }
            .button-submit{
                width: 100%;
                height: 42*0.02rem;
                background: #442818;
                color: #fff;
                font-size: 14*0.02rem;
                border: none;
                /*margin-top: 1rem;*/
            }

        }
        .remember-me{
            margin-top: 25*0.02rem;
            height: 18*0.02rem;
            overflow: hidden;
            font-size: 12*0.02rem;
            color: #744F3A;
            input{
                display: inline-block;
                vertical-align: middle;
                margin-right: 5*0.02rem;
                height: 16*0.02rem;
                width: 16*0.02rem;
                border: 1*0.02rem solid #D5D5D5;
            }
            a{
                display: inline-block;
                float: right;
                margin-left: 18*0.02rem;
                line-height: 18*0.02rem;
                color: #442818;
            }
        }
    }

</style>