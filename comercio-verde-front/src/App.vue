<template>
  <div id="app">
    <div id="nav" class="text-start">
      <Head></Head>
      <header class="mt-5">
        <b-link :to="'/'">
          <b-img src="https://comercioverde.herokuapp.com/media/images/logo.png" center></b-img>
        </b-link>
      </header>
      <b-navbar style="background:#f8f8f8" class="mt-5" >
          <b-navbar-nav align="center" >
            <b-nav-item :to="'/'" class="ms-5"> Inicio </b-nav-item>
            <b-nav-item :to="{name:'Artesanias'}" class="mx-auto"> Artesanias </b-nav-item>
          </b-navbar-nav>
      </b-navbar>


    </div>
    <router-view/>
  </div>
</template>

<script>
import {BImg, BLink, BNavbar,BNavbarNav,BNavItem } from 'bootstrap-vue'

import Head from './components/Head.vue'
export default {
  components:{
    Head,BImg,BLink, BNavbar,BNavbarNav,BNavItem
  }
}
</script>