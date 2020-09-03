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
                  <n-button type="default" size="lg" @click="modals.modal1 = true, servicio ='Manicure tradicional', servicio2=' +',servicio3='Pedicure tradicional',precio='15.000', validateLogin()">REGALAR</n-button>
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
                  <n-button type="default" size="lg" @click="modals.modal1 = true, servicio ='Manicure permanente', servicio2=' +',servicio3='Ondulación de pestañas',precio='26.500', validateLogin()">REGALAR</n-button>
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
                  <n-button type="default" size="lg" @click="modals.modal1 = true, servicio ='Manicure permanente', servicio2=' +',servicio3='Pedicure permanente',precio='27.000', validateLogin()">REGALAR</n-button>
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
                  <n-button type="default" size="lg" @click="modals.modal1 = true, servicio ='Manicure permanente', servicio2='',servicio3='',precio='12.000', validateLogin()">REGALAR</n-button>
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
                  <n-button type="default" size="lg" @click="modals.modal1 = true, servicio ='Ondulación con tinte', servicio2='',servicio3='',precio='15.000', validateLogin()">REGALAR</n-button>
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
                  <n-button type="default" size="lg" @click="modals.modal1 = true, servicio ='Ondulación sin tinte', servicio2='', servicio3='', precio='13.000', validateLogin()">REGALAR</n-button>
                </center>
              </template>
            </vue-flip>
          </div>
        </div>
      </div>
      <modal :show.sync="modals.modal1"
              modal-classes="modal-xl" 
              header-classes="justify-content-center">
               <div class="row">
                 <div class="col-sm-6">
                  <template   class="back">
                    <div class="p-5 mt-3" style="background-color:#fbf2f6" >
                        <h4 style="margin-top:-5px;" class="text-center">{{servicio}} <br> {{servicio2}} <br> {{servicio3}}</h4>
                        <h4 style="margin-top:-5px;font-weight:700;color:#000;" class="text-center"><i class="now-ui-icons business_money-coins" style="color:#77a464;"></i> {{precio}}</h4>
                    </div>
                    
                    
                </template>
              </div>
                <div class="col-sm-6">
                  <div v-if="showFormGift == 'giftPay'" >
                    <h5 class="mt-3" style="font-weight: bold;">Resumen de tu compra</h5>
                    <span class="mos">Confirma tu orden y completa el pago</span>
                    <p class="mos2" style="margin-top: -5px;"> {{userName}}, este es el resumen de tu compra:</p>

                    <div class="row">
                      <div class="col-5 mt-3"> <p class=""> <b>Total:</b> $ {{precio}}</p> </div>
                      <div class="col-7">
                        <select class="form-control" v-model="typePay">
                          <option disabled value="">Tipo de pago</option>
                          <option>Efectivo presencial</option>
                          <option>Crédito presencial</option>
                          <option>Débito presencial</option>
                          <option>Transferencia</option>
                        </select>
                      </div>
                    </div>
                    
                    <br><br><br>
                    <div class="cuadritoGift" style="background-color: whitesmoke;padding: 10px;border-radius: 5px;margin-top:-30px;width: 360px;">
                      <h5 style="font-weight: bold;">Tus datos</h5>
                      <p style="line-height: 25px;"> Nombre: {{userName}} <br> Correo: {{email}} <br> Número: {{number}}</p>
                      <button type="button" style="margin-left:220px"  class="btn btn-primary py-2 px-2  proccessGift"> Procesar </button>
                    </div>
                  </div>
                  <login data-aos="zoom-in-up" data-aos-duration="1000" v-else-if="showFormGift == 'login'">
                    <template v-slot:register>
                      <div class="col-md-6">
                          <h6 class="alignText">
                              <span class="link footer-link span-register" v-on:click="showFormGift = 'register'">¿No estás registrado?</span>
                          </h6>
                      </div>
                    </template>
                  </login>
                  <register data-aos="zoom-in-up" data-aos-duration="1000" v-else>
                    <template v-slot:login>
                      <div class="col-md-6">
                          <h6 class="alignText">
                              <span class="link footer-link span-register" v-on:click="showFormGift = 'login'">¿ya tienes una cuenta?</span>
                          </h6>
                      </div>
                    </template>
                  </register>
                </div>
              </div>
       </modal>
  </div>
  
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueFlip from 'vue-flip';
import { Button,Modal } from '@/components';
import register from './register';
import login from './login';
import jwtDecode from 'jwt-decode'
import EventBus from './EventBus'
export default {
    components: {
        [Button.name]: Button,
        'vue-flip': VueFlip,
        Modal,
        register,
        login
    },
    data(){
      return{
          modals:{
            modal1:false
          },
          showFormGift: 'login',
          servicio:'',
          servicio2:'',
          servicio3:'',
          precio:'',
          typePay:'',
          userName:'',
          number:'',
          email:''
        }
    },
    created () {
        AOS.init()
        this.validateLogin()
    },
    methods:{
      validateLogin(){
        const token = localStorage.userToken
        if (token) {
          this.showFormGift = 'giftPay'
          const decoded = jwtDecode(token)
          console.log(decoded)
          this.userName = decoded.name
          this.number = decoded.phone
          this.email = decoded.mail
        }else{
          this.showFormGift = 'login'
          this.userName = ''
        }
      }
    },
    mounted() {
      EventBus.$on('loggedin', status => {
        this.validateLogin()
      })
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
