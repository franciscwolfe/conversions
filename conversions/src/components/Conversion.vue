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

var stateModule = "currency";

export default {
  name: 'Conversion',
  components: {
 },  
    computed: {
        ...mapState({
            valid: state => /^[0-9]+.?[0-9]?[0-9]?$/.test(state[stateModule].inputAmount)
             && state[stateModule].inputType
              && state[stateModule].outputType,
            inputAmount: state => state[stateModule].inputAmount,
            inputType: state => state[stateModule].inputType,
            outputType: state => state[stateModule].outputType,
            types: state => state[stateModule].types,
            result: state => state[stateModule].result
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
         this.$store.dispatch('loadTypes')
    }   
}
</script>

<style scoped>
    select {
        margin: 3px;
    }
</style>
