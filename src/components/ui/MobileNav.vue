<template>
    <div class="absolute h-screen w-screen bg-white top-0 left-0 -z-10 px-4 py-16 overflow-y-auto">
            <div class="mb-12" @click="closeMenu">
                <p class="mb-4"><router-link  tag="a" to="/catalog" class="tercia text-xl uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">{{shop_title[lang]}}</router-link></p>
                <p><router-link  tag="a" to="/lookbooks" class="tercia text-xl uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">
                    {{lookbook_title[lang]}}
                </router-link></p>
            </div>
            <div class="mb-12" @click="closeMenu">
                <p class="mb-4"><router-link  tag="a" to="/about" class="tercia text-xl uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">
                    {{story_title[lang]}}
                </router-link></p>
                 <p><router-link  tag="a" to="/sustainability" class="tercia text-xl uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">{{sustainability_title[lang]}}</router-link></p>
            </div>
            <div class="mb-12" @click="closeMenu">
                <p class="mb-4"><router-link  tag="a" to="/care" class="tercia text-xl uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">{{care_title[lang]}}</router-link></p>
                <p class="mb-4"><router-link  tag="a" to="/" class="tercia text-xl uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">{{delivery_title[lang]}}</router-link></p>
                <p class="mb-4"><router-link  tag="a" to="/" class="tercia text-xl uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">{{return_title[lang]}}</router-link></p>
                <p><router-link  tag="a" to="/about" class="tercia text-xl uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">{{terms_title[lang]}}</router-link></p>
            </div>
            <div class="mb-12" @click="closeMenu">
                <p class="mb-4"><router-link  tag="a" to="/contacts" class="tercia text-xl uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">{{contacts_title[lang]}}</router-link></p>
                <p><a href="https://www.instagram.com/the_eteri" target="_blank" class="tercia text-xl uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">Instagram</a></p>
            </div>
            <div class="mb-12">
               <button class="underline" @click="langStore.CHANGE_LANG()">{{lang_switcher[lang]}}</button>
            </div>
            <SubscribeForm label />
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SubscribeForm from './SubscribeForm.vue'
import { useLangStore } from '@/stores/lang'

export default defineComponent({
    props: {
        lang: {
            type: String,
            required: true
        },
        shop_title: {
            type: Object,
            required: true
        },
        lookbook_title: {
            type: Object,
            required: true
        },
        story_title: {
            type: Object,
            required: true
        },
        sustainability_title: {
            type: Object,
            required: true
        },
        contacts_title: {
            type: Object,
            required: true
        },
        care_title: {
            type: Object,
            required: true
        },
        delivery_title: {
            type: Object,
            required: true
        },
        return_title: {
            type: Object,
            required: true
        },
        terms_title: {
            type: Object,
            required: true
        },
    },
    data(){
        return {
            langStore: useLangStore(),
            lang_switcher: {en: 'Switch to Russian', ru: 'Switch to English'}
        }
    },
    components: {
        SubscribeForm
    },
    methods: {
        closeMenu(){
            this.$emit('closeMenu')
        }
    }
})
</script>