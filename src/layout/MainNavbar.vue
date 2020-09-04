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
          <b class="dropdown-item" v-on:click="showPanel()">Panel de control</b>
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
  
  <modal :show.sync="modals.modal2"  headerClasses="p-0" bodyClasses="p-0" modal-classes="modal-xl" footer-classes="p-0 m-0">
    <panel-user>

    </panel-user>
  </modal>

   <modal :show.sync="modals.modal3"
    footer-classes="justify-content-center"
    type="notice">
    <card type="login" plain>
        <div class="w-25 mx-auto mb-4">
            <img class="w-100" src="img/logokk.png" alt="">
        </div>
        <div class="row">
            <fg-input
                class="no-border input-lg col-10" id="typePassRescueOne"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                placeholder="Nueva contraseña"
                type="password"
                v-model="change.password.value"
                v-on:keyup="verifyRegisterChange"
                :class="change.password.validClass" 
                :value="change.password.validValue" 
                >
            </fg-input>
            <div class="col-2">
                <n-button type="primary" icon round style="margin-top:3px;" v-on:click="typePassRescue()">
                    <i class="fa fa-eye eyesPassword text-white w-100" v-if="typePass == 'pass'"></i>
                    <i class="fa fa-eye-slash eyesPassword text-white w-100" v-else></i>
                </n-button>
            </div>
            <fg-input
                class="no-border input-lg col-10" id="typePassRescueTwo"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                placeholder="Repita su contraseña"
                type="password"
                v-model="change.passwordRep.value"
                v-on:keyup="verifyRegisterChange"
                :class="change.passwordRep.validClass" 
                :value="change.passwordRep.validValue" 
                >
            </fg-input>
            <div class="col-2">
                <n-button type="primary" icon round style="margin-top:3px;" v-on:click="typePassRescue()">
                    <i class="fa fa-eye eyesPassword text-white w-100" v-if="typePass == 'pass'"></i>
                    <i class="fa fa-eye-slash eyesPassword text-white w-100" v-else></i>
                </n-button>
            </div>
        </div>
        <div class="row">
            <div class="text-center col-md-6">
                <button
                class="btn btn-primary btn-round btn-block"
                v-on:click="rescueP"
                >Cambiar contraseña</button
                >
            </div>
        </div>
    </card>
  </modal>
  <modal :show.sync="modals.alert.show"
        :class="modals.alert.type"
        :show-close="false"
        header-classes="justify-content-center"
        type="mini">
      <div v-if="modals.alert.show" data-aos="zoom-in-up" data-aos-duration="800" slot="header" class="modal-profile d-flex justify-content-center align-items-center">
          <i class="now-ui-icons" :class="modals.alert.icon" style="font-size:30px;"></i>
      </div>
      <p v-if="modals.alert.show" data-aos="zoom-in-up" data-aos-duration="800" class="font-weight:700;">{{modals.alert.message}}</p>
      <center>
          <n-button type="default" class="mx-auto" v-on:click="modals.alert.show = false, forget = false" v-if="forget" size="sm">Volver a intentar</n-button>
          <n-button type="primary" v-if="forget" size="sm" @click.native="modals.modal2 = true, forget = false,modals.alert.show = false">¿Olvidaste tu contraseña?</n-button>
      </center>
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
import vueCustomScrollbar from 'vue-custom-scrollbar'
import jwtDecode from 'jwt-decode'
import endpoints, { endpointTarget } from '../../endpoints/endpoints.js'
import axios from 'axios'

import { 
  DropDown, 
  Navbar, 
  NavLink, 
  Modal, 
  Button,
  FormGroupInput as FgInput,
  Card
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
    panelUser,
    FgInput,
    [Button.name]: Button,
    Card
  },
  data(){
    return{
      modals: {
          modal1: false,
          modal2: false,
          modal3: false,
          alert: {
              show: false,
              type: 'modal-danger',
              icon: 'ui-1_simple-remove',
              message: 'Esto es un mensaje de alerta'
          },
      },
      showForm: 'login',
      auth: false,
      userName: '',
      refer: this.$route.query.refer,
      rescue: this.$route.query.code,
      typePass: false,
      change: {
        password: {
          value: '',
          validClass: 'has-danger',
          validValue: 'Error'
        },
        passwordRep: {
          value: '',
          validClass: 'has-danger',
          validValue: 'Error'
        }
      }
    }
  },
  created () {
    AOS.init()
    this.getToken()
    this.getRefer()
    this.getRescue()
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
    getRefer(){
      console.log(this.refer)
      if (this.refer) {
        this.modals.modal1 = true
        this.showForm = 'register'
      }
    },
    getRescue(){
      if (this.rescue) {
        const split = this.rescue.split('?')
        const date = new Date()
        const rest = parseFloat(date.getTime()) - parseFloat(split[0])
        if (rest > 630000) {
          this.modals.alert.type = 'modal-danger'
          this.modals.alert.icon = 'ui-1_simple-remove'
          this.modals.alert.message = 'Su link de recuperación ha expirado.'
          this.modals.alert.show = true
          setTimeout(() => {
              this.modals.alert.show = false
          }, 4000);
        }else{
          this.modals.modal3 = true
        }
      }
    },
    rescueP(){
      if (this.change.password.validValue == 'Error') {
        this.modals.alert.type = 'modal-danger'
        this.modals.alert.icon = 'ui-1_simple-remove'
        this.modals.alert.message = 'Mínimo 8 caracteres.'
        this.modals.alert.show = true
        setTimeout(() => {
            this.modals.alert.show = false
        }, 2500);
      }else if(this.change.passwordRep.validValue == 'Error'){
        this.modals.alert.type = 'modal-danger'
        this.modals.alert.icon = 'ui-1_simple-remove'
        this.modals.alert.message = 'Las contraseñas no coinciden.'
        this.modals.alert.show = true
        setTimeout(() => {
            this.modals.alert.show = false
        }, 2500); 
      }else{
        axios.post(endpoints.endpointTarget+'/clients/rescueChange', {
          password: this.change.password.value,
          code: this.rescue
        })
        .then(res => {
          if (res.data.status == 'ok') {
            this.modals.alert.type = 'modal-success'
            this.modals.alert.icon = 'ui-1_check'
            this.modals.alert.message = 'Contraseña actualizada correctamente.'
            this.modals.alert.show = true
            setTimeout(() => {
                this.modals.alert.show = false
                this.modals.modal3 = false
            }, 3000);
          }else{
            this.modals.alert.type = 'modal-danger'
            this.modals.alert.icon = 'ui-1_simple-remove'
            this.modals.alert.message = 'Errores técnicos.'
            this.modals.alert.show = true
            setTimeout(() => {
                this.modals.alert.show = false
            }, 2500);
          }
          console.log(res)
        })
      }
    },
    verifyRegisterChange(){
      this.change.password.validClass = this.change.password.value.length > 7 ? 'has-success' : 'has-danger'
      this.change.password.validValue = this.change.password.value.length > 7 ? 'Success' : 'Error'
      this.change.passwordRep.validClass = this.change.passwordRep.value == this.change.password.value ? 'has-success' : 'has-danger'
      this.change.passwordRep.validValue = this.change.passwordRep.value == this.change.password.value ? 'Success' : 'Error'
    },
    closeSession(){
      localStorage.removeItem('userToken')
      this.getToken()
    },
    typePassRescue(){
        if (this.typePass == 'pass') {
            document.getElementById('typePassRescueOne').type = 'text';
            document.getElementById('typePassRescueTwo').type = 'text';
            this.typePass = 'text'
        }else{
            document.getElementById('typePassRescueOne').type = 'password';
            document.getElementById('typePassRescueTwo').type = 'password';
            this.typePass = 'pass'
        }
    },   
    showPanel(){
      this.modals.modal2 = true
      this.emitMethod(true)
    },
    emitMethod(status) {
      console.log('aja')
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
