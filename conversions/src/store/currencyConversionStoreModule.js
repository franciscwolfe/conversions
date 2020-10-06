import ConversionStoreModule from './conversionStoreModule'
import Axios from 'axios'

export default class CurrencyConversionStoreModule extends ConversionStoreModule {
    actions = {
        loadTypes() {
          Axios.get(`https://localhost:54112/currency`).then(
            response => {
              response.data.unshift('');
              this.commit('currency/updateTypes', response.data, { root: true })
            }
          ).catch((e) => {
            console.log(e);
          })
        },
        convert({state}) {
          var searchInputType = state.inputType;
          var searchOutputType = state.outputType;
          var searchInputAmount = state.inputAmount;
    
          Axios.get(`https://localhost:54112/currency/Convert?inputCurrency=${searchInputType}&outputCurrency=${searchOutputType}&value=${searchInputAmount}`).then(
            response => {
              this.commit('currency/updateResult', 
              `${searchInputType}${'\xa0'}${Number(searchInputAmount).toFixed(2)} = ${searchOutputType}${'\xa0'}${response.data}`,
              { root: true });
            }
          ).catch((e) => {
            console.log(e);
          })
        }
    }
}