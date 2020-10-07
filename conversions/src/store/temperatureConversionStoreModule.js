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
          this.commit(`${modulePath}/updateLoaded`, true, { root: false });
        },
        convert({state}, modulePath) {
          var searchInputType = state.inputType;
          var searchOutputType = state.outputType;
          var searchInputAmount = state.inputAmount;
          
          var inputUnit = units[searchInputType];
          var outputUnit = units[searchOutputType];

          var result = ((searchInputAmount - inputUnit[0]) /inputUnit[1])  * outputUnit[1] + outputUnit[0];

          this.commit(`${modulePath}/updateResult`,
          `${searchInputAmount}${searchInputType} = ${result}${searchOutputType}`,
          { root: true })
        }
    }
}