<template>
  <div class="section">
    <div class="container">
      <h2 class="titlesPrada text-center" data-aos="fade-up">NUESTROS CLIENTES DICEN</h2>
      <carousel data-aos="fade-up" :per-page-custom="[[320, 1], [1199, 3]]" :loop="true" :mouse-drag="mouse" :touch-drag="touch">
        <slide>
          <div class="card-review">
            <div>
              <div class="text-review pl-5">
                <p style="font-size: 12px;">Las extraño con todo mi ser, las espero, no he engañado a K&K por nada del mundo, prefiero esperar que hacerme las uñas con quien no confío.</p>
                <span class="span-quote d-flex align-items-center justify-content-center">
                  <i class="fa fa-quote-left"></i>
                </span>
              </div>
              <div class="image-review d-flex align-items-center">
                <div class="user-img" style="background-image: url('img/person_1.jpg')">
                </div>
                <div class="ml-4">
                  <p class="name">jfeernaanda</p>
                  <span class="position">Cliente</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="card-review">
            <div>
              <div class="text-review pl-5">
                <p style="font-size: 12px;">Las más lindas del mundo mundial. No puedo creer las uñas que tenían antes, y ahora... ¡Bellas bellas! </p>
                <span class="span-quote d-flex align-items-center justify-content-center">
                  <i class="fa fa-quote-left"></i>
                </span>
              </div>
              <div class="image-review d-flex align-items-center">
                <div class="user-img" style="background-image: url('img/person_1.jpg')">
                </div>
                <div class="ml-4">
                  <p class="name">rosaplaza</p>
                  <span class="position">Cliente</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="card-review">
            <div>
              <div class="text-review pl-5">
                <p style="font-size: 12px;">Me encanta su tranajo y atención, detallista y delicadas al momento de realizar el servicio. Muchas gracias chicas. </p>
                <span class="span-quote d-flex align-items-center justify-content-center">
                  <i class="fa fa-quote-left"></i>
                </span>
              </div>
              <div class="image-review d-flex align-items-center">
                <div class="user-img" style="background-image: url('img/person_1.jpg')">
                </div>
                <div class="ml-4">
                  <p class="name">Heidy Sosa</p>
                  <span class="position">Cliente</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div class="card-review">
            <div>
              <div class="text-review pl-5">
                <p style="font-size: 12px;">Chicas KKSPA, les deseo todo el éxito del mundo. Dios las bendiga y las colme de vida y salud para que sigan realizando un excelente trabajo. Siempre las recomiendo no solo por su trabajo, sino también por su calidad humana, su atención cuando voy a realizarme manicure. </p>
                <span class="span-quote d-flex align-items-center justify-content-center">
                  <i class="fa fa-quote-left"></i>
                </span>
              </div>
              <div class="image-review d-flex align-items-center">
                <div class="user-img" style="background-image: url('img/person_1.jpg')">
                </div>
                <div class="ml-4">
                  <p class="name">Jairelyn Puerta</p>
                  <span class="position">Cliente</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data(){
    return {
      mouse: false,
      touch: false
    }
  },
  created () {
      AOS.init()
      this.capturewidth()
  },
  methods: {
    capturewidth(){
      if (screen.width > 768) {
        this.mouse = true
        this.touch = false
      }else{
        this.mouse = false
        this.touch = true
      }
    }
  }
};
</script>
