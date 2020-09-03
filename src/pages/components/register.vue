<template>
    <div>
        <card type="login" plain>
            <div class="w-25 mx-auto mb-4">
                <img class="w-100" src="img/logokk.png" alt="">
            </div>
            <div class="row">
                <fg-input
                    class="no-border input-lg col-md-6"
                    addon-left-icon="now-ui-icons users_circle-08"
                    :class="register.name.validClass" 
                    :value="register.name.validValue" 
                    v-on:keyup="verifyRegister"
                    placeholder="Nombre"
                    v-model="register.name.value"
                    >
                </fg-input>
                <fg-input
                    class="no-border input-lg col-md-6"
                    addon-left-icon="now-ui-icons users_circle-08"
                    :class="register.lastName.validClass" 
                    :value="register.lastName.validValue" 
                    v-on:keyup="verifyRegister"
                    placeholder="Apellido"
                    v-model="register.lastName.value"
                    >
                </fg-input>
                <fg-input
                    class="no-border input-lg col-md-6"
                    addon-left-icon="now-ui-icons ui-1_email-85"
                    :class="register.email.validClass" 
                    :value="register.email.validValue" 
                    v-on:keyup="verifyRegister"
                    placeholder="Correo"
                    v-model="register.email.value"
                    >
                </fg-input>
                <fg-input class="no-border input-lg col-md-6" :class="register.datePicker.validClass" 
                    :value="register.datePicker.validValue" 
                    >
                    <el-date-picker v-model="register.datePicker.value"
                        popper-class="date-picker-primary"
                        type="date"
                        placeholder="Fecha de nacimiento"
                        v-on:change="verifyRegister">
                    </el-date-picker>
                </fg-input>
                <fg-input
                    class="no-border input-lg col-3"
                    v-model="register.code"
                    readonly
                    >
                </fg-input>
                <fg-input
                    class="no-border input-lg col-9"
                    addon-left-icon="now-ui-icons tech_mobile"
                    placeholder="Número de teléfono"
                    :class="register.phone.validClass" 
                    :value="register.phone.validValue" 
                    v-on:keyup="verifyRegister"
                    type="number"
                    v-model="register.phone.value"
                    >
                </fg-input>
                <fg-input
                    class="no-border input-lg col-md-6"
                    addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                    :class="register.password.validClass" 
                    :value="register.password.validValue" 
                    v-on:keyup="verifyRegister"
                    placeholder="Contraseña"
                    type="password"
                    v-model="register.password.value"
                    >
                </fg-input>
                <i></i>
                <fg-input
                    class="no-border input-lg col-md-6"
                    addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                    placeholder="Repita la contraseña"
                    :class="register.passwordRepite.validClass" 
                    :value="register.passwordRepite.validValue" 
                    v-on:keyup="verifyRegister"
                    type="password"
                    v-model="register.passwordRepite.value"
                    >
                </fg-input>
            </div>
            <template slot="raw-content">
                <div class="card-footer text-center">
                    <button
                    class="btn btn-primary btn-round btn-block"
                    v-on:click="registerClient"
                    >Registrarme</button
                    >
                </div>
                <slot name="login"></slot>
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
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
    Button, 
    FormGroupInput as FgInput,
    Card,
    Modal
} from '@/components'
import {DatePicker} from 'element-ui'
export default {
    components: {
        [Button.name]: Button,
        FgInput,
        Card,
        Modal,
        [DatePicker.name]: DatePicker
    },
    data(){
        return {
            modals: {
                alert: {
                    show: false,
                    type: 'modal-danger',
                    icon: 'ui-1_simple-remove',
                    message: 'Esto es un mensaje de alerta'
                }
            },
            register: {
                name: {
                    validClass: '',
                    validValue: '',
                    value: ''
                },
                lastName: {
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
                },
                datePicker: {
                    validClass: '',
                    validValue: '',
                    value: ''
                },
                password: {
                    validClass: '',
                    validValue: '',
                    value: ''
                },
                passwordRepite: {
                    validClass: '',
                    validValue: '',
                    value: ''
                }
            },
            
        }
    },
    created () {
        AOS.init()
    },
    methods: {
        verifyRegister(){
            this.register.name.validClass = this.register.name.value.length > 2 ? 'has-success' : 'has-danger'
            this.register.name.validValue = this.register.name.value.length > 2 ? 'Success' : 'Error'
            this.register.lastName.validClass = this.register.lastName.value.length > 2 ? 'has-success' : 'has-danger'
            this.register.lastName.validValue = this.register.lastName.value.length > 2 ? 'Success' : 'Error'
            var split = this.register.email.value.split('@')
            if (split.length == 2) {
                var splitTwo = split[1].split('.')
                if (splitTwo.length == 2) {
                    this.register.email.validClass = 'has-success'
                    this.register.email.validValue = 'Success'
                }else{
                    this.register.email.validClass = 'has-danger'
                    this.register.email.validValue = 'Error'
                }
            }else{
                this.register.email.validClass = 'has-danger'
                this.register.email.validValue = 'Success'
            }
            this.register.phone.validClass = this.register.phone.value.length > 4 ? 'has-success' : 'has-danger'
            this.register.phone.validValue = this.register.phone.value.length > 4 ? 'Success' : 'Error'
            this.register.datePicker.validClass = this.register.datePicker.value != '' ? 'has-success' : 'has-danger'
            this.register.datePicker.validValue = this.register.datePicker.value != '' ? 'Success' : 'Error'
            this.register.phone.validClass = this.register.phone.value.length > 9 ? 'has-success' : 'has-danger'
            this.register.phone.validValue = this.register.phone.value.length > 9 ? 'Success' : 'Error'
            this.register.password.validClass = this.register.password.value.length > 6 ? 'has-success' : 'has-danger'
            this.register.password.validValue = this.register.password.value.length > 6 ? 'Success' : 'Error'
            this.register.passwordRepite.validClass = this.register.password.value == this.register.passwordRepite.value ? 'has-success' : 'has-danger'
            this.register.passwordRepite.validValue = this.register.password.value.length == this.register.passwordRepite.value ? 'Success' : 'Error'
        },
        registerClient(){  
            if (this.register.name == '' || this.register.lastName == '' ||  this.register.email == '' || this.register.name == '' || this.register.phone == '' || this.register.datePicker == '' || this.register.password == '' || this.register.passwordRepite == '') {
                this.modals.alert.type = 'modal-danger'
                this.modals.alert.icon = 'ui-1_simple-remove'
                this.modals.alert.message = 'Debe completar todo el formulario.'
                this.modals.alert.show = true
                setTimeout(() => {
                    this.modals.alert.show = false
                }, 2500);
            }else{
                axios.post(endpoints.endpointTarget+'/clients/registerwithpass', {
                    data: {
                        name: this.register.name.value,
                        lastName: this.register.lastName.value,
                        email: this.register.email.value,
                        code: this.register.code,
                        phone: this.register.phone.value,
                        datePicker: this.register.datePicker.value,
                        password: this.register.password.value
                    }
                })
                .then(res => {
                    if (res.data.status != 'client already exist') {
                        this.modals.alert.type = 'modal-success'
                        this.modals.alert.icon = 'ui-1_check'
                        this.modals.alert.message = 'Registro exitoso.'
                        this.modals.alert.show = true
                        this.register.name.value = ''
                        this.register.lastName.value = ''
                        this.register.email.value = ''
                        this.register.phone.value = ''
                        this.register.datePicker.value = ''
                        this.register.password.value = ''
                        this.register.passwordRepite.value = ''
                        
                        this.register.name.validClass = 'has-danger'
                        this.register.lastName.validClass = 'has-danger'
                        this.register.email.validClass = 'has-danger'
                        this.register.phone.validClass = 'has-danger'
                        this.register.datePicker.validClass = 'has-danger'
                        this.register.password.validClass = 'has-danger'
                        this.register.passwordRepite.validClass = 'has-danger'
                        setTimeout(() => {
                            this.modals.alert.show = false
                        }, 2500);
                        
                    }else{
                        this.modals.alert.type = 'modal-danger'
                        this.modals.alert.icon = 'ui-1_simple-remove'
                        this.modals.alert.message = 'Ya se encuentra registrado.'
                        this.modals.alert.show = true
                        setTimeout(() => {
                            this.modals.alert.show = false
                        }, 2500);
                        console.log(res)
                    }
                })
            }
        }
    }
}
</script>