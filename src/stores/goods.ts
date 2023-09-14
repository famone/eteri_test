import { defineStore } from 'pinia'
import axios from 'axios'
import { GoodItem } from '@/types/good'
import { CartItem } from '@/types/good'
import { useLangStore } from '@/stores/lang'
import router from '@/router'

interface GoodsState {
    goods: GoodItem[],
    cart: CartItem[]
}

export const useGoodsStore = defineStore('goods', {
    state: (): GoodsState => ({
        goods: [],
        cart: []
    }),
    getters: {
        getSingleGood: (state) => (id: string) => {
            return state.goods.find(i  => i.slug === id)
        },
        getTotal(state){
            const lang = useLangStore().lang
            let total = 0
            if(!state.cart.length) return 0
            state.cart.forEach((item) => {
                if(item.price !== null){
                    const answer = item.price[lang as keyof typeof item.price];
                    total += answer * item.quantity
                }
            })
            return total
        }
    },
    actions: {
        async LOAD_GOODS(){
            try {
                const { data } = await axios.get('https://api.the-eteri.com/wp-json/et/v1/get/all/product')
                this.goods = data
            } catch (error) {
                if (error instanceof Error) {
                    return error.message
                }
            }
        },
        ADD_CART_ITEM(item: CartItem){
            const itemInCart = this.cart.find(i => i.id === item.id)
            if(!itemInCart){
                // const new_cart_item = {
                //     ...item,
                //     amount: 1
                // }
                this.cart.push(item)
            }else{
                router.replace('/cart')
            }
        },
        REMOVE_CART_ITEM(){
            console.log(123)
        },
        CLEAR_CART(){
            this.cart = []
        },
        CHANGE_QUANTITY(val: number, index: number){
            if(val > 0){
                this.cart[index].quantity += val
            }else{
                if(this.cart[index].quantity === 1){
                    this.cart.splice(index, 1)
                }else{
                    this.cart[index].quantity += val
                }
            }
        }
    },
    persist: {
        paths: ['cart']
    }
})