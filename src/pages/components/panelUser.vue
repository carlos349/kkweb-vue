<template>
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
                        <badge href="#" type="white" style="color:black;font-size:12px;text-transform:none" class="col-sm-12">{{dataUser.name}}</badge>
                        <h6>Número de teléfono</h6>
                        <badge href="#" type="white" style="color:black;font-size:12px;text-transform:none" class="col-sm-12">{{dataUser.number}}</badge>
                        <h6>Correo electrónico</h6>
                        <badge href="#" type="white" style="color:black;font-size:12px;text-transform:none" class="col-sm-12">{{dataUser.email}}</badge>
                        <h6>Fecha de nacimiento</h6>
                        <badge href="#" type="white" style="color:black;font-size:12px;text-transform:none" class="col-sm-12">{{dataUser.bornDate}}</badge>
                    </center>
                    
                   
                    <n-button class="text-left" type="primary">Cambiar datos</n-button><n-button class="float-right" type="primary">Cambiar contraseña</n-button>
                </div>
            </card>
        
        <div style="border-left: 3px solid #afadc2;" class="row col-sm-8 cardUser pl-4 pr-5 pt-0">
            <div class="col-sm-12 mb-2">
                <badge href="#" class="p-0 m-0 hideRefer" type="purple">
                    <badge href="#" class="m-0" style="font-size:10px" type="purple">¡Invita a un amigo y <br> gana descuento! </badge>
                <badge href="#" style="color:black;font-size:14px;padding:15px;padding-left:55px;padding-right:25px" class="m-0" type="white"> <span style="text-transform:none" id="referidoSys" >{{dataUser.linkRefer}} </span> <i data-clipboard-target="#referidoSys" style="color:#8893f1" class=" ml-5 fas fa-clone"></i></badge> 
                </badge>

                <badge href="#" class="m-0 col-12 hideReferMobile" style="font-size:10px" type="purple">¡Invita a un amigo y gana descuento! </badge>
                <badge href="#" style="color:black;font-size:10px;padding:15px;" class="m-0 col-12 hideReferMobile" type="white"> <span style="text-transform:none" id="referidoSys" >https://kkprettynails.cl/inicio?r&c=5f45f34189e32226eb6570cd </span> <i data-clipboard-target="#referidoSys" style="color:#8893f1" class="ml-1 fas fa-clone"></i></badge> 
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
</template>
<script>
import {
     Tabs, TabPane, Card,Badge
} from '@/components'
export default {
    components: {
        Card,
        Tabs,
        TabPane,
        [Badge.name]: Badge
    },
    data(){
        return {
            modals: {
                notice: true
            },
            dataUser: {
                services:0,
                dates:0,
                refers:0,
                linkRefer:'',
                name:'',
                number:'',
                email:'',
                bornDate:''
            }
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
  
</style>