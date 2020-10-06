<template>
    <form onsubmit="return false;">
        <div>
            Convert
            <input :value="inputAmount"  @input="updateInputAmount" placeholder="enter amount">
            <select :value="inputType"  @input="updateInputType" id="input_currency">
                <option v-for="option in currencies" :value="option" :key="option">
                    {{ option }}
                </option>
            </select> to 
            <select :value="outputType"  @input="updateOutputType" id="output_currency">
                <option v-for="option in currencies" :value="option" :key="option">
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

var stateModule = "currency";

export default {
  name: 'Conversion',
  components: {
 },  
    computed: {
        ...mapState({
            valid: state => /^[0-9]+.?[0-9]?[0-9]?$/.test(state.currency.inputAmount)
             && state.currency.inputType
              && state.currency.outputType,
            inputAmount: state => state.currency.inputAmount,
            inputType: state => state.currency.inputType,
            outputType: state => state.currency.outputType,
            currencies: state => state.currency.currencies,
            result: state => state.currency.result
        })
    },
    methods: {
        updateInputAmount (e) {
            this.$store.commit('updateInputAmount', e.target.value)
        },
        updateInputType (e) {
            this.$store.commit('updateInputType', e.target.value)
        },        
        updateOutputType (e) {
            this.$store.commit('updateOutputType', e.target.value)
        },
        convert () {
            this.$store.dispatch('convert')
        },
    },
    created() {
         this.$store.dispatch('loadCurrencies')
    }   
}
</script>

<style scoped>
    select {
        margin: 3px;
    }
</style>
