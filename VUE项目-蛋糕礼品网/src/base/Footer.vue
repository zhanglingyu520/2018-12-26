<template>
    <div class="footer">
        <ul>
            <li id="appDownloadLink"><a href="/appdown.html">下载APP</a></li>
            <li><a href="tel:400 650 2121">联系我们</a></li>
            <li><a href="/article-company.html">全站公告</a></li>
            <li><a href="/magazine/detail/189.html">生产经营资质</a></li>
        </ul>
        <p>Copyright© 21Cake蛋糕官网商城 2007-2017, <br>版权所有 <a style="color: #9a9a9a" target="_blank" href="http://www.miitbeian.gov.cn/">京ICP备14006254号-1</a> <br>网站注册公司名称: 北京廿一客食品有限公司</p>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {}
        },
        methods: {},
        components: {},
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
    }

    .footer {
        margin-top: 1rem;
        background: #414141;
        padding: 30*0.02rem 10*0.02rem;
        ul {
            overflow: hidden;
            margin-left: -2%;
            list-style: none;
            li {
                float: left;
                width: 23%;
                margin-left: 2%;
                margin-bottom: 23*0.02rem;
                a {
                    height: 30*0.02rem;
                    display: block;
                    border: 1*0.02rem solid #979797;
                    color: #979797;
                    line-height: 30*0.02rem;
                    text-align: center;
                }
            }
        }
        p {
            text-align: center;
            color: #a0a0a0;
            line-height: 16*0.02rem;
        }
    }
</style>