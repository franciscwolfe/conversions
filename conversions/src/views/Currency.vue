<template>
    <Conversion state-module="currency" validation-regex="^[0-9]+.?[0-9]?[0-9]?$"></Conversion>
</template>

<script>
import Conversion from '@/components/Conversion.vue'

export default {
  name: 'Currency',
  components: {
    Conversion
  },  
    computed: {
    },
    methods: {
    },
    created() {
    }   
}
</script>

<style scoped>
</style>