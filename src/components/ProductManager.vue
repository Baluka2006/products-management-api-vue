<script setup>
import { createProduct, getProducts } from '../api/products';
</script>

<script>
export default {
    name: "ProductManager",
    data() {
        return {
            products: [],
            newProduct: {
                name: "",
                price: 0,
                inStock: false,
            }
        };
    },
    methods: {
        async loadProducts() {
            this.products = await getProducts();
        },
        async addProduct(product) {
            await createProduct(product);
            await this.loadProducts();
        },
        async submitCreateProduct() {
            await this.addProduct(this.newProduct);

            this.newProduct.name = "";
            this.newProduct.price = "";
            this.newProduct = false;
        }
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
                    <td class="w-full text-left">{{ product.price }} Ft</td>
                    <td class="w-full text-left">{{ product.inStock ? "Igen" : "Nem" }}</td>
                </tr>
            </tbody>
        </table>

        <form
            @submit.prevent="submitCreateProduct"
            class="flex flex-col gap-3 my-5 mt-3 border-2 border-stone-200 rounded-2xl p-5 shadow-2xl shadow-stone-200">
            <label for="name">Név:</label>
            <input class="border-2 border-stone-200 rounded-xl px-3 py-1" type="text" name="name"
                placeholder="Laptop..." v-model="newProduct.name">

            <label for="price">Ár:</label>
            <input class="border-2 border-stone-200 rounded-xl px-3 py-1" type="number" name="price"
                placeholder="1 500 Ft" v-model.number="newProduct.price">

            <div class="flex justify-between">
                <label for="inStock">Raktáron:</label>
                <input type="checkbox" name="inStock" v-model="newProduct.inStock">
            </div>


            <button type="submit" class="border-2 border-stone-200 rounded-xl py-2 cursor-pointer">Létrehozás</button>
        </form>
    </main>
</template>