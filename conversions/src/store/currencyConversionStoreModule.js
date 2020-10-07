import ConversionStoreModule from './conversionStoreModule'
import Axios from 'axios'

export default class CurrencyConversionStoreModule extends ConversionStoreModule {
    actions = {
        loadTypes(state, modulePath) {
          Axios.get(`https://localhost:44387/currency`).then(
            response => {
              response.data.unshift('');
              this.commit(`${modulePath}/updateTypes`, response.data);
              this.commit(`${modulePath}/updateLoaded`, true, { root: false });
            }
          ).catch((e) => {
            console.log(e);
          })
        },
        convert({state}, modulePath) {
          var searchInputType = state.inputType;
          var searchOutputType = state.outputType;
          var searchInputAmount = state.inputAmount;
    
          if (typeof this.cancelToken != typeof undefined) {
            this.cancelToken.cancel("Cancelled due to new request.");
          }

          this.cancelToken = Axios.CancelToken.source();
          this.commit(`${modulePath}/updateLoaded`, false, { root: false });

          Axios.get(`https://localhost:44387/currency/Convert?inputCurrency=${searchInputType}&outputCurrency=${searchOutputType}&value=${searchInputAmount}`
                    , { cancelToken: this.cancelToken.token }
            ).then(response => {
              this.commit(`${modulePath}/updateResult`, 
              `${searchInputType}${'\xa0'}${Number(searchInputAmount).toFixed(2)} = ${searchOutputType}${'\xa0'}${response.data}`,
              { root: true });
              this.commit(`${modulePath}/updateLoaded`, true, { root: true });
            }
          ).catch((e) => {
            console.log(e);
          })
        }
    }
}