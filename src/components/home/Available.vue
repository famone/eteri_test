<template>
    <section id="available" class="pt-12 pb-16 bg-dim_gray" v-if="info">
        <div class="container px-4 md:px-0 mx-auto text-center">
            <p class="mb-10" v-html="info.main_block[lang].blok_nad_zagolovkom"></p>
            <!-- <pre>{{info}}</pre> -->
            <h2 class="text-3xl mb-10 tercia uppercase" v-html="info.main_block[lang].zagolovok"></h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="col-span-1 md:col-start-2">
                    <SubscribeForm :lang="lang" light />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubscribeForm from '@/components/ui/SubscribeForm.vue'
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
            sub: {en: 'Available on 03.06', ru: 'Старт продаж 03.06'}
        }
    }
})
</script>