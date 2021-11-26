<template>
<div style="background: #383838" class="mt-5">
    <b-row class="text-center">
        <b-col cols="4" class="mt-2">
            <b-img src="https://comercioverde.herokuapp.com/media/images/footer-logo.png"></b-img>
            <p class="text-light text-start ms-3">Desarrollamos el campo colombiano, compartiendo el sabor de nuestra tierra y la mejor calidad de alimentos, productos y derivados orgánicos.</p>
        </b-col>
        <b-col cols="4" class="mt-2">
            <h2 class="text-light">¿Donde estamos?</h2>
            <p class="text-light">
                <b-icon icon="map" class="me-1"></b-icon>
                <strong>Comercio Verde</strong>,Siempre fresco, Colombia
            </p>
            <p class="text-light">
                <b-icon icon="telephone" class="me-auto"></b-icon>
                Telefono
            </p>
            <p class="text-light">
                <b-icon icon="chat-left-dots" class="me-auto"></b-icon>
                email
            </p>
        </b-col>
    </b-row>
</div>

</template>

<script>
import {BImg, BLink } from 'bootstrap-vue'

export default {
    name:"Foot",
    components:{
        BLink,BImg
    }
}
</script>