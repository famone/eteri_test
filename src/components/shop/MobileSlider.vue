<template>
    <div>
        <swiper
            :slides-per-view="1"
            :space-between="0"
            :pagination="true" 
            :modules="modules" 
            class="mySwiper"
        >
            <swiper-slide v-for="(img, i) in sliderImg" :key="i">
                <div class="h-[36em] bg-cover sm:bg-contain md:bg-contain bg-center bg-no-repeat bg-dim_gray " :style="`background-image: url('${img}')`">
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

export default defineComponent({
    props: {
        gallery: {
            required: true,
            type: Array
        },
        picture: {
            required: true,
            type: String
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        sliderImg(){ 
            return [this.picture, ...this.gallery,]
        }
    },
    data() {
        return {
            modules: [Pagination]
        }
    }
})
</script>
