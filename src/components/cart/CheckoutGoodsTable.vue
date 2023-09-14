<template>
    <div class="col-span-1">
        <h4 class="leading-5 mb-4">{{lang === 'en' ? 'Order' : 'Заказ'}}</h4>
        <!-- CHECKOUT GOODS TABLE -->
        <div class="grid grid-cols-4 sm:grid-cols-5 gap-0 border-t border-dim_gray" v-for="(item, index) in cart" :key="index">
            <div class="col-span-1">
                <img :src="item.picture" class="w-full">
            </div>
            <div class="col-span-2 p-3">
                <h4 class="leading-5">{{item.name[lang]}}</h4>
                <h4 class="leading-5">{{item.spec.sostav}}</h4>
                <h4 class="leading-5">Onesize</h4>
                <h4 class="leading-5 sm:hidden">{{item.price[lang]}}{{currency_symbol[lang]}}</h4>
            </div>
            <div class="col-span-1 p-3 hidden sm:block">
                <h4 class="leading-5">{{item.price[lang]}}{{currency_symbol[lang]}}</h4>
            </div>
            <div class="flex justify-end items-end sm:block col-span-1 p-3">
                <h4 class="leading-5">№{{item.quantity}}</h4>
            </div>
        </div>
        <div class="grid grid-cols-5 gap-0 border-t border-dim_gray">
            <div class="col-span-3 sm:col-span-2 sm:col-start-2 py-4 lg:p-4">
                <h4 class="leading-5">{{delivery_title[lang]}}</h4>
            </div>
            <div class="col-span-2 p-4">
                <h4 class="leading-5">{{delivery_val[lang]}}</h4>
            </div>
        </div>
        <div class="grid grid-cols-5 gap-0 border-t border-dim_gray">
            <div class="col-span-3 sm:col-span-2 sm:col-start-2 py-4 lg:p-4">
                <h4 class="leading-5">{{total_title[lang]}}:</h4>
            </div>
            <div class="col-span-2 p-4">
                <h4 class="leading-5">{{total.toLocaleString()}}{{currency_symbol[lang]}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
    props: {
        cart: {
            required: true,
            type: Array
        },
        total:{
            type: Number,
            required: true
        },
        lang:{
            type: String,
            required: true
        }
    },
    data(){
        return {
            currency_symbol: {en: '$', ru: ' руб.'},
            total_title: {en: 'Total', ru: 'Итого'},
            delivery_title: {en: 'Delivery', ru: 'Доставка'},
            delivery_val: {en: 'Calculated individually', ru: 'Расчитывается индивидуально'},
        }
    }
})
</script>