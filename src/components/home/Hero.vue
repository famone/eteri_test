<template>
    <div>
        <section class="h-[36rem] pt-14 md:pt-0 md:h-screen bg-gray-300 relative flex items-center justify-center">
            <div class="absolute top-0 left-0 w-full md:w-1/2 h-full bg-dim_gray bg-center bg-cover bg-no-repeat " :style="`background-image:url('${imgleft.url}');`">
            </div>
            <div class="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-gray-300 bg-center bg-cover bg-no-repeat"
            :style="`background-image:url('${imgright.url}');`">
            </div>
            <div>
                <h1 class="tercia relative text-center text-white text-2xl drop-shadow-lg">{{title[lang]}}</h1>
                <h1 class="tercia relative text-center text-white text-2xl drop-shadow-lg">{{subtitle[lang]}}</h1>
                <br>
                <h1 class="tercia relative text-center text-white text-2xl drop-shadow-lg">{{date}}</h1>
            </div>
            <div class="w-full absolute bottom-10 hidden md:block">
                <div class="container mx-auto">
                    <div class="grid grid-cols-4">
                        <div class="col-start-2 col-span-2">
                            <router-link tag="a" to="/catalog">
                                <button  class="col-start-2 col-span-2 w-full p-2.5 bg-dim_gray hover:underline border border-dim_gray border-solid active:border-black">
                                    {{scroll_btn_title[lang]}}
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="md:hidden px-4 mt-4">
            <router-link tag="a" to="/catalog">
                <button  class="col-start-2 col-span-2 w-full p-2.5 bg-dim_gray hover:underline border border-dim_gray border-solid active:border-black">
                    {{scroll_btn_title[lang]}}
                </button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import langMixin from '@/mixins/lang'

export default defineComponent({
    mixins: [langMixin],
    props: {
        title: {
            required: true,
            type: Object
        },
        subtitle: {
            required: true,
            type: Object
        },
        date: {
            required: true,
            type: String
        },
        imgleft: {
            required: true,
            type: Object
        },
        imgright: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            main_title: { en: 'Four elements<br> Capsule<br><br>First of July', ru: 'Капсула<br> Четыре элемента <br><br> 01.06' },
            scroll_btn_title: {en: 'Go to Catalogue', ru: 'Перейти в каталог'},
        }
    }
})
</script>
