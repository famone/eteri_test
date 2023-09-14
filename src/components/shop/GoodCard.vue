<template>
    <router-link  tag="a" :to="`/catalog/${item.slug}`">
        <div class="group w-ful h-[31rem] md:h-[28rem] -z-0 relative bg-gray-400 mb-3 bg-cover bg-center bg-no-repeat border active:border-solid border-white active:border-black transition-all" :style="`background-image: url('${item.picture}')`">
            <!-- sold out -->
            <p class="absolute text-sm left-4 top-4 z-20 uppercase" v-if="item.preorder">{{coming_soon[lang]}}</p>
            <!-- second img -->
            <div class="group-hover:opacity-100 w-full h-full absolute top-0 left-0 z-10 bg-cover bg-center bg-no-repeat opacity-0 transition-all" :style="`background-image: url('${item.gallery[item.gallery.length - 1]}')`"></div>
        </div>
        <div class="hover:underline">
            <h4 class="leading-5">{{item.name[lang]}}</h4>
            <h4 class="leading-5">{{item.spec.sostav}}</h4>
            <h4 class="leading-5">{{item.price[lang].toLocaleString()}}{{currency_symbol[lang]}}</h4>
            <!-- <pre>{{item}}</pre> -->
        </div>
    </router-link >
</template>

<script lang="ts">
import { GoodItem } from '@/types/good'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        index: {
            type: Number,
            required: true
        },
        item: {
            type: Object as PropType<GoodItem>,
            required: true
        },
        lang: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            coming_soon: {en: 'Сoming soon', ru: 'Скоро в продаже'},
            currency_symbol: {en: '$', ru: ' руб.'},
        }
    }
})
</script>