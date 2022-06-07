<template>
    <div>
        <center>
            <img :style="width" style="height: 90vh;" src="img/flyer.png" /><br>
        </center>
        <center>
            <a href="http://kkspa.syswa.net/#/agendamientoCliente" target="_blank">
                <button class="btn btn-danger">Agendar</button>
            </a>
        </center>
    </div>
</template>
<script>
export default {
    data(){
        return {
            width: ""
        }
    },
    created () {
        this.capturewidth()
    },
    methods: {
        capturewidth(){
            if (screen.width > 768) {
                this.width = "width:30%;"
            }else{
                this.width = "width:100%;"
            }
        }
    }
}
</script>