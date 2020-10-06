import { createStore } from 'vuex'
import CurrencyConversionStore from './currencyConversionStore'

export default createStore({
  modules: {
    currency:  new CurrencyConversionStore()
  }
})
