<template>
    <div>
        <div class="page-header page-header-small">
            <parallax
                class="page-header-image"
                style="background-image:url('img/bg_6.png');"
            >
            </parallax>
            <div class="container">
                <h2 style="display:inline-block;color:#000;font-family: 'Prata', serif;font-weight:600;letter-spacing:.2em;margin-top:100px;">CONTACTO</h2>
            </div>
        </div>
        <div class="section" style="margin-top:-120px;">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card-information-contact">
                            <h3>Información de contacto</h3>
                            <p>Direción: Av. Pedro de Valdivia 3474 Caracol Ñuñoa, Local 53-B Ñuñoa, Chile</p><br>
                            <p>Teléfono: +56 9 7262 8949</p><br>
                            <p>Correo: kkprettynails@gmail.com</p><br>
                            <p>Instagram: @kkprettynails</p><br>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form row">
                            <h3 class="col-12">Formulario de contacto</h3>
                            <fg-input class="col-6 mb-4 mt-3" 
                                placeholder="Tu nombre" 
                                v-model="name" 
                                addon-right-icon="now-ui-icons users_single-02"
                            ></fg-input>
                            <fg-input class="col-6 mb-4 mt-3" 
                                placeholder="Correo" 
                                v-model="mail" 
                                addon-right-icon="now-ui-icons users_single-02"
                            ></fg-input>
                            <fg-input class="col-12 mb-4" 
                                placeholder="Asunto" 
                                v-model="subject" 
                                addon-right-icon="now-ui-icons text_caps-small"
                            ></fg-input>
                            <fg-input class="col-12 mb-4" 
                                placeholder="Mensaje" 
                                v-model="message" 
                                addon-right-icon="now-ui-icons ui-1_email-85"
                            ></fg-input>
                            <n-button class="mt-4 ml-3" type="primary" size="lg" v-on:click="contactClient">Contactar</n-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832.1996603971388!2d-70.60527437074302!3d-33.454552198798325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf9158f180b7%3A0x2f4472985a51de08!2sCaracol%20%C3%91u%C3%B1oa%20Centro!5e0!3m2!1ses!2sve!4v1594407454244!5m2!1ses!2sve" style="width:100%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
import endpoints from '../../endpoints/endpoints.js'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {FormGroupInput as FgInput, Button, Modal} from '@/components'
export default {
    components: {
        [Button.name]: Button,
        FgInput, 
        Modal
    },
    data(){
        return {
            name: '',
            mail: '',
            subject: '',
            message: '',
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
    created () {
        AOS.init()
    },
    methods: {
        contactClient(){
            axios.post(endpoints.endpointTarget+'/clients/contacMail', {
                name: this.name,
                email: this.mail,
                subject: this.subject,
                message: this.message
            }).then(res => {
                if (res.data.status == 'ok') {
                    this.modals.alert.type = 'modal-success'
                    this.modals.alert.icon = 'ui-1_check'
                    this.modals.alert.message = 'Listo, nos pondremos en contacto contigo.'
                    this.modals.alert.show = true
                    this.name = ''
                    this.mail = ''
                    this.subject = ''
                    this.message = ''
                    setTimeout(() => {
                        this.modals.alert.show = false
                    }, 2500);
                }else{
                    this.modals.alert.type = 'modal-danger'
                    this.modals.alert.icon = 'ui-1_simple-remove'
                    this.modals.alert.message = 'Verifique el correo.'
                    this.modals.alert.show = true
                    setTimeout(() => {
                        this.modals.alert.show = false
                    }, 2500);
                }
            })
            
        }
    }
}
</script>