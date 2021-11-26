<template>
  <div style="background: #90c322">
      <b-container>
        <b-nav>
            <b-nav-text class="text-white me-5"><i> Apoyamos el desarrollo del campo colombiano. <strong>Comercio Verde</strong> </i> </b-nav-text>
            <b-nav-item :to="{name:'Artesanias'}" class="ms-auto"> 
                <b-icon icon="cart4" class="link"></b-icon>
            </b-nav-item>
        </b-nav>
      </b-container>
  </div>
</template>

<style>
.link{
    color: white;
}

</style>

<script>
import { BNav, BNavItem,BNavText } from 'bootstrap-vue'
export default {
    name: "Head",
    components:{
        BNav, BNavItem, BNavText
    }
}
</script>

