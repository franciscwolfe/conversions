import ConversionStoreModule from './conversionStoreModule'

const units = {
  'C' : [0, 1],
  'F' : [32, 1.8],
  'K' : [273.15, 1],
};

export default class TemperatureConversionStoreModule extends ConversionStoreModule {
    actions = {
        loadTypes(state, modulePath) {
          var types = Object.keys(units);
          types.unshift(' ');
          this.commit(`${modulePath}/updateTypes`, ['','C','F','K'], { root: true });
        },
        convert({state}, modulePath) {
          var searchInputType = state.inputType;
          var searchOutputType = state.outputType;
          var searchInputAmount = state.inputAmount;
              
          var result = 10;
          this.commit(`${modulePath}/updateResult`,
          `${searchInputAmount}${searchInputType} = ${result}${searchOutputType}`,
          { root: true })
        }
    }
}