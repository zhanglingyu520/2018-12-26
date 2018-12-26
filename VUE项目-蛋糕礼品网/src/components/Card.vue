<template>
    <div class="action-page js-show">
        <div class="title-top">
            <a href="##" class="left-button" @click="goBack()"></a>
            加添生日牌
        </div>
        <div class="container">
            <ul class="add-birthday-brand" ref="containBox">
                <li class="custom-birthday-brand">
                    <label>自定义</label>
                    <div>
                        <input type="text" name="birthdayCard" value="" placeholder="生日牌最多只能填写8个汉字或16个字符">
                    </div>
                </li>
                    <li class="normal-card " :class="{active:flag===1}" @click="show" data-content="生日快乐">{{birthday}}</li>
                    <li class="normal-card" data-content="Happy Birthday" :class="{active:flag===2}" @click="show">{{happy}}</li>
                    <li class="normal-card" data-content="节日快乐" :class="{active:flag===3}" @click="show">{{day}}</li>
                    <li class="normal-card" data-content="" :class="{active:flag===4}" @click="show">{{none}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {EveCar} from "./EventBus.js"
    export default {
        data(){
            return {
                flag:"",
                birthday:"生日快乐",
                happy:"Happy Birthday",
                day:"节日快乐",
                none:"(无)"
            }
        },
        methods: {
            goBack(){
                this.$router.push("/car/1")
            },
            show(e){
                let parent = this.$refs.containBox;
                let index = Array.prototype.indexOf.call(parent.children, e.target);
                this.flag = index;
                let inner = e.target.innerText;
                EveCar.$emit("change",inner);
                /*this.$router.push("/car/1")*/
            },
        },
        computed: {

        },
        components: {}
    }

</script>

<style scoped lang="less">
    .action-page {
        overflow-y: auto;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: 0;
        padding: 0;
        font-size: 12px;
        color: #442818;
        width: 100%;
        height: 100%;
        background: #f8f8f8;
        .title-top {
            text-align: center;
            height: 44px;
            line-height: 44px;
            background-color: #fff;
            font-size: 15px;
            position: relative;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
            color: #442818;
            .left-button {
                position: absolute;
                line-height: 20px;
                display: block;
                height: 20px;
                top: 12px;
                left: 14px;
                width: 40px;
                background: url("https://m.21cake.com/themes/wap/img/Page-back.png") no-repeat left center;
                background-size: 12px 18px;
            }
        }
        .container {
            padding-bottom: 68px;
            margin: 0 auto;
            font-size: 12px;
            color: #442818;
            .add-birthday-brand{
                margin: 0;
                padding: 0;
                font-size: 12px;
                color: #442818;
                li{
                    line-height: 44px;
                    font-size: 13px;
                    color: #442818;
                    height: 44px;
                    background: #fff;
                    border-bottom: 1px solid #EEE;
                    padding-left: 44px;
                }
                .custom-birthday-brand {
                    margin: 15px 0;
                    height: 44px;
                    background: #fff;
                    border-bottom: 1px solid #EEE;
                    line-height: 44px;
                    font-size: 13px;
                    padding-left: 44px;
                    color: #442818;
                    label {
                        display: inline-block;
                        float: left;
                    }
                    div {
                        padding-left: 60px;
                        margin: 0;
                        font-size: 12px;
                        color: #442818;
                        input {
                            border: none;
                            width: 100%;
                            font-family: inherit;
                            font-size: inherit;
                            font-style: inherit;
                            font-weight: inherit;
                            outline: none;
                            -webkit-appearance: none;
                            border-radius: 0;
                            -webkit-tap-highlight-color: transparent;
                            margin: 0;
                            padding: 0;
                            color: #442818;
                            background-color: white;
                            -webkit-rtl-ordering: logical;
                            cursor: text;
                            letter-spacing: normal;
                            word-spacing: normal;
                            display: inline-block;
                            text-align: start;
                            &::-webkit-input-placeholder { /* WebKit browsers */
                                color: #d5bfa7;
                            }
                        }
                    }
                }
                .active {
                    background: #fff url("https://m.21cake.com/themes/wap/img/list_check_3x.png") no-repeat;
                    background-size: 14px auto;
                    background-position: 15px 15px;
                }
            }
        }
    }
</style>