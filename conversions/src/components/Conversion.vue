<template>
    <form onsubmit="return false;">
        <div>
            Convert
            <input :value="inputAmount"  @input="updateInputAmount" placeholder="enter amount" @keyup="convert">
            <select :value="inputType"  @input="updateInputType" id="input-type" @change="convert">
                <option v-for="option in types" :value="option" :key="option">
                    {{ option }}
                </option>
            </select> to 
            <select :value="outputType"  @input="updateOutputType" id="output-type" @change="convert">
                <option v-for="option in types" :value="option" :key="option">
                    {{ option }}
                </option>
            </select>
            <!--<button @click="convert" type="submit" :disabled="!valid" id="convert">Convert</button>-->
        </div>
        <pulse-loader v-if="!loaded"></pulse-loader>
        <h1>
            <div id="result">
                {{ result }}
            </div>
        </h1>
    </form>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { mapState } from 'vuex'

export default {
  name: 'Conversion',
  props: {
    stateModule: String,
    validationRegex: String
  },
  components: {
      PulseLoader
 },  
    computed: {
        ...mapState({
            valid(state) { return !!(new RegExp(this.validationRegex).test(state[this.stateModule].inputAmount)
             && state[this.stateModule].inputType
              && state[this.stateModule].outputType); },
            inputAmount(state) { return state[this.stateModule].inputAmount; },
            inputType(state) { return state[this.stateModule].inputType; },
            outputType(state) { return state[this.stateModule].outputType; },
            types(state) { return state[this.stateModule].types; },
            result(state) { return state[this.stateModule].result; },
            loaded(state) { return state[this.stateModule].loaded; },
        })
    },
    methods: {
        updateInputAmount (e) {
            this.$store.commit(`${this.stateModule}/updateInputAmount`, e.target.value)
        },
        updateInputType (e) {
            this.$store.commit(`${this.stateModule}/updateInputType`, e.target.value)
        },        
        updateOutputType (e) {
            this.$store.commit(`${this.stateModule}/updateOutputType`, e.target.value)
        },
        convert () {
            if (this.valid) { this.$store.dispatch(`${this.stateModule}/convert`, this.stateModule); }
        },
    },
    created() {
         this.$store.dispatch(`${this.stateModule}/loadTypes`, this.stateModule)
    }   
}
</script>

<style scoped>
    select {
        margin: 3px;
    }
</style>
