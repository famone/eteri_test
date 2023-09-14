<template>
    <div class="col-span-1">
        <h4 class="leading-5 mb-4">{{lang === 'en' ? 'Info' : 'Информация'}}</h4>
        <form @submit.prevent="checkoutOrder">
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 sm:col-span-1">
                    <input type="text" :placeholder="lang === 'en' ? 'First Name' : 'Имя'" v-model="firstname" 
                    :class="[{ 'border-red-400 focus:border-red-400' : v$.firstname.$error }, input_classes]">
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <input type="text" :placeholder="lang === 'en' ? 'Surname' : 'Фамилия'" v-model="lastname" 
                    :class="[{ 'border-red-400 focus:border-red-400' : v$.lastname.$error }, input_classes]">
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <input type="text" :placeholder="lang === 'en' ? 'Email' : 'Почта'" v-model="email" 
                    :class="[{ 'border-red-400 focus:border-red-400' : v$.email.$error }, input_classes]" >
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <input type="text" :placeholder="lang === 'en' ? 'Phone' : 'Телефон'" v-model="phone"
                    :class="[{ 'border-red-400 focus:border-red-400' : v$.phone.$error }, input_classes]">
                </div>
                <div class="col-span-2 relative flex items-start">
                    <div class="flex h-5 items-center">
                        <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-transparent" v-model="accepted">
                    </div>
                    <div class="ml-2 text-sm">
                        <label for="comments" class="text-gray-700 text-md" >
                            {{lang === 'en' ? 'Sign me up for news' : 'Подписаться на новости'}}
                        </label>
                    </div>
                </div>
            </div>
            <h4 class="leading-5 mb-4 mt-8">{{lang === 'en' ? 'Delivery' : 'Доставка'}}</h4>
            <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 sm:col-span-1">
                    <input type="text" :placeholder="lang === 'en' ? 'Country' : 'Страна'" v-model="country"
                    :class="[{ 'border-red-400 focus:border-red-400' : v$.country.$error }, input_classes]">
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <input type="text" :placeholder="lang === 'en' ? 'State' : 'Область'" v-model="state"
                    :class="[{ 'border-red-400 focus:border-red-400' : v$.state.$error }, input_classes]">
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <input type="text" :placeholder="lang === 'en' ? 'City' : 'Город'" v-model="city"
                    :class="[{ 'border-red-400 focus:border-red-400' : v$.city.$error }, input_classes]">
                </div>
                <div class="col-span-2 sm:col-span-1">
                    <input type="text" :placeholder="lang === 'en' ? 'Postal code' : 'Индекс'" v-model="pcode"
                    :class="[{ 'border-red-400 focus:border-red-400' : v$.pcode.$error }, input_classes]">
                </div>
                <div class="col-span-2">
                    <input type="text" :placeholder="lang === 'en' ? 'Address' : 'Адрес'" v-model="adress"
                    :class="[{ 'border-red-400 focus:border-red-400' : v$.adress.$error }, input_classes]">
                </div>
                <div class="col-span-2">
                    <input type="text" :placeholder="lang === 'en' ? 'Apartment, suit, etc' : 'Апартаменты, Офис, другое'" v-model="apartment"
                    :class="[{ 'border-red-400 focus:border-red-400' : v$.apartment.$error }, input_classes]">
                </div>
                <div class="col-span-2">
                    <input type="text" :placeholder="lang === 'en' ? 'Comment' : 'Комментарий'" v-model="comment"
                    :class="input_classes">
                </div>
                <div class="col-span-2">
                    <button class="col-start-2 col-span-2 w-full p-2.5 bg-dim_gray hover:underline border border-dim_gray border-solid active:border-black mt-6" type="submit">
                        <svg v-if="loading" class="animate-spin mx-auto h-5 w-5 my-0.5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span v-else>{{checkout_btn[lang]}}</span>
                    </button>
                    <p class="text-red-500 text-xs text-start mt-4" v-if="v$.$error">{{invalid[lang]}}</p>
                </div>
            </div>
            <div class="rounded-md bg-red-50 mt-4 p-4" v-if="submitError">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h3 class="ml-3 text-sm font-medium text-red-800">{{error_title[lang]}}</h3>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import axios from 'axios'
import { useGoodsStore } from '@/stores/goods'

export default defineComponent({
    props: {
        lang:{
            type: String,
            required: true
        },
        cart: {
            required: true,
            type: Array
        }
    },
    data(){
        return {
            v$: useVuelidate(),
            loading: false,
            checkout_btn: {en: 'Checkout', ru: 'Оформить заказ'},
            invalid: {en: 'Please, fill in all the valid information', ru: 'Please, fill in all the valid information'},
            input_classes: 'block w-full bg-white py-2 px-3 text-black placeholder:text-gray-400 border border-solid border-dim_gray text-sm focus:ring-0 focus:ring-offset-0 focus:border-black',
            error_title: {en: 'There was a submit error, please try again later', ru: 'Произошла ошибка отправки, попробуйте позже'},
            submitError: false,
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            country: '',
            state: '',
            city: '',
            pcode: '',
            adress: '',
            apartment: '',
            comment: '',
            border: '',
        }
    },
    validations () {
        return {
            firstname: { required },
            lastname: { required },
            phone: { required },
            email: { required, email },
            country: { required },
            state: { required },
            city: { required },
            pcode: { required },
            adress: { required },
            apartment: { required }
        }
    },
    methods:{
        clearForm(){
            this.loading = false

            this.firstname = ''
            this.lastname = ''
            this.phone = ''
            this.email = ''
            this.country = ''
            this.state = ''
            this.city = ''
            this.pcode = ''
            this.adress = ''
            this.apartment = ''
            this.comment = ''
            this.border = ''

            this.v$.$reset()
        },
        checkoutOrder(){
            this.v$.$validate()
            if(!this.v$.$error){
                this.loading = true
                const payload = {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    phone: this.phone,
                    email: this.email,
                    country: this.country,
                    state: this.state,
                    city: this.city,
                    pcode: this.pcode,
                    adress: this.adress,
                    apartment: this.apartment,
                    comment: this.comment,
                    border: JSON.stringify(this.cart)
                }
                const form = new FormData()

                for (var field in payload){
                    form.append(field, payload[field]);
                }

                axios.post('https://api.the-eteri.com/wp-json/contact-form-7/v1/contact-forms/211/feedback', form)
                .then(() =>{
                    this.clearForm()
                    useGoodsStore().CLEAR_CART()
                    this.$router.replace('/success-order')
                })
                .catch(() =>{
                    this.submitError = true
                    this.loading = false
                    setTimeout(() => {
                        this.submitError = false
                    }, 5000)
                })
            }
        }
    }
})
</script>