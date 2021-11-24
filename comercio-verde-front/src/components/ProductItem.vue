<template>
    <b-card
        header-bg-variant="Light"
        header-text-variant="Secondary"
        :header="product.categoria"
        :title="product.nombre"
        :img-src="product.img"
        :img-alt="product.nombre"
        body-bg-variant="Secondary"
        border-variant="success"
    >
        <p>{{ product.descripcion }}</p>
        <p class="text-start">Col${{ product.precio }}</p>
        <div>
        <b-row>
            <b-col cols="3">
                <b-button variant="danger">E</b-button>
            </b-col>
            <b-col cols="3">
                <b-button variant="primary">A</b-button>
            </b-col>
            <b-col>
                <b-button class="me-3" variant="success">Añ</b-button>
            </b-col>
        </b-row>
        </div>
            
            
            
        
    </b-card>


</template>


<script>

import { BCard,BButton  } from 'bootstrap-vue'

export default {
    name:"ProductItem",
    props:{
        product:{
            type:Object,
            required:true
        }
    },
    components:{
        BCard,BButton
    }
}
</script>