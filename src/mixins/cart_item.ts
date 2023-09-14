import { useGoodsStore } from '@/stores/goods'

export default {
    methods: {
        goodInCart(id: number):boolean {
            const itemInCart = useGoodsStore().cart.find(i => i.id === id)
            return itemInCart ? true : false
        }
    }
}