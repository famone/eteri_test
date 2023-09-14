<template>
    <section>
        <div class="container mx-auto px-4 md:px-0">
            <nav class="flex mb-8">
                <ol role="list" class="flex items-center space-x-4">
                    <li>
                        <div class="flex items-center">
                            <router-link tag="a" to="/cart" class="text-2xl tercia">Cart</router-link>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.76837e-07 8.00007L1.41421 9.33327L8.48604 16L9.90025 14.6668L2.82842 8.00007L9.9004 1.3332L8.48619 0L1.41421 6.66687L4.76837e-07 8.00007Z" fill="black"/>
                            </svg>

                            <a href="#" class="ml-4 text-2xl tercia" aria-current="page">Checkout</a>
                        </div>
                    </li>
                </ol>
            </nav>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CheckoutGoodsTable :cart="cart" :total="total" :lang="lang" />
                <CheckoutForm :lang="lang" :cart="cart" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import lang from '@/mixins/lang'
import CheckoutGoodsTable from '@/components/cart/CheckoutGoodsTable.vue'
import CheckoutForm from '@/components/cart/CheckoutForm.vue'

export default defineComponent({
    mixins: [lang],
    components: {
        CheckoutGoodsTable,
        CheckoutForm
    },
    props: {
        cart:{
            required: true,
            type: Array
        },
        total:{
            type: Number,
            required: true
        }
    }
})
</script>