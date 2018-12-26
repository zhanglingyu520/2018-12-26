<template>
    <div>
        <Header></Header>
        <div class="container" style="min-height: 8.49rem;">
            <div class="login-box register-box">
                <div class="register-title">
                    <h2>用户注册</h2>
                </div>
                <!--<script>var VERIFY_CODE_SALT = 'c22b4c031a511198';</script>-->
                <form method="post" id="sign-up-form">
                    <input type="hidden" name="J0anCzG9Sb28BrVjRwjKg" value="hzoFtXbLXSqOJAcOfFA">
                    <input type="hidden" name="redirectUrl" value="Lw==">
                    <ul class="input-list">
                        <li><input class="input-v2" type="text" name="loginName" placeholder="输入手机号码" maxlength="11" id="telephone"><i></i>
                        </li>
                        <li><input class="input-v2" type="password" name="password" placeholder="密码：8～20字符，需同时包含英文和数字" maxlength="20" id="password"><i class="weak"></i></li>
                        <li><input class="input-v2" type="password" name="rePassword" placeholder="确认密码" maxlength="20" id="rePassword"><i></i></li>
                        <!--<li><input class="input-v2" id="birthday" type="text" name="birthday" data-toggle="date" placeholder="请选择生日" data-required="0" readonly=""></li>-->
                        <li id="err-text"><span><!-- <i></i>请输入账号和密码 --></span></li>
                    </ul>
                    <input class="button-submit" type="submit" value="注册">

                    <div class="register-remember">
                        <label>
                            <input type="checkbox" name="agree" checked="">已阅读并同意</label>
                        <a href="/article-agreement-36.html">21客会员协议</a>和
                        <a href="/article-policy-35.html">隐私保护政策</a>
                    </div>
                </form>
            </div>
        </div>

    </div>

</template>
<script>
    import Header from "../base/Header"


    export default {
        data() {
            return {}
        },
        methods: {},
        components: {
            Header,
        },
        computed: {
        }
    }
</script>
<style scoped lang="less">
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    ul,li{
        list-style: none;
    }
    a{
        text-decoration: none;
        cursor: pointer;
    }
.container{
    font-size: 12*0.02rem;
    color: #442818;
    padding: 0 28*0.02rem;
    max-width: 420*0.02rem;
    margin: 15*0.02rem auto 0;
    .login-box{
        margin-top: 15*0.02rem;
        .register-title{
            h2{
                font-size: 15*0.02rem;
                color: #442818;
                text-align: center;
                margin-top: 16*0.02rem;
                font-weight: normal;
            }
        }
        .input-list{
            margin-top: 25*0.02rem;
            font-size: 14*0.02rem;
            li{
                position: relative;
                width: 100%;
                height: 47*0.02rem;
                line-height: 46*0.02rem;
                input{
                    color: #442818;
                }
                .input-v2{
                    width: 100%;
                    border: none;
                    border-bottom: 1*0.02rem solid #D5D5D5;
                    height: 46*0.02rem !important;
                    padding: 10*0.02rem 0;
                    line-height: 46*0.02rem !important;
                    outline: none;
                    font-size: 14*0.02rem;
                }
                i{

                    height: 17*0.02rem;
                    width: 17*0.02rem;
                    background: url(/themes/wap/img/pass.png) right center;
                    background-size: cover;
                    position: absolute;
                    top: 12*0.02rem;
                    right: 10*0.02rem;

                }
                .weak{
                    background: url(https://static.21cake.com/themes/wap/img/weak.png) right center;
                }
                .moderate{
                    background: url(https://static.21cake.com/themes/wap/img/moderate.png) right center;
                }
                .strong{
                    background: url(https://static.21cake.com/themes/wap/img/strong.png) right center;
                }
            }
            #err-text span{
                color: #FF714D;
                line-height: 18*0.02rem;
            }
        }
        .button-submit{
            width: 100%;
            height: 42*0.02rem;
            background: #442818;
            color: #fff;
            font-size: 14*0.02rem;
            border: none;
        }
        .register-remember{
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
                color: #2a99fa;
            }
        }
    }
}
</style>