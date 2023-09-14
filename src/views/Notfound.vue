<template>
    <section>
        <div class="container mx-auto">
            <div class="grid grid-cols-1 gap-0 h-screen">
                    <div class="col-span-1 ">
                        <div class="h-full flex justify-center items-center">
                            <div class="max-w-[410px] text-center">
                                <h2 class="text-2xl mb-4 tercia">{{title[lang]}}</h2>
                                <router-link tag="a" to="/">
                                    <button class="col-start-2 col-span-2 w-full p-2.5 bg-dim_gray hover:underline border border-dim_gray border-solid active:border-black">
                                        {{btn[lang]}}
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import langMixin from '@/mixins/lang'

export default defineComponent({
    mixins: [langMixin],
    data(){
        return{
            title: {en: 'Page not found', ru: 'Страница не найдена'},
            btn: {en: 'Home page', ru: 'На главную'}
        }
    }
})
</script>