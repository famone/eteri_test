import { defineStore } from 'pinia'
import axios from 'axios'


export const useContentStore = defineStore('content', {
    state: () => {
        return {
            home: null as object | null,
            info: null as object | null,
            about: null as object | null,
            contacts: null as object | null,
        }
    },
    getters: {
        
    },
    actions: {
        async LOAD_HOME(){
            if(this.home !== null){
                return
            }
            try {
                const {data} = await axios.get('https://api.the-eteri.com/wp-json/et/v1/get/page/glavnaya')
                this.home = data
            } catch (error) {
                if (error instanceof Error) {
                    return error.message
                }
            }
        },
        async LOAD_INFO(){
            if(this.home !== null){
                return
            }
            try {
                const {data} = await axios.get('https://api.the-eteri.com/wp-json/et/v1/get/information')
                this.info = data
            } catch (error) {
                if (error instanceof Error) {
                    return error.message
                }
            }
        },
        async LOAD_ABOUT(){
            if(this.about !== null){
                return
            }
            try {
                const { data } = await axios.get(`https://api.the-eteri.com/wp-json/et/v1/get/page/nasha-istoriya`)
                this.about = data
            } catch (error) {
                if (error instanceof Error) {
                    return error.message
                }
            }
        },
        async LOAD_CONTACTS(){
            if(this.about !== null){
                return
            }
            try {
                const { data } = await axios.get(`https://api.the-eteri.com/wp-json/et/v1/get/page/kontakty`)
                this.contacts = data
            } catch (error) {
                if (error instanceof Error) {
                    return error.message
                }
            }
        }
    },
})