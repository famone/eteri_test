<template>
    <div v-if="about" class="pt-14 md:pt-12">
        <section v-for="(block, index) in about.blocks[lang]" :key="index">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div class="col-span-1 h-96 md:h-screen bg-[url('https://api.the-eteri.com/wp-content/uploads/2023/06/dsc__5626-scaled.jpg')] bg-cover bg-no-repeat bg-center"
                :style="`background-image: url('${block.izobrazhenie}')`"
                :class="{ 'md:order-last' : (index +1) % 2 == 0}">
                </div>
                <div class="col-span-1 md:h-screen p-4 pb-8 md:p-0">
                    <div class="h-full md:pt-24 md:pl-32">
                        <div class="max-w-[406px]">
                            <h2 class="text-2xl mb-4 tercia">{{block.nazvanie}}</h2>
                            <p class="leading-6 html-spaces" v-html="block.tekst">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- MUSES -->
            <Muses :muses="about.ourmuse" v-if="index === 2" />
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useContentStore } from '@/stores/content'
import langMixin from '@/mixins/lang'
import Muses from '@/components/ui/Muses.vue'

export default defineComponent({
    mixins: [langMixin],
    components: {
        Muses
    },
    computed: {
        about(){
            return useContentStore().about
        }
    },
    created(){
        useContentStore().LOAD_ABOUT().then((err) => {
            if(err){
                this.$router.replace('/404')
            }
        })
    }
})
</script>