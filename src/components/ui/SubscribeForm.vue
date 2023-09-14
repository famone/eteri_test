<template>
    <div>
        <form @submit.prevent="submitForm" v-if="!success">
            <label v-if="label" for="first-name" class="block text-sm font-medium leading-6 text-gray-900 mb-2">{{label_text[lang]}}</label>
            <div>
                <input type="text" class="block w-full bg-dim_gray px-4 py-2.5 text-black placeholder:text-gray-400 border border-solid border-dim_gray  focus:ring-0 focus:ring-offset-0 focus:border-black" :placeholder="placeholder[lang]" :class="{ 'border-red-500 focus:border-red-500' : v$.email.$error, 'bg-white' : light }" v-model="email" :disabled="loading">
                <p class="text-red-500 text-xs text-start px-4 pt-1" v-if="v$.email.$error">{{invalid[lang]}}</p>
                <button class="col-start-2 col-span-2 w-full p-2.5 bg-dim_gray hover:underline border border-dim_gray border-solid active:border-black mt-4"
                :class="{'bg-white' : light }" type="submit">
                <!-- 'bg-white' : light  -->
                    <svg v-if="loading" class="animate-spin mx-auto h-5 w-5 my-0.5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span v-else>{{subscribe[lang]}}</span>
                </button>
            </div>
        </form>
        <div class="h-[108px] flex items-center justify-center" v-else>
            <p>{{thanks[lang]}}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import axios from 'axios'
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import langMixin from '@/mixins/lang'

export default defineComponent({
    mixins: [langMixin],
    props: {
        light: {
            required: false,
            type: Boolean
        },
        label: {
            required: false,
            type: Boolean
        },
    },
    data(){
        return{
            v$: useVuelidate(),
            email: '' as string,
            loading: false,
            success: false,
            placeholder: {en: 'Enter your email', ru: 'Напишите почту'},
            subscribe: {en: 'Subscribe', ru: 'Подписаться'},
            thanks: {en: 'Thanks for subscribing', ru: 'Спасибо за подписку'},
            invalid: {en: 'Invalid field', ru: 'Некорректное значение'},
            label_text: {en: 'Sign up for updates and new releases:', ru: 'Получайте уведомления и новости бренда:'}
        }
    },
    validations () {
        return {
            email: { required, email }
        }
    },
    methods: {
        submitForm(){

            this.v$.$validate()

            if(!this.v$.$error){
                this.loading = true
                const form = new FormData()

                form.append('your_email', this.email);

                axios.post('https://api.the-eteri.com/wp-json/contact-form-7/v1/contact-forms/54/feedback', form)
                .then((res) => {
                    this.loading = false
                    if(res.status === 200){
                        this.success = true
                        this.email = ''
                        this.v$.$reset()
                        setTimeout(() => {
                            this.success = false
                        }, 5000)
                    }
                    
                })
            }
        }
    }
})
</script>