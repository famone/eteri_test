<template>
    <Preloader v-if="!lookbooks.length" />
    <section class="py-16" v-else>
        <div class="container mx-auto px-4 md:px-0">
            
            <h2 class="text-2xl mb-4 tercia">{{title[lang]}}</h2>
            <router-link tag="a" :to="`/lookbooks/${item.slug}`" v-for="(item, index) in lookbooks" :key="index">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 md:mb-4" >
                    <div class="col-span-1 bg-cover bg-no-repeat bg-center h-80 md:h-[44em]" :style="`background-image: url('${item.mainImage}')`" 
                    :class="{ 'md:order-last' : (index + 1) % 2==0 }">
                    </div>
                    <div class="col-span-1">
                        <div class="h-full flex md:justify-center items-center">
                            <div class="max-w-[410px] md:text-center">
                                <h2 class="text-2xl mb-4 tercia md:max-w-[120px]">{{item.name}}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLookbooksStore } from '@/stores/lookbooks'
import { Lookbook } from '@/types/lookbook'
import Preloader from '@/components/ui/Preloader.vue'
import langMixin from '@/mixins/lang'

export default defineComponent({
    mixins: [langMixin],
    components: {
        Preloader
    },
    data(){
        return {
            title: {en: 'Lookbooks', ru: 'Лукбуки'}
        }
    },
    computed: {
        lookbooks(): Lookbook[]{
            return useLookbooksStore().lookbooks
        }
    }
})
</script>