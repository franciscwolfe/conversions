import { createStore } from 'vuex'
import Axios from 'axios'

export default createStore({
  modules: {
    currency:  {
       state: {
          inputAmount: null,
          inputType: null,
          outputType: null,      
          currencies: [],
          result: null
      },
      mutations: {
        updateInputAmount (state, inputAmount) {
          state.inputAmount = inputAmount
        },
        updateInputType (state, inputType) {
          state.inputType = inputType
        },
        updateOutputType (state, outputType) {
          state.outputType = outputType
        },
        updateResult (state, result) {
          state.result = result
        },
        updateTypes (state, currencies) {
          state.currencies = currencies  
        },    
      },
      actions: {
        loadCurrencies() {
          Axios.get(`https://localhost:54112/currency`).then(
            response => {
              response.data.unshift('');
              this.commit('updateTypes', response.data)
            }
          ).catch((e) => {
            console.log(e);
          })
        },
        convert() {
          var searchInputType = this.state.currency.inputType;
          var searchOutputType = this.state.currency.outputType;
          var searchInputAmount = this.state.currency.inputAmount;
    
          Axios.get(`https://localhost:54112/currency/Convert?inputType=${searchInputType}&outputType=${searchOutputType}&value=${searchInputAmount}`).then(
            response => {
              this.commit('updateResult', `${searchInputType}${'\xa0'}${Number(searchInputAmount).toFixed(2)} = ${searchOutputType}${'\xa0'}${response.data}`)
            }
          ).catch((e) => {
            console.log(e);
          })
        }
      }
    }
  }
})
