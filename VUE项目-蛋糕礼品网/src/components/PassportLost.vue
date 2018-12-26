<template>
    <div class="full-screen">
        <div class="a-bar">
            <a href="javascript:history.back()" class="a-back">
                <img alt="返回" src="/wap_themes/21cake/images/icon/btn_back.gif">
            </a>
            <div class="a-name">
                找回密码
            </div>
        </div>
        <!-- 找回密码 -->
        <div id="forgot_content" class="forgot-content signupin-content">
            <div id="showMob">
                <form action="/passport-sendMob.html" method="post" data-type="ajax">
                    <input id="daohang" type="hidden" value="0">
                    <input name="forward" type="hidden" value="">
                    <ul>
                        <li class="form-item">
                        <span class="form-act">
                            <input id="dom_el_eff63f0" class="x-input" type="text" data-caution="请输入正确的手机号" vtype="required&amp;&amp;number" placeholder="请输入手机号码" name="mobile"></span>
                            <span class="caution-content">
                            </span>
                        </li>
                        <li class="form-item" style="display:none">
                        <span class="form-act">
                            <input class="x-input verify-input" type="text" name="signupverifycode" placeholder="填写图片验证码" data-caution="请正确填写验证码" id="dom_el_99dac30" maxlength="4" autocomplete="off" vtype="required&amp;&amp;alphaint"> <img src="/index-gen_vcode-LOGINVCODE-4.html" alt="验证码" title="点击更换验证码" class="verify-code auto-change-verify-handle"> <a href="/index-gen_vcode-LOGINVCODE-4.html" class="verify-code auto-change-verify-handle lnklike">看不清楚?换一个</a>                        </span>
                        </li>
                        <li class="form-item-normal">
                        <span class="form-act">
                            <button type="submit" class="btn btn-major signin-btn400" rel="_request"><span><span>下一步</span></span></button>                        </span>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        components: {},
        computed: {}
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
.full-screen{

    width: 100%;
    overflow: hidden;
    background-color: #fff;
    font-size: 12*0.02rem;
    color: #442818;
    padding: 0 28*0.02rem;
    max-width: 420*0.02rem;
    margin: 15*0.02rem auto 0;
    .a-bar{
        border-bottom: 1px solid #fbeeef;
        height: 44*0.02rem;
        position: absolute;
        left: 0;
        top: 0;
        .a-name{
            text-align: center;
            font-size: 16*0.02rem;
            line-height: 44*0.02rem;
            color: #442818;
        }
    }
    .forgot-content{
        padding: 0 10*0.02rem;
        margin-top: 15*0.02rem;
        .form-act{
            border: 1*0.02rem solid #eee;
            overflow: hidden;
            display: block;
            margin-bottom: -1px;
            btn{
                width: 100%;
            }
            input{
                border: 0 none;
                color: #8e6a55;
                font-size: 12px;
                height: 13px;
                line-height: 14px;
                margin: 0;
                padding: 15px 0 15px 15px;
                width: 100%;
            }
            .btn-major{
                background: none repeat scroll 0 0 #684029;
                border: 1px solid #684029;
                color: #fff;
                display: block;
                font-size: 16px;
                height: 39px;
                line-height: 39px;
                text-align: center;
                margin-top: 40px;
                margin-bottom: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>