<template>
    <div id="app">
        <!--<Header></Header>-->
        <router-view></router-view>
        <!--<Footer></Footer>-->
    </div>
</template>

<script>
    import Header from './base/Header'
    import Footer from './base/Footer'
    import More from './components/more'

    export default {
        name: "App",
        data() {
            return {}
        },
        methods: {},
        components: {
            Header,
            Footer,
            More
        },
        watch: {},
        computed: {},
    }
</script>
<style lang="less">
    * {
        padding: 0;
        margin: 0;
    }
    ul li {
        list-style: none
    }
    a {
        text-decoration: none
    }
    h3 {
        color: #482615;
        font-size: .15*2rem;
    }
</style>
