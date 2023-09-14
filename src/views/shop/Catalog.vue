<template>
    <div>
        <CatalogGrid :title="catalog_title" :amount="12" class="pt-16 pb-14" />
        <Drop />
        <!-- <Insta /> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CatalogGrid from '@/components/home/CatalogGrid.vue'
import Drop from '@/components/home/Drop.vue'
// import Insta from '@/components/insta/Insta.vue'

export default defineComponent({
    components: {
        CatalogGrid,
        Drop,
        // Insta
    },
    data(){
        return {
            catalog_title: {en: 'Catalog', ru: 'Каталог'}
        }
    }
})
</script>
