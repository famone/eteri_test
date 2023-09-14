<template>
    <div class="cart pt-16 pb-14">
        <CartTable :cart="cart" :total="goodsStore.getTotal" v-if="cart.length" />
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div class="col-span-1 md:h-screen p-4 pb-8 md:p-0">
                <div class="h-full md:pt-24 md:pl-32">
                    <div class="max-w-[410px]">
                        <h2 class="text-2xl mb-4 tercia" v-html="title[lang]"></h2>
                        <div class="text-lg" v-if="contacts" v-html="contacts.page.post_content"></div>
                    </div>
                </div>
            </div>
            <div class="md:order-first col-span-1 h-full md:h-screen bg-[url('../../assets/refs/cont.webp')] bg-cover bg-no-repeat bg-center"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CartTable from '@/components/cart/CartTable.vue'
import { useGoodsStore } from '@/stores/goods'
import { CartItem } from '@/types/good'
import lang from '@/mixins/lang'

export default defineComponent({
    mixins: [lang],
    components: {
        CartTable
    },
    data(){
        return{
            goodsStore: useGoodsStore(),
            title: {en: 'Your cart is empty. Visit <a href="/catalog" class="cursor-pointer underline hover:no-underline">Catalogue</a><br> to make your purchase.', ru: 'Корзина пустая. Перейтиде<br>в <a href="/catalog" class="cursor-pointer underline hover:no-underline">Каталог</a>, чтобы сделать заказ.'}
        }
    },
    computed: {
        cart(): CartItem[]{
            return useGoodsStore().cart
        }
    },
})
</script>

<style scoped>
.cart{
    min-height: calc(100vh - 286px);
}
</style>