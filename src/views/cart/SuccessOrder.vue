<template>
    <div class="cart pt-16 pb-14">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div class="col-span-1 md:h-screen p-4 pb-8 md:p-0">
                <div class="h-full md:pt-24 md:pl-32">
                    <div class="max-w-[410px]">
                        <h2 class="text-2xl mb-4 tercia" v-html="title[lang]"></h2>
                         <p class="leading-6 html-spaces" v-html="text[lang]"></p>
                    </div>
                </div>
            </div>
            <div class="md:order-first col-span-1 h-full md:h-screen bg-[url('../../assets/refs/success.png')] bg-cover bg-no-repeat bg-center"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import lang from '@/mixins/lang'

export default defineComponent({
    mixins: [lang],
    data(){
        return {
            title: {en: 'Order is processed.', ru: 'Заказ оформлен.'},
            text: {en: 'We will contact you shortly for payment <br> and calculation of terms and cost of delivery.', ru: 'Мы скоро свяжемся с вами для оплаты <br> и расчета сроков и стоимости доставки.'},
        }
    }
})
</script>

<style scoped>
.cart{
    min-height: calc(100vh - 286px);
}
</style>