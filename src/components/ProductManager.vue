<script setup>
import { getProducts } from '../api/products';
</script>

<script>
export default {
    name: "ProductManager",
    data() {
        return {
            products: []
        };
    },
    methods: {
        async loadProducts() {
            this.products = await getProducts();
        },
    },
    mounted() {
        this.loadProducts();
    }
}
</script>

<template>
    <main class="flex justify-center items-center flex-col min-h-screen">
        <h1 class="text-3xl">Termékek kezelése</h1>

        <table class="flex flex-col w-full p-4">
            <thead>
                <tr class="w-full flex justify-between">
                    <th class="w-full text-left">Azonosító</th>
                    <th class="w-full text-left">Név</th>
                    <th class="w-full text-left">Ár</th>
                    <th class="w-full text-left">Raktáron?</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="products.id" class="w-full flex justify-between my-2">
                    <td class="w-full text-left">{{ product.id }}</td>
                    <td class="w-full text-left">{{ product.name }}</td>
                    <td class="w-full text-left">{{ product.price }}</td>
                    <td class="w-full text-left">{{ product.inStock ? "Igen" : "Nem" }}</td>
                </tr>
            </tbody>
        </table>
    </main>
</template>