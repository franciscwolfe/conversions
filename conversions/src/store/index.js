import { createStore } from 'vuex'
import Axios from 'axios'

export default createStore({
  state: {
    currency: {
      inputAmount: null,
      inputCurrency: null,
      outputCurrency: null,      
      currencies: [],
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
    updateCurrencies (state, currencies) {
      state.currency.currencies = currencies  
    },    
  },
  actions: {
    loadCurrencies() {
      Axios.get(`https://localhost:64400/currency`).then(
        response => {
          response.data.unshift('');
          this.commit('updateCurrencies', response.data)
        }
      ).catch((e) => {
        console.log(e);
      })
    },
    convert() {
      var searchInputCurrency = this.state.currency.inputCurrency;
      var searchOutputCurrency = this.state.currency.outputCurrency;
      var searchInputAmount = this.state.currency.inputAmount;

      Axios.get(`https://localhost:64400/currency/Convert?inputCurrency=${searchInputCurrency}&outputCurrency=${searchOutputCurrency}&value=${searchInputAmount}`).then(
        response => {
          this.commit('updateResult', `${searchInputCurrency}${'\xa0'}${Number(searchInputAmount).toFixed(2)} = ${searchOutputCurrency}${'\xa0'}${response.data}`)
        }
      ).catch((e) => {
        console.log(e);
      })
    }
  },
  modules: {
  }
})
