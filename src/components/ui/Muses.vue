<template>
    <section class="pt-12 pb-6 md:pb-20">
        <div class="container px-4 md:px-0 md:mx-auto">
            <h2 class="text-2xl mb-4 tercia">{{title[lang]}}</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div class="col-span-1" v-for="(item, i) in muses" :key="i">
                    <div class="overflow-hidden	relative h-72 md:h-[42em] bg-dim_gray bg-cover bg-no-repeat bg-center border border-black" :style="`background-image: url('${item.izobrazhenie}'`">
                    </div>
                    <p class="md:text-xl tercia mt-4 md:mb-4">{{item[`nazvanie_${lang}`]}}</p>
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
    props: {
        muses: {
            type: Array,
            required: true
        }
    },
    data(){
        return{
            title: {en: 'Our muses', ru: 'Наши музы'}
        }
    }
})
</script>
