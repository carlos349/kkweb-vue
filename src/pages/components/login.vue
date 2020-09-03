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

            <fg-input
                class="no-border input-lg"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                placeholder="Contraseña"
                type="password"
                v-model="password"
                >
            </fg-input>

            <template slot="raw-content">
                <div class="card-footer text-center">
                    <button
                    class="btn btn-primary btn-round btn-block"
                    v-on:click="login"
                    >Ingresar</button
                    >
                </div>
                <slot name="register"></slot>
            </template>
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
        }
    },
    methods: {
        login(){
            axios.post(endpoints.endpointTarget+'/clients/loginClient', {
                user: this.user,
                pass: this.password
            })
            .then(res => {
                if (res.data.status == 'ok') {
                    this.user = ''
                    this.password = ''
                    localStorage.setItem('userToken', res.data.token)
                    this.emitMethod(true)
                    this.modals.alert.type = 'modal-success'
                    this.modals.alert.icon = 'ui-1_check'
                    this.modals.alert.message = 'Ingreso exitoso.'
                    this.modals.alert.show = true
                    setTimeout(() => {
                        this.modals.alert.show = false
                    }, 2500);
                }else if(res.data.status == 'pass incorrecto'){
                    this.modals.alert.type = 'modal-danger'
                    this.modals.alert.icon = 'ui-1_simple-remove'
                    this.modals.alert.message = 'Contraseña incorrecta.'
                    this.modals.alert.show = true
                    setTimeout(() => {
                        this.modals.alert.show = false
                    }, 2500);
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