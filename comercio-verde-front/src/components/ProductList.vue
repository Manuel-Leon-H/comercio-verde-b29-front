<template>

<b-container>
    <div v-if="productos.length">
        <h1 class="text-start">{{categoria}}</h1>
        <b-row>
            <b-col cols="4" class="mb-2"
                v-for="item in productos" :key="item._id"
            >
                <product-item :product="item"></product-item>
            </b-col>
        </b-row>
    </div>
    <b-alert variant="primary" show v-else>
        No hay {{categoria}} disponibles
    </b-alert>

</b-container>
</template>

<script>
import { BAlert } from 'bootstrap-vue';

import ProductItem from '@/components/ProductItem.vue'

export default {
    name: "ListaProductos",
    components:{
        ProductItem,BAlert
    },
    props:{
        productos:{
            type:Array,
            required:true
        },
        categoria:{
            type:String,
            required:true
        }
    }
}
</script>