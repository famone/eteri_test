<template>
    <div class="fixed bg-dim_gray px-4 py-2 bottom-4 md:bottom-0 left-4 md:left-0 w-offset md:w-full z-20 flex justify-between items-center border border-black md:border-none" v-if="cookie">
        <p class="text-sm" v-html="text[lang]"></p>
        <a href="#" @click.prevent="closeCookie" class="text uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2 ml-4 md:ml-0">{{btn[lang]}}</a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import langMixin from '@/mixins/lang'

export default defineComponent({
    mixins: [langMixin],
    data(){
        return {
            cookie: true,
            text: {
                en: 'We use cookies to provide you <br class="md:hidden"> a personalised shopping experience. <br class="md:hidden">Read our <a href="/cookie" class="underline">Cookie Policy</a>',
                ru: 'Мы используем куки, чтобы предоставить персональный<br class="md:hidden"> опыт шопинга. Ознакомьтесь<br class="md:hidden"> с <a href="/cookie" class="underline"> Политикой</a>'
            },
            btn: { en: 'Accept', ru: 'Разрешить'}
        }
    },
    methods: {
        closeCookie(){
            this.cookie = false
        }
    }
})
</script>
