<template>
    <div class="fixed top-0 left-0 h-screen w-screen bg-white z-20 p-12 flex items-center" v-touch:swipe.left="swipeNext"  v-touch:swipe.right="swipePrev">
        <div class="absolute left-0 top-0 w-full px-4 py-2.5 flex justify-end items-center">
            <button class="uppercase hover:underline" @click="close">{{close_btn[lang]}}</button>
        </div>
        <img :src="gallery[active]" class="max-h-full max-w-full my-auto mx-auto">
        <div class="absolute left-0 bottom-0 w-full px-4 py-2.5 flex justify-between items-center">
            <button class="uppercase hover:underline" @click="prev" @keyup.left="popupLeft">{{prev_btn[lang]}}</button>
            <p>{{active + 1}}/{{gallery.length}}</p>
            <button class="uppercase hover:underline" @click="next">{{next_btn[lang]}}</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import langMixin from '@/mixins/lang'

export default defineComponent({
    mixins: [langMixin],
    data(){
        return {
            prev_btn: {en: 'Previous', ru: 'Назад'},
            next_btn: {en: 'Next', ru: 'вперед'},
            close_btn: {en: 'Close', ru: 'Закрыть'}
        }
    },
    props: {
        gallery: {
            required: true,
            type: Array
        },
        active: {
            required: true,
            type: Number
        },
    },
    methods: {
        popupLeft(){
            alert(123)
        },
        prev(){
            this.$emit('prev')
        },
        next(){
            this.$emit('next')
        },
        close(){
            this.$emit('close')
        },
        swipeNext(){
           this.next()
        },
        swipePrev(){
           this.prev()
        }
    },
    mounted(){
        document.body.addEventListener('keydown', (e) =>{
				if(e.keyCode == 37){
					this.prev()
				}
				if(e.keyCode == 39 ){
					this.next()
				}
                if(e.keyCode == 27 ){
					this.close()
				}
			})
    }
})
</script>