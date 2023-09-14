<template>
    <div>
        <Hero v-if="home" :title="home.title" :subtitle="home.subtitle" :date="home.date" :imgleft="home.imgleft" :imgright="home.imgright" />
        <CatalogGrid :amount="4" :title="catalog_title" />
        <Available />
        <Drop />
        <!-- <Insta /> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/home/Hero.vue'
import CatalogGrid from '@/components/home/CatalogGrid.vue'
import Drop from '@/components/home/Drop.vue'
import Available from '@/components/home/Available.vue'
import { useContentStore } from '@/stores/content'
// import Insta from '@/components/insta/Insta.vue'

export default defineComponent({
    components: {
        Hero,
        CatalogGrid,
        Drop,
        Available,
        // Insta
    },
    computed: {
        home(): object | null {
            if(useContentStore().home){
                return useContentStore().home 
            }else{
                return null
            }
        }
    },
    data(){
        return {
            catalog_title: {en: 'Explore the objects', ru: 'Исследуйте объекты'}
        }
    }
})
</script>
