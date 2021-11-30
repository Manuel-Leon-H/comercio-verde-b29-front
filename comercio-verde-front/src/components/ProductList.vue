<template>

<b-container class="mt-3">
    <div v-if="productos.length">
        <b-row>
            <b-col cols="8">
                <h1 class="text-start">{{categoria}}</h1>
            </b-col>
            <b-col>
                <b-button variant="primary" size="sm" class="d-flex mt-2 mb-2 ms-auto" @click="$emit('anadirproduct')">
                    <b-icon icon="bag-plus"></b-icon>
                </b-button>
            </b-col>
        </b-row>
        
        <b-row>
            <b-col cols="4" class="mb-2"
                v-for="item in productos" :key="item._id"
            >
                <product-item :product="item" @clickBtn="eliminarP"
                    @clickBtn1="actualizarP"
                    @clickBtn2="anadirP"></product-item>
            </b-col>
        </b-row>
    </div>
    <b-alert variant="primary" show v-else>
        No hay {{categoria}} disponibles
    </b-alert>

</b-container>
</template>

<script>
import { BAlert,BButton } from 'bootstrap-vue';
import { mapActions } from 'vuex';

import ProductItem from '@/components/ProductItem.vue'

export default {
    name: "ListaProductos",
    components:{
        ProductItem,BAlert,BButton
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
    },
    methods:{
        ...mapActions('artesania',['eliminarArtesania']),
        eliminarP(product){
            if (this.categoria === "Artesanias") {
                this.eliminarArtesania(product);
            }
        },
        actualizarP(product){
            console.log(product._id);
        },
        anadirP(product){
            console.log(product.nombre);
        }
    }
}
</script>