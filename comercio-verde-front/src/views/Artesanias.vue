<template>
<div>
    <product-list
        :productos="artesanias"
        :categoria="'Artesanias'"
        @anadirproduct="anadir"
    ></product-list>
    
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex';

import ProductList from '@/components/ProductList.vue'


export default {
    name:"Artesanias",
    components:{
        ProductList
    },
    computed:{
        ...mapState('artesania',['artesanias'])
    },
    created(){
        this.fetchArtesanias();
    },
    methods:{
        ...mapActions('artesania',['fetchArtesanias']),
        anadir(){
            this.$router.push({
                name: 'Crear'
            })
        }
    }
}
</script>