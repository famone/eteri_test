<template>
    <nav class="flex mb-4">
        <ol role="list" class="flex items-center space-x-4">
            <li>
                <div class="flex items-center">
                    <router-link tag="a" to="/lookbooks" class="text-2xl tercia">{{prev_txt[lang]}}</router-link>
                </div>
            </li>
            <li>
                <div class="flex items-center">
                    <span class="md:text-2xl">/</span>
                    <a href="#" class="ml-4 text-2xl tercia" aria-current="page">{{page}}</a>
                </div>
            </li>
        </ol>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import langMixin from '@/mixins/lang'

export default defineComponent({
    mixins: [langMixin],
    props: {
        page: {
            type: String,
            required: true
        }
    },
    data(){
        return {
            prev_txt: {en: 'Lookbooks', ru: 'Лукбуки'}
        }
    }
})
</script>