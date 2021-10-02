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
                    <p class="mos2" style="margin-top: -5px;">  Este es el resumen de tu compra:</p>

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
                    
                    <br>
                    <center>
                      <div class="cuadritoGift w-100 text-left px-2 py-1" style="background-color: whitesmoke;border-radius: 5px;margin-top:-30px;">
                        <h5 style="font-weight: bold;">Tus datos</h5>
                        <label class="mt-0 pt-0" for="name">Nombre</label>
                        <fg-input
                          class="no-border input-md w-100 mb-0"
                          addon-left-icon="now-ui-icons users_circle-08"
                          :class="register.name.validClass" 
                          :value="register.name.validValue" 
                          v-on:keyup="verifyRegister"
                          placeholder="Nombre"
                          v-model="register.name.value">
                        </fg-input>
                        <label class="mt-0 pt-0" for="name">Correo</label>
                        <fg-input
                          class="no-border input-md w-100 mb-0"
                          addon-left-icon="now-ui-icons ui-1_email-85"
                          :class="register.email.validClass" 
                          :value="register.email.validValue" 
                          v-on:keyup="verifyRegister"
                          placeholder="Correo"
                          type="email"
                          v-model="register.email.value">
                        </fg-input>
                        <label class="mt-0 pt-0" for="name">Teléfono</label>
                        <fg-input
                          class="no-border input-md w-100 mb-0"
                          addon-left-icon="now-ui-icons tech_mobile"
                          placeholder="Teléfono"
                          type="text"
                          :class="register.phone.validClass" 
                          :value="register.phone.validValue" 
                          v-on:keyup="verifyRegister"
                          v-on:input="changeFormat()"
                          maxlength="9"
                          v-model="register.phone.value">
                        </fg-input>
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
        <p>{{message}}</p>
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
import { Button,Modal,FormGroupInput as FgInput, } from '@/components';
import register from './register';
import login from './login';
import jwtDecode from 'jwt-decode'
import EventBus from './EventBus'
import axios from 'axios'

export default {
    components: {
        [Button.name]: Button,
        'vue-flip': VueFlip,
        FgInput,
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
          email:'',
          message: "Debe seleccionar un tipo de pago",
          register: {
            name: {
              validClass: '',
              validValue: '',
              value: ''
            },
            email: {
              validClass: '',
              validValue: '',
              value: ''
            },
            code:'+56',
            phone: {
              validClass: '',
              validValue: '',
              value: ''
            }
          },
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
          this.userName = decoded.name
          this.number = decoded.phone
          this.email = decoded.mail
        }else{
          this.showFormGift = 'giftPay'
          this.userName = ''
        }
      },
      createOrder(){
        let dateFormat = new Date()
        const dataDate = dateFormat.getDate()+"-"+(dateFormat.getMonth() + 1)+"-"+dateFormat.getFullYear()
        axios.post(endpoints.endpointTarget+'/mails/mailGiftCardKK', { 
          email: this.register.email.value,
          name: this.register.name.value,
          services: this.servicio + " " + this.servicio2 + " " +  this.servicio3,
          amount: this.precio,
          phone: this.register.phone.value,
          date: dataDate
        })
        .then(res => {
          if (res.data.status == 'ok') {
              this.modals.modal4 = true
              axios.post(endpoints.endpointTarget+'/notifications', {
                userName:'El cliente: '+ this.register.name.value + ' Corre: '+this.register.email.value,
                userImage: '',
                detail: 'Creo un pedido de Gift Card',
                branch: '',
                link: 'pedidos'
              })
              .then(res => {
                var socket = io(endpoints.endpointTarget)
                socket.emit('sendNotification', res.data.data)
              })          
          }else{
            console.log(res)
          }
        })
      },
      changeFormat(){
        var number = this.register.phone.value.replace(/[^\d]/g, '')
        if (number.length == 9) {
          number = number.replace(/(\d{1})(\d{4})/, "$1-$2-");
        } else if (number.length == 10) {
          number = number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
        }
        this.register.phone.value = number
      },
      verifyRegister(){
        this.register.name.validClass = this.register.name.value.length > 2 ? 'has-success' : 'has-danger'
        this.register.name.validValue = this.register.name.value.length > 2 ? 'Success' : 'Error'
        var split = this.register.email.value.split('@')
        if (split.length == 2) {
            var splitTwo = split[1].split('.')
            if (splitTwo.length >= 2) {
                this.register.email.validClass = 'has-success'
                this.register.email.validValue = 'Success'
            }else{
                this.register.email.validClass = 'has-danger'
                this.register.email.validValue = 'Error'
            }
        }else{
            this.register.email.validClass = 'has-danger'
            this.register.email.validValue = 'Error'
        }
        this.register.phone.validClass = this.register.phone.value.length > 9 ? 'has-success' : 'has-danger'
        this.register.phone.validValue = this.register.phone.value.length > 9 ? 'Success' : 'Error'
      },
      validateType(){
        if(this.register.email.validValue != "Success" || this.register.name.validValue != "Success" || this.register.phone.validValue != "Success"){
          this.message = "Datos incorrectos, revise que este correcto el formulario."
          this.modals.modal3 = true
          setTimeout(() => {
            this.modals.modal3 = false
          }, 2000);
        }else{
          if (this.typePay != '') {
            this.modals.modal2 = true
          }else{
            this.message = "Debe seleccionar un tipo de pago"
            this.modals.modal3 = true
            setTimeout(() => {
              this.modals.modal3 = false
            }, 2000);
          }
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
