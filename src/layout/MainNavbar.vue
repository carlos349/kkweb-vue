<template>
<div>

  <navbar
    position="fixed"
    type="backwhite"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
    style="height:70px;"
  >
    <template>
      <router-link class="navbar-brand" to="/"> 
          <a
          class="nav-link"
          href="https://www.creative-tim.com/product/vue-now-ui-kit"
          target="_blank"
          >
          <img style="width:18%;display:inline-block;margin-right:10px;" src="img/logokk.png" alt="">
          <p style="display:inline-block;color:#605b56;font-family: 'Prata', serif;font-weight:400;font-size:15px;">K&K PRETTY NAILS</p>
        </a>
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item color-a">
        <router-link to="/" class="nav-link"> 
          <p>Inicio</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/nosotros" class="nav-link"> 
            <p>Nosotros</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/servicios" class="nav-link"> 
            <p>Servicios</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/galeria" class="nav-link"> 
            <p>Galería</p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contacto" class="nav-link">
            <p>Contacto</p>
        </router-link>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://www.creative-tim.com/product/vue-now-ui-kit"
          target="_blank"
        >
          <p>Agendar</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          v-on:click="modals.notice = true"
        >
          <p>Ingresar</p>
        </a>
      </li>
    </template>
  </navbar>
  <modal :show.sync="modals.notice"
    footer-classes="justify-content-center"
    type="notice">
    <h5 slot="header" class="modal-title mb-4"></h5>
    <login data-aos="zoom-in-up" data-aos-duration="1000" v-if="showForm == 'login'">
      <template v-slot:register>
        <div class="pull-left">
            <h6>
                <span class="link footer-link span-register" v-on:click="showForm = 'register'">¿No estás registrado?</span>
            </h6>
        </div>
      </template>
    </login>
    <register data-aos="zoom-in-up" data-aos-duration="1000" v-else>
      <template v-slot:login>
        <div class="pull-left">
            <h6>
                <span class="link footer-link span-register" v-on:click="showForm = 'login'">¿ya tienes una cuenta?</span>
            </h6>
        </div>
      </template>
    </register>
  </modal>
</div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import login from '../pages/components/login'
import register from '../pages/components/register'
import { DropDown, Navbar, NavLink, Modal } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    [Popover.name]: Popover,
    login,
    Modal,
    register
  },
  data(){
    return{
      modals: {
          notice: false
      },
      showForm: 'login'
    }
  },
  created () {
    AOS.init()
  }
};
</script>

<style scoped></style>
