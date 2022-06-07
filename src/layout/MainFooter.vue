<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h5 style="color: black;font-weight:700;">K&K SPA</h5>
        <p style="color:black">Simplemente un spa hecho a tu medida.</p>
        <ul class="ftco-footer-social float-lft list-unstyled">
          <li>
            <a href="https://www.facebook.com/kkprettynails" target="_blank">
              <span style="left: 40%;" class="fab fa-facebook-f span-socials"></span>
            </a>
          </li>
          <li class="ml-3">
            <a href="https://www.instagram.com/kykspa/?hl=es-la" target="_blank">
              <span style="left: 33%;" class="fab fa-instagram span-socials"></span>
            </a>
          </li>
          <li class="ml-3">
            <a href="https://www.youtube.com/channel/UCg9tufEPhKadP4JM-GiDNNQ" target="_blank">
              <span style="left: 25%;" class="fab fa-youtube span-socials"></span>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5 style="color: black;font-weight:700;">Enlaces populares</h5>
      </div>
      <div class="col-md-3">
        <h5 style="color: black;font-weight:700;">Enlaces rápidos</h5>
        <ul class="list-unstyled fast-links" style="display:block">
          <li class="w-100">
            <router-link to="/nosotros">
              <a href="">Nosotros</a>
            </router-link>
          </li>
          <li class="w-100">
            <router-link to="/servicios">
              <a href="">Servicios</a>
            </router-link>
            
          </li>
          <li class="w-100">
            <router-link to="/galeria">
              <a href="">Galería</a>
            </router-link>
            
          </li>
          <li class="w-100">
            <router-link to="/contacto">
              <a href="">Contacto</a>
            </router-link>
            
          </li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5 style="color: black;font-weight:700;">Contáctanos</h5>
        <ul class="list-unstyled fast-links" style="display:block">
          <li class="w-100">
            <i class="fa fa-map-marker-alt" style="color:black;font-size:16px;margin-right:10px;"></i>
            <a href="https://goo.gl/maps/GhvcDBH1ppBDae1KA" target="_blank">Av. Pedro de Valdivia 3474 Caracol Ñuñoa, Local 25-B Ñuñoa, Chile</a>
          </li>
          <li class="w-100">
            <i class="fab fa-whatsapp" style="color:black;font-size:16px;margin-right:10px;"></i>
            <a href="https://wa.me/56972628949" target="_blank">+56 9 7262 8949</a>
          </li>
          <li class="w-100">
            <i class="fa fa-envelope" style="color:black;font-size:16px;margin-right:10px;"></i>
            <a href="mailto:kkprettynails@gmail.com" target="_blank">kkprettynails@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright-center w-100 mt-5 mb-4">
      <center>
        <p style="color:black;width:auto" class="mx-auto">Copyright ©{{ year }} Todos los derechos reservados | Desarrollado por <a href="https://syswa.net" target="_blank" style="color:black;">SYSWA</a></p>.
      </center>
    </div>
  </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
