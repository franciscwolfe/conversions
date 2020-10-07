import ConversionStoreModule from './conversionStoreModule'
import Axios from 'axios'

export default class CurrencyConversionStoreModule extends ConversionStoreModule {
    actions = {
        loadTypes(state, modulePath) {
          Axios.get(`https://localhost:44387/currency`).then(
            response => {
              response.data.unshift('');
              this.commit(`${modulePath}/updateTypes`, response.data)
            }
          ).catch((e) => {
            console.log(e);
          })
        },
        convert({state}, modulePath) {
          var searchInputType = state.inputType;
          var searchOutputType = state.outputType;
          var searchInputAmount = state.inputAmount;
    
          Axios.get(`https://localhost:44387/currency/Convert?inputCurrency=${searchInputType}&outputCurrency=${searchOutputType}&value=${searchInputAmount}`).then(
            response => {
              this.commit(`${modulePath}/updateResult`, 
              `${searchInputType}${'\xa0'}${Number(searchInputAmount).toFixed(2)} = ${searchOutputType}${'\xa0'}${response.data}`,
              { root: true });
            }
          ).catch((e) => {
            console.log(e);
          })
        }
    }
}