<template>
    <div>
        <div class="hidden md:grid grid-cols-12 gap-4">
            <div class="col-span-4" v-for="(item, i) in gallery" :key="i" :class="{ 'col-span-6' : dashed_indexes.includes(i+1) }">
                <div class="overflow-hidden	relative h-[42em] bg-dim_gray bg-cover bg-no-repeat bg-center cursor-pointer border border-black"
                :style="`background-image: url('${item}')`" @click="active_img = i">
                    <!-- <img :src="item" class="w-full"> -->
                </div>
            </div>
        </div>
         <div class="grid md:hidden grid-cols-1 gap-4">
            <div class="col-span-1" v-for="(item, i) in gallery" :key="i">
                <img :src="item" class="w-full cursor-pointer border border-black" @click="active_img = i">
            </div>
        </div>
        <LightBox :gallery="gallery" :active="active_img" v-if="active_img !== null" @close="active_img = null" @prev="prevSlide" @next="nextSlide" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LightBox from '@/components/ui/LightBox.vue'

type Activeimg = number | null

export default defineComponent({
    components: {
        LightBox
    },
    props: {
        gallery: {
            required: true,
            type: Array
        }
    },
    data(){
        return{ 
            dashed_indexes: [4,5,9,10],
            active_img: null as Activeimg
        }
    },
    methods: {
        prevSlide(){
            if(this.active_img !== null){
                if(this.active_img === 0){
                    this.active_img = this.gallery.length - 1
                }else{
                    this.active_img += -1
                }
            }
        },
        nextSlide(){
            if(this.active_img !== null){
                if(this.active_img === this.gallery.length - 1){
                    this.active_img = 0
                }else{
                    this.active_img += 1
                }
            }
        },
    }
})
</script>
