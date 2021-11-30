<template>
    <b-card
        header-bg-variant="Light"
        header-text-variant="muted"
        header-border-variant="border-0"
        :header="product.categoria"
        :title="product.nombre"
        :img-src="product.img"
        :img-alt="product.nombre"
        body-bg-variant="Secondary"
        border-variant="success"
        class="h-100"
    >
    
        <p>{{ product.descripcion }}</p>
        <p class="text-start">Col${{ product.precio }}</p>
        <b-card-footer style="background: #fff" class="mt-auto border-top-0">
            <b-row class="text-center">
                <b-col cols="2">
                    <b-button @click="$emit('clickBtn',product)" class="mt-3 btn-sm" variant="danger">E</b-button>
                </b-col>
                <b-col cols="2">
                    <b-button @click="$emit('clickBtn1',product)" class="mt-3 btn-sm" variant="primary">A</b-button>
                </b-col>
                <b-col class="ms-5">
                    <b-button @click="$emit('clickBtn2',product)" class="mt-3" variant="success">Añadir</b-button>
                </b-col>
            </b-row>
        </b-card-footer>
   
    </b-card>
</template>


<script>

import { BCard,BButton,BCardFooter  } from 'bootstrap-vue'

export default {
    name:"ProductItem",
    props:{
        product:{
            type:Object,
            required:true
        }
    },
    components:{
        BCard,BButton,BCardFooter
    }
}
</script>