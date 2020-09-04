<template>
  <div>
    <div class="page-header clear-filter">
      <parallax
        class="page-header-image"
        style="background-image:url('img/bg_1.jpg');"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <img class="n-logo mt-2" src="img/logokk.png" alt="" />
          <hr style="border-top:solid 2px #605B56;">
          <h3 class="indexTitle" style="display:inline-block;color:#605B56;font-family: 'Prata', serif;font-weight:600;letter-spacing:.2em;">K&KPRETTYNAILS.COM</h3>
         <a href="https://kkprettynails.syswa.net/#/agendamientoCliente" target="_blank"><n-button type="primary" size="lg">AGENDAR</n-button></a>  <router-link to="/galeria"><n-button type="primary" size="lg" simple>GALERÍA</n-button></router-link> 
        </div>
      </div>
    </div>
    <div class="page-header page-header-small">
        <parallax class="page-header-image" style="background-image: url('img/bg_3.jpg');margin-top:-260px;background-position: 90% center;"></parallax>
        <div class="container">
          <div class="row mt-4">
            <div class="col-md-5">
              <div data-aos="fade-up">
                <span class="span-numbers">1 </span><span class="span-text">Año</span><span class="span-numbers"> 3</span><span class="span-text"> Meses</span><span class="span-numbers"> 10</span><span class="span-text"> Días</span><br>
                <p class="textp-color">Tiempo se servicio</p>
              </div>
            </div>
            <div class="col-md-4">
              <div data-aos="fade-up">
                <span class="span-numbers">1637</span><br>
                <p class="textp-color">Seguidores de instagram</p>
              </div>
            </div>
            <div class="col-md-3">
              <div data-aos="fade-up">
                <span class="span-numbers">7</span><br>
                <p class="textp-color">Clientes</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    <about-section :show-on-scroll="500"></about-section>
    <div class="section" style="background-color:#fafafa;">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3" data-aos="fade-up">
              <center>
                <img style="width: 10rem;height:10rem;" class="rounded-circle img-raised" src="img/manicure.jpeg" alt="">
              </center>
              <h5 class="mt-3 text-center">Manicure</h5>
              <p class="text-center" style="font-size:12px;">Cuidado y salud de tus manos.</p>
          </div>
          <div class="col-md-3" data-aos="fade-up">
              <center>
                <img style="width: 10rem;height:10rem;" class="rounded-circle img-raised mx-auto" src="img/esmalte.jpeg" alt="">
              </center>
              <h5 class="mt-3 text-center">Esculpidos en gel</h5>
              <center>
                <p class="text-center w-75" style="font-size:12px;">Además de embellecer tus manos, es un tratamiento para evitar onicofagia.</p>
              </center>
          </div>
          <div class="col-md-3" data-aos="fade-up">
              <center>
                <img style="width: 10rem;height:10rem;" class="rounded-circle img-raised mx-auto" src="img/pedicure.jpeg" alt="">
              </center>
              <h5 class="mt-3 text-center">Pedicure</h5>
              <p class="text-center" style="font-size:12px;">Embellecimiento de tus pies.</p>
          </div>
          <div class="col-md-3" data-aos="fade-up">
              <center>
                <img style="width: 10rem;height:10rem;" class="rounded-circle img-raised mx-auto" src="img/ibx.jpeg" alt="">
              </center>
              <h5 class="mt-3 text-center">IBX</h5>
              <p class="text-center" style="font-size:12px;">Tratamiento para endurecer tus uñas.</p>
          </div>
        </div>
      </div>
    </div>
    <promotion-section></promotion-section>
    <gift-section></gift-section>
    <clients-section></clients-section>
    <div class="section" style="background-color:#fafafa;">
      <div class="container">
        <h2 data-aos="fade-up" class="titlesPrada mt-3 text-center">KKPRETTYNAILS EN YOUTUBE</h2>
        <div class="row">
          <div class="col-md-6 px-5 py-2">
            <iframe data-aos="fade-up" width="100%" height="315" src="https://www.youtube.com/embed/BNQVe-EgD9w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div data-aos="fade-up" class="text-blog p-4 float-right d-block">
              <div class="d-flex align-items-center pt-2 mb-4">
                <div class="one">
                  <span class="day">
                    6
                  </span>
                </div>
                <div class="two">
                  <span class="yr">
                    2020
                  </span>
                  <span class="mos">
                    Julio
                  </span>
                </div>
              </div>
              <h3>Diseño a mano alzada | Esmalte permanente.</h3>
              <p>En esta oportunidad les mostramos como realizar un diseño a mano alzada en uña con esmalte permanente.</p>
            </div>
          </div>
          <div class="col-md-6 px-5 py-2">
            <iframe data-aos="fade-up" width="100%" height="315" src="https://www.youtube.com/embed/BNQVe-EgD9w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div data-aos="fade-up" class="text-blog p-4 float-right d-block">
              <div class="d-flex align-items-center pt-2 mb-4">
                <div class="one">
                  <span class="day">
                    6
                  </span>
                </div>
                <div class="two">
                  <span class="yr">
                    2020
                  </span>
                  <span class="mos">
                    Julio
                  </span>
                </div>
              </div>
              <h3>Diseño a mano alzada | Esmalte permanente.</h3>
              <p>En esta oportunidad les mostramos como realizar un diseño a mano alzada en uña con esmalte permanente.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import aboutSection from './components/aboutSection';
import promotionSection from './components/promotionSection';
import giftSection from './components/giftSection';
import clientsSection from './components/clientsSection';
import { Parallax } from '@/components';
import {
  Button,
} from '@/components';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    aboutSection,
    promotionSection,
    giftSection,
    clientsSection,
    [Button.name]: Button
  },
  data(){
    return {
      followers:''
    }
  },
  created () {
    AOS.init()
    this.follows()
  },
  methods:{
    follows(){
      
      fetch('https://www.instagram.com/kkprettynails/?__a=1') 
        .then(function(response) {
          return response.json();
        })
        .catch(error => {
          console.log(error)
         
        })
        .then(function(myJson) {
          
          
        })
    }
  }
};
</script>
<style></style>
