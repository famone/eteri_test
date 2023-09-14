import { defineStore } from 'pinia'
import axios from 'axios'
import { Lookbook } from '@/types/lookbook'

interface LookbooksState {
    lookbooks: Lookbook[],
    lookbooks_home: object
}

export const useLookbooksStore = defineStore('lookbooks', {
    state: (): LookbooksState => ({
        lookbooks: [],
        lookbooks_home: {}
    }),
    getters: {
        getSingleLookbook: (state) => (id: string) => {
            return state.lookbooks.find(i  => i.slug === id)
        }
    },
    actions: {
        async LOAD_LOOKBOOKS(){
            try {
                const { data } = await axios.get('https://api.the-eteri.com/wp-json/et/v1/get/lookbooks')
                this.lookbooks = data
            } catch (error) {
                if (error instanceof Error) {
                    return error.message
                }
            }
        },
        async LOAD_LOOKBOOKS_HOME(){
            try {
                const { data } = await axios.get('https://api.the-eteri.com/wp-json/et/v1/get/lookbooks/main')
                // const gallery = data.gallereya
                // gallery.slice(0, 3)
                this.lookbooks_home = data
            } catch (error) {
                if (error instanceof Error) {
                    return error.message
                }
            }
        },
    },
})