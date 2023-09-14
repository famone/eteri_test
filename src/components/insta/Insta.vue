<template>
    <section class="py-10 pb-14">
        <div class="container px-4 md:px-0 md:mx-auto">
            <h2 class="text-2xl mb-4 tercia">Join the club</h2>
            <div class="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                <div class="col-span-1 mb-4" v-for="(img, index) in images" :key="index">
                    <router-link  tag="a" to="/">
                        <div class="group w-ful h-80 relative bg-gray-200 mb-3 bg-cover bg-center bg-no-repeat" :style="`background-image:url('${img}');`">
                        </div>
                        <div class="hover:underline">
                            <h4 class="leading-5">@text</h4>
                        </div>
                    </router-link >
                </div>
            </div>
            <div class="hidden md:grid grid-cols-4 gap-4">
                <button class="col-start-2 col-span-2 w-full p-2.5 bg-dim_gray hover:underline border border-dim_gray border-solid active:border-black">
                    Go to instagram
                </button>
            </div>
        </div>
        <!-- mobile -->
        <div class="md:hidden scroll-row px-4">
                <div class="scroll-item overflow-hidden mr-4 last:mr-0" v-for="(img, index) in images" :key="index">
                    <router-link  tag="a" to="/">
                        <div class="group w-ful h-60 relative bg-gray-200 mb-3 bg-cover bg-center bg-no-repeat" :style="`background-image:url('${img}');`">
                        </div>
                        <div class="hover:underline">
                            <h4 class="leading-5">@text</h4>
                        </div>
                    </router-link >
                </div>
                <!-- <div class="scroll-item overflow-hidden mr-4 bg-dim_gray">
                        <img src="@/assets/refs/img_9102_copy_2x.webp" class="w-full">
                    </div>
                <div class="scroll-item overflow-hidden mr-4  bg-dim_gray">
                        <img src="@/assets/refs/IMG_8822.jpg" class="w-full">
                    </div>
                <div class="scroll-item overflow-hidden bg-dim_gray">
                    <img src="@/assets/refs/IMG_8888.jpg" class="w-full">
                </div> -->
            </div>
            <div class="grid md:hidden grid-cols-2 md:grid-cols-4 mt-4 gap-4 px-4">
                    <div class="md:col-start-2 col-span-2">
                        <router-link tag="a" to="/collections">
                            <button class="w-full p-2.5 bg-dim_gray hover:underline border border-dim_gray border-solid active:border-black">
                                Go to instagram
                            </button>
                        </router-link>
                    </div>
                </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data(){
        return {
            images: [
                require('@/assets/refs/inst1.png'),
                require('@/assets/refs/inst2.png'),
                require('@/assets/refs/inst3.png'),
                require('@/assets/refs/inst4.png')
            ]
        }
    }
})
</script>


<style scoped>
.scroll-item{
    width: 235px;
    display: inline-block;
}
.scroll-row{
    overflow: auto;
    white-space: nowrap;
}
.scroll-row::-webkit-scrollbar {
  display: none;
}
.scroll-row{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>