<template>
    <header class="bg-white top-0 left-0 w-full z-20" :class="mobile_menu ? 'fixed' : 'absolute'">
        <nav class="mx-auto grid grid-cols-3 gap-4 px-4 py-3 items-center">
            <div class="hidden md:block col-span-1">
                <router-link tag="a" to="/catalog" class="tercia text-sm uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">
                    {{shop_title[lang]}}
                </router-link >
                <router-link tag="a" to="/lookbooks" class="tercia text-sm uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2 ml-5">
                    {{lookbook_title[lang]}}
                </router-link >
            </div>
            <div class="col-span-1 md:hidden">
                <router-link  tag="a" to="/cart" @click="mobile_menu = false" class="tercia text-sm uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">{{cart_title[lang]}}
                <div v-if="goodsStore.cart.length" class="h-4 w-4 text-xs inline-block text-center rounded-full bg-black text-white">
                        {{goodsStore.cart.length}}
                    </div>
                </router-link >
            </div>
            <div class="col-span-1 flex justify-center">
                <router-link tag="a" to="/" @click="mobile_menu = false">
                    <img class="lg:h-5" src="@/assets/img/logo.svg" alt="">
                </router-link>
            </div>
            <div class="hidden md:flex justify-end col-span-1	">
                <router-link  tag="a" to="/about" class="tercia text-sm uppercase leading-6 text-gray-900 hover:underline hover:underline-offset-2">{{story_title[lang]}}</router-link >
                <router-link  tag="a" to="/contacts" class="tercia text-sm uppercase leading-6 text-gray-900 ml-5 hover:underline hover:underline-offset-2">
                    {{contacts_title[lang]}}
                </router-link >
                <router-link  tag="a" to="/cart" class="tercia text-sm uppercase leading-6 text-gray-900 ml-5 hover:underline hover:underline-offset-2">
                    {{cart_title[lang]}}
                    <div v-if="goodsStore.cart.length" class="h-4 w-4 text-xs inline-block text-center rounded-full bg-black text-white">
                        {{goodsStore.cart.length}}
                    </div>
                </router-link >
                <a @click.prevent="langStore.CHANGE_LANG()" href="#" class="tercia text-sm uppercase leading-6 text-gray-900 ml-5 hover:underline hover:underline-offset-2">{{lang}}</a>
            </div>
            <div class="col-span-1 md:hidden ml-auto">
                <div class="active:bg-dim_gray ring-0 rounded-full p-1" @click="mobile_menu = !mobile_menu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" v-if="!mobile_menu">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" v-else>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </div>
            </div>
        </nav>
        <MobileNav v-if="mobile_menu" @closeMenu="mobile_menu = false" :lang="lang" :shop_title="shop_title" :lookbook_title="lookbook_title" :story_title="story_title" :sustainability_title="sustainability_title" :contacts_title="contacts_title" :care_title="care_title" :delivery_title="delivery_title" :return_title="return_title" :terms_title="terms_title" />
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MobileNav from './MobileNav.vue'
import { useLangStore } from '@/stores/lang'
import { useGoodsStore } from '@/stores/goods'
import langMixin from '@/mixins/lang'

export default defineComponent({
    mixins: [langMixin],
    components: {
        MobileNav
    },
    data() {
        return {
            mobile_menu: false,
            langStore: useLangStore(),
            goodsStore: useGoodsStore(), 
            shop_title: {en: 'SHOP', ru: 'Каталог'},
            lookbook_title: {en: 'LOOKBOOK', ru: 'Лукбук'},
            story_title: {en: 'OUR STORY', ru: 'Наша история'},
            cart_title: {en: 'CART', ru: 'Корзина'},
            contacts_title: {en: 'CONTACTS', ru: 'Контакты'},
            sustainability_title: {en: 'Sustainability', ru: 'Забота о природе'},
            care_title: {en: 'CARE', ru: 'Уход'},
            delivery_title: {en: 'Delivery', ru: 'Доставка'},
            return_title: {en: 'Return', ru: 'Возврат'},
            terms_title: {en: 'Terms', ru: 'Оферта'},
        }
    }
})
</script>
