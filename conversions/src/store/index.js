import { createStore } from 'vuex'
import CurrencyConversionStoreModule from './currencyConversionStoreModule'
import TemperatureConversionStoreModule from './temperatureConversionStoreModule'

export default createStore({
  modules: {
    currency:  new CurrencyConversionStoreModule(),
    temperature:  new TemperatureConversionStoreModule()
  }
})
