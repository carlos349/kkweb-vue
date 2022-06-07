<template>
    <div>
        <div class="page-header page-header-small">
            <parallax
                class="page-header-image"
                style="background-image:url('img/bg_2.png');"
            >
            </parallax>
            <div class="container">
                <h2 style="display:inline-block;color:#000;font-family: 'Prata', serif;font-weight:600;letter-spacing:.2em;margin-top:100px;">SERVICIOS</h2>
            </div>
        </div>
        <div class="section" style="margin-top:-170px;">
            <h2 data-aos="fade-up" class="titlesPrada mt-1 text-center">PRECIOS</h2>
            <div class="row px-5">
                <div class="col-md-4">
                    <div class="card-service-cat">
                        <center>
                            <img style="width: 10rem;height:10rem;" class="rounded-circle img-raised" src="img/manicure.jpeg" alt="">
                        </center>
                        <h5 class="mt-3 text-center">Manicure</h5>
                        <p class="text-center" style="font-size:12px;">Cuidado y salud de tus manos.</p>
                    </div>
                    <div class="card-service-cat mt-2">
                        <center>
                            <img style="width: 10rem;height:10rem;" class="rounded-circle img-raised mx-auto" src="img/esmalte.jpeg" alt="">
                        </center>
                        <h5 class="mt-3 text-center">Esculpidos en gel</h5>
                        <p class="text-center" style="font-size:12px;">Además de embellecer tus manos, es un tratamiento para evitar onicofagia.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-collapsable">
                        <p class="text-center" style="font-size:14px;">10% de descuento en tu primera visita <br> 15% de descuento por recomendación</p>
                        <collapse :multiple-active="false" :active-index="0">
                            <collapse-item title="Manicure" name="1">
                                <div>
                                    <ul class="list-services">
                                        <li class="d-flex">
                                            <span>Hombres</span>
                                            <span>30 min</span>
                                            <span>$4.500</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Tradicional niñas</span>
                                            <span>30 min</span>
                                            <span>$4.500</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Permanente</span>
                                            <span>60 min</span>
                                            <span>$12.500</span>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </collapse-item>
                            <collapse-item title="Esculpidos En Gel" name="2">
                                <div>
                                    <ul class="list-services">
                                        <li class="d-flex">
                                            <span>Permanente largo 1-2</span>
                                            <span>150 min</span>
                                            <span>$25.500</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Permanente largo 3-4</span>
                                            <span>180 min</span>
                                            <span>$29.500</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Permanente largo 5 ó más</span>
                                            <span>180 min</span>
                                            <span>$34.500</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Relleno permanente largo 1-2</span>
                                            <span>120 min</span>
                                            <span>$19.500</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Relleno permanente largo 3-4</span>
                                            <span>150 min</span>
                                            <span>$23.500</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Relleno permanente largo 5+</span>
                                            <span>180 min</span>
                                            <span>$29.500</span>
                                        </li>
                                        
                                        <li class="d-flex">
                                            <span>Baño de gel largo 1-2</span>
                                            <span>90 min</span>
                                            <span>$17.500</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Baño de gel largo 3-4</span>
                                            <span>120 min</span>
                                            <span>$21.500</span>
                                        </li>
                                    </ul>
                                </div>
                            </collapse-item>
                            <collapse-item title="Pedicure" name="3">
                                <div>
                                    <ul class="list-services">
                                        <li class="d-flex">
                                            <span>Básico</span>
                                            <span>45 min</span>
                                            <span>$10.000</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Tradicional</span>
                                            <span>60 min</span>
                                            <span>$12.000</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Permanente</span>
                                            <span>75 min</span>
                                            <span>$15.000</span>
                                        </li>
                                    </ul>
                                </div>
                            </collapse-item>
                            <collapse-item title="Retiros" name="3">
                                <div>
                                    <ul class="list-services">
                                        <li class="d-flex">
                                            <span>De gel</span>
                                            <span>30 min</span>
                                            <span>$4.000</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Acrílico</span>
                                            <span>60 min</span>
                                            <span>$8.000</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Permanente</span>
                                            <span>15 min</span>
                                            <span>$2.000</span>
                                        </li>
                                    </ul>
                                </div>
                            </collapse-item>
                            <collapse-item title="Adicionales" name="3">
                                <div>
                                    <ul class="list-services">
                                        <li class="d-flex">
                                            <span>Parche</span>
                                            <span>15 min</span>
                                            <span>$1.000</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Uña esculpida</span>
                                            <span>15 min</span>
                                            <span>$2.000</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Parafina</span>
                                            <span>0 min</span>
                                            <span>$3.500</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Francesa</span>
                                            <span>15 min</span>
                                            <span>$2.000</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Degradé</span>
                                            <span>0 min</span>
                                            <span>$2.000</span>
                                        </li>
                                        <li class="d-flex">
                                            <span>Encapsulado</span>
                                            <span>15 min</span>
                                            <span>$2.000</span>
                                        </li>
                                    </ul>
                                </div>
                            </collapse-item>
                        </collapse>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-service-cat">
                        <center>
                            <img style="width: 10rem;height:10rem;" class="rounded-circle img-raised mx-auto" src="img/pedicure.jpeg" alt="">
                        </center>
                        <h5 class="mt-3 text-center">Pedicure</h5>
                        <p class="text-center" style="font-size:12px;">Embellecimiento de tus pies.</p>
                    </div>
                    <div class="card-service-cat mt-2">
                        <center>
                            <img style="width: 10rem;height:10rem;" class="rounded-circle img-raised mx-auto" src="img/gelX.jpg" alt="">
                        </center>
                        <h5 class="mt-3 text-center">Gel X</h5>
                        <p class="text-center" style="font-size:12px;">Próximamente.</p>
                    </div>
                </div>
            </div>
        </div>
        <promotion-section></promotion-section>
        <gift-section></gift-section>
    </div>
</template>
<script>
import promotionSection from './components/promotionSection';
import giftSection from './components/giftSection';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  Collapse,
  CollapseItem
} from '@/components';

export default {
    components: {
        Collapse,
        CollapseItem,
        promotionSection,
        giftSection
    },
    data(){
        return {

        }
    },
    created () {
        AOS.init()
    }
}
</script>