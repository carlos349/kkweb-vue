<template>
  <div class="section" style="background-image: url('img/intro.jpg');margin-top:-120px;">
    <div class="container">
        <div class="row justify-content-end">
          <div class="col-md-6">
            <h2 data-aos="fade-up" class="opacity-cero titlesPrada mt-3">K&K PRETTY NAILS</h2>
            <p data-aos="fade-up" class="textparra-color" >
            Lo que comenzó como un hobby se fue convirtiendo en una profesión para la fundadora Katriel Capacho por lo que el 24 de abril de 2019 decidimos llevar esto al siguiente nivel creando un local en el cual nos dedicamos no sólo al embellecimiento de las uñas sino al cuidado de las mismas.
            </p>
            <n-button data-aos="fade-up" type="primary" size="lg">IR A NOSOTROS</n-button>
            <p data-aos="fade-up" class="items-about mt-5"><i class="now-ui-icons ui-1_check" style="margin-right:10px;"></i> Perfeccionismo </p>
            <p data-aos="fade-up" class="items-about"><i class="now-ui-icons ui-1_check" style="margin-right:10px;"></i> Empatía </p>
            <p data-aos="fade-up" class="items-about"><i class="now-ui-icons ui-1_check" style="margin-right:10px;"></i> Amabilidad </p>
            <p data-aos="fade-up" class="items-about"><i class="now-ui-icons ui-1_check" style="margin-right:10px;"></i> Profesionalismo </p>
            <p data-aos="fade-up" class="items-about"><i class="now-ui-icons ui-1_check" style="margin-right:10px;"></i> Eficacia </p>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Button } from '@/components';

export default {
    components: {
        [Button.name]: Button
    },
    created () {
        AOS.init()
    }
};
</script>
