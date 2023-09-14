<template>
    <footer class=" pt-10 pb-5">
        <div class="px-4">
            <div class="grid grid-cols-2 lg:grid-cols-6 gap-4">
                <div class="col-span-1">
                    <h5 class="tercia leading-5 mb-7 uppercase">{{objects_title[lang]}}</h5>
                    <ul>
                        <li class="mb-2 "><router-link  class="hover:underline capitalize " tag="a" to="/catalog">{{shop_title[lang]}}</router-link ></li>
                        <li class="mb-2 "><router-link  class="hover:underline" tag="a" to="/lookbooks">{{lookbook_title[lang]}}</router-link ></li>
                    </ul>
                </div>
                <div class="col-span-1">
                    <h5 class="tercia leading-5 mb-7 uppercase">{{support_title[lang]}}</h5>
                    <ul>
                        <li class="mb-2 "><router-link  class="hover:underline" tag="a" to="/care">{{care_title[lang]}}</router-link ></li>
                    </ul>
                </div>
                <div class="col-span-1">
                    <h5 class="tercia leading-5 mb-7 uppercase">{{about_title[lang]}}</h5>
                    <ul>
                        <li class="mb-2 "><router-link  class="hover:underline" tag="a" to="/about">{{story_title[lang]}}</router-link ></li>
                        <li class="mb-2 "><router-link  class="hover:underline" tag="a" to="/sustainability">{{sustainability_title[lang]}}</router-link ></li>
                    </ul>
                </div>
                <div class="col-span-1">
                    <h5 class="tercia leading-5 mb-7 uppercase">{{getintouch_title[lang]}}</h5>
                    <ul>
                        <li class="mb-2 "><router-link  class="hover:underline" tag="a" to="/contacts">{{contacts_title[lang]}}</router-link ></li>
                        <li class="mb-2 "><a href="https://www.instagram.com/the_eteri" target="_blank" class="hover:underline">Instagram</a></li>
                        
                    </ul>
                </div>
                <div class="col-span-2">
                    <div class="mb-12"></div>
                    <SubscribeForm label />
                </div>
            </div>
            <div class="mt-14 text-sm grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="col-span-1">
                    <p>© {{year}} Eteri. {{copyright[lang]}}</p>
                </div>
                <div class="col-span-1 lg:text-end">
                    <a href="https://webink.site/" target="_blank">{ Developed by WEBINK. }</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubscribeForm from '@/components/ui/SubscribeForm.vue'
import langMixin from '@/mixins/lang'

export default defineComponent({
    mixins: [langMixin],
    components: {SubscribeForm},
    data(){
        return{
            year: new Date().getFullYear(),
            // 
            shop_title: {en: 'Shop', ru: 'Каталог'},
            lookbook_title: {en: 'Lookbook', ru: 'Лукбук'},
            story_title: {en: 'Our story', ru: 'Наша история'},
            cart_title: {en: 'Cart', ru: 'Корзина'},
            contacts_title: {en: 'Contacts', ru: 'Контакты'},
            sustainability_title: {en: 'Sustainability', ru: 'Забота о природе'},
            care_title: {en: 'Care', ru: 'Уход'},
            delivery_title: {en: 'Delivery', ru: 'Доставка'},
            return_title: {en: 'Return', ru: 'Возврат'},
            terms_title: {en: 'Terms', ru: 'Оферта'},
            // 
            support_title: {en: 'Support', ru: 'Поддержка'},
            objects_title: {en: 'Objects', ru: 'Объекты'},
            about_title: {en: 'About Eteri', ru: 'О бренде'},
            getintouch_title: {en: 'Get in touch', ru: 'Связь'},
            copyright: {en: 'All rights reserved.', ru: 'Все права защищены.'}
        }
    }
})
</script>