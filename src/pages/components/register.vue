<template>
    <div>
        <card type="login"  style="padding: 0px;" plain>
            <div class="w-25 mx-auto mb-4">
                <img class="w-100" src="img/logokk.png" alt="">
            </div>
            <div class="row">
                <div class="col-md-6 p-1">
                    <fg-input
                        class="no-border input-lg w-100"
                        addon-left-icon="now-ui-icons users_circle-08"
                        :class="register.name.validClass" 
                        :value="register.name.validValue" 
                        v-on:keyup="verifyRegister"
                        placeholder="Nombre"
                        v-model="register.name.value"
                        >
                    </fg-input>
                </div>
                <div class="col-md-6 p-1">
                    <fg-input
                        class="no-border input-lg w-100"
                        addon-left-icon="now-ui-icons users_circle-08"
                        :class="register.lastName.validClass" 
                        :value="register.lastName.validValue" 
                        v-on:keyup="verifyRegister"
                        placeholder="Apellido"
                        v-model="register.lastName.value"
                        >
                    </fg-input>
                </div>
                <div class="col-md-12 p-1">
                    <fg-input
                        class="no-border input-lg w-100"
                        addon-left-icon="now-ui-icons ui-1_email-85"
                        :class="register.email.validClass" 
                        :value="register.email.validValue" 
                        v-on:keyup="verifyRegister"
                        placeholder="Correo"
                        v-model="register.email.value"
                        >
                    </fg-input>
                </div>
                <div class="col-md-1 col-3 p-0">
                    <fg-input
                        class="no-border input-lg w-100"
                        v-model="register.code"
                        readonly
                        >
                    </fg-input>
                </div>
                <div class="col-md-5 col-9 p-1">
                    <fg-input
                        class="no-border input-lg w-100"
                        addon-left-icon="now-ui-icons tech_mobile"
                        placeholder="Teléfono"
                        type="text"
                        :class="register.phone.validClass" 
                        :value="register.phone.validValue" 
                        v-on:keyup="verifyRegister"
                        v-on:input="changeFormat()"
                        maxlength="9"
                        v-model="register.phone.value"
                        >
                    </fg-input>
                </div>
                <div class="col-md-6 p-1">
                    <fg-input class="no-border input-lg w-100" :class="register.datePicker.validClass" 
                        :value="register.datePicker.validValue" 
                        >
                        
                        <flat-pickr v-model="register.datePicker.value"
                        placeholder="Fecha de nacimiento"
                        class="form-control no-border input-lg w-100 input-group"
                        :config="configDatePicker"
                        @on-change="verifyRegister"
                        
                        ></flat-pickr>
                    </fg-input>
                </div>
                <div class="col-md-6 p-1">
                    <fg-input
                        class="no-border input-lg w-100" id="typePass" 
                        addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                        :class="register.password.validClass" 
                        :value="register.password.validValue" 
                        v-on:keyup="verifyRegister"
                        placeholder="Contraseña"
                        type="password"
                        v-model="register.password.value"
                        >
                    </fg-input>
                </div>
                <div class="col-md-6 p-1 row">
                    <fg-input
                        class="no-border input-lg col-11" id="typePassRe"
                        addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                        placeholder="Repita la contraseña"
                        :class="register.passwordRepite.validClass" 
                        :value="register.passwordRepite.validValue" 
                        v-on:keyup="verifyRegister"
                        type="password"
                        v-model="register.passwordRepite.value"
                        >
                    </fg-input>
                    <div class="col-1 p-0">
                        <n-button type="primary" icon round style="margin-top:3px;margin-left:-30px:float:left;" v-on:click="typePassChange()">
                            <i class="fa fa-eye eyesPassword text-white w-100" v-if="typePass == 'pass'"></i>
                            <i class="fa fa-eye-slash eyesPassword text-white w-100" v-else></i>
                        </n-button>
                    </div>
                </div>
            </div>
            <div class="row ml-2">
                <div class="card-footer text-center col-5">
                    <button
                    class="btn btn-primary btn-round btn-block"
                    v-on:click="registerClient"
                    >Registrarme</button
                    >
                </div>
                <slot name="login"></slot>
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
        </modal>
    </div>
</template>
<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import {Spanish} from 'flatpickr/dist/l10n/es.js';
import endpoints from '../../../endpoints/endpoints.js'
import EventBus from './EventBus'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
    Button, 
    FormGroupInput as FgInput,
    Card,
    Modal,
} from '@/components'
import lang from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'
import {DatePicker} from 'element-ui'

// configure language
locale.use(lang)

export default {
    components: {
        [Button.name]: Button,
        FgInput,
        Card,
        Modal,
        [DatePicker.name]: DatePicker,
        flatPickr
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
            configDatePicker: {
            allowInput: true,
            dateFormat: 'd-m-Y',
            locale: Spanish, // locale for this instance only
                    
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
            typePass: 'pass',
            refer: this.$route.query.refer
        }
    },
    created () {
        AOS.init()
    },
    methods: {
        changeFormat(){
            var number = this.register.phone.value.replace(/[^\d]/g, '')
            if (number.length == 9) {
                number = number.replace(/(\d{1})(\d{4})/, "$1-$2-");
            } else if (number.length == 10) {
                number = number.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
            }
            this.register.phone.value = number
            console.log(number)
        },
        typePassChange(){
            if (this.typePass == 'pass') {
                document.getElementById('typePass').type = 'text';
                document.getElementById('typePassRe').type = 'text';
                this.typePass = 'text'
            }else{
                document.getElementById('typePass').type = 'password';
                document.getElementById('typePassRe').type = 'password';
                this.typePass = 'pass'
            }
        },
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
                this.register.email.validValue = 'Error'
            }
            this.register.phone.validClass = this.register.phone.value.length > 4 ? 'has-success' : 'has-danger'
            this.register.phone.validValue = this.register.phone.value.length > 4 ? 'Success' : 'Error'
            this.register.datePicker.validClass = this.register.datePicker.value != '' ? 'has-success' : 'has-danger'
            this.register.datePicker.validValue = this.register.datePicker.value != '' ? 'Success' : 'Error'
            this.register.phone.validClass = this.register.phone.value.length > 9 ? 'has-success' : 'has-danger'
            this.register.phone.validValue = this.register.phone.value.length > 9 ? 'Success' : 'Error'
            this.register.password.validClass = this.register.password.value.length >= 8 ? 'has-success' : 'has-danger'
            this.register.password.validValue = this.register.password.value.length >= 8 ? 'Success' : 'Error'
            this.register.passwordRepite.validClass = this.register.password.value == this.register.passwordRepite.value && this.register.passwordRepite.value.length > 0 ? 'has-success' : 'has-danger'
            this.register.passwordRepite.validValue = this.register.password.value == this.register.passwordRepite.value && this.register.passwordRepite.value.length > 0 ? 'Success' : 'Error'
        },
        registerClient(){  
            if (this.register.name.validValue == 'Error' || this.register.lastName.validValue == 'Error' ||  this.register.email.validValue == 'Error' || this.register.phone.validValue == 'Error' || this.register.datePicker.validValue == 'Error') {
                this.modals.alert.type = 'modal-danger'
                this.modals.alert.icon = 'ui-1_simple-remove'
                this.modals.alert.message = 'Debe completar todo el formulario.'
                this.modals.alert.show = true
                setTimeout(() => {
                    this.modals.alert.show = false
                }, 2500);
            }
            else if( this.register.passwordRepite.validValue == 'Error'){
                this.modals.alert.type = 'modal-danger'
                this.modals.alert.icon = 'ui-1_simple-remove'
                this.modals.alert.message = 'Las contraseñas deben coincidir.'
                this.modals.alert.show = true
                setTimeout(() => {
                    this.modals.alert.show = false
                }, 2500);
            }else if(this.register.password.validValue == 'Error'){
                this.modals.alert.type = 'modal-danger'
                this.modals.alert.icon = 'ui-1_simple-remove'
                this.modals.alert.message = 'Mínimo 8 caracteres.'
                this.modals.alert.show = true
                setTimeout(() => {
                    this.modals.alert.show = false
                }, 2500);
            }else{
            
                console.log(this.$route.query.refer)
                const refer = this.$route.query.refer ? this.refer : ''
                axios.post(endpoints.endpointTarget+'/clients/registerwithpass', {
                    data: {
                        name: this.register.name.value,
                        lastName: this.register.lastName.value,
                        email: this.register.email.value,
                        code: this.register.code,
                        phone: this.register.phone.value,
                        datePicker: this.register.datePicker.value,
                        password: this.register.password.value,
                        referidoId: refer
                    }
                })
                .then(res => {
                    if (res.data.status != 'client already exist') {
                        this.modals.alert.type = 'modal-success'
                        this.modals.alert.icon = 'ui-1_check'
                        this.modals.alert.message = 'Registro exitoso. Bienvenido a KK PRETTY NAILS.'
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
                            const decoded = jwtDecode(res.data.token)
                            localStorage.setItem('userToken', res.data.token)
                            this.emitMethod(true)
                            axios.get(endpoints.endpointTarget+'/clients/sendMailRegister/'+decoded._id)
                            .then(res => {
                                console.log(res)
                            }).catch(err => {
                                console.log(err)
                            })
                        }, 2500);
                    }else{
                        this.modals.alert.type = 'modal-danger'
                        this.modals.alert.icon = 'ui-1_simple-remove'
                        this.modals.alert.message = 'Ya se encuentra registrado.'
                        this.modals.alert.show = true
                        setTimeout(() => {
                            this.modals.alert.show = false
                        }, 2500);
                    }
                })
            }
        },
        emitMethod(status) {
            EventBus.$emit('loggedin', status)
        }
    }
}
</script>