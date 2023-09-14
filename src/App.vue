<template>
  <div :class="{ 'pt-8' : wp_menu }">
    <Preloader v-if="!goods.length && home === null && info === null" />
    <div v-else>
      <Header :class="{ 'pt-8' : wp_menu }" />
      <Cookie />
      <ModalSubscribe v-if="modal" @closeModal="modal = false" />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/ui/Header.vue'
import Preloader from '@/components/ui/Preloader.vue'
import Footer from '@/components/ui/Footer.vue'
import Cookie from '@/components/ui/Cookie.vue'
import ModalSubscribe from '@/components/ui/ModalSubscribe.vue'
import { useGoodsStore } from './stores/goods'
import { useLookbooksStore } from './stores/lookbooks'
import { useLangStore } from '@/stores/lang'
import { GoodItem } from '@/types/good'
import { default_lang } from '@/helpers/check_lang'
import { useContentStore } from './stores/content'

export default defineComponent({
  components: {
    Header,
    Preloader,
    Footer,
    Cookie,
    ModalSubscribe
  },
  data() {
    return {
      preload: false,
      modal: false,
      wp_menu: false
    }
  },
  computed: {
    goods(): GoodItem[]{
      return useGoodsStore().goods
    },
    home(): object | null {
      if(useContentStore().home){
        return useContentStore().home 
      }else{
        return null
      }
    },
    info(): object | null {
      if(useContentStore().info){
        return useContentStore().info 
      }else{
        return null
      }
    }
  },
  mounted(){
    setTimeout(() => {
      this.preload = false
    }, 3000)

    setTimeout(() => {
      this.modal = true
    }, 30000)

    // wpadminbar
    const wpadminbar = document.querySelector('#wpadminbar')
    if(wpadminbar){
      this.wp_menu = true
    }else{
      this.wp_menu = false
    }
  },
  created() {
    console.log("%c 🍌💦 Frontend -  @famzayka 🍌💦", "padding: 8px 10px; margin: 10px 0; background-color: #333; color: #fff; font-weight:600; font-size: 11px;")
    console.log("%c 👨‍💻🍷 Backend - @vadimpolh 🍷👨‍💻", "padding: 8px 10px; margin: 10px 0; background-color: #333; color: #fff; font-weight:600; font-size: 11px;")

    // console.log(default_lang)
    useLangStore().SET_LANG(default_lang)

    useContentStore().LOAD_HOME().then((err) => {
      if(err){
        this.$router.replace('/404')
      }
    })

    useContentStore().LOAD_INFO().then((err) => {
      if(err){
        this.$router.replace('/404')
      }
    })

    useGoodsStore().LOAD_GOODS().then((err) => {
      if(err){
        this.$router.replace('/404')
      }
    })
    useLookbooksStore().LOAD_LOOKBOOKS_HOME().then((err) => {
      if(err){
        this.$router.replace('/404')
      }
    })
    useLookbooksStore().LOAD_LOOKBOOKS().then((err) => {
      if(err){
        this.$router.replace('/404')
      }
    })
  },
})
</script>
