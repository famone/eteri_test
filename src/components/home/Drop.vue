<template>
    <section class="pt-12 pb-6 md:pb-20" v-if="lookbooks_home.gallereya">
        <div class="container px-4 md:px-0 md:mx-auto">
            <h2 class="text-2xl mb-4 tercia">{{discover[lang]}}</h2>

            <!-- <pre>{{lookbooks_home}}</pre> -->
            <div class="hidden md:grid grid-cols-3 gap-4">
                <div class="col-span-1" v-for="(img, i) in lookbooks_home.gallereya.slice(0, 3)" :key="i">
                    <div class="overflow-hidden	relative h-[42em] bg-dim_gray bg-cover bg-center bg-no-repeat border border-black" :style="`background-image: url('${img}')`">
                        <!-- <img :src="img" class="w-full"> -->
                    </div>
                </div>
            </div>
            <div class="hidden md:grid grid-cols-2 md:grid-cols-4 mt-4 gap-4">
                <div class="md:col-start-2 col-span-2">
                    <router-link tag="a" :to="`/lookbooks/${lookbooks_home.slug}`">
                        <button class="w-full p-2.5 bg-dim_gray hover:underline border border-dim_gray border-solid active:border-black">{{btn_txt[lang]}}</button>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="md:hidden scroll-row px-4">
            <div class="scroll-item overflow-hidden bg-dim_gray bg-cover bg-center bg-no-repeat border border-black" :style="`background-image: url('${img}')`" v-for="(img, i) in lookbooks_home.gallereya.slice(0, 3)" :key="i" :class="{ 'ml-4' : i !== 0 }">
            </div>
        </div>
        <div class="grid md:hidden grid-cols-2 md:grid-cols-4 mt-4 gap-4 px-4">
                <div class="md:col-start-2 col-span-2">
                    <router-link tag="a" :to="`/lookbooks/${lookbooks_home.slug}`">
                        <button class="w-full p-2.5 bg-dim_gray hover:underline border border-dim_gray border-solid active:border-black">{{btn_txt[lang]}}</button>
                    </router-link>
                </div>
            </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLookbooksStore } from '@/stores/lookbooks'
import langMixin from '@/mixins/lang'

export default defineComponent({
    mixins: [langMixin],
    computed:{
        lookbooks_home():object{
            return useLookbooksStore().lookbooks_home
        }
    },
    data() {
        return {
            discover: {en: 'Discover the drop', ru: 'Откройте лукбук'},
            btn_txt: {en: 'Have a glance at full lookbook', ru: 'Перейти к полному лукбуку'}
        }
    }
})
</script>


<style scoped>
.scroll-item{
    width: 320px;
    height: 400px;
    display: inline-block;
}
.scroll-row{
    overflow: auto;
    white-space: nowrap;
}
.scroll-row::-webkit-scrollbar {
  display: none;
}
.scroll-row{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>