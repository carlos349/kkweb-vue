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
              modal-classes="modal-lg" 
              header-classes="justify-content-center">
               <div class="row">
                 <div class="col-sm-6 mt-5">
                  <template   class="back">
                    <div class="p-5 mt-5" style="background-color:#fbf2f6" >
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
                      <div class="col-5 mt-3">  <h5 style="font-weight: bold;">Total: $ {{precio}}</h5> </div>
                      <div class="col-7">
                        <select class="form-control pt-1 mt-2 pb-1" style="height:70%;" v-model="typePay">
                          <option disabled value="">Tipo de pago</option>
                          <option>Efectivo presencial</option>
                          <option>Crédito presencial</option>
                          <option>Débito presencial</option>
                          <option>Transferencia</option>
                        </select>
                      </div>
                    </div>
                    
                    <br><br><br>
                    <center>
                      <div class="cuadritoGift w-100 text-left" style="background-color: whitesmoke;padding: 10px;border-radius: 5px;margin-top:-30px;">
                        <h5 style="font-weight: bold;">Tus datos</h5>
                        <p style="line-height: 25px;"> Nombre: {{userName}} <br> Correo: {{email}} <br> Número: {{number}}</p>
                        <button type="button" style="margin-left:170px" v-on:click="validateType()" class="btn btn-primary py-2 px-2  proccessGift w-50"> Procesar </button>
                      </div>
                    </center>
                    
                  </div>
                  <login data-aos="zoom-in-up" data-aos-duration="1000" v-else-if="showFormGift == 'login'">
                    <template v-slot:register>
                      <div class="col-7">
                          <h6 class="alignTextGift">
                              <span class="link footer-link span-register" v-on:click="showFormGift = 'register'">¿No estás registrado?</span>
                          </h6>
                      </div>
                    </template>
                  </login>
                  <register data-aos="zoom-in-up" data-aos-duration="1000" v-else>
                    <template v-slot:login>
                      <div class="col-7">
                          <h6 class="alignTextGift">
                              <span class="link footer-link span-register" v-on:click="showFormGift = 'login'">¿ya tienes una cuenta?</span>
                          </h6>
                      </div>
                    </template>
                  </register>
                </div>
              </div>
       </modal>

       <modal :show.sync="modals.modal2" headerClasses="justify-content-center">
        <h4 slot="header" class="title title-up">Detalles de tu compra</h4>
        <p> 
          <b>Gift card:</b> {{servicio}} {{servicio2}} {{servicio3}} <br>
          <b>Precio: $ {{precio}}</b>  <br>
          <b>Tipo de pago:</b> {{typePay}}
        </p>
        <template slot="footer">
          <n-button type="success" size="lg" v-on:click="createOrder()">Procesar</n-button>
          <n-button size="lg" type="danger" @click.native="modals.modal2 = false">Cancelar</n-button>
        </template>
      </modal>

      <modal :show.sync="modals.modal3"
             class="modal-danger"
             :show-close="false"
             header-classes="justify-content-center"
             type="mini">
        <div slot="header" class="modal-profile d-flex justify-content-center align-items-center">
          <i class="now-ui-icons ui-1_simple-remove"></i>
        </div>
        <p>Debe seleccionar un tipo de pago</p>
        <template slot="footer">
          
        </template>
      </modal>

      <modal :show.sync="modals.modal4"
             class="modal-success"
             :show-close="false"
             header-classes="justify-content-center"
             type="mini">
        <div slot="header" class="modal-profile d-flex justify-content-center align-items-center">
          <i class="now-ui-icons ui-1_check"></i>
        </div>
        <p  >¡Listo! <br> Revisa tu correo para seguir los pasos.</p>
        <template slot="footer">
          <n-button type="primary" @click.native="modals.modal4 = false,modals.modal2 = false, modals.modal1 = false, modals.modal3= false">Entendido</n-button>
        </template>
      </modal>
      
  </div>
  
</template>
<script>
import AOS from 'aos'
import endpoints from '../../../endpoints/endpoints.js'
import 'aos/dist/aos.css'
import VueFlip from 'vue-flip';
import { Button,Modal } from '@/components';
import register from './register';
import login from './login';
import jwtDecode from 'jwt-decode'
import EventBus from './EventBus'
import axios from 'axios'

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
            modal1:false,
            modal2:false,
            modal3:false,
            modal4:false
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
      },
      createOrder(){
        console.log("En serio?")
        axios.post(endpoints.endpointTarget+'/pedidos', { 
          cliente:this.userName,
          identidad:this.email,
          tipoPago:this.typePay,
          articulo: this.servicio + " " + this.servicio2 + " " +  this.servicio3,
          total: "$ "+this.precio,
          number: this.number
        })
        .then(res => {
            if (res.data.status == 'Registrado') {
                this.modals.modal4 = true
                axios.post(endpoints.endpointTarget+'/notifications', {
                    userName:'El cliente: '+ this.userName,
                    userImage:'',
                    detail:'Creo un Pedido',
                    link: 'pedidos'
                })
                .then(res => {
                    var socket = io(endpoints.endpointTarget)
                    socket.emit('sendNotification', res.data)
                })
                var socket1 = io(endpoints.endpointTarget)
                var sockData = {
                  userName: '',
                  userImage: '',
                  detail: '',
                  link: '',
                  date: new Date()
                }
                socket1.emit('sendNotification', sockData )
                
            }else{
                
                console.log(res)
            }
        })
      },

      validateType(){
        if (this.typePay != '') {
          this.modals.modal2 = true
        }
        else{
          this.modals.modal3 = true
          setTimeout(() => {
            this.modals.modal3 = false
          }, 2000);
          
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
