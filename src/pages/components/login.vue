<template>
    <div>
        <card type="login" plain>
            <div class="w-25 mx-auto mb-4">
                <img class="w-100" src="img/logokk.png" alt="">
            </div>
            <fg-input
                class="no-border input-lg"
                addon-left-icon="now-ui-icons users_circle-08"
                placeholder="Usuario"
                v-model="user"
                >
            </fg-input>
            <div class="row">
                <fg-input
                    class="no-border input-lg col-10" id="typePasslogin"
                    addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                    placeholder="Contraseña"
                    type="password"
                    v-model="password"
                    >
                </fg-input>
                <div class="col-2 p-0">
                    <n-button type="primary" icon round style="margin-top:3px;margin-right:10px;" v-on:click="typePassChange()">
                        <i class="fa fa-eye eyesPassword text-white w-100" v-if="typePass == 'pass'"></i>
                        <i class="fa fa-eye-slash eyesPassword text-white w-100" v-else></i>
                    </n-button>
                </div>
            </div>
            <span style="position:absolute;left: 21%; bottom: -8%;" v-on:click="modals.modal2 = true"  class="link footer-link span-register text-center ml-5" >¿Olvidaste tu contraseña?</span>
            <div class="row ml-2">
                <div class="card-footer text-center col-5">
                    <button
                    class="btn btn-primary btn-round btn-block"
                    v-on:click="login"
                    >Ingresar</button
                    >
                   
                </div>
                
                <slot name="register"></slot>
            </div>
             
        </card>
        <modal :show.sync="modals.alert.show"
             :class="modals.alert.type"
             :show-close="false"
             header-classes="justify-content-center"
             type="mini">
            <div v-if="modals.alert.show" data-aos="zoom-in-up" data-aos-duration="800" slot="header" class="modal-profile d-flex justify-content-center align-items-center">
                <i class="now-ui-icons" :class="modals.alert.icon" style="font-size:30px;"></i>
            </div>
            <p v-if="modals.alert.show" data-aos="zoom-in-up" data-aos-duration="800" class="font-weight:700;">{{modals.alert.message}}</p>
            <center>
                
            </center>
        </modal>

        <modal :show.sync="modals.modal2" headerClasses="justify-content-center">
            <h4 slot="header" class="title title-up">Ingresa tu correo</h4>
            <fg-input class="no-border form-control-lg"
                    placeholder="Correo.."
                    v-model="mailRescue"
                    addon-left-icon="now-ui-icons ui-1_email-85">
            </fg-input>
            <template slot="footer">
            <n-button type="danger" @click.native="modals.modal2 = false">Cerrar</n-button>    
            <n-button v-on:click="rescue()">Recuperar</n-button>
            </template>
        </modal>
    </div>
</template>
<script>
import endpoints, { endpointTarget } from '../../../endpoints/endpoints.js'
import axios from 'axios'
import EventBus from './EventBus'
import {
    Button, 
    FormGroupInput as FgInput,
    Card,
    Modal
} from '@/components'
export default {
    components: {
        [Button.name]: Button,
        FgInput,
        Card,
        Modal
    },
    data(){
        return {
            user: '',
            password: '',
            mailRescue:'',
            modals: {
                alert: {
                    show: false,
                    type: 'modal-danger',
                    icon: 'ui-1_simple-remove',
                    message: 'Esto es un mensaje de alerta'
                },
                modal2: false
            },
            typePass: 'pass'
        }
    },
    methods: {
        typePassChange(){
            if (this.typePass == 'pass') {
                document.getElementById('typePasslogin').type = 'text';
                this.typePass = 'text'
            }else{
                document.getElementById('typePasslogin').type = 'password';
                this.typePass = 'pass'
            }
        },
        login(){
            axios.post(endpoints.endpointTarget+'/clients/loginClient', {
                user: this.user.toLowerCase(),
                pass: this.password
            })
            .then(res => {
                if (res.data.status == 'ok') {
                    this.user = ''
                    this.password = ''
                    this.modals.alert.type = 'modal-success'
                    this.modals.alert.icon = 'ui-1_check'
                    this.modals.alert.message = 'Ingreso exitoso.'
                    this.modals.alert.show = true
                    setTimeout(() => {
                        this.modals.alert.show = false
                        localStorage.setItem('userToken', res.data.token)
                        this.emitMethod(true)
                    }, 2500);
                }else if(res.data.status == 'pass incorrecto'){
                    this.modals.alert.type = 'modal-danger'
                    this.modals.alert.icon = 'ui-1_simple-remove'
                    this.modals.alert.message = 'Contraseña incorrecta.'
                    
                    this.modals.alert.show = true
                    
                }else{
                    this.modals.alert.type = 'modal-danger'
                    this.modals.alert.icon = 'ui-1_simple-remove'
                    this.modals.alert.message = 'Usuario no registrado.'
                    this.modals.alert.show = true
                    setTimeout(() => {
                        this.modals.alert.show = false
                    }, 2500);
                }
            })
            .catch(err => {
                console.log(err)
            })
        },
        emitMethod(status) {
            EventBus.$emit('loggedin', status)
        },
        rescue(){
            axios.put(endpoints.endpointTarget+'/clients/rescuePass/'+this.mailRescue)
            .then(res => {
                if (res.data.status == 'ok') {
                    this.modals.alert.type = 'modal-success'
                    this.modals.alert.icon = 'ui-1_check'
                    this.modals.alert.message = 'Verifica tu correo para cambiar tu contraseña.'
                    this.modals.modal2 = false
                    this.modals.alert.show = true
                    setTimeout(() => {
                        this.modals.alert.show = false
                    }, 3000);
                }else{
                    this.modals.alert.type = 'modal-danger'
                    this.modals.alert.icon = 'ui-1_simple-remove'
                    this.modals.alert.message = 'Correo no registrado.'
                    this.modals.modal2 = false
                    this.modals.alert.show = true
                    setTimeout(() => {
                        this.modals.alert.show = false
                        this.modals.modal2 = true
                    }, 2500);
                }
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }
}
</script>