<template>
<div>
  <tabs tabContentClasses="p-0" type="purple">
     
    <tab-pane class="heightPalPueblo" label="Profile">
        <span slot="label">
            <i class="now-ui-icons users_single-02"></i>
        </span>
      <template>
          <div class="row">
              <card class="ml-4 col-sm-4" style="width: 20rem;padding:1rem;box-shadow:none">

                <center>
                    <img style="width:10rem;" slot="image" class="img-raised rounded-circle" src="img/person_1.jpg" alt="Card image cap">
                </center>
                
                <div class="mt-4 p-2 pt-0" style="background-color: whitesmoke;border-top: 5px solid #afadc2;border-radius: 5px;border-bottom: 15px solid #afadc2;">
                    <center>
                        <h6>Nombre</h6>
                        <badge href="#" type="white" style="color:black;font-size:12px;text-transform:none" class="col-sm-12">{{dataUser.name.value}}</badge>
                        <h6>Número de teléfono</h6>
                        <badge href="#" type="white" style="color:black;font-size:12px;text-transform:none" class="col-sm-12">{{dataUser.number}}</badge>
                        <h6>Correo electrónico</h6>
                        <badge href="#" type="white" style="color:black;font-size:12px;text-transform:none" class="col-sm-12">{{dataUser.email.value}}</badge>
                        <h6>Fecha de nacimiento</h6>
                        <badge href="#" type="white" style="color:black;font-size:12px;text-transform:none" class="col-sm-12">{{formatDate(dataUser.bornDate)}}</badge>
                    </center>
                    
                    <a class="text-left" style="cursor:pointer;" v-on:click="modals.modal1 = true">Cambiar datos</a><a class="float-right"  style="cursor:pointer;" v-on:click="changeP()">Cambiar contraseña</a>
                </div>
            </card>
        
        <div style="border-left: 3px solid #afadc2;" class="row col-sm-8 cardUser pl-4 pr-5 pt-0">
            <div class="col-sm-12 mb-2">
                <badge href="#" class="p-0 m-0 hideRefer" type="purple">
                    <badge href="#" class="m-0" style="font-size:10px" type="purple"><span class="mt-2"> ¡Invita a un amigo y <br> gana descuento!</span></badge>
                <badge href="#" style="color:black;font-size:14px;padding:15px;padding-left:55px;padding-right:25px" class="m-0" type="white"> <span style="text-transform:none" id="referidoSys" >https://kkprettynails.cl/inicio?r&c={{dataUser.linkRefer}} </span> <i data-clipboard-target="#referidoSys" style="color:#8893f1" class=" ml-5 fas fa-clone"></i></badge> 
                </badge>

                <badge href="#" class="m-0 col-12 hideReferMobile" style="font-size:10px" type="purple">¡Invita a un amigo y gana descuento! </badge>
                <badge href="#" style="color:black;font-size:10px;padding:15px;" class="m-0 col-12 hideReferMobile" type="white"> <span style="text-transform:none" id="referidoSys" >https://kkprettynails.cl/inicio?r&c={{dataUser.linkRefer}} </span> <i data-clipboard-target="#referidoSys" style="color:#8893f1" class="ml-1 fas fa-clone"></i></badge> 
            </div>
            <div class="col-sm-4">
                <div class="col-sm-12 pt-2 mb-5 bgT bgc1">
                   <h5>Servicios <br> realizados</h5> 
                    <p style="margin-top: .7em;" id="serviciosSys" class="card__num">{{dataUser.services}}</p>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="col-sm-12 pt-2 mb-5 bgT bgc2">
                   <h5>Citas <br> pendientes</h5> 
                    <p style="margin-top: .7em;" class="card__num citasPendi">{{dataUser.dates}}</p>
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
         <table style="font-size: 12px;" class="table">
            <thead class="thead-light">
                <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Servicio(s)</th>
                <th scope="col">Prestador</th>
                <th scope="col">Total</th>
                <th scope="col">Reagendar</th>
                </tr>
            </thead>
            <tbody id="histServices">
                
                
            </tbody>
        </table>
    </tab-pane>
    <tab-pane label="Options">
        <span slot="label">
            <i class="now-ui-icons ui-1_check"></i>
        </span>
      <table style="font-size: 12px;" class="table">
        <thead class="thead-light">
            <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Servicio(s)</th>
            <th scope="col">Prestador</th>
            <th scope="col"></th>
            <th scope="col">Confirmar</th>
            </tr>
        </thead>
        <tbody class="bodyCitas">
            
        </tbody>
        </table>
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
                >Ingresar</button
                >
            </div>
            <slot name="register"></slot>
        </div>
    </card>
  </modal>
</div>
</template>
<script>
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
        FgInput
    },
    data(){
        return {
            modals: {
                modal1: false,

            },
            dataUser: {
                onlyNumber: 0,
                services:0,
                dates:0,
                refers:0,
                linkRefer:'',
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
            code: '+56'
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
                this.dataUser.name.value = decoded.name
                this.dataUser.number = decoded.phone
                this.dataUser.onlyNumber.value = decoded.phone.split('56 ')[1]
                this.dataUser.email.value = decoded.mail
                this.dataUser.bornDate = decoded.birthday
                this.dataUser.linkRefer = decoded._id
            }else{
                this.emitMethod(false)
            }
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
        changeD(){
            
        }
    },
    mounted() {
        EventBus.$on('panShow', status => {
            console.log(status)
            this.getToken()
        })
    }
}
</script>

<style scoped>
  
</style>