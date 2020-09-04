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
                <div class="col-2">
                    <n-button type="primary" icon round style="margin-top:3px;margin-right:10px;" v-on:click="typePassChange()">
                        <i class="fa fa-eye eyesPassword text-white w-100" v-if="typePass == 'pass'"></i>
                        <i class="fa fa-eye-slash eyesPassword text-white w-100" v-else></i>
                    </n-button>
                </div>
            </div>

            <div class="row ml-2">
                <div class="card-footer text-center col-md-6">
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
            <n-button type="primary" size="sm">¿Se te olvido esa vaina?</n-button>
        </modal>
    </div>
</template>
<script>
import endpoints from '../../../endpoints/endpoints.js'
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
            modals: {
                alert: {
                    show: false,
                    type: 'modal-danger',
                    icon: 'ui-1_simple-remove',
                    message: 'Esto es un mensaje de alerta'
                }
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
                user: this.user,
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
    }
}
</script>