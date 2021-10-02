<template>
  <div class="section">
    <div class="container">
        <h2 class="titlesPrada text-center" data-aos="fade-up">PROMOCIONES</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="w-75 mx-auto pb-4">
              <center>
                <img style="width: 12rem;height:12rem;" class="rounded-circle mt-2" src="img/offer-deal-1.jpg" alt="">
                <h3 class="mt-3">Primer servicio</h3>                
                <p >
                  Si quieres agendar con nosotros y este es el primer servicio tendrás automáticamente un 10% de descuento en tu primera atención, con excepción de los servicios tradicionales.
                </p>
                <a href="http://kkprettynails.syswa.net/#/agendamientoCliente" target="_blank"> <n-button data-aos="fade-up" type="default" size="lg">AGENDA TU SERVICIO</n-button></a>
              </center>
            </div>
          </div>
          <div class="col-md-4" style="background-color:#faf7ef;">
            <div class="w-75 mx-auto pb-4">
              <center>
                <img style="width: 12rem;height:12rem;" class="rounded-circle mt-2" src="img/offer-deal-2.jpg" alt="">
                <h3 class="mt-3">Recomendaciones</h3>
                <p style="margin-bottom:44px !important;">
                  Premiamos tu fidelidad y recomendación con un 15% por cada persona que recomiendes en todos los servicios con excepción de los servicios tradicionales.
                </p>
                <!-- <n-button data-aos="fade-up" type="default" size="lg" v-on:click="emitMethod()">LINK DE REFERIDO</n-button> -->
                <n-button data-aos="fade-up" type="default" size="lg" disabled>DESHABILITADO</n-button>
              </center>
            </div>
          </div>
          <div class="col-md-4">
            <div class="w-75 mx-auto pb-4">
              <center>
                <img style="width: 12rem;height:12rem;" class="rounded-circle mt-2" src="img/offer-deal-3.jpg" alt="">
                <h3 class="mt-3">Promoción del mes</h3>
                <p style="margin-bottom:155px !important;">
                  Próximamente
                </p>
                <n-button data-aos="fade-up" type="default" size="lg" disabled>DESHABILITADO</n-button>
              </center>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button } from '@/components';
import EventBus from './EventBus'
export default {
  components: {
    [Button.name]: Button
  },
  created () {
    AOS.init()
  },
  methods: {
    emitMethod(){
      EventBus.$emit('haveRefer', status)
    }
  }
};
</script>
