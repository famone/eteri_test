<template>
    <section>
        <div class="container mx-auto px-4 md:px-0">
            <h2 class="text-2xl mb-8 tercia">{{lang === 'en' ? 'Cart' : 'Корзина'}}</h2>
            <!-- DESKTOP CART TABLE -->
            <div class="hidden lg:grid grid-cols-12 gap-0 border-t border-dim_gray" v-for="(item, index) in cart" :key="index">
                <div class="col-span-2">
                    <img :src="item.picture" class="w-full">
                </div>
                <div class="col-span-3 p-4">
                    <h4 class="leading-5">{{item.name[lang]}}</h4>
                </div>
                <div class="col-span-2 p-4">
                    <h4 class="leading-5">{{item.spec.sostav}}</h4>
                </div>
                <div class="col-span-2 p-4">
                    <h4 class="leading-5">Onesize</h4>
                </div>
                <div class="col-span-2 p-4">
                    <h4 class="leading-5">{{item.price[lang]}}{{currency_symbol[lang]}}</h4>
                </div>
                <div class="col-span-1 py-4">
                    <div class="flex items-center">
                        <button class="h-10 w-10 bg-dim_gray border border-dim_gray flex items-center justify-center hover:border-black" @click="changeQuantity(-1, index)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </button>
                        <span class="mx-3">{{item.quantity}}</span>
                        <button class="h-10 w-10 bg-dim_gray border border-dim_gray flex items-center justify-center hover:border-black" @click="changeQuantity(1, index)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!-- MOBILE CART TABLE -->
            <div class="grid lg:hidden grid-cols-3 gap-0 border-t border-dim_gray" v-for="(item, index) in cart" :key="index">
                <div class="col-span-1">
                    <img :src="item.picture" class="w-full">
                </div>
                <div class="col-span-1 p-3">
                    <h4 class="leading-5">{{item.name[lang]}}</h4>
                    <h4 class="leading-5">{{item.spec.sostav}}</h4>
                    <h4 class="leading-5">Onesize</h4>
                    <h4 class="leading-5">{{item.price[lang]}}{{currency_symbol[lang]}}</h4>
                </div>
                <div class="col-span-1 flex justify-end items-end py-3">
                    <div class="flex items-center">
                        <button class="h-10 w-10 bg-dim_gray border border-dim_gray flex items-center justify-center hover:border-black" @click="changeQuantity(-1, index)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
                        </button>
                        <span class="mx-3">{{item.quantity}}</span>
                        <button class="h-10 w-10 bg-dim_gray border border-dim_gray flex items-center justify-center hover:border-black" @click="changeQuantity(1, index)">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="grid grid-cols-12 gap-0 border-t border-dim_gray">
                <div class="col-span-10 lg:col-span-7 lg:col-start-3 py-4 lg:p-4">
                    <h4 class="leading-5">{{total_title[lang]}}:</h4>
                </div>
                <div class="col-span-2 p-4">
                    <h4 class="leading-5">{{total.toLocaleString()}}{{currency_symbol[lang]}}</h4>
                </div>
                <div class="col-span-12 lg:col-span-6 lg:col-start-4 lg:p-4">
                    <router-link tag="a" to="/cart/checkout">
                        <button class="mt-4 w-full p-2.5 bg-dim_gray hover:underline border border-dim_gray border-solid active:border-black">
                            {{checkout_title[lang]}}
                        </button>
                    </router-link>

                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import lang from '@/mixins/lang'
import { useGoodsStore } from '@/stores/goods'

export default defineComponent({
    mixins: [lang],
    props: {
        cart:{
            required: true,
            type: Array
        },
        total:{
            type: Number,
            required: true
        }
    },
    data(){
        return {
            currency_symbol: {en: '$', ru: ' руб.'},
            total_title: {en: 'Total', ru: 'Итого'},
            checkout_title: {en: 'Checkout', ru: 'Оформить заказ'},
        }
    },
    methods: {
        changeQuantity(val: number, index: number){
            useGoodsStore().CHANGE_QUANTITY(val, index)
        }
    }
})
</script>