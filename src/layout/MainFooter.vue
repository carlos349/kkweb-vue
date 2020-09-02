<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h5 style="color: black;font-weight:700;">K&K Pretty Nails</h5>
        <p style="color:black">Simplemente un spa hecho a tu medida.</p>
        <ul class="ftco-footer-social float-lft list-unstyled">
          <li>
            <a href="https://www.facebook.com/kkprettynails" target="_blank">
              <span style="left: 40%;" class="fab fa-facebook-f span-socials"></span>
            </a>
          </li>
          <li class="ml-3">
            <a href="https://www.facebook.com/kkprettynails" target="_blank">
              <span style="left: 33%;" class="fab fa-instagram span-socials"></span>
            </a>
          </li>
          <li class="ml-3">
            <a href="https://www.facebook.com/kkprettynails" target="_blank">
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
            <a href="">Nosotros</a>
          </li>
          <li class="w-100">
            <a href="">Servicios</a>
          </li>
          <li class="w-100">
            <a href="">Galería</a>
          </li>
          <li class="w-100">
            <a href="">Contacto</a>
          </li>
        </ul>
      </div>
      <div class="col-md-3">
        <h5 style="color: black;font-weight:700;">Contáctanos</h5>
        <ul class="list-unstyled fast-links" style="display:block">
          <li class="w-100">
            <i class="fa fa-map-marker-alt" style="color:black;font-size:16px;margin-right:10px;"></i>
            <a href="">Av. Pedro de Valdivia 3474 Caracol Ñuñoa, Local 53-B Ñuñoa, Chile</a>
          </li>
          <li class="w-100">
            <i class="fab fa-whatsapp" style="color:black;font-size:16px;margin-right:10px;"></i>
            <a href="">+56 9 7262 8949</a>
          </li>
          <li class="w-100">
            <i class="fa fa-envelope" style="color:black;font-size:16px;margin-right:10px;"></i>
            <a href="">kkprettynails@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright-center w-100 mt-5 mb-4">
      <center>
        <p style="color:black;width:auto" class="mx-auto">Copyright ©{{ year }} Todos los derechos reservados | Desarrollado por <a href="https://syswa.net" style="color:black;">SYSWA</a></p>.
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
