<template>
    <div>
        <section class="py-12" v-if="goodsStore.getSingleGood(id)">
            <div class="mt-6 mb-4 md:mt-4 px-4">
                <button @click="$router.go(-1)" class="uppercase md:text-lg tercia cursor-pointer hover:underline"><span class="mr-2 mdi mdi-chevron-left"></span>
                    {{go_back[lang]}}
                </button>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2  gap-0">
                <div class="hidden lg:block col-span-1" v-if="goodsStore.getSingleGood(id)"> <!-- ВРЕМЕННО  -->
                    <img :src="goodsStore.getSingleGood(id).picture" class="w-full">
                    <img :src="img" class="w-full" v-for="(img, i) in goodsStore.getSingleGood(id).gallery" :key="i">
                </div>
                <div class="lg:hidden col-span-1" v-if="goodsStore.getSingleGood(id)">
                     <MobileSlider :picture="goodsStore.getSingleGood(id).picture" :gallery="goodsStore.getSingleGood(id).gallery" />
                </div>
                <div class="col-span-1" v-if="goodsStore.getSingleGood(id)"> <!-- ВРЕМЕННО  -->
                    <div class="md:sticky md:max-h-screen md:overflow-y-scroll top-0 p-4 flex flex-col justify-start no-scrollbar">
                        <h2 class="text-2xl mb-9 lg:mb-16 tercia">{{goodsStore.getSingleGood(id).name[lang]}}</h2>
                        <div class="mb-9 lg:mb-16">
                            <h4 class="leading-5">{{color_title[lang]}}: {{goodsStore.getSingleGood(id).spec.color}}</h4>
                            <h4 class="leading-5" v-html="size_title[lang]"></h4>
                            <h4 class="leading-5">{{goodsStore.getSingleGood(id).description[lang]}}</h4>
                            <h4 class="leading-5">{{goodsStore.getSingleGood(id).price[lang]}}{{currency_symbol[lang]}}</h4>
                        </div>

                        <button class="hidden order-first lg:order-none mb-9 lg:mb-16 col-start-2 col-span-2 w-full p-2.5 bg-dim_gray hover:underline border border-dim_gray border-solid active:border-black lg:flex justify-center items-center" @click="ADD_CART_ITEM(goodsStore.getSingleGood(id))">
                            {{goodInCart(goodsStore.getSingleGood(id).id) ? already_in_cart[lang] : add_to_cart[lang]}}
                        </button>
                        <SubscribeForm label class="order-first lg:order-none mb-9 lg:mb-16" />
                        <div>
                            <div class="py-3 hover:bg-dim_gray transition-all cursor-pointer" @click="size_guide.active = !size_guide.active" v-if="goodsStore.getSingleGood(id).spec.sizeguide[lang]">
                                <p class="flex items-center justify-start">
                                    <span class="mdi text-xl mr-1" :class="size_guide.active ? 'mdi-chevron-left' : 'mdi-chevron-down' "></span> {{size_guide.text[lang]}}
                                </p>
                            </div>
                            <div class="px-6 py-4" v-if="size_guide.active">
                                <img :src="goodsStore.getSingleGood(id).spec.sizeguide[lang]" class="w-full">
                            </div>
                        </div>
                    </div>

                </div>
            </div>

             <!--  -->
                        <button class="lg:hidden my-6 w-offset p-2.5 bg-dim_gray hover:underline border border-dim_gray border-solid active:border-black flex justify-center items-center sticky bottom-8 left-4 shadow-lg z-10" @click="ADD_CART_ITEM(goodsStore.getSingleGood(id))">
                            {{goodInCart(goodsStore.getSingleGood(id).id) ? already_in_cart[lang] : add_to_cart[lang]}}
                        </button>
                        <!--  -->
        </section>
        <CatalogGrid :amount="4" class="pt-0" :title="more_title" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CatalogGrid from '@/components/home/CatalogGrid.vue'
import MobileSlider from '@/components/shop/MobileSlider.vue'
import { useGoodsStore } from '@/stores/goods'
import SubscribeForm from '@/components/ui/SubscribeForm.vue'
import langMixin from '@/mixins/lang'
import cart_item from '@/mixins/cart_item'
import { CartItem } from '@/types/good'

// interface GoodTab {
//     text: object,
//     descr: string | null,
//     img: string | null
//     active: boolean,
// }

export default defineComponent({
    mixins: [langMixin, cart_item],
    props: ['id'],
    components: {
        CatalogGrid,
        MobileSlider,
        SubscribeForm
    },
    data() {
        return {
            currency_symbol: {en: '$', ru: ' руб.'},
            color_title: {en: 'Color', ru: 'Цвет'},
            size_title: {en: 'Size: One size', ru: 'Размер: One size — Кимоно выполнены <br> в едином размере (подходят для размеров 40–52 RUS)'},
            more_title: {en: 'Explore other objects', ru: 'Исследуйте объекты'},
            go_back: {en: 'Go back', ru: 'Назад'},
            add_to_cart: {en: 'Add to cart', ru: 'Добавить в корзину'},
            already_in_cart: {en: 'Proceed to checkout', ru: 'Перейти к оформлению'},
            goodsStore: useGoodsStore(), 
            size_guide: {
                text: {en: 'Size Guide', ru: 'Размерная сетка'},
                active: false
            },
            // goodTabs: [
                // {
                //     text: 'Care',
                //     descr: 'Мы доставляем изделия по всему миру и территории РФ. Стоимость доставки: рассчитывается индивидуально. Если вы проживаете в Москве, мы можем организовать доставку с примеркой. В 99% случаях клиенты становятся носителями the mató и покупают кафтаны.',
                //     img: null,
                //     active: true
                // },
                // {
                //     text: {en: 'Size Guide', ru: 'Размерная сетка'},
                //     descr: '',
                //     img: 'https://help.merrellaustralia.com.au/hc/article_attachments/360073811453/mceclip2.png',
                //     active: false
                // },
                // {
                //     text: 'Shipping',
                //     descr: 'Мы доставляем изделия по всему миру и территории РФ. Стоимость доставки: рассчитывается индивидуально. Если вы проживаете в Москве, мы можем организовать доставку с примеркой. В 99% случаях клиенты становятся носителями the mató и покупают кафтаны.',
                //     img: null,
                //     active: false
                // },
            // ] as GoodTab[]
        }
    },
    methods: {
        ADD_CART_ITEM(i: CartItem){
            const payload: CartItem = {
                id: i.id,
                name: i.name,
                slug: i.slug,
                shortDescription: i.shortDescription,
                picture: i.picture,
                spec: i.spec,
                price: i.price,
                quantity: 1
            }
            useGoodsStore().ADD_CART_ITEM(payload)
        }
    }
})
</script>