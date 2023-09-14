import { defineStore } from 'pinia'
// import axios from 'axios'
// import { GoodItem } from '@/types/good'


export const useLangStore = defineStore('lang', {
    state: () => {
        return {
            lang: 'en' as string
        }
    },
    getters: {
        
    },
    actions: {
        CHANGE_LANG(){
            if(this.lang === 'en'){
                this.lang = 'ru'
            }else{
                this.lang = 'en'
            }
        },
        SET_LANG(lng: string) {
            this.lang = lng
        }
    },
})