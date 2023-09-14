<template>
    <section class="py-16" v-if="lookbooksStore.getSingleLookbook(id)">
        <div class="container mx-auto px-4 md:px-0">
            <Breadcrumbs :page="lookbooksStore.getSingleLookbook(id).name" />
            <!-- <h2 class="text-2xl mb-4 tercia">Collections</h2> -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div class="col-span-1 h-[23rem] md:h-[44em] bg-cover bg-no-repeat bg-center border-2 border-black" :style="`background-image: url('${lookbooksStore.getSingleLookbook(id).mainImage}')`">
                </div>
                <div class="col-span-1 ">
                    <div class="md:p-4">
                        <p class="text-2xl tercia mb-4" v-html="lookbooksStore.getSingleLookbook(id).descr"></p>
                    </div>
                </div>
            </div>
            <!-- Grid Photos -->
            <CollectionGrid :gallery="lookbooksStore.getSingleLookbook(id).gallereya" />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CollectionGrid from '@/components/shop/CollectionGrid.vue'
import Breadcrumbs from '@/components/ui/Breadcrumbs.vue'
import { useLookbooksStore } from '@/stores/lookbooks'

export default defineComponent({
    props: ['id'],
    components: {
        Breadcrumbs,
        CollectionGrid
    },
    data(){
        return {
            lookbooksStore: useLookbooksStore(), 
        }
    }
})
</script>