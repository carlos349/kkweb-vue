<template>
<div>
  <tabs tabContentClasses="p-0" type="purple">
     
    <tab-pane class="heightPalPueblo" label="Profile">
        <span slot="label">
            <i class="now-ui-icons users_single-02"></i>
        </span>
      <template>
          
          <div class="row">
              <card class="ml-4 col-sm-4" style="width: 20rem;box-shadow:none">

                <center>
                    <h3 class="m-0 text-center mb-3 titlePanel w-75">Panel de usuario</h3>
                    <img style="width:10rem;" slot="image" class="img-raised rounded-circle" src="img/person_1.jpg" alt="Card image cap">
                </center>
                
                <div class="mt-4 p-2 pt-0" style="background-color: whitesmoke;border-top: 5px solid #afadc2;border-radius: 5px;border-bottom: 15px solid #afadc2;">
                    <center>
                        <h6 style="margin-bottom:0px;">Nombre</h6>
                        <badge href="#" type="white" style="color:black;font-size:12px;text-transform:none;margin-bottom:10px;" class="col-sm-12">{{dataUser.name.value}}</badge>
                        <h6 style="margin-bottom:0px;">Número de teléfono</h6>
                        <badge href="#" type="white" style="color:black;font-size:12px;text-transform:none;margin-bottom:10px;" class="col-sm-12">{{dataUser.number}}</badge>
                        <h6 style="margin-bottom:0px;">Correo electrónico</h6>
                        <badge href="#" type="white" style="color:black;font-size:12px;text-transform:none;margin-bottom:10px;" class="col-sm-12">{{dataUser.email.value}}</badge>
                        <h6 style="margin-bottom:0px;">Fecha de nacimiento</h6>
                        <badge href="#" type="white" style="color:black;font-size:12px;text-transform:none;margin-bottom:10px;" class="col-sm-12">{{dataUser.bornDate}}</badge>
                    </center>
                    
                    <a class="text-left" style="cursor:pointer;" v-on:click="modals.modal1 = true">Cambiar datos</a><a class="float-right"  style="cursor:pointer;" v-on:click="modals.modal2 = true">Cambiar contraseña</a>
                </div>
            </card>
        
        <div style="border-left: 3px solid #afadc2;" class="row col-sm-8 cardUser pl-4 pr-5 pt-0">
            <div class="col-sm-12 mb-2">
                <badge href="#" class="p-0 m-0 hideRefer" type="purple">
                    <badge href="#" class="m-0" style="font-size:10px" type="purple"><span class="mt-2"> ¡Invita a un amigo y <br> gana descuento!</span></badge>
                <badge href="#" style="color:black;font-size:14px;padding:15px;padding-left:30px;padding-right:10px" class="m-0" type="white"> <span style="text-transform:none" id="referidoSys" >https://kkprettynails.cl/#/servicios?refer={{dataUser.linkRefer}} </span> <i v-clipboard:success="clipboardSuccessHandler" v-clipboard="'https://kkprettynails.cl/#/servicios?refer='+dataUser.linkRefer" style="color:#8893f1" class=" ml-5 fas fa-clone"></i></badge> 
                </badge>

                <badge href="#" class="m-0 col-12 hideReferMobile" style="font-size:10px" type="purple">¡Invita a un amigo y gana descuento! </badge>
                <badge href="#" style="color:black;font-size:10px;padding:15px;" class="m-0 col-12 hideReferMobile" type="white"> <span style="text-transform:none" id="referidoSys" >https://kkprettynails.cl/#/servicios?refer={{dataUser.linkRefer}} </span> <i v-clipboard="'https://kkprettynails.cl/#/servicios?refer='+dataUser.linkRefer" style="color:#8893f1" class="ml-1 fas fa-clone"></i></badge> 
            </div>
            <div class="col-sm-4">
                <div class="col-sm-12 pt-2 mb-5 bgT bgc1">
                   <h5>Servicios <br> realizados</h5> 
                    <p style="margin-top: .7em;" id="serviciosSys" class="card__num">{{dataUser.services.length}}</p>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="col-sm-12 pt-2 mb-5 bgT bgc2">
                   <h5>Citas <br> pendientes</h5> 
                    <p style="margin-top: .7em;" class="card__num citasPendi">{{dataUser.dates.length}}</p>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="col-sm-12 p-0 pt-2 mb-5 bgT bgc3">
                     <h5>Recomendaciones <br> (Descuentos 15%)</h5>
                    <p style="margin-top: .7em;" class="card__num reco">{{dataUser.refers}}</p>
                </div>
            </div>
        </div>
          </div>
        
      </template>
    </tab-pane>
    <tab-pane label="Settings">
        <span slot="label">
            <i class="now-ui-icons ui-1_calendar-60"></i>
        </span>
        <h3 class="text-center titlePanel w-25 mx-auto">Servicios realizados</h3>
        <vue-custom-scrollbar style="height:55vh;overflow:hidden;overflow-x: hidden;overflow-y:scroll;margin-top:-20px;">
            
            <table style="font-size: 12px;" class="table">
                <thead class="thead-light">
                    <tr>
                    <th scope="col">Fecha</th>
                    <th scope="col">Servicio(s)</th>
                    <th scope="col">Prestador</th>
                    <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody id="histServices">
                    <tr v-for="services of dataUser.services" :key="services">
                        <td>
                            <p>{{formatDate(services.fecha)}}</p>
                        </td>
                        <td>
                            <span style="font-size: 1.2em;" v-for="(service, index) of services.servicios" :key="service.servicio">
                                <b v-if="index <= 0">{{service.servicio}}</b> 
                                <b v-else> - {{service.servicio}}</b> 
                            </span> 
                        </td>
                        <td><p>{{services.manicurista}}</p></td>
                        <td><p>{{formatPrice(services.total)}}</p></td>
                    </tr>
                </tbody>
            </table>
        </vue-custom-scrollbar>
    </tab-pane>
    <tab-pane label="Options">
        <span slot="label">
            <i class="now-ui-icons ui-1_check"></i>
        </span>
        <h3 class="text-center titlePanel w-25 mx-auto">Citas por confirmar</h3>
        <vue-custom-scrollbar style="height:55vh;overflow:hidden;overflow-x: hidden;overflow-y:scroll;margin-top:-20px;">
            <table style="font-size: 12px;" class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Servicio(s)</th>
                        <th scope="col">Prestador</th>
                        <th scope="col">Confirmar</th>
                    </tr>
                </thead>
                <tbody class="bodyCitas">
                    <tr v-for="date of dataUser.dates" :key="date">
                        <td style="padding-top:25px;">
                            <p>{{formatDate(date.date)}}</p>
                            
                        </td>
                        <td style="padding-top:25px;">
                            <span style="font-size: 1.2em;" class="mt-4" v-for="(service, index) of date.services" :key="service.servicio">
                                <b v-if="index <= 0">{{service.servicio}}</b> 
                                <b v-else> - {{service.servicio}}</b> 
                            </span> 
                        </td>
                        <td style="padding-top:25px;"><p>{{date.employe}}</p></td>
                        <td>
                            <n-button type="danger" class="w-50 mx-auto" size="sm" icon round v-on:click="confirmDate(date.confirmationId)" title="confirmar cita">
                                <i class="now-ui-icons ui-1_check"></i>
                            </n-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </vue-custom-scrollbar>
    </tab-pane>
  </tabs>
  <modal :show.sync="modals.modal1"
    footer-classes="justify-content-center"
    type="notice">
    <card type="login" plain>
        <div class="w-25 mx-auto mb-4">
            <img class="w-100" src="img/logokk.png" alt="">
        </div>
        <div class="row">
            <fg-input
                class="no-border input-lg col-12"
                addon-left-icon="now-ui-icons users_circle-08"
                placeholder="Usuario"
                v-model="dataUser.name.value"
                :class="dataUser.name.validClass" 
                :value="dataUser.name.validValue" 
                v-on:keyup="verifyRegister"
                >
            </fg-input>
            <fg-input
                class="no-border input-lg col-3"
                v-model="code"
                readonly
                >
            </fg-input>
            <fg-input
                class="no-border input-lg col-9"
                addon-left-icon="now-ui-icons users_circle-08"
                placeholder="Usuario"
                type="text"
                v-model="dataUser.onlyNumber.value"
                v-on:input="changeFormat()"
                :class="dataUser.onlyNumber.validClass" 
                :value="dataUser.onlyNumber.validValue" 
                v-on:keyup="verifyRegister"
                maxlength="9"
                >
            </fg-input>
            <fg-input
                class="no-border input-lg col-12"
                addon-left-icon="now-ui-icons users_circle-08"
                placeholder="Usuario"
                v-model="dataUser.email.value"
                :class="dataUser.email.validClass" 
                :value="dataUser.email.validValue" 
                v-on:keyup="verifyRegister"
                >
            </fg-input>
        </div>
        <div class="row ml-2">
            <div class="card-footer text-center col-md-6">
                <button
                class="btn btn-primary btn-round btn-block"
                v-on:click="changeD"
                >Actualizar datos</button
                >
            </div>
            <slot name="register"></slot>
        </div>
    </card>
  </modal>
  <modal :show.sync="modals.modal2"
    footer-classes="justify-content-center"
    type="notice">
    <card type="login" plain>
        <div class="w-25 mx-auto mb-4">
            <img class="w-100" src="img/logokk.png" alt="">
        </div>
        <div class="row">
            <fg-input
                class="no-border input-lg col-10" id="typePasschangeOne"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                placeholder="Antigua contraseña"
                type="password"
                v-model="change.password.value"
                v-on:keyup="verifyRegisterChange"
                :class="change.password.validClass" 
                :value="change.password.validValue" 
                >
            </fg-input>
            <div class="col-2">
                <n-button type="primary" icon round style="margin-top:3px;" v-on:click="typePassChange()">
                    <i class="fa fa-eye eyesPassword text-white w-100" v-if="typePass == 'pass'"></i>
                    <i class="fa fa-eye-slash eyesPassword text-white w-100" v-else></i>
                </n-button>
            </div>
            <fg-input
                class="no-border input-lg col-10" id="typePasschangeTwo"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                placeholder="Nueva contraseña"
                type="password"
                v-model="change.passwordNew.value"
                v-on:keyup="verifyRegisterChange"
                :class="change.passwordNew.validClass" 
                :value="change.passwordNew.validValue" 
                >
            </fg-input>
            <div class="col-2">
                <n-button type="primary" icon round style="margin-top:3px;" v-on:click="typePassChange()">
                    <i class="fa fa-eye eyesPassword text-white w-100" v-if="typePass == 'pass'"></i>
                    <i class="fa fa-eye-slash eyesPassword text-white w-100" v-else></i>
                </n-button>
            </div>
            <fg-input
                class="no-border input-lg col-10" id="typePasschangeThree"
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
                <n-button type="primary" icon round style="margin-top:3px;" v-on:click="typePassChange()">
                    <i class="fa fa-eye eyesPassword text-white w-100" v-if="typePass == 'pass'"></i>
                    <i class="fa fa-eye-slash eyesPassword text-white w-100" v-else></i>
                </n-button>
            </div>
        </div>
        <div class="row ml-2">
            <div class="card-footer text-center col-md-6">
                <button
                class="btn btn-primary btn-round btn-block"
                v-on:click="changeP"
                >Cambiar contraseña</button
                >
            </div>
            <slot name="register"></slot>
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
    </modal>
</div>
</template>
<script>
import axios from 'axios'
import endpoints from '../../../endpoints/endpoints.js'
import vueCustomScrollbar from 'vue-custom-scrollbar'
import { Popover } from 'element-ui';

import {
     Tabs, 
     TabPane, 
     Card,Badge,
     Button,
     Modal,
     FormGroupInput as FgInput,
} from '@/components'
import jwtDecode from 'jwt-decode'
import EventBus from './EventBus'

export default {
    components: {
        Card,
        Tabs,
        TabPane,
        [Badge.name]: Badge,
        [Button.name]: Button,
        Modal,
        FgInput,
        [Popover.name]: Popover,
        vueCustomScrollbar
    },
    data(){
        return {
            modals: {
                modal1: false,
                modal2: false,
                alert: {
                    show: false,
                    type: 'modal-danger',
                    icon: 'ui-1_simple-remove',
                    message: 'Esto es un mensaje de alerta'
                }
            },
            change: {
                password: {
                    validClass: 'has-danger',
                    validValue: 'Error',
                    value: ''
                },
                passwordNew: {
                    validClass: 'has-danger',
                    validValue: 'Error',
                    value: ''
                },
                passwordRep: {
                    validClass: 'has-danger',
                    validValue: 'Error',
                    value: ''
                },
            },
            dataUser: {
                onlyNumber: 0,
                dates:[],
                refers:0,
                linkRefer:'',
                services: [],
                name:{
                    validClass: 'has-success',
                    validValue: 'Success',
                    value: ''
                },
                email:{
                    validClass: 'has-success',
                    validValue: 'Success',
                    value: ''
                },
                onlyNumber:{
                    validClass: 'has-success',
                    validValue: 'Success',
                    value: ''
                },
                number:'',
                bornDate:''
            },
            code: '+56',
            typePass: 'pass'
        }
    },
    created(){
        this.getToken()
    },
    methods: {
        getToken(){
            const token = localStorage.userToken
            if (token) {
                const decoded = jwtDecode(token)
                console.log(decoded)
                this.dataUser.name.value = decoded.name
                this.dataUser.number = decoded.phone
                this.dataUser.onlyNumber.value = decoded.phone.split('56 ')[1]
                this.dataUser.email.value = decoded.mail
                var date = new Date(decoded.birthday) 
                this.dataUser.refers = decoded.recomends
                this.dataUser.linkRefer = decoded._id
                this.dataUser.services = decoded.historical
                this.getDates()

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
               
                this.dataUser.bornDate = one+"-"+two+"-"+date.getFullYear()
                
            }else{
                this.emitMethod(false)
            }
        },
        async getDates(){
            try {
                const dates = await axios.post(endpoints.endpointTarget+'/clients/datesPerClient/',{
                    client: this.dataUser.email.value
                })
                this.dataUser.dates = dates.data
                console.log(this.dataUser.dates)
            }catch(err){
                console.log(err)
            }
        },
        confirmDate(id){
            console.log(id)
            axios.get(endpoints.endpointTarget+'/citas/confirmDate/'+id)
            .then(res => {
                this.modals.alert.type = 'modal-success'
                this.modals.alert.icon = 'ui-1_check'
                this.modals.alert.message = 'Se confirmo su cita.'
                this.modals.alert.show = true
                this.getDates()
                setTimeout(() => {
                    this.modals.alert.show = false
                }, 2500);
            }).catch(err => {
                console.log(err)
            })
        },
        typePassChange(){
            if (this.typePass == 'pass') {
                document.getElementById('typePasschangeOne').type = 'text';
                document.getElementById('typePasschangeTwo').type = 'text';
                document.getElementById('typePasschangeThree').type = 'text';
                this.typePass = 'text'
            }else{
                document.getElementById('typePasschangeOne').type = 'password';
                document.getElementById('typePasschangeTwo').type = 'password';
                document.getElementById('typePasschangeThree').type = 'password';
                this.typePass = 'pass'
            }
        },
        formatPrice(value) {
            let val = (value/1).toFixed(2).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        verifyRegisterChange(){
            this.change.password.validClass = this.change.password.value.length > 7 ? 'has-success' : 'has-danger'
            this.change.password.validValue = this.change.password.value.length > 7 ? 'Success' : 'Error'
            this.change.passwordNew.validClass = this.change.passwordNew.value.length > 7 ? 'has-success' : 'has-danger'
            this.change.passwordNew.validValue = this.change.passwordNew.value.length > 7 ? 'Success' : 'Error'
            this.change.passwordRep.validClass = this.change.passwordRep.value == this.change.passwordNew.value ? 'has-success' : 'has-danger'
            this.change.passwordRep.validValue = this.change.passwordRep.value == this.change.passwordNew.value ? 'Success' : 'Error'
        },
        verifyRegister(){
            this.dataUser.name.validClass = this.dataUser.name.value.length > 2 ? 'has-success' : 'has-danger'
            this.dataUser.name.validValue = this.dataUser.name.value.length > 2 ? 'Success' : 'Error'
            this.dataUser.onlyNumber.validClass = this.dataUser.onlyNumber.value.length == 11 ? 'has-success' : 'has-danger'
            this.dataUser.onlyNumber.validValue = this.dataUser.onlyNumber.value.length == 11 ? 'Success' : 'Error'
            var split = this.dataUser.email.value.split('@')
            if (split.length == 2) {
                var splitTwo = split[1].split('.')
                if (splitTwo.length == 2) {
                    this.dataUser.email.validClass = 'has-success'
                    this.dataUser.email.validValue = 'Success'
                }else{
                    this.dataUser.email.validClass = 'has-danger'
                    this.dataUser.email.validValue = 'Error'
                }
            }else{
                this.dataUser.email.validClass = 'has-danger'
                this.dataUser.email.validValue = 'Error'
            }
        },
        changeFormat(){
            var number = this.dataUser.onlyNumber.value.replace(/[^\d]/g, '')
            if (number.length == 9) {
                number = number.replace(/(\d{1})(\d{4})/, "$1-$2-");
            } else if (number.length == 10) {
                number = number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
            }
            this.dataUser.onlyNumber.value = number
        },
        emitMethod(status) {
            EventBus.$emit('loggedin', status)
        },
        formatDate(date) {
            let dateFormat = new Date(date)
			return dateFormat.getDate()+"-"+(dateFormat.getMonth() + 1)+"-"+dateFormat.getFullYear()
        },
        changeP(){
            const token = localStorage.userToken
            const decoded = jwtDecode(token)
            axios.put(endpoints.endpointTarget+'/clients/changePass/'+decoded._id, {
                lastPass: this.change.password.value,
                newPass: this.change.passwordNew.value
            })
            .then(res => {
                if (res.data.status == 'bad') {
                    this.modals.alert.type = 'modal-danger'
                    this.modals.alert.icon = 'ui-1_simple-remove'
                    this.modals.alert.message = 'Contraseña incorrecta.'
                    this.modals.alert.show = true
                    setTimeout(() => {
                        this.modals.alert.show = false
                    }, 2500);
                }else if(!res.data.status){
                    this.modals.alert.type = 'modal-success'
                    this.modals.alert.icon = 'ui-1_check'
                    this.modals.alert.message = 'Cambio de contraseña exitoso.'
                    this.modals.alert.show = true
                    setTimeout(() => {
                        this.modals.alert.show = false
                        this.modals.modal2 = false
                        this.change.password.value = ''
                        this.change.passwordNew.value = ''
                        this.change.passwordRep.value = ''
                    }, 2500);
                }
                
            })
            .catch(err => {
                console.log(err)
            })
        },
        changeD(){
            const token = localStorage.userToken
            const decoded = jwtDecode(token)
            
            axios.put(endpoints.endpointTarget+'/clients/'+decoded._id, {
                nombreClienteEditar: this.dataUser.name.value,
                identidadClienteEditar: this.dataUser.email.value,
                correoClienteEditar: this.dataUser.onlyNumber.value,
                instagramClienteEditar: ''
            })
            .then(res => {
                if (res.data.status == 'Servicio actualizado') {
                    this.modals.alert.type = 'modal-success'
                    this.modals.alert.icon = 'ui-1_check'
                    this.modals.alert.message = 'Cambio de datos exitoso.'
                    this.modals.alert.show = true
                    setTimeout(() => {
                        this.modals.alert.show = false
                        localStorage.setItem('userToken', res.data.token)
                        this.emitMethod(true)
                    }, 2500);
                    axios.get(endpoints.endpointTarget+'/clients/sendMailChange/'+decoded._id)
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
                }else{
                    this.modals.alert.type = 'modal-danger'
                    this.modals.alert.icon = 'ui-1_simple-remove'
                    this.modals.alert.message = 'Correo ya registrado.'
                    this.modals.alert.show = true
                    this.modals.modal1 = false
                    setTimeout(() => {
                        this.modals.alert.show = false
                    }, 2500);
                }
            })
        },
        clipboardSuccessHandler(){
            this.modals.alert.type = 'modal-success'
                    this.modals.alert.icon = 'ui-1_check'
                    this.modals.alert.message = 'Copiado.'
                    this.modals.alert.show = true
                    this.modals.modal1 = false
                    setTimeout(() => {
                        this.modals.alert.show = false
                    }, 1500);
        }
    },
    mounted() {
        EventBus.$on('panShow', status => {
            this.getToken()
        })
    }
}
</script>

<style scoped>
  
</style>