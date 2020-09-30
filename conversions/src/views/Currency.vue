<template>
    <form onsubmit="return false;">
        <div>
            Convert
            <input :value="inputAmount"  @input="updateInputAmount" placeholder="enter amount">
            <select :value="inputCurrency"  @input="updateInputCurrency">
                <option v-for="option in currencies" :value="option" :key="option">
                    {{ option }}
                </option>
            </select> to 
            <select :value="outputCurrency"  @input="updateOutputCurrency">
                <option v-for="option in currencies" :value="option" :key="option">
                    {{ option }}
                </option>
            </select>
            <button @click="convert" type="submit">Convert</button>
        </div>
        <div>
            {{ result }}
        </div>
    </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Currency',
    computed: {
        ...mapState({
            inputAmount: state => state.currency.inputAmount,
            inputCurrency: state => state.currency.inputCurrency,
            outputCurrency: state => state.currency.outputCurrency,
            currencies: state => state.currency.currencies,
            result: state => state.currency.result
        })
    },
    methods: {
        updateInputAmount (e) {
            this.$store.commit('updateInputAmount', e.target.value)
        },
        updateInputCurrency (e) {
            this.$store.commit('updateInputCurrency', e.target.value)
        },        
        updateOutputCurrency (e) {
            this.$store.commit('updateOutputCurrency', e.target.value)
        },
        convert () {
            this.$store.dispatch('convert')
        },
    }    
}
</script>

<style scoped>
</style>