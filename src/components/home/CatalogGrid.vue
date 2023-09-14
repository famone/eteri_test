<template>
    <section id="catalog" class="py-10 pb-14">
        <div class="container mx-auto px-4 lg:px-0">
            <h2 class="text-2xl mb-4 tercia">{{title[lang]}}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                <div class="col-span-1 mb-4" v-for="(item, index) in goods" :key="index">
                    <GoodCard :item="item" :index="index" :lang="lang" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GoodCard from '../shop/GoodCard.vue'
import { useGoodsStore } from '@/stores/goods'
import { GoodItem } from '@/types/good'
import langMixin from '@/mixins/lang'

export default defineComponent({
    mixins: [langMixin],
    components: {
        GoodCard
    },
    computed: {
        goods(): GoodItem[]{
            return useGoodsStore().goods
        }
    },
    props: {
        title: {
            type: Object,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }
})
</script>