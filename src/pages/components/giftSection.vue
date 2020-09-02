<template>
  <div class="section" style="background-color:#fafafa;">
    <div class="container">
        <h2 class="titlesPrada text-center" data-aos="fade-up">GIFT CARDS</h2>
        <div class="row">
          <div class="col-md-4 mt-2" data-aos="fade-up">
            <vue-flip active-hover width="100%" height="40vh">
              <template v-slot:front class="front">
                <p style="color:transparent;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis delectus a natus eos magni velit nobis eveniet, earum voluptate! Animi doloremque voluptatem ut voluptatum atque a architecto quidem! Inventore?</p>
              </template>
              <template v-slot:back class="back">
                <h4 style="margin-top:-5px;" class="text-center">Manicure tradicional <br>+<br>Pedicure tradicional</h4>
                <h4 style="margin-top:-5px;font-weight:700;color:#000;" class="text-center"><i class="now-ui-icons business_money-coins" style="color:#77a464;"></i> 15.000</h4>
                <center>
                  <n-button type="default" size="lg">REGALAR</n-button>
                </center>
              </template>
            </vue-flip>
          </div>
          <div class="col-md-4 mt-2" data-aos="fade-up">
            <vue-flip active-hover width="100%" height="40vh">
              <template v-slot:front class="front">
                <p style="color:transparent;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis delectus a natus eos magni velit nobis eveniet, earum voluptate! Animi doloremque voluptatem ut voluptatum atque a architecto quidem! Inventore?</p>
              </template>
              <template v-slot:back class="back">
                <h4 style="margin-top:-5px;" class="text-center">Manicure permanente <br>+<br>Ondulación de pestañas</h4>
                <h4 style="margin-top:-5px;font-weight:700;color:#000;" class="text-center"><i class="now-ui-icons business_money-coins" style="color:#77a464;"></i> 26.500</h4>
                <center>
                  <n-button type="default" size="lg">REGALAR</n-button>
                </center>
              </template>
            </vue-flip>
          </div>
          <div class="col-md-4 mt-2" data-aos="fade-up">
            <vue-flip active-hover width="100%" height="40vh">
              <template v-slot:front class="front">
                <p style="color:transparent;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis delectus a natus eos magni velit nobis eveniet, earum voluptate! Animi doloremque voluptatem ut voluptatum atque a architecto quidem! Inventore?</p>
              </template>
              <template v-slot:back class="back">
                <h4 style="margin-top:-5px;" class="text-center">Manicure permanente <br>+<br>Pedicure permanente</h4>
                <h4 style="margin-top:-5px;font-weight:700;color:#000;" class="text-center"><i class="now-ui-icons business_money-coins" style="color:#77a464;"></i> 27.000</h4>
                <center>
                  <n-button type="default" size="lg">REGALAR</n-button>
                </center>
              </template>
            </vue-flip>
          </div>
          <div class="col-md-4 mt-2" data-aos="fade-up">
            <vue-flip active-hover width="100%" height="40vh">
              <template v-slot:front class="front">
                <p style="color:transparent;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis delectus a natus eos magni velit nobis eveniet, earum voluptate! Animi doloremque voluptatem ut voluptatum atque a architecto quidem! Inventore?</p>
              </template>
              <template v-slot:back class="back">
                <h4 style="margin-top:20px;" class="text-center">Manicure permanente</h4>
                <h4 style="margin-top:-5px;font-weight:700;color:#000;" class="text-center"><i class="now-ui-icons business_money-coins" style="color:#77a464;"></i> 12.000</h4>
                <center>
                  <n-button type="default" size="lg">REGALAR</n-button>
                </center>
              </template>
            </vue-flip>
          </div>
          <div class="col-md-4 mt-2" data-aos="fade-up">
            <vue-flip active-hover width="100%" height="40vh">
              <template v-slot:front class="front">
                <p style="color:transparent;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis delectus a natus eos magni velit nobis eveniet, earum voluptate! Animi doloremque voluptatem ut voluptatum atque a architecto quidem! Inventore?</p>
              </template>
              <template v-slot:back class="back">
                <h4 style="margin-top:20px;" class="text-center">Ondulación con tinte</h4>
                <h4 style="margin-top:-5px;font-weight:700;color:#000;" class="text-center"><i class="now-ui-icons business_money-coins" style="color:#77a464;"></i> 15.000</h4>
                <center>
                  <n-button type="default" size="lg">REGALAR</n-button>
                </center>
              </template>
            </vue-flip>
          </div>
          <div class="col-md-4 mt-2" data-aos="fade-up">
            <vue-flip active-hover width="100%" height="40vh">
              <template v-slot:front class="front">
                <p style="color:transparent;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et omnis delectus a natus eos magni velit nobis eveniet, earum voluptate! Animi doloremque voluptatem ut voluptatum atque a architecto quidem! Inventore?</p>
              </template>
              <template v-slot:back class="back">
                <h4 style="margin-top:20px;" class="text-center">Ondulación sin tinte</h4>
                <h4 style="margin-top:-5px;font-weight:700;color:#000;" class="text-center"><i class="now-ui-icons business_money-coins" style="color:#77a464;"></i> 13.000</h4>
                <center>
                  <n-button type="default" size="lg">REGALAR</n-button>
                </center>
              </template>
            </vue-flip>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueFlip from 'vue-flip';
import { Button } from '@/components';

export default {
    components: {
        [Button.name]: Button,
        'vue-flip': VueFlip
    },
    created () {
        AOS.init()
    }
};
</script>
<style>
.front{
  background-image:url('../../../public/img/gift.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  height: 220px;
  width: 100%;
  box-shadow: 10px 10px 27px -5px rgba(0,0,0,0.54);

}
.back{
  background-color: #fbf2f6;
  height: 220px;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  box-shadow: 10px 10px 27px -5px rgba(0,0,0,0.54);

}
</style>
