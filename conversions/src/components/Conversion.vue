<template>
    <form onsubmit="return false;">
        <div>
            Convert
            <input :value="inputAmount"  @input="updateInputAmount" placeholder="enter amount">
            <select :value="inputType"  @input="updateInputType" id="input-type">
                <option v-for="option in types" :value="option" :key="option">
                    {{ option }}
                </option>
            </select> to 
            <select :value="outputType"  @input="updateOutputType" id="output-type">
                <option v-for="option in types" :value="option" :key="option">
                    {{ option }}
                </option>
            </select>
            <button @click="convert" type="submit" :disabled="!valid" id="convert">Convert</button>
        </div>
        <h1>
            <div id="result">
                {{ result }}
            </div>
        </h1>
    </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Conversion',
  props: {
    stateModule: String,
    validationRegex: String
  },
  components: {
 },  
    computed: {
        ...mapState({
            valid(state) { return new RegExp(this.validationRegex).test(state[this.stateModule].inputAmount)
             && state[this.stateModule].inputType
              && state[this.stateModule].outputType; },
            inputAmount(state) { return state[this.stateModule].inputAmount; },
            inputType(state) { return state[this.stateModule].inputType; },
            outputType(state) { return state[this.stateModule].outputType; },
            types(state) { return state[this.stateModule].types; },
            result(state) { return state[this.stateModule].result; }
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
            this.$store.dispatch(`${this.stateModule}/convert`)
        },
    },
    created() {
         this.$store.dispatch(`${this.stateModule}/loadTypes`)
    }   
}
</script>

<style scoped>
    select {
        margin: 3px;
    }
</style>
