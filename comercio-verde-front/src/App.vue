<template>
  <div id="app">
    <Head></Head>
    <header class="mt-5">
      <b-link :to="'/'">
        <b-img src="https://comercioverde.herokuapp.com/media/images/logo.png" center></b-img>
      </b-link>
    </header>
    <div id="nav" class="text-start">
      <b-navbar style="background:#f8f8f8" class="mt-5 border-top border-bottom" >
        <b-container>
          <b-navbar-nav>
            <b-nav-item :to="'/'" class="ms-5 fs-5"> Inicio </b-nav-item>
            <b-nav-item :to="{name:'Artesanias'}" class="ms-5 fs-5"> Artesanias </b-nav-item>
          </b-navbar-nav>
        </b-container>
      </b-navbar>
    </div>
    <router-view/>
    <footer>
      <Foot></Foot>
    </footer>
  </div>
  
</template>

<script>
import {BImg, BLink, BNavbar,BNavbarNav,BNavItem } from 'bootstrap-vue'

import Head from './components/Head.vue'
import Foot from './components/Foot.vue'
export default {
  components:{
    Head,BImg,BLink, BNavbar,BNavbarNav,BNavItem,Foot
  }
}
</script>