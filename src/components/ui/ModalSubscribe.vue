<template>
    <div class="bg-black bg-opacity-75 h-screen w-screen fixed z-50 top-0 left-0 backdrop-blur-sm flex justify-center items-center" @click="closeModal">
        <div class="container py-8 md:py-12 px-4 bg-dim_gray mx-4 md:mx-auto text-center relative" @click.stop>
            <!-- close btn -->
            <button class="active:bg-gray-200 hover:bg-gray-200 ring-0 rounded-full p-1 cursor-pointer absolute top-2 right-2 transition-all" @click="closeModal">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="col-span-1 md:col-start-2" v-if="info">
                    <p class="mb-10" v-html="info.pop_up[lang].stroka_nad_zagolovkom"></p>
                    <h2 class="uppercase text-3xl mb-10 tercia" v-html="info.pop_up[lang].zagolovok"></h2>
                    <SubscribeForm light/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SubscribeForm from './SubscribeForm.vue'
import langMixin from '@/mixins/lang'
import { useContentStore } from '@/stores/content'

export default defineComponent({
    mixins: [langMixin],
    components: {
        SubscribeForm
    },
    computed: {
        info(): object | null {
            if(useContentStore().info){
                return useContentStore().info 
            }else{
                return null
            }
        }
    },
    data(){
        return {
            title: {en:'Sign up to be notified<br>when new capsule goes live', ru: 'Получите уведомление<br>о старте продаж'},
            sub: {en: 'Drop is Coming Soon', ru: 'Старт продаж скоро'}
        }
    },
    methods: {
        closeModal(){
            this.$emit('closeModal')
        }
    }
})
</script>
