<template>
<div>

  <navbar
    position="fixed"
    type="backwhite"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto mr-2"
    id="heightResponsive"
  >
    <template>
      <router-link class="navbar-brand" to="/"> 
          <a
          class="nav-link"
          href="https://www.creative-tim.com/product/vue-now-ui-kit"
          target="_blank"
          >
          <img style="width:85px;display:inline-block;margin-right:10px;" src="img/logokk.png" alt="">
          <p class="responsiveLetterHeader">K&K PRETTY NAILS</p>
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
      <li class="nav-item" v-if="auth">
        <drop-down tag="li" class="nav-item" :title="userName">
          <b class="dropdown-item" v-on:click="modals.modal2 = true, emitMethod(true)">Panel de control</b>
          <b class="dropdown-item" v-on:click="closeSession">Cerrar sesión</b>
        </drop-down>
      </li>
      <li style="cursor:pointer" class="nav-item" v-else>
        <a
          class="nav-link"
          v-on:click="modals.modal1 = true"
        >
          <p>Ingresar</p>
        </a>
      </li>
    </template>
  </navbar>
  <modal :show.sync="modals.modal1"
    footer-classes="justify-content-center"
    type="notice">
    <login data-aos="zoom-in-up" data-aos-duration="1000" v-if="showForm == 'login'">
      <template v-slot:register>
        <div class="col-md-6">
            <h6 class="alignText">
                <span class="link footer-link span-register" v-on:click="showForm = 'register'">¿No estás registrado?</span>
            </h6>
        </div>
      </template>
    </login>
    <register data-aos="zoom-in-up" data-aos-duration="1000" v-else>
      <template v-slot:login>
        <div class="col-md-6">
            <h6 class="alignText">
                <span class="link footer-link span-register" v-on:click="showForm = 'login'">¿ya tienes una cuenta?</span>
            </h6>
        </div>
      </template>
    </register>
  </modal>

  <modal :show.sync="modals.modal2" :show-close="false" headerClasses="p-0" bodyClasses="p-0" modal-classes="modal-xl" footer-classes="p-0 m-0">
    <panel-user>

    </panel-user>
  </modal>
</div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import login from '../pages/components/login'
import register from '../pages/components/register'
import panelUser from '../pages/components/panelUser'
import EventBus from '../pages/components/EventBus'
import jwtDecode from 'jwt-decode'
import { 
  DropDown, 
  Navbar, 
  NavLink, 
  Modal, 
  Button 
} from '@/components';
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
    DropDown,
    login,
    Modal,
    register,
    panelUser
  },
  data(){
    return{
      modals: {
          modal1: false,
          modal2: false
      },
      showForm: 'login',
      auth: false,
      userName: '',
      

    }
  },
  created () {
    AOS.init()
    this.getToken()
  },
  methods: {
    getToken(){
      const token = localStorage.userToken
      if (token) {
        const decoded = jwtDecode(token)
        this.userName = decoded.name
        this.auth = true
      }else{
        this.auth = false
        this.userName = ''
      }
    },
    closeSession(){
      localStorage.removeItem('userToken')
      this.getToken()
    },
    emitMethod(status) {
      EventBus.$emit('panShow', status)
    }
  },
  mounted() {
    EventBus.$on('loggedin', status => {
      this.getToken()
      this.showForm = 'login'
      this.modals.modal1 = false
    })
  }
};
</script>

<style scoped></style>
