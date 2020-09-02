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
                >
            </fg-input>

            <fg-input
                class="no-border input-lg"
                addon-left-icon="now-ui-icons ui-1_lock-circle-open"
                placeholder="Contraseña"
                type="password"
                >
            </fg-input>

            <template slot="raw-content">
                <div class="card-footer text-center">
                    <a
                    class="btn btn-primary btn-round btn-block"
                    >Ingresar</a
                    >
                </div>
                <slot name="register"></slot>
            </template>
        </card>
    </div>
</template>
<script>
import {
    Button, 
    FormGroupInput as FgInput,
    Card
} from '@/components'
export default {
    components: {
        [Button.name]: Button,
        FgInput,
        Card
    },
    data(){
        return {
            modals: {
                notice: true
            }
        }
    },
    methods: {
        
    }
}
</script>