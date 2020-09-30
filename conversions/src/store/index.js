import { createStore } from 'vuex'

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
    convert() {
    }
  },
  actions: {
  },
  modules: {
  }
})
