<template>
    <section class="py-14 md:py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div class="col-span-1 md:h-screen p-4 pb-8 md:p-0">
                    <div class="h-full md:pt-24 md:pl-32">
                        <div class="max-w-[410px]">
                            <h2 class="text-2xl mb-4 tercia">{{title[lang]}}</h2>
                            <div class="text-lg" v-if="contacts" v-html="contacts.page.post_content">
                            </div>
                            <!-- <p class="text-lg"><a href="tel:+79999999999" class="hover:underline">+7 999 999 99 99</a></p>
                            <p class="text-lg"><a href="mailto:care@eteri.com" class="hover:underline">care@eteri.com</a></p>
                            <br>
                            <p class="text-lg">IG — <a href="https://www.instagram.com/the_eteri" target="_blank" class="hover:underline"> @the_eteri</a></p> -->
                        </div>
                    </div>
                </div>
                <div class="md:order-first col-span-1 h-96 md:h-screen bg-[url('../../assets/refs/cont.webp')] bg-cover bg-no-repeat bg-center">
                </div>
            </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import langMixin from '@/mixins/lang'
import { useContentStore } from '@/stores/content'

export default defineComponent({
    mixins: [langMixin],
    data(){
        return {
           title: {en: 'Contacts', ru: 'Контакты'},
        }
    },
    computed: {
        contacts(){
            return useContentStore().contacts
        }
    },
    created(){
        useContentStore().LOAD_CONTACTS().then((err) => {
            if(err){
                this.$router.replace('/404')
            }
        })
    }
})
</script>