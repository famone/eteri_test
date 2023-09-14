import { useLangStore } from '@/stores/lang'

export default {
    computed: {
        lang():string {
            return useLangStore().lang
        }
    }
}