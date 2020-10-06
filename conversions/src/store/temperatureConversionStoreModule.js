import ConversionStoreModule from './conversionStoreModule'

const units = {
  'C' : [0, 1],
  'F' : [32, 1.8],
  'K' : [273.15, 1],
};

export default class TemperatureConversionStoreModule extends ConversionStoreModule {
    actions = {
        loadTypes() {
          var types = Object.keys(units);
          types.unshift(' ');
          this.commit('temperature/updateTypes', ['','C','F','K'], { root: true });
        },
        convert({state}) {
          var searchInputType = state.inputType;
          var searchOutputType = state.outputType;
          var searchInputAmount = state.inputAmount;
              
          var result = 10;
          this.commit('temperature/updateResult',
          `${searchInputAmount}${searchInputType} = ${result}${searchOutputType}`,
          { root: true })
        }
    }
}