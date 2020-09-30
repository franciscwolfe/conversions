import { createStore } from 'vuex'
import Axios from 'axios'

export default createStore({
  state: {
    currency: {
      inputAmount: null,
      inputCurrency: null,
      outputCurrency: null,      
      currencies: ['GBP', 'AUD'],
      result: null
    }
  },
  mutations: {
    updateInputAmount (state, inputAmount) {
      state.currency.inputAmount = inputAmount
    },
    updateInputCurrency (state, inputCurrency) {
      state.currency.inputCurrency = inputCurrency
    },
    updateOutputCurrency (state, outputCurrency) {
      state.currency.outputCurrency = outputCurrency
    },
    updateResult (state, result) {
      state.currency.result = result
    },
  },
  actions: {
    convert() {
      Axios.get(`https://localhost:64400/currency/Convert?inputCurrency=${this.state.currency.inputCurrency}&outputCurrency=${this.state.currency.outputCurrency}&value=${this.state.currency.inputAmount}`).then(
        response => {
          this.commit('updateResult', response.data)
        }
      ).catch((e) => {
        console.log(e);
      })
    }
  },
  modules: {
  }
})
