<template>
    <swiper :options="SwiperOptions" ref="horizontalSwiper">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <router-link :to="{name:'detail',params:{cid:5}}"><img :src="slide" alt=""></router-link>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    export default {
        name: 'carrousel',
        props:["swiperSlides","options"],
        data() {
            return {
               SwiperOptions: {

                    //autoplay: true,

                    //loop: true,
                   //slidesPerView : auto,

                   pagination: {
                       el: '.swiper-pagination',
                   },
                },

            }
        },


    }
</script>
<style scoped>
    img{
        width: 100%;
    }
</style>