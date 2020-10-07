import { expect } from 'chai'
import TemperatureConversionStoreModule from '@/store/temperatureConversionStoreModule.js'

describe('TemperatureConversionStoreModule.js', () => {
  it('performs expected conversion of 0C to K', () => {
    var module = new TemperatureConversionStoreModule();
    var result;

    module.actions.convert.call({ commit: function (mutationName, resultValue) {
      result = resultValue;
    }}, {state: { inputType: 'C', outputType: 'K', inputAmount: 0}})

    expect(result).to.equal('0C = 273.15K')
  })

  it('performs expected conversion of -40F to C', () => {
    var module = new TemperatureConversionStoreModule();
    var result;

    module.actions.convert.call({ commit: function (mutationName, resultValue) {
      result = resultValue;
    }}, {state: { inputType: 'F', outputType: 'C', inputAmount: -40}})

    expect(result).to.equal('-40F = -40C')
  })
})
