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
          <h3 class="indexTitle w-100" style="display:inline-block;color:#605B56;font-family: 'Prata', serif;font-weight:600;letter-spacing:.2em;">K&K SPA</h3>
         <a href="http://kkspa.syswa.net/#/agendamientoCliente" target="_blank"><n-button type="primary" size="lg">AGENDAR</n-button></a>  <router-link to="/galeria"><n-button type="primary" size="lg" simple>GALERÍA</n-button></router-link> 
        </div>
      </div>
    </div>
    <div class="page-header page-header-small">
        <parallax class="page-header-image" style="background-image: url('img/bg_3.jpg');margin-top:-260px;background-position: 90% center;"></parallax>
        <div class="container">
          <div class="row mt-4">
            <div class="col-md-5">
              <div data-aos="fade-up">
                <span class="span-numbers">2 </span><span class="span-text">Año</span><span class="span-numbers"> 9</span><span class="span-text"> Meses</span><span class="span-numbers"> 1</span><span class="span-text"> Día(s)</span><br>
                <p class="textp-color">Tiempo de servicio</p>
              </div>
            </div>
            <div class="col-md-4">
              <div data-aos="fade-up">
                <span class="span-numbers">11.400</span><br>
                <p class="textp-color">Seguidores de instagram</p>
              </div>
            </div>
            <div class="col-md-3">
              <div data-aos="fade-up">
                <span class="span-numbers">1.400</span><br>
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
                <img style="width: 10rem;height:10rem;" class="rounded-circle img-raised mx-auto" src="img/gelX.jpg" alt="">
              </center>
              <h5 class="mt-3 text-center">Gel X</h5>
              <p class="text-center" style="font-size:12px;">Proximamente.</p>
          </div>
        </div>
      </div>
    </div>
    <promotion-section></promotion-section>
    <gift-section></gift-section>
    <clients-section></clients-section>
    <div class="section" style="background-color:#fafafa;">
      <div class="container">
        <h2 data-aos="fade-up" class="titlesPrada mt-3 text-center">KKSPA EN YOUTUBE</h2>
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
import endpoints from '../../endpoints/endpoints.js'
import axios from 'axios'
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
      followers:'',
      years: '',
      mounths: '',
      days: '',
      clients: '',
      configHeader: {
        headers:{
          "x-database-connect": endpoints.database
        }
      }
    }
  },
  created () {
    AOS.init()
    // this.getFollows()
    this.getDays()
    this.getClients()
  },
  methods:{
    // getFollows(){
    //   axios.get('https://www.instagram.com/kkprettynails/?__a=1')
    //   .then(res => {
    //     this.followers = new Intl.NumberFormat().format(res.data.graphql.user.edge_followed_by.count)
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // },
    // getClients(){
    //   axios.get(endpoints.endpointTarget+'/clients/countClientsKK', this.configHeader)
    //   .then(res => {
    //     this.clients = res.data.data
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // },
    getDays(){
      const f1 = '10/01/2019';
      const f2 = this.formatDate(new Date())
      const countDays = this.restaFechas(f1, f2)
      const count = (countDays / 30) / 12
      const string = count.toString()
      console.log("Streing")
      console.log(countDays)
      this.years = string.split('.')[0]
      this.mounths = string.split('.')[1][0]
      this.days = string.split('.')[1][1]
      console.log("mes")
      console.log(mounths)
    },
    restaFechas(f1, f2){
      var aFecha1 = f1.split('/');
      var aFecha2 = f2.split('/');
      var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
      var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
      var dif = fFecha2 - fFecha1;
      var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
      return dias;
    },
    formatDate(dateF) {
      let date = new Date(dateF)
      if (date.getDate() < 10) {
          var one = "0" + date.getDate()
      }
      else {
          var one = date.getDate()
      }
      if (date.getMonth() < 10 ) {
          var two = "0" + date.getMonth()
      }
      else{
          var two = date.getMonth()
      }   
			return one+"/"+two+"/"+date.getFullYear()
    },
  }
};
</script>
