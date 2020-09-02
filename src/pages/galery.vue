<template>
    <div>
        <div class="page-header page-header-small">
            <parallax
                class="page-header-image"
                style="background-image:url('img/bg_5.png');"
            >
            </parallax>
            <div class="container">
                <h2 style="display:inline-block;color:#000;font-family: 'Prata', serif;font-weight:600;letter-spacing:.2em;margin-top:100px;">GALERÍA</h2>
            </div>
        </div>
        <div class="section" style="margin-top:-120px;">
            <div id="galeria">
                <article data-aos="fade-up" @click="showMultiple(0)">
                    <img src="img/g1.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(1)">
                    <img src="img/g2.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(2)">
                    <img src="img/g3.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(3)">
                    <img src="img/g5.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(4)">
                    <img src="img/g6.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(5)">
                    <img src="img/g7.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(6)">
                    <img src="img/g8.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(7)">
                    <img src="img/g9.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(8)">
                    <img src="img/g10.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(9)">
                    <img src="img/g11.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(10)">
                    <img src="img/g12.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(11)">
                    <img src="img/g13.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(12)">
                    <img src="img/g14.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(13)">
                    <img src="img/g15.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(14)">
                    <img src="img/g16.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(15)">
                    <img src="img/g17.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(16)">
                    <img src="img/g20.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(17)">
                    <img src="img/g21.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(18)">
                    <img src="img/g22.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(19)">
                    <img src="img/g23.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(20)">
                    <img src="img/g24.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(21)">
                    <img src="img/g25.jpeg" />
                </article>
                <article data-aos="fade-up" @click="showMultiple(22)">
                    <img src="img/g26.jpeg" />
                </article>
            </div>
        </div>
        <VueEasyLightbox
        :visible="visible"
        :imgs="imgs"
        :index="index"
        @hide="handleHide"
        ></VueEasyLightbox>
    </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
    components: {
        VueEasyLightbox
    },
    data(){
        return {
            imgs: [],  // Img Url , string or Array
            visible: false,
            index: 0   // default
        }
    },
    created () {
        AOS.init()
    },
    methods: {
        showMultiple(index) {
            this.imgs = ['http://localhost:8080/img/g1.jpeg', 'http://localhost:8080/img/g2.jpeg', 'http://localhost:8080/img/g3.jpeg', 'http://localhost:8080/img/g5.jpeg','http://localhost:8080/img/g6.jpeg','http://localhost:8080/img/g7.jpeg','http://localhost:8080/img/g8.jpeg','http://localhost:8080/img/g9.jpeg','http://localhost:8080/img/g10.jpeg','http://localhost:8080/img/g11.jpeg','http://localhost:8080/img/g12.jpeg','http://localhost:8080/img/g13.jpeg','http://localhost:8080/img/g14.jpeg','http://localhost:8080/img/g15.jpeg','http://localhost:8080/img/g16.jpeg','http://localhost:8080/img/g17.jpeg', 'http://localhost:8080/img/g20.jpeg', 'http://localhost:8080/img/g21.jpeg', 'http://localhost:8080/img/g22.jpeg', 'http://localhost:8080/img/g23.jpeg', 'http://localhost:8080/img/g24.jpeg', 'http://localhost:8080/img/g25.jpeg', 'http://localhost:8080/img/g26.jpeg']
            this.index = index  // index of imgList
            this.show()
        },
        show() {
            this.visible = true
        },
        handleHide() {
            this.visible = false
        }
    }
}
</script>